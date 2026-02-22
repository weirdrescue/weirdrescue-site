import Image from "next/image";
import { getAllAnimals } from "@/lib/animals";
import AnimalCard from "@/components/AnimalCard";
import EmailSignup from "@/components/EmailSignup";

export default function Home() {
  const featured = getAllAnimals().filter((a) => a.featured).slice(0, 6);

  return (
    <div className="space-y-10">
      {/* HERO */}
      <section className="surface px-7 py-10 sm:px-10 sm:py-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left: mission + CTAs */}
          <div className="max-w-xl">
            <p className="text-sm font-semibold tracking-wide text-white/80">
              501(c)(3) • Los Angeles, CA
            </p>

            <h1 className="mt-3 text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Rescue, but make it weird.
            </h1>

            <p className="mt-5 text-lg sm:text-xl text-white/80">
              We save overlooked dogs and cats and match them with the right humans — with
              great care, honest support, and a little chaos (the cute kind).
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/adopt"
                className="inline-flex items-center rounded-xl px-6 py-3 text-base font-semibold
                           bg-[var(--wr-mint)] text-black
                           hover:brightness-105 active:scale-[0.98] transition shadow-md"
              >
                Meet adoptables
              </a>

              <a
                href="/foster"
                className="inline-flex items-center rounded-xl px-6 py-3 text-base font-semibold
                           bg-[var(--wr-sky)] text-black
                           hover:brightness-105 active:scale-[0.98] transition shadow-md"
              >
                Become a foster
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

            {/* quick trust points */}
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">Based in behavior</p>
                <p className="mt-1 text-xs text-white/70">
                  Positive reinforcement and behavior shaping.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">Foster-led</p>
                <p className="mt-1 text-xs text-white/70">
                  Home-based care & matchmaking.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">Supportive</p>
                <p className="mt-1 text-xs text-white/70">Real help after adoption.</p>
              </div>
            </div>
          </div>

          {/* Right: Gemma lookbook grid */}
<div className="relative w-full max-w-xl mx-auto">
  <div className="grid gap-4">
    {/* 2x2 Lookbook */}
    <div className="grid grid-cols-2 gap-4">
      {/* Large tile (top-left) */}
      <div className="col-span-2 sm:col-span-1 sm:row-span-2 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
        <Image
          src="/animals/gemma/gemma-teal.jpg"
          alt="Gemma adoptable dog"
          width={1200}
          height={1500}
          className="h-[420px] w-full object-cover sm:h-[520px]"
          priority
        />
      </div>

      {/* Top-right */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl">
        <Image
          src="/animals/gemma/gemma-bubbles.jpg"
          alt="Gemma with bubbles"
          width={900}
          height={900}
          className="h-48 w-full object-cover sm:h-[250px]"
        />
      </div>

      {/* Bottom-right */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl">
        <Image
          src="/animals/gemma/gemma-purple-upside.jpg"
          alt="Gemma being weird"
          width={900}
          height={900}
          className="h-48 w-full object-cover sm:h-[250px]"
        />
      </div>
    </div>

    {/* Caption / credit line */}
    <div className="flex flex-wrap items-center justify-between gap-2 px-1 text-xs text-white/60">
      <span className="font-semibold text-white/70">Gemma • Featured foster</span>
      <span>Photos: Dogtographer Sarah DeRemer</span>
    </div>
  </div>

  {/* subtle modern accent glow */}
  <div className="pointer-events-none absolute -inset-6 -z-10 blur-3xl opacity-30">
    <div className="absolute left-8 top-10 h-40 w-40 rounded-full bg-[var(--wr-sky)]" />
    <div className="absolute right-10 bottom-8 h-44 w-44 rounded-full bg-[var(--wr-mint)]" />
  </div>
</div>
</div>
      </section>

      <div className="h-px w-full bg-white/10" />

      {/* FEATURED ADOPTABLES */}
      <section className="space-y-4 pt-2">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="mt-1 text-2xl font-extrabold tracking-tight">
              Meet a few of our favorites
            </h2>
          </div>

          <a
            href="/adopt"
            className="text-sm font-semibold text-mint hover:opacity-90 transition"
          >
            View all →
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((animal) => (
            <AnimalCard key={animal.slug} animal={animal} />
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="surface p-7 sm:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-white/70">How it works</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight">
            Rescue → Foster → Match
          </h2>
          <p className="mt-3 text-white/75">
            We keep it simple: get them safe, get them supported, then find the right
            forever home.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold text-mint">1) Rescue</p>
            <p className="mt-2 text-sm text-white/75">
              We take in animals who need a second chance, get them healthy, and learn
              as much as we can about them.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold text-sun">2) Foster</p>
            <p className="mt-2 text-sm text-white/75">
              Fosters provide the safe landing, both short and longer term. We are there
              for you the whole time so you can be there for them.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold text-coral">3) Match</p>
            <p className="mt-2 text-sm text-white/75">
              We match pets to people thoughtfully — then stay available for support
              after adoption.
            </p>
          </div>
        </div>
      </section>

      {/* TWO BIG PATHS */}
      <section className="grid gap-4 sm:grid-cols-2">
        <a href="/adopt" className="surface p-7 hover:bg-white/10 transition">
          <p className="text-sm font-semibold text-mint">Adopt</p>
          <h2 className="mt-2 text-2xl font-bold">Meet your match</h2>
          <p className="mt-2 text-white/75">
            Browse adoptables with photos, videos, and a Petfinder link.
          </p>
        </a>

        <a href="/foster" className="surface p-7 hover:bg-white/10 transition">
          <p className="text-sm font-semibold text-sun">Foster</p>
          <h2 className="mt-2 text-2xl font-bold">Be the safe place</h2>
          <p className="mt-2 text-white/75">
            Short-term fosters save lives. We’ll support you the whole way.
          </p>
        </a>
      </section>

      {/* LINKTREE / SOCIAL */}
      <section className="surface p-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-coral">Start here</p>
          <h2 className="mt-1 text-2xl font-bold">Find us everywhere</h2>
          <p className="mt-2 text-white/75">
            Instagram, wishlist, ways to help, and updates.
          </p>
        </div>

        <a
          href="https://linktr.ee/weirdrescue"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold
                     bg-white/10 text-white border border-white/10
                     hover:bg-white/15 active:scale-[0.98] transition"
        >
          Open Linktree
        </a>
      </section>

      {/* FINAL CTA */}
      <section className="surface p-7 sm:p-10 mb-2">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-white/70">Want to help right now?</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight">
              Fosters save lives. Donations power the weird.
            </h2>
            <p className="mt-3 text-white/75">
              If you’ve got space in your home or room in your budget, you can make an
              immediate impact.
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

      <section className="mt-14">
        <EmailSignup />
      </section>
    </div>
  );
}