import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Animal = {
  slug: string;
  id?: string;
  name: string;
  species?: string;
  status?: string;
  age?: string;
  sex?: string;
  size?: string;
  location?: string;
  featured?: boolean;
  images?: string[];
  videos?: string[];
  image?: string;
  adoptAPetUrl?: string;
  shelterUrl?: string;
  content: string;
};

type AdoptAPetListResponse = {
  status: string;
  pets?: AdoptAPetListPet[];
};

type AdoptAPetListPet = {
  order?: number;
  pet_id?: string | number;
  pet_name?: string;
  sex?: string;
  age?: string;
  size?: string | null;
  species?: string;
  primary_breed?: string | null;
  secondary_breed?: string | null;
  addr_city?: string | null;
  addr_state_code?: string | null;
  large_results_photo_url?: string | null;
};

type AdoptAPetDetailResponse = {
  status: string;
  pet?: AdoptAPetDetailPet;
  error?: {
    code?: number;
    msg?: string;
    details?: string;
  };
};

type AdoptAPetDetailPet = {
  pet_id?: string | number;
  pet_name?: string;
  species?: string;
  age?: string;
  sex?: string;
  size?: string | null;
  primary_breed?: string | null;
  secondary_breed?: string | null;
  addr_city?: string | null;
  addr_state_code?: string | null;
  images?: Array<{
    original_url?: string | null;
  }>;
  video_url?: string | null;
  description?: string | null;
  status?: string | null;
  shelter_details_url?: string | null;
};

const ANIMALS_DIR = path.join(process.cwd(), "content", "animals");
const ADOPT_A_PET_API_KEY = process.env.ADOPT_A_PET_API_KEY;
const ADOPT_A_PET_SHELTER_ID = process.env.ADOPT_A_PET_SHELTER_ID;
const ADOPT_A_PET_API_BASE = "https://api.adoptapet.com/search";
const ADOPT_A_PET_RETRY_ATTEMPTS = 3;
const HAS_ADOPT_A_PET_CONFIG = Boolean(
  ADOPT_A_PET_API_KEY && ADOPT_A_PET_SHELTER_ID
);

function toStringArray(value: unknown): string[] {
  if (!value) return [];
  if (Array.isArray(value)) return value.map(String).filter(Boolean);
  return [String(value)].filter(Boolean);
}

function readLocalAnimals(): Animal[] {
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
      image: images[0],
      content,
    } satisfies Animal;
  });

  return animals.sort((a, b) => {
    const featuredOrder = Number(Boolean(b.featured)) - Number(Boolean(a.featured));
    if (featuredOrder !== 0) return featuredOrder;
    return a.name.localeCompare(b.name);
  });
}

function titleCase(value: string | null | undefined) {
  if (!value) return undefined;
  return value
    .toLowerCase()
    .split(/[\s_-]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function normalizeSex(value: string | null | undefined) {
  if (!value) return undefined;
  const normalized = value.toLowerCase();
  if (normalized === "m") return "Male";
  if (normalized === "f") return "Female";
  return titleCase(value);
}

function normalizeLocation(city?: string | null, state?: string | null) {
  return [city, state].filter(Boolean).join(", ") || undefined;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .trim();
}

function buildAnimalSlug(name: string, id: string) {
  return `${slugify(name)}-${id}`;
}

function normalizeAdoptAPetImageUrl(
  url: string | null | undefined,
  useOriginal: boolean
) {
  if (!url) return "";
  if (!useOriginal) return url;

  const match = url.match(
    /^https:\/\/media\.adoptapet\.com\/image\/upload\/.+\/([^/?#]+)$/
  );

  if (!match) return url;

  return `https://media.adoptapet.com/image/upload/${match[1]}`;
}

function getAnimalIdFromSlug(slug: string) {
  const match = slug.match(/-(\d+)$/);
  return match?.[1] ?? "";
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchAdoptAPet<T>(pathname: string, searchParams: Record<string, string>) {
  const url = new URL(`${ADOPT_A_PET_API_BASE}/${pathname}`);
  url.searchParams.set("output", "json");
  url.searchParams.set("v", "1");

  for (const [key, value] of Object.entries(searchParams)) {
    url.searchParams.set(key, value);
  }

  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= ADOPT_A_PET_RETRY_ATTEMPTS; attempt += 1) {
    try {
      const response = await fetch(url, {
        next: { revalidate: 900 },
        signal: AbortSignal.timeout(15000),
      });

      if (!response.ok) {
        throw new Error(`Adopt a Pet request failed: ${response.status}`);
      }

      const payload = (await response.json()) as T & {
        status?: string;
        error?: {
          code?: number;
          msg?: string;
          details?: string;
        };
      };

      if (payload.status === "fail") {
        const message =
          payload.error?.msg ||
          payload.error?.details ||
          "Adopt a Pet returned a failure payload.";
        throw new Error(message);
      }

      return payload as T;
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));

      if (attempt < ADOPT_A_PET_RETRY_ATTEMPTS) {
        await sleep(attempt * 750);
      }
    }
  }

  throw lastError ?? new Error("Adopt a Pet request failed.");
}

function mapListAnimal(pet: AdoptAPetListPet): Animal {
  const id = String(pet.pet_id || "");
  const name = pet.pet_name || "Adoptable pet";
  const primaryBreed = pet.primary_breed ? titleCase(pet.primary_breed) : undefined;
  const secondaryBreed = pet.secondary_breed ? titleCase(pet.secondary_breed) : undefined;
  const breedLabel = [primaryBreed, secondaryBreed].filter(Boolean).join(" / ");

  return {
    slug: buildAnimalSlug(name, id),
    id,
    name,
    species: titleCase(pet.species),
    status: "Available",
    age: titleCase(pet.age),
    sex: normalizeSex(pet.sex),
    size: pet.size || undefined,
    location: normalizeLocation(pet.addr_city, pet.addr_state_code),
    featured: Number(pet.order || 99) <= 3,
    images: pet.large_results_photo_url ? [pet.large_results_photo_url] : [],
    image: pet.large_results_photo_url || undefined,
    shelterUrl: "https://www.adoptapet.com/shelter/282293-weird-rescue-studio-city-california",
    content: breedLabel
      ? `${name} is a ${breedLabel} looking for the right home.`
      : `${name} is looking for the right home.`,
  };
}

function mapDetailAnimal(pet: AdoptAPetDetailPet): Animal {
  const id = String(pet.pet_id || "");
  const name = pet.pet_name || "Adoptable pet";
  const useOriginalImages = id === "47590803";
  const images = (pet.images || [])
    .map((image) => normalizeAdoptAPetImageUrl(image.original_url, useOriginalImages))
    .filter(Boolean);
  const video = pet.video_url ? [pet.video_url] : [];

  return {
    slug: buildAnimalSlug(name, id),
    id,
    name,
    species: titleCase(pet.species),
    status: titleCase(pet.status) || "Available",
    age: titleCase(pet.age),
    sex: normalizeSex(pet.sex),
    size: pet.size || undefined,
    location: normalizeLocation(pet.addr_city, pet.addr_state_code),
    images,
    videos: video,
    image: images[0],
    shelterUrl: pet.shelter_details_url || undefined,
    content: (pet.description || "").replace(/\r\n/g, "\n"),
  };
}

async function getLiveAnimals(): Promise<Animal[]> {
  if (!HAS_ADOPT_A_PET_CONFIG) {
    return [];
  }

  const response = await fetchAdoptAPet<AdoptAPetListResponse>("pets_at_shelter", {
    key: ADOPT_A_PET_API_KEY,
    shelter_id: ADOPT_A_PET_SHELTER_ID,
  });

  if (response.status !== "ok" || !response.pets?.length) {
    return [];
  }

  return response.pets.map(mapListAnimal);
}

async function getLiveAnimalById(id: string): Promise<Animal | null> {
  if (!HAS_ADOPT_A_PET_CONFIG || !id) {
    return null;
  }

  const response = await fetchAdoptAPet<AdoptAPetDetailResponse>("pet_details", {
    key: ADOPT_A_PET_API_KEY,
    pet_id: id,
  });

  if (response.status !== "ok" || !response.pet) {
    return null;
  }

  return mapDetailAnimal(response.pet);
}

export async function getAllAnimals(): Promise<Animal[]> {
  if (!HAS_ADOPT_A_PET_CONFIG) {
    return readLocalAnimals();
  }

  try {
    const liveAnimals = await getLiveAnimals();
    if (liveAnimals.length) {
      return liveAnimals;
    }

    throw new Error("Adopt a Pet returned no animals.");
  } catch (error) {
    console.error("Unable to load Adopt a Pet animals", error);
    throw error;
  }
}

export async function getAnimalBySlug(slug: string): Promise<Animal | null> {
  if (!HAS_ADOPT_A_PET_CONFIG) {
    return readLocalAnimals().find((animal) => animal.slug === slug) ?? null;
  }

  const liveId = getAnimalIdFromSlug(slug);

  try {
    if (liveId) {
      const liveAnimal = await getLiveAnimalById(liveId);
      if (liveAnimal) return liveAnimal;
    }
  } catch (error) {
    console.error("Unable to load Adopt a Pet animal details", error);
    throw error;
  }

  return null;
}
