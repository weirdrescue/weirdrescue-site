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
              Shelterluv allows recurring monthly donations.
            </p>
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

      {/* Alternative Ways to Give */}
      <section className="surface p-8 sm:p-12">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          Other ways to support
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-white">PayPal</p>
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=E4PKZ4KPFZFFA"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-[var(--wr-mint)] hover:underline"
            >
              Donate with PayPal →
            </a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-white">Zelle</p>
            <p className="mt-3 text-white/80 text-sm">
              Send to: <span className="font-semibold">hello@weirdrescue.org</span>
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-white">Recurring Giving</p>
            <a
