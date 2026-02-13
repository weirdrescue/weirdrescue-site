"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setStatus("sending");

  const form = e.currentTarget;
  const formData = new FormData(form);

  const res = await fetch("/api/contact", {
    method: "POST",
    body: formData,
  });

  let data: any = null;
  try {
    data = await res.json();
  } catch {
    // ignore
  }

  if (res.ok && data?.success) {
    setStatus("sent");
    form.reset();
  } else {
    setStatus("error");
  }
}



  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="surface p-8 sm:p-12">
        <p className="text-sm font-semibold text-white/70">Contact</p>
        <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight">
          Let’s talk.
        </h1>
        <p className="mt-4 text-white/80 text-lg">
          Questions? Ideas? Want to help? Reach out — we’d love to hear from you.
        </p>
      </section>

      {/* Form + Info */}
      <section className="grid gap-10 lg:grid-cols-2">
        {/* Form */}
        <div className="surface p-8">
          <h2 className="text-2xl font-bold">Send us a message</h2>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input
              name="name"
              required
              placeholder="Your name"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--wr-mint)]"
            />

            <input
              name="email"
              required
              type="email"
              placeholder="Your email"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--wr-mint)]"
            />

            <textarea
              name="message"
              required
              rows={5}
              placeholder="Your message"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--wr-mint)]"
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center rounded-xl px-6 py-3 text-base font-semibold
                         bg-[var(--wr-mint)] text-black
                         hover:brightness-105 active:scale-[0.98] transition shadow-md"
            >
              {status === "sending" ? "Sending..." : "Send message"}
            </button>

            {status === "sent" && (
              <p className="text-sm text-[var(--wr-sky)]">
                Message sent! We’ll be in touch soon.
              </p>
            )}

            {status === "error" && (
              <p className="text-sm text-red-400">
                Something went wrong. Please email us directly.
              </p>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <div className="surface p-8 space-y-6">
          <h2 className="text-2xl font-bold">Contact info</h2>

          <div className="space-y-3 text-white/80">
            <p>
              <span className="font-semibold text-white">Email:</span>{" "}
              <a href="mailto:hello@weirdrescue.org" className="hover:underline">
                hello@weirdrescue.org
              </a>
            </p>

            <p>
              <span className="font-semibold text-white">Phone:</span>{" "}
              <a href="tel:3106018781" className="hover:underline">
                310-601-8781
              </a>
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 space-y-3">
            <p className="font-semibold text-white">Find us online</p>

            <div className="space-y-2 text-white/80">
              <a href="https://www.instagram.com/weirdrescue/?hl=en" target="_blank" className="block hover:underline">
                Instagram — @WeirdRescue
              </a>

              <a href="https://www.facebook.com/profile.php?id=61556218960350" target="_blank" className="block hover:underline">
                Facebook
              </a>

              <a href="https://www.youtube.com/@WeirdRescue" target="_blank" className="block hover:underline">
                YouTube
              </a>

              <a href="https://linktr.ee/weirdrescue" target="_blank" className="block hover:underline">
                Linktree
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
