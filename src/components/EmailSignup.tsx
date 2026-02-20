"use client";

import { useState } from "react";

export default function EmailSignup({
  eyebrow = "Newsletter",
  title = "Get the good kind of inbox updates.",
  subtitle = "Adoption stories, rescue wins, and the occasional weird moment. No spam. Ever.",
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle"
  );
  const [msg, setMsg] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setStatus("sent");
        setMsg("You’re in. Welcome to the weirdos. 💛");
        setEmail("");
      } else {
        setStatus("error");
        setMsg(data?.error || "Couldn’t subscribe. Try again.");
      }
    } catch {
      setStatus("error");
      setMsg("Couldn’t subscribe. Try again.");
    }
  }

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
      {/* soft brand glows */}
      <div className="pointer-events-none absolute -top-16 -left-20 h-48 w-48 rounded-full bg-[var(--wr-sky)]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-[var(--wr-mint)]/20 blur-3xl" />

      <div className="relative p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="min-w-0">
            <p className="text-xs font-semibold tracking-wide text-white/70">
              {eyebrow.toUpperCase()}
            </p>

            <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight">
              {title}
            </h3>

            <p className="mt-3 text-white/75">{subtitle}</p>

            <p className="mt-4 text-xs text-white/50">
              Unsubscribe anytime. We respect your inbox like we respect animals:
              with patience and boundaries.
            </p>
          </div>

          <div className="min-w-0">
            <form onSubmit={onSubmit} className="space-y-3">
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="you@domain.com"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white
                             placeholder:text-white/40 outline-none focus:border-white/20"
                />

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold
                             bg-[var(--wr-sun)] text-black hover:brightness-105 active:scale-[0.98] transition shadow-md
                             disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Signing up…" : "Join newsletter"}
                </button>
              </div>

              {msg ? (
                <p
                  className={`text-sm ${
                    status === "error"
                      ? "text-[var(--wr-coral)]"
                      : "text-white/80"
                  }`}
                >
                  {msg}
                </p>
              ) : null}
            </form>

            <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/55">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Adoption updates
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Events + merch
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Rescue education
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}