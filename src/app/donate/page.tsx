export default function DonatePage() {
  return (
    <div className="space-y-14">
      {/* Hero */}
      <section className="surface p-8 sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold text-white/70">Donate</p>
            <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight">
              Help the weirdos thrive.
            </h1>
            <p className="mt-4 text-white/80 text-lg max-w-xl">
              Every dollar goes directly to animals in our care — medical bills,
              food, supplies, transport, and the second chances they deserve.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://www.zeffy.com/en-US/donation-form/donate-to-weird-rescue-to-help-animals-in-care"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-xl px-6 py-3 text-base font-semibold
                           bg-[var(--wr-sun)] text-black
                           hover:brightness-105 active:scale-[0.98] transition shadow-md"
              >
                Donate via Zeffy →
              </a>

              <a
                href="https://checkout.shelterluv.com/donate/WRD"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-xl px-6 py-3 text-base font-semibold
                           bg-[var(--wr-sky)] text-black
                           hover:brightness-105 active:scale-[0.98] transition shadow-md"
              >
                Donate via Shelterluv →
              </a>
            </div>

            <p className="mt-4 text-sm text-white/60">
              Shelterluv also supports recurring monthly donations.
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/80">
              <p className="font-semibold text-white">Tax-deductible</p>
              <p className="mt-2">
                Weird Rescue is a 501(c)(3) nonprofit. Donations help us provide
                care, safety, and second chances for overlooked animals.
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src="/brand/logo.png"
              alt="Weird Rescue logo"
              className="h-40 sm:h-52 lg:h-64 w-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Ways to give */}
      <section className="surface p-8 sm:p-12">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          Choose your favorite way to give
        </h2>
        <p className="mt-3 text-white/75 max-w-3xl">
          One-time or recurring, dollars or supplies — it all makes a real impact.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* PayPal */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-white">PayPal</p>
            <p className="mt-2 text-sm text-white/70">
              Quick one-time donations.
            </p>
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=E4PKZ4KPFZFFA"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold
                         bg-[var(--wr-mint)] text-black hover:brightness-105 transition"
            >
              Donate with PayPal →
            </a>
          </div>

          {/* Zelle */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-white">Zelle</p>
            <p className="mt-2 text-sm text-white/70">
              Send directly to:
            </p>
            <p className="mt-1 text-white font-semibold">
              hello@weirdrescue.org
            </p>
          </div>

          {/* Recurring */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-white">Recurring monthly giving</p>
            <p className="mt-2 text-sm text-white/70">
              Set it and forget it — the most powerful way to help long-term.
            </p>
            <a
              href="https://checkout.shelterluv.com/donate/WRD"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold
                         bg-[var(--wr-sky)] text-black hover:brightness-105 transition"
            >
              Set up monthly giving →
            </a>
          </div>
        </div>
      </section>

      {/* Wishlists */}
      <section className="surface p-8 sm:p-12">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          Send supplies directly
        </h2>
        <p className="mt-3 text-white/75 max-w-3xl">
          Prefer to help with food, crates, treats, toys, and essentials? Our
          wishlists make it easy.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-white">Chewy Wishlist</p>
            <a
              href="https://www.chewy.com/g/weird-rescue_b131465696#wish-list&wishlistsortby=DEFAULT"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold
                         bg-white/10 text-white border border-white/10 hover:bg-white/15 transition"
            >
              Shop Chewy Wishlist →
            </a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-white">Amazon Wishlist</p>
            <a
              href="https://www.amazon.com/hz/wishlist/ls/3IXZ8262XZOAO?ref_=wl_share"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold
                         bg-white/10 text-white border border-white/10 hover:bg-white/15 transition"
            >
              Shop Amazon Wishlist →
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="surface p-8 sm:p-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Want your gift to go somewhere specific?
            </h2>
            <p className="mt-3 text-white/75">
              Leave a note with your donation (medical, supplies, a specific animal,
              emergency fund, etc.) and we’ll do our best to honor it.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.zeffy.com/en-US/donation-form/donate-to-weird-rescue-to-help-animals-in-care"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-xl px-6 py-3 text-base font-semibold
                         bg-[var(--wr-sun)] text-black hover:brightness-105 transition shadow-md"
            >
              Donate now →
            </a>
            <a
              href="/contact"
              className="inline-flex items-center rounded-xl px-6 py-3 text-base font-semibold
                         bg-white/10 text-white border border-white/10 hover:bg-white/15 transition"
            >
              Ask a question
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
