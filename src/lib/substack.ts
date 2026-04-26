export type SubstackPost = {
  title: string;
  link: string;
  publishedAt: string;
  description: string;
  image?: string;
};

const SUBSTACK_FEED_URL = "https://stayweirdandrescue.substack.com/feed";

function decodeXmlEntities(text: string) {
  return text
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&#(\d+);/g, (_, code) => {
      const value = Number.parseInt(code, 10);
      return Number.isNaN(value) ? _ : String.fromCodePoint(value);
    })
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => {
      const value = Number.parseInt(code, 16);
      return Number.isNaN(value) ? _ : String.fromCodePoint(value);
    })
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");
}

function stripHtml(text: string) {
  return decodeXmlEntities(text)
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function readTag(block: string, tagName: string) {
  const match = block.match(new RegExp(`<${tagName}>([\\s\\S]*?)<\\/${tagName}>`, "i"));
  return match?.[1]?.trim() ?? "";
}

function readAttribute(block: string, tagName: string, attributeName: string) {
  const tagMatch = block.match(new RegExp(`<${tagName}\\b([^>]*)>`, "i"));
  const attributes = tagMatch?.[1] ?? "";
  const attributeMatch = attributes.match(
    new RegExp(`${attributeName}=["']([^"']+)["']`, "i")
  );

  return attributeMatch?.[1]?.trim() ?? "";
}

function findFirstImageUrl(html: string) {
  const decoded = decodeXmlEntities(html);
  const imageMatch = decoded.match(/<img\b[^>]*\bsrc=["']([^"']+)["']/i);
  return imageMatch?.[1]?.trim() ?? "";
}

function parseFeed(xml: string): SubstackPost[] {
  const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)];

  return items
    .map(([, block]) => {
      const title = stripHtml(readTag(block, "title"));
      const link = decodeXmlEntities(readTag(block, "link"));
      const publishedAt = readTag(block, "pubDate");
      const content = readTag(block, "content:encoded");
      const description = stripHtml(
        content || readTag(block, "description")
      );
      const image =
        decodeXmlEntities(readAttribute(block, "enclosure", "url")) ||
        decodeXmlEntities(readAttribute(block, "media:content", "url")) ||
        findFirstImageUrl(content || readTag(block, "description"));

      return {
        title,
        link,
        publishedAt,
        description,
        image,
      } satisfies SubstackPost;
    })
    .filter((post) => post.title && post.link)
    .slice(0, 6);
}

export async function getLatestSubstackPosts() {
  try {
    const response = await fetch(SUBSTACK_FEED_URL, {
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(5000),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Substack feed: ${response.status}`);
    }

    const xml = await response.text();
    return parseFeed(xml);
  } catch (error) {
    console.error("Unable to load Substack feed", error);
    return [];
  }
}

export function formatSubstackDate(dateString: string) {
  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function getSubstackExcerpt(text: string, maxLength = 150) {
  const normalized = text.replace(/\s+/g, " ").trim();

  if (normalized.length <= maxLength) {
    return normalized;
  }

  const shortened = normalized.slice(0, maxLength);
  const lastSpace = shortened.lastIndexOf(" ");

  return `${(lastSpace > 0 ? shortened.slice(0, lastSpace) : shortened).trim()}...`;
}
