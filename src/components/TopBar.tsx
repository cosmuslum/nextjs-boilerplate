// src/components/TopBar.tsx
import Link from "next/link";
import LanguageDropdown from "./LanguageDropdown";

export default function TopBar({ brand = "NederLearn" }: { brand?: string }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/tr" className="flex items-center gap-2 font-black tracking-tight">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/10">
            🇳🇱
          </span>
          {brand}
        </Link>

        <div className="flex items-center gap-3">
          <LanguageDropdown />
          <Link
            href="/tr/login"
            className="rounded-xl bg-white/10 px-4 py-2 text-sm font-bold text-white hover:bg-white/15"
          >
            Giriş
          </Link>
        </div>
      </div>
    </header>
  );
}
