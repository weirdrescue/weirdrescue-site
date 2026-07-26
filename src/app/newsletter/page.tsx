import Image from "next/image";
import SubstackFeed from "@/components/SubstackFeed";
import { getLatestSubstackPosts } from "@/lib/substack";

export const dynamic = "force-dynamic";

export default async function NewsletterPage() {
  const posts = await getLatestSubstackPosts();
  const featuredPost = posts[0];

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

      <section className="surface p-7 sm:p-10">
        <p className="text-sm font-semibold text-white/70">Featured story</p>

        <div className="mt-4 grid gap-6 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {featuredPost?.title || "Fresh stories from the weird side of rescue"}
            </h2>

            <p className="mt-3 text-white/80 text-lg">
              {featuredPost
                ? "The newest post from Substack, surfaced here automatically."
                : "The latest Substack story will show up here as soon as the feed is available."}
            </p>

            <p className="mt-4 text-white/70">
              {featuredPost?.description ||
                "Rescue stories, honest updates, and all the beautifully unglamorous moments in between."}
            </p>

            <a
              href={featuredPost?.link || "https://stayweirdandrescue.substack.com"}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center rounded-xl px-5 py-3 text-sm font-semibold
                         bg-[var(--wr-sun)] text-black
                         hover:brightness-105 active:scale-[0.98] transition shadow-md"
            >
              Read on Substack →
            </a>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            {featuredPost?.image ? (
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <div className="flex h-full min-h-[320px] items-center justify-center p-8 text-center">
                <p className="text-xl font-semibold text-white/70">Stay Weird & Rescue</p>
              </div>
            )}

            <div className="pointer-events-none absolute inset-0 -z-10 blur-3xl opacity-30">
              <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-[var(--wr-sky)]" />
              <div className="absolute right-10 bottom-10 h-36 w-36 rounded-full bg-[var(--wr-mint)]" />
            </div>
          </div>
        </div>
      </section>

      <SubstackFeed
        posts={posts.slice(0, 6)}
        title="Browse recent posts"
        ctaLabel="Subscribe on Substack"
        ctaHref="https://stayweirdandrescue.substack.com/subscribe"
      />
    </div>
  );
}
