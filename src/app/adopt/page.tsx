import AnimalCard from "@/components/AnimalCard";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";
import { getAllAnimals, type Animal } from "@/lib/animals";

export const dynamic = "force-dynamic";

export default async function AdoptPage() {
  const faqItems: FaqItem[] = [
    {
      question: "What is the adoption donation to adopt from Weird Rescue?",
      answer:
        "Weird Rescue is a 501(c)(3) nonprofit, so our animals are not for sale. We do ask for an adoption donation for each animal to help offset part of their cost of care and allow us to continue future lifesaving. Our adoption donations are $350 for adult dogs, $450 for puppies under 6 months due to increased medical cost, $175 for kittens due to increased medical cost, and $150 for adult cats.",
    },
    {
      question: "Why do you ask for an adoption donation?",
      answer:
        "We are entirely donation-based and do not receive federal funding, so adoption donations help us keep saving lives. Between medical care, food, supplies, transport, and everyday care, we almost always spend far more on an animal than the adoption donation itself.",
    },
    {
      question: "What does the adoption donation cover?",
      answer:
        "Our animals come up to date on vaccines, are seen and cleared by a veterinarian, have any known health conditions disclosed, are microchipped, and are spayed or neutered or have that arranged by us. It also helps cover behavioral evaluation, support, and ongoing guidance after adoption.",
    },
    {
      question: "Where does my adoption donation actually go?",
      answer:
        "Your adoption donation does not just go to the animal you take home. It goes back into the rescue so we can keep caring for the next animals who need us. Some pets need only routine care, and some need surgeries, diagnostics, or ongoing treatment. Adoption donations and other gifts help carry all of that.",
    },
    {
      question: "What is your adoption process?",
      answer:
        "We start by reviewing your application and following up with any questions, which can include things like a home walkthrough video. Then we talk through what you are looking for in a furry friend and whether the animal you applied for feels like the right match, or if another one might fit your home better. Once we feel good about the fit, we send over our adoption agreement and make space for questions so everyone is on the same page. After that, we schedule a meet and greet, and if all goes well, we finalize everything through Shelterluv.",
    },
    {
      question: "Why might an adoption donation feel higher than expected?",
      answer:
        "Rescue is rarely just food and a cute photo. Adoption donations help cover vetting, vaccines, spay and neuter, microchips, foster support, transport, and the more intensive medical care that some animals need before they are ever ready to be adopted. In other words: your adoption donation helps make the next rescue possible too.",
    },
  ];

  let animals: Animal[] = [];

  try {
    animals = (await getAllAnimals()).filter(
      (a) => (a.status || "").toLowerCase() === "available"
    );
  } catch (error) {
    console.error("Unable to load adopt page animals", error);
  }

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
              Tap a profile for photos, details, and the latest live info from Adopt a Pet.
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

      <section className="surface relative overflow-hidden p-7 sm:p-10">
        <div className="pointer-events-none absolute -left-12 top-6 h-40 w-40 rounded-full bg-[var(--wr-mint)]/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-12 bottom-0 h-44 w-44 rounded-full bg-[var(--wr-sky)]/15 blur-3xl" />

        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[var(--wr-mint)]">
              Not sure which weirdo is your weirdo?
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight">
              Get pre-approved and let us help with the match.
            </h2>
            <p className="mt-3 text-white/75">
              If you are still figuring out who feels like the right fit, or if we have
              an adoption event coming up and you want to be ready, fill out the general
              application first. Once you apply, our adoption coordinators can chat with
              you about who might be the best match, and pre-approved adopters can move a
              little faster at events.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:items-end">
            <a
              href="https://new.shelterluv.com/matchme/adopt/WRD/Dog"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[var(--wr-mint)] px-6 py-3 text-base font-semibold text-black shadow-md transition hover:brightness-105 active:scale-[0.98]"
            >
              Dog application →
            </a>

            <a
              href="https://new.shelterluv.com/matchme/adopt/WRD/Cat"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[var(--wr-mint)] px-6 py-3 text-base font-semibold text-black shadow-md transition hover:brightness-105 active:scale-[0.98]"
            >
              Cat application →
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

          <p className="text-sm text-white/60">{animals.length} total</p>
        </div>

        {animals.length ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {animals.map((animal) => (
              <AnimalCard key={animal.slug} animal={animal} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h3 className="text-xl font-bold">Our live adoptables feed is taking a beat.</h3>
            <p className="mt-3 text-white/75">
              The animals are still listed on our partner pages while we wait for Adopt a
              Pet to respond normally again.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.adoptapet.com/shelter/282293-weird-rescue-studio-city-california"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-xl bg-[var(--wr-mint)] px-6 py-3 text-base font-semibold text-black shadow-md transition hover:brightness-105 active:scale-[0.98]"
              >
                View on Adopt a Pet
              </a>

              <a
                href="https://www.petfinder.com/member/us/ca/studio-city/weird-rescue-ca3299/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-xl border border-white/10 bg-white/10 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/15 active:scale-[0.98]"
              >
                View on Petfinder
              </a>
            </div>
          </div>
        )}
      </section>

      <section className="surface p-7 sm:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-white/70">FAQ</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight">
            A few adoption questions, answered.
          </h2>
          <p className="mt-3 text-white/75">
            We like things to feel clear, supportive, and low-drama. Here’s the practical
            stuff people usually want to know before they fall in love.
          </p>
        </div>

        <div className="mt-8">
          <FaqAccordion items={faqItems} />
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
