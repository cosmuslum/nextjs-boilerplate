"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LANGS = [
  { code: "tr", label: "TR" },
  { code: "ar", label: "AR" },
  { code: "ku", label: "KU" },
  { code: "nl", label: "NL" }
];

export default function Navbar({ locale }: { locale: string }) {
  const pathname = usePathname();

  // /tr/lessons/1 -> /lessons/1
  const withoutLocale = pathname.replace(/^\/[^/]+/, "") || "/";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href={`/${locale}`} className="font-bold text-lg">
          DutchLearn
        </Link>

        <nav className="flex items-center gap-4 text-sm">
          <Link href={`/${locale}/lessons`} className="text-white/80 hover:text-white">
            Dersler
          </Link>
          <Link href={`/${locale}/login`} className="text-white/80 hover:text-white">
            Giriş
          </Link>
          <Link href={`/${locale}/profile`} className="text-white/80 hover:text-white">
            Profil
          </Link>
        </nav>

        <div className="flex gap-2">
          {LANGS.map((l) => (
            <Link
              key={l.code}
              href={`/${l.code}${withoutLocale}`}
              className={`px-3 py-1.5 rounded-lg border text-xs transition ${
                l.code === locale
                  ? "bg-white/20 border-white/30"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
