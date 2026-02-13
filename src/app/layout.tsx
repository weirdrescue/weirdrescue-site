import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Weird Rescue",
  description:
    "A 501(c)(3) nonprofit dedicated to giving overlooked animals a second chance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen text-white">
        <header className="sticky top-0 z-50 bg-[var(--wr-coral)] text-black">
          <div className="mx-auto max-w-6xl px-4 py-3 relative flex items-center">
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

            {/* Center: Nav */}
            <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-6">
              <a
                className="text-sm font-semibold text-black/80 hover:text-black transition relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
                href="/adopt"
              >
                Adopt
              </a>
              <a
                className="text-sm font-semibold text-black/80 hover:text-black transition relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
                href="/foster"
              >
                Foster
              </a>
              <a
                className="text-sm font-semibold text-black/80 hover:text-black transition relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
                href="/volunteer"
              >
                Volunteer
              </a>
              <a
                className="text-sm font-semibold text-black/80 hover:text-black transition relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
                href="/contact"
              >
                Contact
              </a>
            </nav>

            {/* Right: Donate */}
            <a
              href="/donate"
              className="ml-auto inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold text-black bg-[var(--wr-sun)] hover:opacity-90 transition shadow-sm"
            >
              Donate
            </a>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>

        <footer className="mt-16 border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-white/70">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p>© {new Date().getFullYear()} Weird Rescue • 501(c)(3)</p>
              <p className="text-white/60">Made with love in Los Angeles</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
