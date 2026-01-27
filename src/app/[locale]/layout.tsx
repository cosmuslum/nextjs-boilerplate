// src/app/[locale]/layout.tsx
import type { Metadata } from "next";
import "../globals.css";
import TopBar from "@/components/TopBar";

export const metadata: Metadata = {
  title: "NederLearn",
  description: "Hollandacayı sıfırdan, adım adım ve pratikle öğren.",
};

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="min-h-screen">
        <TopBar brand="NederLearn" />

        <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-8">
          {children}
        </main>

        <footer className="mt-16 border-t border-white/10 py-10">
          <div className="mx-auto w-full max-w-6xl px-4 text-center text-white/70">
            <div className="font-semibold text-white/80">NederLearn</div>
            <div className="mt-2 text-sm">Hollandaca öğrenmenin en net yolu</div>
            <div className="mt-4 text-xs opacity-70">© {new Date().getFullYear()} NederLearn</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
