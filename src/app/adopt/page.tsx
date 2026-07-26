import type { ReactNode } from "react";
import AnimalCard from "@/components/AnimalCard";
import { getAllAnimals, type Animal } from "@/lib/animals";

export const dynamic = "force-dynamic";

const DOG_APPLICATION_URL = "https://new.shelterluv.com/matchme/adopt/WRD/Dog";
const CAT_APPLICATION_URL = "https://new.shelterluv.com/matchme/adopt/WRD/Cat";
const PETFINDER_URL =
  "https://www.petfinder.com/member/us/ca/studio-city/weird-rescue-ca3299/";
const ADOPT_A_PET_URL =
  "https://www.adoptapet.com/shelter/282293-weird-rescue-studio-city-california";
const WISHLIST_URL =
  "https://docs.google.com/forms/d/1_jCA3fZfSARcc9ikZDvE4-RysIxyAsVERDimIYGmfIU/viewform";

const faqs = [
  {
    question: "What is the adoption donation to adopt from Weird Rescue?",
    answer:
      "Weird Rescue is a 501(c)(3) nonprofit, so our animals are not for sale. We do ask for an adoption donation for each animal to help offset part of their cost of care and allow us to continue future lifesaving. Our adoption donations are $350 for adult dogs, $450 for puppies under 6 months due to increased medical cost, $175 for kittens due to increased medical cost, and $150 for adult cats.",
  },
  {
    question: "Why do you charge an adoption donation?",
    answer:
      "We are entirely donation-based and do not receive federal funding, so adoption donations help us keep saving lives. Between medical care, supplies, foster support, and day-to-day care, we typically spend much more than the adoption donation on each animal.",
  },
  {
    question: "What does the adoption donation cover?",
    answer:
      "Our animals come up to date on vaccines, are seen and cleared by a veterinarian, have any known health conditions disclosed, are microchipped, and are spayed or neutered if of age. It also helps cover behavioral evaluation, support, and ongoing guidance after adoption.",
  },
  {
    question: "Where does my adoption donation actually go?",
    answer:
      "Your adoption donation does not go only to the animal you take home. It helps fund continued care for animals across the rescue, including those who need diagnostics, surgery, medication, or longer-term treatment before they are ready for adoption.",
  },
  {
    question: "What is your adoption process?",
    answer:
      "We review your application, follow up with any questions, and often ask for a home walkthrough video so we can understand the environment. From there, we talk through what you are looking for, help assess fit, and may suggest a different weirdo if there is a better match. Once everything feels aligned, we send the adoption agreement, answer questions, and schedule a meet and greet before finalizing through Shelterluv.",
  },
  {
    question: "Why might a rescue donation feel higher than expected?",
    answer:
      "Some of our animals need extensive veterinary care, behavior support, or longer stays in foster before they are ready for a home. Adoption donations help us say yes to the next animal too, not just cover the basics for the one in front of you.",
  },
] as const;

function MatchButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold bg-[var(--wr-mint)] text-black hover:brightness-105 active:scale-[0.98] transition shadow-md"
    >
      {children}
    </a>
  );
}

function FaqItem({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}) {
  return (
    <details
      open={defaultOpen}
      className="rounded-2xl border border-white/10 bg-white/5 p-5 open:bg-white/8 transition"
    >
      <summary className="cursor-pointer list-none text-base font-semibold text-white">
        {question}
      </summary>
      <p className="mt-3 text-sm leading-7 text-white/75">{answer}</p>
    </details>
  );
}

export default async function AdoptPage() {
  let animals: Animal[] = [];

  try {
    animals = await getAllAnimals();
  } catch (error) {
    console.error("Unable to load adoptables", error);
  }

  return (
    <div className="space-y-10">
      <section className="surface p-7 sm:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-white/70">Adopt</p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-5xl">
            Adoptable Weirdos
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Tap a profile for photos, details, and the latest live info from Adopt a Pet.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={PETFINDER_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold bg-[var(--wr-mint)] text-black hover:brightness-105 active:scale-[0.98] transition shadow-md"
            >
              View on Petfinder →
            </a>
            <a
              href={ADOPT_A_PET_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold bg-[var(--wr-mint)] text-black hover:brightness-105 active:scale-[0.98] transition shadow-md"
            >
              View rescue on Adopt a Pet →
            </a>
          </div>
        </div>
      </section>

      <section className="surface p-7 sm:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-white/70">
            Not sure which weirdo is your weirdo?
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Get pre-approved and let us help with the match.
          </h2>
          <p className="mt-4 text-lg text-white/80">
            If you are still figuring out who feels like the right fit, or if we have an
            adoption event coming up and you want to be ready, fill out the general
            application first. Once you apply, our adoption coordinators can chat with you
            about who might be the best match, and pre-approved adopters can move a little
            faster at events.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <MatchButton href={DOG_APPLICATION_URL}>Dog application →</MatchButton>
            <MatchButton href={CAT_APPLICATION_URL}>Cat application →</MatchButton>
          </div>
        </div>
      </section>

      <section className="surface p-7 sm:p-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-white/70">Available now</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight">
              Everyone looking for a home
            </h2>
          </div>

          <p className="text-sm font-semibold text-white/60">{animals.length} total</p>
        </div>

        {animals.length ? (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {animals.map((animal) => (
              <AnimalCard key={animal.slug} animal={animal} />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 text-white/75">
            Live listings are having a weird moment right now, but you can still see every
            adoptable on Petfinder and Adopt a Pet using the buttons above.
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

        <div className="mt-8 grid gap-4">
          {faqs.map((faq, index) => (
            <FaqItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              defaultOpen={index === 0}
            />
          ))}
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
              Short-term fosters help animals decompress and show their real personality. We
              provide support the whole way.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="/foster"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold bg-[var(--wr-mint)] text-black hover:brightness-105 active:scale-[0.98] transition shadow-md"
            >
              Foster with us
            </a>
            <a
              href="/donate"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold bg-[var(--wr-sun)] text-black hover:brightness-105 active:scale-[0.98] transition shadow-md"
            >
              Donate
            </a>
          </div>
        </div>
      </section>

      <section className="surface p-7 sm:p-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[var(--wr-coral)]">
              Looking for your kind of weird?
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight">
              Tell us what you’re hoping to find.
            </h2>
            <p className="mt-3 text-white/75">
              Sometimes you have a specific future family member in mind. Share your Adoption
              Wish List with us, and we’ll keep an eye out for a match who feels like they
              were meant for you.
            </p>
          </div>

          <a
            href={WISHLIST_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold bg-[var(--wr-coral)] text-white hover:brightness-105 active:scale-[0.98] transition shadow-md"
          >
            Fill out the Wish List →
          </a>
        </div>
      </section>
    </div>
  );
}
