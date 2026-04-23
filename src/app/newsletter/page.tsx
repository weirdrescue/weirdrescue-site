export default function NewsletterPage() {
  return (
    <div className="space-y-10">
      {/* HERO */}
      <section className="surface p-7 sm:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-white/70">
            Stay Weird & Rescue
          </p>

          <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight">
            Stories from the weird side of rescue.
          </h1>

          <p className="mt-4 text-white/80 text-lg">
            Real rescue stories. Honest moments. The chaos and
            the wins that make it all worth it.
          </p>

          <div className="mt-8">
            <a
              href="https://stayweirdandrescue.substack.com/subscribe"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-xl px-6 py-3 text-base font-semibold
                         bg-[var(--wr-mint)] text-black
                         hover:brightness-105 active:scale-[0.98] transition shadow-md"
            >
              Subscribe on Substack →
            </a>
          </div>
        </div>
      </section>

 {/* FEATURED POST */}
<section className="surface p-7 sm:p-10">
  <p className="text-sm font-semibold text-white/70">Featured story</p>

  <div className="mt-4 grid gap-6 lg:grid-cols-2 lg:items-center">
    
    {/* Left: Content */}
    <div>
      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
        Why Weird?
      </h2>

      <p className="mt-3 text-white/80 text-lg">
        So glad you asked.
      </p>

      <p className="mt-4 text-white/70">
        A look into what “weird” actually means to us — the animals we choose,
        the way we approach rescue, and why embracing the unconventional is at
        the heart of everything we do.
      </p>

      <a
        href="https://stayweirdandrescue.substack.com/p/why-weird"
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center rounded-xl px-5 py-3 text-sm font-semibold
                   bg-[var(--wr-sun)] text-black
                   hover:brightness-105 active:scale-[0.98] transition shadow-md"
      >
        Read on Substack →
      </a>
    </div>

    {/* Right: Visual block (editorial placeholder) */}
    <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 flex items-center justify-center text-center">
      <p className="text-xl font-semibold text-white/70">
        Stay Weird & Rescue
      </p>

      {/* subtle glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 blur-3xl opacity-30">
        <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-[var(--wr-sky)]" />
        <div className="absolute right-10 bottom-10 h-36 w-36 rounded-full bg-[var(--wr-mint)]" />
      </div>
    </div>

  </div>
</section>
    </div>
  );
}