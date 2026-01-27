"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const LANGS = [
  { code: "tr", label: "TR", flag: "🇹🇷" },
  { code: "nl", label: "NL", flag: "🇳🇱" },
  { code: "ar", label: "AR", flag: "🇸🇦" },
  { code: "ku", label: "KU", flag: "🟩☀️🟥" }, // Kurdistan bayrağı gibi görünür
];

export default function LanguageDropdown() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [open, setOpen] = useState(false);

  const changeLang = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
    setOpen(false);
  };

  const current = LANGS.find((l) => l.code === locale) || LANGS[0];

  return (
    <div className="relative">
      <button
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 text-white hover:bg-white/15 transition"
        onClick={() => setOpen(!open)}
      >
        <span>{current.flag}</span>
        <span className="font-semibold">{current.label}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 rounded-xl bg-black/80 border border-white/10 backdrop-blur-xl overflow-hidden shadow-xl z-50">
          {LANGS.map((l) => (
            <button
              key={l.code}
              onClick={() => changeLang(l.code)}
              className="w-full flex items-center gap-2 px-4 py-3 text-left text-white/80 hover:text-white hover:bg-white/10 transition"
            >
              <span>{l.flag}</span>
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}