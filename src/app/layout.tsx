import type { Metadata } from "next";
import "./globals.css";
import HeaderNav from "@/components/HeaderNav";

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
        {/* Navigation */}
        <HeaderNav />

        {/* Main Content */}
        <main className="mx-auto max-w-6xl px-4 py-10">
          {children}
        </main>

        {/* Footer */}
        <footer className="mt-16 border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-white/70">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p>© {new Date().getFullYear()} Weird Rescue • 501(c)(3)</p>
              <p className="text-white/60">
                Made with love in Los Angeles
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

