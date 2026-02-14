import ReactMarkdown from "react-markdown";
import { getAllAnimals, getAnimalBySlug } from "@/lib/animals";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import AnimalMediaGallery from "@/components/AnimalMediaGallery";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const animal = getAnimalBySlug(slug);
  if (!animal) return {};

  const title = `${animal.name} • Weird Rescue`;
  const description =
    [animal.species, animal.age, animal.sex].filter(Boolean).join(" • ") ||
    "Adoptable pet from Weird Rescue";

  // Prefer first gallery image for sharing previews, fall back to single image
  const ogImage = animal.images?.[0] || animal.image;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: ogImage ? [ogImage] : [],
    },
  };
}

export function generateStaticParams() {
  return getAllAnimals().map((a) => ({ slug: a.slug }));
}

export default async function AnimalProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const animal = getAnimalBySlug(slug);
  if (!animal) return notFound();

  return (
    <section className="py-14">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <AnimalMediaGallery
            name={animal.name}
            images={animal.images}
            videos={animal.videos}
          />
        </div>

        <div>
          <div className="flex items-start justify-between gap-4">
            <h1 className="text-4xl font-bold">{animal.name}</h1>
            {animal.status ? (
              <span className="text-sm rounded-full border px-3 py-1 text-gray-700">
                {animal.status}
              </span>
            ) : null}
          </div>

          <p className="mt-3 text-gray-700">
            {[animal.species, animal.age, animal.sex].filter(Boolean).join(" • ")}
          </p>

          {animal.location ? (
            <p className="mt-1 text-gray-500">{animal.location}</p>
          ) : null}

         <div className="mt-6 flex flex-col gap-3">
  <div className="flex flex-wrap gap-3">
    {animal.petfinderUrl ? (
      <a
        href={animal.petfinderUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center rounded-xl px-5 py-2.5 text-sm font-semibold
                   bg-[var(--wr-sky)] text-black
                   hover:brightness-105 active:scale-[0.98] transition shadow-md"
      >
        View on Petfinder →
      </a>
    ) : null}

    <a
      href="/contact"
      className="inline-flex items-center rounded-xl px-5 py-2.5 text-sm font-semibold
                 bg-[var(--wr-sky)] text-black
                 hover:brightness-105 active:scale-[0.98] transition shadow-md"
    >
      Ask about {animal.name} →
    </a>
  </div>

  {/* Apply Button */}
  <a
    href={
      animal.species?.toLowerCase() === "cat"
        ? "https://new.shelterluv.com/matchme/adopt/WRD/Cat"
        : "https://new.shelterluv.com/matchme/adopt/WRD/Dog"
    }
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold
               bg-[var(--wr-mint)] text-black
               hover:brightness-105 active:scale-[0.98] transition shadow-lg"
  >
    Apply to Adopt {animal.name} →
  </a>
</div>


          <div className="prose prose-gray mt-8 max-w-none">
            <ReactMarkdown>{animal.content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </section>
  );
}

