export default function FosterPage() {
  return (
    <div className="space-y-10">
     {/* Header */}
<section className="surface p-7 sm:p-10">
  <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
    {/* Left side */}
    <div className="max-w-3xl">
      <p className="text-sm font-semibold text-white/70">Foster</p>
      <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight">
        Be the safe place.
      </h1>
      <p className="mt-4 text-white/80 text-lg">
        Fostering is the fastest way to save lives. You provide the home — we
        cover all expenses, provide supplies, and support you every step of the
        way.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="https://new.shelterluv.com/matchme/foster/WRD/Dog"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-xl px-6 py-3 text-base font-semibold
                     bg-[var(--wr-sky)] text-black
                     hover:brightness-105 active:scale-[0.98] transition shadow-md"
        >
          Dog foster application →
        </a>

        <a
          href="https://new.shelterluv.com/matchme/foster/WRD/Cat"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-xl px-6 py-3 text-base font-semibold
                     bg-[var(--wr-mint)] text-black
                     hover:brightness-105 active:scale-[0.98] transition shadow-md"
        >
          Cat foster application →
        </a>

        <a
          href="/contact"
          className="inline-flex items-center rounded-xl px-6 py-3 text-base font-semibold
                     bg-white/10 text-white border border-white/10
                     hover:bg-white/15 active:scale-[0.98] transition"
        >
          Ask a question
        </a>
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/80">
        <p className="font-semibold text-white">Quick notes before you apply</p>
        <ul className="mt-3 space-y-2">
          <li>
            • If you’re open to{" "}
            <span className="text-white font-semibold">both dogs and cats</span>,
            fill out the{" "}
            <span className="text-white font-semibold">dog application</span> and
            note that you’re also open to cats.
          </li>
          <li>
            • Want to foster{" "}
            <span className="text-white font-semibold">
              birds, small mammals, reptiles
            </span>
            , or any other creature? Please note that in your application.
          </li>
        </ul>
      </div>
    </div>

    {/* Right side image */}
    <div className="flex justify-center lg:justify-end">
      <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg">
        <img
          src="/foster/noelani-dogs.jpg"
          alt="Foster with dogs"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</section>


      {/* How fostering works */}
      <section className="surface p-7 sm:p-10">
        <p className="text-sm font-semibold text-white/70">How it works</p>
        <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight">
          Simple, supported, and flexible.
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold text-mint">1) You provide a home</p>
            <p className="mt-2 text-sm text-white/75">
              A spare room or cozy corner is enough. We’ll match you with a pet that
              fits your lifestyle.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold text-sun">2) We cover everything</p>
            <p className="mt-2 text-sm text-white/75">
              We cover all expenses and provide supplies. You’ll never be on your own —
              we’ll guide you through medical, behavior, and next steps.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold text-coral">3) We find the match</p>
            <p className="mt-2 text-sm text-white/75">
              We handle promotion and applications. You share updates and we work
              together to place them.
            </p>
          </div>
        </div>
      </section>

      {/* What we cover / what you provide */}
      <section className="grid gap-4 lg:grid-cols-2">
        <div className="surface p-7 sm:p-10">
          <h2 className="text-2xl font-extrabold tracking-tight">We provide</h2>
          <ul className="mt-4 space-y-2 text-white/80">
            <li>• All expenses (medical care, treatment, etc.)</li>
            <li>• All supplies (food, basics, and what your foster needs)</li>
            <li>• Adoption promotion + applicant screening</li>
            <li>• Support and guidance the whole way</li>
          </ul>
        </div>

        <div className="surface p-7 sm:p-10">
          <h2 className="text-2xl font-extrabold tracking-tight">We ask fosters to provide</h2>
          <ul className="mt-4 space-y-2 text-white/80">
            <li>• A safe home and daily care</li>
            <li>• Love, routine, and quick updates on how things are going</li>
            <li>• Help with transport when needed (as you’re able)</li>
            <li>• Photos/videos for adoption posts (we’ll guide you)</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="surface p-7 sm:p-10">
        <p className="text-sm font-semibold text-white/70">FAQ</p>
        <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight">
          Common questions
        </h2>

        <div className="mt-6 grid gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="font-semibold">How long is a foster?</p>
            <p className="mt-2 text-white/75 text-sm">
              It depends — sometimes a few weeks, sometimes longer. We’ll be transparent
              and work with your schedule.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="font-semibold">Do I need experience?</p>
            <p className="mt-2 text-white/75 text-sm">
              Not at all. We’ll support you with check-ins, tips, and clear expectations.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="font-semibold">What if it’s not a fit?</p>
            <p className="mt-2 text-white/75 text-sm">
              You’re not stuck. If something isn’t working, tell us early — we’ll adjust
              the plan and keep the animal safe.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://new.shelterluv.com/matchme/foster/WRD/Dog"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-xl px-6 py-3 text-base font-semibold
                       bg-[var(--wr-sky)] text-black
                       hover:brightness-105 active:scale-[0.98] transition shadow-md"
          >
            Apply to foster dogs →
          </a>

          <a
            href="https://new.shelterluv.com/matchme/foster/WRD/Cat"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-xl px-6 py-3 text-base font-semibold
                       bg-[var(--wr-mint)] text-black
                       hover:brightness-105 active:scale-[0.98] transition shadow-md"
          >
            Apply to foster cats →
          </a>
        </div>
      </section>
    </div>
  );
}
