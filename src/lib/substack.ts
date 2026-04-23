export type SubstackPost = {
  title: string;
  link: string;
  publishedAt: string;
  description: string;
};

const SUBSTACK_FEED_URL = "https://stayweirdandrescue.substack.com/feed";

function decodeXmlEntities(text: string) {
  return text
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
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

function parseFeed(xml: string): SubstackPost[] {
  const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)];

  return items
    .map(([, block]) => {
      const title = stripHtml(readTag(block, "title"));
      const link = decodeXmlEntities(readTag(block, "link"));
      const publishedAt = readTag(block, "pubDate");
      const description = stripHtml(
        readTag(block, "content:encoded") || readTag(block, "description")
      );

      return {
        title,
        link,
        publishedAt,
        description,
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
