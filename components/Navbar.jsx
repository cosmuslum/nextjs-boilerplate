"use client";

import { useEffect, useRef, useState } from "react";

const LANGS = [
  { code: "TR", label: "Türkçe" },
  { code: "EN", label: "English" },
  { code: "AR", label: "العربية" },
  { code: "NL", label: "Nederlands" },
  { code: "ES", label: "Español" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("TR");
  const menuRef = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <header className="relative">
      <div className="mx-auto max-w-6xl px-4 pt-5">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl">
          <div className="flex items-center gap-2 font-semibold text-white">
            <span className="text-white/80">🇳🇱</span>
            NederLearn
          </div>

          <nav className="hidden items-center gap-2 md:flex">
            {/* Language dropdown */}
            <div className="relative" ref={menuRef}>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 hover:bg-white/10 transition"
              >
                <span>{lang}</span>
                <span className="text-white/50">▾</span>
              </button>

              {open && (
                <div className="absolute right-0 mt-2 w-44 overflow-hidden rounded-2xl border border-white/10 bg-[#0b0d14]/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                  {LANGS.map((l) => (
                    <button
                      key={l.code}
                      type="button"
                      onClick={() => {
                        setLang(l.code);
                        setOpen(false);
                      }}
                      className="flex w-full items-center justify-between px-4 py-3 text-left text-sm text-white/85 hover:bg-white/10 transition"
                    >
                      <span>{l.label}</span>
                      <span className="text-white/50">{l.code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* All pills same style */}
            <Pill href="/admin">Admin</Pill>
            <Pill href="/profil">Profil</Pill>
            <Pill href="/dersler">Dersler</Pill>
            <Pill href="/cikis">Çıkış</Pill>
          </nav>

          <div className="md:hidden text-white/70">☰</div>
        </div>
      </div>
    </header>
  );
}

function Pill({ children, href = "/" }) {
  return (
    <a
      href={href}
      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 hover:bg-white/10 transition"
    >
      {children}
    </a>
  );
}
