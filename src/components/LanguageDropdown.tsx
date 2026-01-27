"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const LANGUAGES = [
  { code: "tr", label: "Türkçe", flagSrc: "/flags/tr.png" },
  { code: "nl", label: "Nederlands", flagSrc: "/flags/nl.png" },
  { code: "en", label: "English", flagSrc: "/flags/en.png" },
  { code: "ar", label: "العربية", flagSrc: "/flags/ar.png" },
  { code: "ku", label: "Kurmancî", flagSrc: "/flags/ku.png" } // Kürdistan bayrağı
];

export default function LanguageDropdown() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const currentLocale = pathname.split("/")[1] || "tr";
  const current = LANGUAGES.find((l) => l.code === currentLocale) || LANGUAGES[0];

  const changeLanguage = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale; // /tr/... -> /nl/...
    router.push(segments.join("/"));
    setOpen(false);
  };

  return (
    <div className="relative">
      {/* BUTTON */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition text-sm font-medium flex items-center gap-2"
      >
        <Image
          src={current.flagSrc}
          alt={current.label}
          width={18}
          height={18}
          className="rounded-sm"
        />
        <span className="hidden sm:block">{current.code.toUpperCase()}</span>
        <span className="opacity-70">▾</span>
      </button>

      {/* MENU */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 rounded-2xl bg-black/80 border border-white/10 backdrop-blur-xl shadow-xl overflow-hidden z-50">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => changeLanguage(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left text-sm transition hover:bg-white/10 ${
                lang.code === currentLocale ? "bg-white/10" : ""
              }`}
            >
              <Image
                src={lang.flagSrc}
                alt={lang.label}
                width={18}
                height={18}
                className="rounded-sm"
              />
              <span className="text-white/80">{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}