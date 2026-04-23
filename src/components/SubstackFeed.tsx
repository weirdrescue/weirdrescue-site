import { formatSubstackDate, type SubstackPost } from "@/lib/substack";

type SubstackFeedProps = {
  posts: SubstackPost[];
  title?: string;
  eyebrow?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function SubstackFeed({
  posts,
  title = "Latest from Substack",
  eyebrow = "Newsletter",
  ctaLabel = "Open Substack",
  ctaHref = "https://stayweirdandrescue.substack.com",
}: SubstackFeedProps) {
  return (
    <section className="surface p-7 sm:p-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-white/70">{eyebrow}</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight">{title}</h2>
          <p className="mt-3 text-white/75">
            Fresh stories and updates, pulled in automatically whenever a new post goes
            live.
          </p>
        </div>

        <a
          href={ctaHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold
                     bg-white/10 text-white border border-white/10
                     hover:bg-white/15 active:scale-[0.98] transition"
        >
          {ctaLabel} →
        </a>
      </div>

      {posts.length ? (
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {posts.map((post) => (
            <a
              key={post.link}
              href={post.link}
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                {formatSubstackDate(post.publishedAt) || "Substack"}
              </p>

              <h3 className="mt-3 text-xl font-bold leading-tight transition group-hover:text-[var(--wr-mint)]">
                {post.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/70">
                {post.description || "Read the full story on Substack."}
              </p>

              <p className="mt-5 text-sm font-semibold text-[var(--wr-sun)]">
                Read article →
              </p>
            </a>
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm font-semibold text-white">Substack feed coming through soon.</p>
          <p className="mt-2 text-sm text-white/70">
            In the meantime, you can read every post directly on Substack.
          </p>
        </div>
      )}
    </section>
  );
}
