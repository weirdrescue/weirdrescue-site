const ADOPT_A_PET_WIDGET_URL =
  "https://searchtools.adoptapet.com/cgi-bin/searchtools.cgi/portable_pet_list?shelter_id=282293&title=&color=green&clan_name=&size=450x320_list&sort_by=pet_name&hide_clan_filter_p=";

export default function AdoptPage() {
  return (
    <div className="space-y-10">
      <section className="surface p-7 sm:p-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-white/70">Adopt</p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-5xl">
              Adoptable Weirdos
            </h1>
            <p className="mt-3 text-white/80">
              Browse our live adoptable pets right here. This list is pulled directly from
              Adopt a Pet so it stays current even when the API is being weird.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:items-end">
            <a
              href="https://www.petfinder.com/member/us/ca/studio-city/weird-rescue-ca3299/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15 active:scale-[0.98]"
            >
              View on Petfinder →
            </a>

            <a
              href="https://www.adoptapet.com/shelter/282293-weird-rescue-studio-city-california"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15 active:scale-[0.98]"
            >
              View rescue on Adopt a Pet →
            </a>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-white/70">Available now</p>
            <h2 className="mt-1 text-2xl font-extrabold tracking-tight">
              Everyone looking for a home
            </h2>
          </div>
        </div>

        <div className="surface overflow-hidden p-3 sm:p-5">
          <div className="rounded-3xl border border-white/10 bg-white p-2 shadow-inner">
            <iframe
              src={ADOPT_A_PET_WIDGET_URL}
              title="Weird Rescue adoptable pets"
              className="h-[1800px] w-full rounded-2xl bg-white"
              loading="lazy"
            />
          </div>

          <p className="mt-4 text-sm text-white/60">
            If the embedded list loads slowly, you can also browse our pets directly on
            Adopt a Pet or Petfinder using the buttons above.
          </p>
        </div>
      </section>

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
              className="inline-flex items-center rounded-xl bg-[var(--wr-mint)] px-6 py-3 text-base font-semibold text-black shadow-md transition hover:brightness-105 active:scale-[0.98]"
            >
              Foster with us
            </a>

            <a
              href="/donate"
              className="inline-flex items-center rounded-xl bg-[var(--wr-sun)] px-6 py-3 text-base font-semibold text-black shadow-md transition hover:brightness-105 active:scale-[0.98]"
            >
              Donate
            </a>
          </div>
        </div>
      </section>

      <section className="surface relative overflow-hidden p-7 sm:p-10">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--wr-sun)]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-10 h-56 w-56 rounded-full bg-[var(--wr-sky)]/15 blur-3xl" />

        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[var(--wr-sun)]">
              Looking for your kind of weird?
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight">
              Tell us what you’re hoping to find.
            </h2>
            <p className="mt-3 text-white/75">
              Sometimes you have a specific future family member in mind. Share your
              Adoption Wish List with us, and we’ll keep an eye out for a match who feels
              like they were meant for you.
            </p>
          </div>

          <a
            href="https://docs.google.com/forms/d/1_jCA3fZfSARcc9ikZDvE4-RysIxyAsVERDimIYGmfIU/edit?pli=1"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-[var(--wr-sun)] px-6 py-3 text-base font-semibold text-black shadow-md transition hover:brightness-105 active:scale-[0.98]"
          >
            Fill out the Wish List →
          </a>
        </div>
      </section>
    </div>
  );
}
