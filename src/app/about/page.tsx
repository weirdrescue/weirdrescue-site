import Image from "next/image";

export const metadata = {
  title: "About • Weird Rescue",
  description:
    "Meet the humans behind Weird Rescue — our mission, vision, and why we proudly love the weird ones.",
};

function FilmStrip({
  src,
  alt,
  tilt = 0,
  offsetY = 0,
}: {
  src: string;
  alt: string;
  tilt?: number;
  offsetY?: number;
}) {
  return (
    <div
      className="relative"
      style={{
        transform: `translateY(${offsetY}px) rotate(${tilt}deg)`,
      }}
    >
      {/* Outer film frame */}
      <div className="rounded-3xl border border-white/10 bg-black/20 shadow-lg overflow-hidden">
        {/* Film perforations (top) */}
        <div className="flex justify-between px-3 py-2 bg-black/35">
          <div className="flex gap-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <span
                key={i}
                className="h-2 w-3 rounded-sm bg-white/10 border border-white/10"
              />
            ))}
          </div>
          <div className="flex gap-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <span
                key={i}
                className="h-2 w-3 rounded-sm bg-white/10 border border-white/10"
              />
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="bg-black/30 p-2">
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <Image
              src={src}
              alt={alt}
              width={900}
              height={1200}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        {/* Film perforations (bottom) */}
        <div className="flex justify-between px-3 py-2 bg-black/35">
          <div className="flex gap-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <span
                key={i}
                className="h-2 w-3 rounded-sm bg-white/10 border border-white/10"
              />
            ))}
          </div>
          <div className="flex gap-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <span
                key={i}
                className="h-2 w-3 rounded-sm bg-white/10 border border-white/10"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="space-y-14">
      {/* Hero */}
      <section className="surface p-8 sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* Left */}
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-white/70">About</p>

            <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight">
              For the overlooked,
              <span className="text-white/70"> the misunderstood,</span> and the
              perfectly odd.
            </h1>

            <p className="mt-4 text-white/80 text-lg">
              Weird Rescue is a Los Angeles–based 501(c)(3) dedicated to rescuing
              animals who don’t always get picked first — and helping people
              become confident, compassionate caregivers.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/adopt"
                className="inline-flex items-center rounded-xl px-6 py-3 text-base font-semibold
                           bg-[var(--wr-mint)] text-black hover:brightness-105 active:scale-[0.98] transition shadow-md"
              >
                Meet adoptables →
              </a>
              <a
                href="/donate"
                className="inline-flex items-center rounded-xl px-6 py-3 text-base font-semibold
                           bg-[var(--wr-sun)] text-black hover:brightness-105 active:scale-[0.98] transition shadow-md"
              >
                Support the mission →
              </a>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/80">
              <p className="font-semibold text-white">Our vibe</p>
              <p className="mt-2">
                Care, compassion, and chaos. We love
                the weird ones. We are the weird ones.
              </p>
            </div>
          </div>

          {/* Right: Filmstrips (smaller + casual offset) */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* subtle glow accents */}
              <div className="absolute -top-6 -left-10 h-20 w-20 rounded-full bg-[var(--wr-sky)]/20 blur-3xl" />
              <div className="absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-[var(--wr-mint)]/20 blur-3xl" />

              <div className="flex items-start justify-center gap-4">
                <div className="w-[44%]">
                  <FilmStrip
                    src="/about/lauren-bri-1.jpg"
                    alt="Lauren and Bri at a Weird Rescue event"
                    tilt={-3}
                    offsetY={10}
                  />
                </div>

                <div className="w-[44%]">
                  <FilmStrip
                    src="/about/lauren-bri-2.jpg"
                    alt="Lauren and Bri being weird at a Weird Rescue event"
                    tilt={2}
                    offsetY={-6}
                  />
                </div>
              </div>

              <p className="mt-4 text-xs text-white/55 text-center">
                Fundraising requires both professionalism and occasional goblin
                energy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="grid gap-4 lg:grid-cols-2">
        <div className="surface p-8 sm:p-10">
          <p className="text-sm font-semibold text-white/70">Mission</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight">
            What we do — on purpose.
          </h2>
          <p className="mt-4 text-white/80 leading-relaxed">
            To rescue, rehabilitate, and give animals the greatest chance of
            finding permanent loving homes, while empowering people with the
            knowledge to be compassionate and responsible caregivers.
          </p>
        </div>

        <div className="surface p-8 sm:p-10">
          <p className="text-sm font-semibold text-white/70">Vision</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight">
            What we’re building toward.
          </h2>
          <p className="mt-4 text-white/80 leading-relaxed">
            To create a world in which humans have a greater understanding of
            and respect for animals of all kinds.
          </p>
        </div>
      </section>

      {/* Founders */}
      <section className="surface p-8 sm:p-12">
        <p className="text-sm font-semibold text-white/70">The humans</p>
        <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight">
          Lauren Avon & Bri Xandrick-Spiegel
        </h2>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-extrabold">Lauren Avon</h3>
            <p className="mt-3 text-white/80 leading-relaxed">
              Lauren comes from an amazing background in exotic animal training.
              Fun fact: she taught a pig to skateboard. (We have follow-up
              questions.)
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-extrabold">Bri Xandrick-Spiegel</h3>
            <p className="mt-3 text-white/80 leading-relaxed">
              Bri is trying to instill a love of animals into her son — and to
              make sure every “weirdo” ends up with a home that celebrates them
              exactly as they are.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-white/80 leading-relaxed">
            We met as aerialists, realized we shared an intense love of animals,
            and felt the same urgency about the Los Angeles animal landscape. We
            built Weird Rescue for the ones who need a little extra patience,
            creativity, and heart — and we’re proud to be the people who show up
            for them.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/volunteer"
              className="inline-flex items-center rounded-xl px-6 py-3 text-base font-semibold
                         bg-[var(--wr-sky)] text-black hover:brightness-105 transition shadow-md"
            >
              Volunteer with us →
            </a>
            <a
              href="/contact"
              className="inline-flex items-center rounded-xl px-6 py-3 text-base font-semibold
                         bg-white/10 text-white border border-white/10 hover:bg-white/15 transition"
            >
              Say hi
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
