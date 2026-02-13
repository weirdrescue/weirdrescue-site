export default function VolunteerPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <section className="surface p-7 sm:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-white/70">Volunteer</p>
          <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight">
            Bring your skills. Help our weirdos thrive.
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            There are tons of ways to help — from hands-on event support to creative,
            behind-the-scenes projects. If you’ve got a skill, we can probably put it
            to good use.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://new.shelterluv.com/form/volunteer/WRD/138328-volunteer"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-xl px-6 py-3 text-base font-semibold
                         bg-[var(--wr-sky)] text-black
                         hover:brightness-105 active:scale-[0.98] transition shadow-md"
            >
              Volunteer application →
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
            <p className="font-semibold text-white">A quick note</p>
            <p className="mt-2">
              We’d love to hear what you’re good at — even if it’s not listed below.
              Tell us your skills and availability in the application and we’ll follow up.
            </p>
          </div>
        </div>
      </section>
      {/* Event Image */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
        <div className="relative aspect-[16/9] w-full">
          <img
            src="/events/punches-and-paws.jpg"
            alt="Punches and Paws Film Event"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
          <p className="text-white text-lg font-semibold">
            Punches & Paws Film Night
          </p>
          <p className="text-white/80 text-sm">
            Community. Fundraising. Weird energy. This is what volunteers make possible.
          </p>
        </div>
      </section>

      {/* Ways to help */}
      <section className="surface p-7 sm:p-10">
        <p className="text-sm font-semibold text-white/70">Ways to help</p>
        <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight">
          Pick a lane… or invent one.
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold text-mint">Events</p>
            <p className="mt-2 text-sm text-white/75">
              Help at adoption events, check-ins, setup/breakdown, and keeping things running smoothly.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold text-sun">Fundraising</p>
            <p className="mt-2 text-sm text-white/75">
              Support campaigns, donor outreach, grant research, thank-yous, and creative fundraisers.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold text-coral">Merch</p>
            <p className="mt-2 text-sm text-white/75">
              Help design, produce, organize, or sell merch. (Yes, we love weird.)
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold text-sky">Social media</p>
            <p className="mt-2 text-sm text-white/75">
              Posts, reels, editing, captions, scheduling, and helping our animals shine online.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold text-mint">Transport</p>
            <p className="mt-2 text-sm text-white/75">
              Help animals get to vet appointments, fosters, events, or pickup/dropoff points.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold text-white">Your superpower</p>
            <p className="mt-2 text-sm text-white/75">
              Photography, graphic design, admin, spreadsheets, legal, HR, web, carpentry… tell us what you do.
            </p>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="grid gap-4 lg:grid-cols-2">
        <div className="surface p-7 sm:p-10">
          <h2 className="text-2xl font-extrabold tracking-tight">What to expect</h2>
          <ul className="mt-4 space-y-2 text-white/80">
            <li>• We’ll match you to opportunities based on your skills + availability</li>
            <li>• Some roles are one-time, others are recurring</li>
            <li>• You’ll always know what you’re signing up for</li>
            <li>• You can start small and grow from there</li>
          </ul>
        </div>

        <div className="surface p-7 sm:p-10">
          <h2 className="text-2xl font-extrabold tracking-tight">We love volunteers who</h2>
          <ul className="mt-4 space-y-2 text-white/80">
            <li>• Communicate clearly (even if it’s “I can’t this week”)</li>
            <li>• Show up when they say they will</li>
            <li>• Ask questions early</li>
            <li>• Bring good energy (weird is welcome)</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="surface p-7 sm:p-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-white/70">Ready to jump in?</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight">
              Tell us what you’d love to do.
            </h2>
            <p className="mt-3 text-white/75">
              Fill out the application and include any skills, tools, or ideas you want to bring to the rescue.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://new.shelterluv.com/form/volunteer/WRD/138328-volunteer"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-xl px-6 py-3 text-base font-semibold
                         bg-[var(--wr-mint)] text-black
                         hover:brightness-105 active:scale-[0.98] transition shadow-md"
            >
              Apply to volunteer →
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
    </div>
  );
}
