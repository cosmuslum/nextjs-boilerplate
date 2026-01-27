"use client";

import { useEffect, useRef, useState } from "react";

const LANGS = [
  { code: "tr", label: "Türkçe", icon: "🇹🇷" },
  { code: "nl", label: "Nederlands", icon: "🇳🇱" },
  { code: "en", label: "English", icon: "🇬🇧" },
  { code: "es", label: "Español", icon: "🇪🇸" },
  { code: "ar", label: "العربية", icon: "🇸🇦" },
];

export default function TopBarTR() {
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  // Şimdilik TR sabit. (Diğer dilleri sonra route yapınca bağlarız)
  const current = LANGS[0];

  return (
    <header className="nl-header" ref={wrapRef}>
      <div className="nl-header-inner">
        <a className="nl-brand" href="/tr" aria-label="NederLearn">
          <span className="nl-brand-flag">🇳🇱</span>
          <span className="nl-brand-text">NederLearn</span>
        </a>

        {/* DESKTOP */}
        <nav className="nl-nav">
          <div className="nl-lang">
            <button
              type="button"
              className="nl-lang-btn"
              onClick={() => setLangOpen((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={langOpen}
            >
              <span className="nl-lang-flag">{current.icon}</span>
              <span className="nl-lang-code">{current.code.toUpperCase()}</span>
              <span className="nl-lang-caret">▾</span>
            </button>

            {langOpen && (
              <div className="nl-lang-menu" role="menu">
                {LANGS.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    className="nl-lang-item"
                    onClick={() => {
                      setLangOpen(false);
                      alert("Diğer dilleri Türkçe bitince açacağız ✅");
                    }}
                  >
                    <span className="nl-lang-item-left">
                      <span className="nl-lang-flag">{l.icon}</span>
                      <span>{l.label}</span>
                    </span>
                    <span className="nl-lang-item-code">{l.code.toUpperCase()}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <a className="nl-pill" href="/tr/admin">Admin</a>
          <a className="nl-pill" href="/tr/profile">Profil</a>
          <a className="nl-pill" href="/tr/dersler">Dersler</a>
          <a className="nl-pill nl-pill-danger" href="/tr/logout">Çıkış</a>
        </nav>

        {/* MOBILE */}
        <div className="nl-mobile">
          <button
            className="nl-iconbtn"
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menü"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="nl-mobile-menu">
          <div className="nl-mobile-row">
            <button
              type="button"
              className="nl-mobile-langbtn"
              onClick={() => setLangOpen((v) => !v)}
            >
              {current.icon} Dil: {current.code.toUpperCase()} ▾
            </button>

            {langOpen && (
              <div className="nl-mobile-langbox">
                {LANGS.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    className="nl-mobile-langitem"
                    onClick={() => {
                      setLangOpen(false);
                      alert("Diğer dilleri Türkçe bitince açacağız ✅");
                    }}
                  >
                    <span>{l.icon} {l.label}</span>
                    <span className="nl-mini">{l.code.toUpperCase()}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <a className="nl-mobile-link" href="/tr/admin">Admin</a>
          <a className="nl-mobile-link" href="/tr/profile">Profil</a>
          <a className="nl-mobile-link" href="/tr/dersler">Dersler</a>
          <a className="nl-mobile-link danger" href="/tr/logout">Çıkış</a>
        </div>
      )}
    </header>
  );
}
