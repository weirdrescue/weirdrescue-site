"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { href: "/adopt", label: "Adopt" },
  { href: "/foster", label: "Foster" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },

];

export default function HeaderNav() {
  const [open, setOpen] = useState(false);

  // Close menu on route change-like behavior (simple: close on resize up to desktop)
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[var(--wr-coral)] text-black">
      <div className="mx-auto max-w-6xl px-4 py-3 relative flex items-center justify-between">
        {/* Left: Logo */}
        <a href="/" className="flex items-center gap-3">
          <span className="relative h-9 w-9">
            <Image
              src="/brand/logo.png"
              alt="Weird Rescue"
              fill
              className="object-contain"
              priority
            />
          </span>
          <span className="font-bold tracking-tight">Weird Rescue</span>
        </a>

        {/* Center: Desktop nav */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-black/80 hover:text-black transition relative
                         after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all
                         hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right: Donate + Mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="/donate"
            className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold
                       text-black bg-[var(--wr-sun)] hover:opacity-90 transition shadow-sm"
          >
            Donate
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-black/20 bg-black/10
                       h-10 w-10 hover:bg-black/15 transition"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {/* Hamburger / X */}
            <span className="text-black text-xl leading-none">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open ? (
        <div className="md:hidden border-t border-black/10 bg-[var(--wr-coral)]">
          <nav className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-base font-semibold text-black/80 hover:text-black
                           hover:bg-black/10 transition"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
