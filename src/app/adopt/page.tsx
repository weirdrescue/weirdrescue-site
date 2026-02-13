import AnimalCard from "@/components/AnimalCard";
import { getAllAnimals } from "@/lib/animals";

export default function AdoptPage() {
  const animals = getAllAnimals().filter(
    (a) => (a.status || "").toLowerCase() === "available"
  );

  const featured = animals.filter((a) => a.featured);
  const others = animals.filter((a) => !a.featured);

  return (
    <div className="space-y-10">
      {/* Header */}
      <section className="surface p-7 sm:p-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-white/70">Adopt</p>
            <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight">
              Adoptable Weirdos
            </h1>
            <p className="mt-3 text-white/80">
              Tap a profile for photos + video, more details, and the Petfinder link.
            </p>
          </div>

          <a
            href="https://www.petfinder.com/member/us/ca/studio-city/weird-rescue-ca3299/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold
                       bg-white/10 text-white border border-white/10
                       hover:bg-white/15 active:scale-[0.98] transition"
          >
            View on Petfinder →
          </a>
        </div>
      </section>

      {/* Featured */}
      {featured.length ? (
        <section className="space-y-4">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-white/70">Featured</p>
              <h2 className="mt-1 text-2xl font-extrabold tracking-tight">
                Our current headliners
              </h2>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((animal) => (
              <AnimalCard key={animal.slug} animal={animal} />
            ))}
          </div>
        </section>
      ) : null}

      {/* All available */}
      <section className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-white/70">Available now</p>
            <h2 className="mt-1 text-2xl font-extrabold tracking-tight">
              Everyone looking for a home
            </h2>
          </div>

          <p className="text-sm text-white/60">{animals.length} total</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((animal) => (
            <AnimalCard key={animal.slug} animal={animal} />
          ))}
        </div>
      </section>

      {/* Help strip */}
      <section className="surface p-7 sm:p-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-white/70">Not ready to adopt?</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight">
              Foster saves lives (and it’s pretty fun).
            </h2>
            <p className="mt-3 text-white/75">
              Short-term fosters help animals decompress and show their real personality.
              We provide support the whole way.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="/foster"
              className="inline-flex items-center rounded-xl px-6 py-3 text-base font-semibold
                         bg-[var(--wr-mint)] text-black
                         hover:brightness-105 active:scale-[0.98] transition shadow-md"
            >
              Foster with us
            </a>

            <a
              href="/donate"
              className="inline-flex items-center rounded-xl px-6 py-3 text-base font-semibold
                         bg-[var(--wr-sun)] text-black
                         hover:brightness-105 active:scale-[0.98] transition shadow-md"
            >
              Donate
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
