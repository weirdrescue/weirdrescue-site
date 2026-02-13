import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Animal = {
  slug: string;
  name: string;
  species?: string;
  status?: string;
  age?: string;
  sex?: string;
  location?: string;
  featured?: boolean;

  // NEW: galleries
  images?: string[];
  videos?: string[];

  // Keep for backward compatibility + adopt grid thumbnail fallback
  image?: string;

  petfinderUrl?: string;
  content: string;
};

const ANIMALS_DIR = path.join(process.cwd(), "content", "animals");

function toStringArray(value: unknown): string[] {
  if (!value) return [];
  if (Array.isArray(value)) return value.map(String).filter(Boolean);
  return [String(value)].filter(Boolean);
}

export function getAllAnimals(): Animal[] {
  if (!fs.existsSync(ANIMALS_DIR)) return [];

  const files = fs
    .readdirSync(ANIMALS_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));

  const animals = files.map((filename) => {
    const filePath = path.join(ANIMALS_DIR, filename);
    const raw = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(raw);

    const slugFromFrontmatter = String(data.slug || "").trim();
    const slugFromFilename = filename.replace(/\.(md|mdx)$/, "");
    const slug = slugFromFrontmatter || slugFromFilename;

    // NEW: read images/videos arrays (and stay compatible with single `image:`)
    const images =
      Array.isArray(data.images) || data.images
        ? toStringArray(data.images)
        : data.image
        ? [String(data.image)]
        : [];

    const videos = toStringArray(data.videos);

    return {
      slug,
      name: String(data.name || slug),
      species: data.species ? String(data.species) : undefined,
      status: data.status ? String(data.status) : undefined,
      age: data.age ? String(data.age) : undefined,
      sex: data.sex ? String(data.sex) : undefined,
      location: data.location ? String(data.location) : undefined,
      featured: Boolean(data.featured),

      images,
      videos,

      // For your adopt grid card thumbnail:
      image: images[0],

      petfinderUrl: data.petfinderUrl ? String(data.petfinderUrl) : undefined,
      content,
    } satisfies Animal;
  });

  // featured first, then alphabetical by name
  return animals.sort((a, b) => {
    const f = Number(Boolean(b.featured)) - Number(Boolean(a.featured));
    if (f !== 0) return f;
    return a.name.localeCompare(b.name);
  });
}

export function getAnimalBySlug(slug: string): Animal | null {
  return getAllAnimals().find((a) => a.slug === slug) ?? null;
}
