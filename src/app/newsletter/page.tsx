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
            Real rescue stories. Honest moments. The chaos, the heartbreak, and
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

      {/* FEATURED POSTS */}
      <section className="surface p-7 sm:p-10">
        <p className="text-sm font-semibold text-white/70">Featured posts</p>
        <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight">
          Start here
        </h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <a
            href="https://stayweirdandrescue.substack.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
          >
            <p className="font-semibold">
              Visit the full Substack →
            </p>
            <p className="mt-2 text-sm text-white/70">
              Read all posts, archives, and updates.
            </p>
          </a>

          <a
            href="https://stayweirdandrescue.substack.com/subscribe"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
          >
            <p className="font-semibold">
              Subscribe for updates →
            </p>
            <p className="mt-2 text-sm text-white/70">
              Get new posts directly in your inbox.
            </p>
          </a>
        </div>
      </section>
    </div>
  );
}