"use client";

import React, { useMemo, useState } from "react";

type Lang = "tr" | "en" | "es" | "ar" | "nl";

const LANGS: { code: Lang; label: string; flag: string; href: string }[] = [
  { code: "tr", label: "Türkçe", flag: "🇹🇷", href: "/tr" },
  { code: "en", label: "English", flag: "🇬🇧", href: "/en" },
  { code: "es", label: "Español", flag: "🇪🇸", href: "/es" },
  { code: "ar", label: "العربية", flag: "🇸🇦", href: "/ar" },
  { code: "nl", label: "Nederlands", flag: "🇳🇱", href: "/nl" },
];

export default function Header({ current = "tr" }: { current?: Lang }) {
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const currentLang = useMemo(
    () => LANGS.find((l) => l.code === current) || LANGS[0],
    [current]
  );

  return (
    <header style={s.header}>
      <div style={s.wrap}>
        <a href="/tr" style={s.brand}>
          <span style={s.logo}>N</span>
          <span>
            <b style={s.brandText}>NederLearn</b>
            <span style={s.brandSub}>Hollandaca öğren</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav style={s.navDesktop}>
          <a href="/tr#a0" style={s.navLink}>A0</a>
          <a href="/tr#a1" style={s.navLink}>A1</a>
          <a href="/tr#a2" style={s.navLink}>A2</a>
          <a href="/tr#b1" style={s.navLink}>B1</a>
        </nav>

        <div style={s.right}>
          {/* Dil dropdown (Giriş yanında değil, sağ üstte) */}
          <div style={s.dropdownWrap}>
            <button
              style={s.langBtn}
              onClick={() => setLangOpen((v) => !v)}
              aria-label="Dil seç"
            >
              <span style={{ fontSize: 18 }}>{currentLang.flag}</span>
              <span style={s.langText}>{currentLang.label}</span>
              <span style={s.chev}>▾</span>
            </button>

            {langOpen && (
              <div style={s.dropdown}>
                {LANGS.map((l) => (
                  <a
                    key={l.code}
                    href={l.href}
                    style={{
                      ...s.ddItem,
                      ...(l.code === current ? s.ddActive : {}),
                    }}
                    onClick={() => setLangOpen(false)}
                  >
                    <span style={{ width: 26 }}>{l.flag}</span>
                    <span>{l.label}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Giriş / Kayıt */}
          <a href="/tr/login" style={s.loginBtn}>Giriş</a>

          {/* Mobile hamburger */}
          <button
            style={s.burger}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menü"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div style={s.mobilePanel}>
          <div style={s.mobileLinks}>
            <a href="/tr#a0" style={s.mobileLink} onClick={() => setMenuOpen(false)}>A0</a>
            <a href="/tr#a1" style={s.mobileLink} onClick={() => setMenuOpen(false)}>A1</a>
            <a href="/tr#a2" style={s.mobileLink} onClick={() => setMenuOpen(false)}>A2</a>
            <a href="/tr#b1" style={s.mobileLink} onClick={() => setMenuOpen(false)}>B1</a>
          </div>

          <div style={s.mobileActions}>
            <a href="/tr/login" style={s.mobileCta} onClick={() => setMenuOpen(false)}>
              Giriş
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

const s: Record<string, React.CSSProperties> = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    background: "rgba(10,10,10,0.75)",
    backdropFilter: "blur(14px)",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },
  wrap: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "12px 16px",
    display: "flex",
    alignItems: "center",
    gap: 14,
    justifyContent: "space-between",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    textDecoration: "none",
    color: "white",
    minWidth: 160,
  },
  logo: {
    width: 34,
    height: 34,
    borderRadius: 12,
    display: "grid",
    placeItems: "center",
    fontWeight: 900,
    background: "linear-gradient(135deg, rgba(79,108,255,1), rgba(0,200,255,0.75))",
    color: "#061018",
    flexShrink: 0,
  },
  brandText: { display: "block", fontSize: 15, lineHeight: 1.1 },
  brandSub: { display: "block", fontSize: 12, opacity: 0.7 },

  navDesktop: {
    display: "flex",
    gap: 14,
    alignItems: "center",
  },
  navLink: {
    color: "rgba(255,255,255,0.9)",
    textDecoration: "none",
    fontWeight: 800,
    fontSize: 13,
    padding: "8px 10px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.04)",
  },

  right: { display: "flex", alignItems: "center", gap: 10 },

  dropdownWrap: { position: "relative" },
  langBtn: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.04)",
    color: "white",
    padding: "8px 10px",
    cursor: "pointer",
    fontWeight: 900,
    fontSize: 13,
  },
  langText: { opacity: 0.9 },
  chev: { opacity: 0.7, fontSize: 12 },

  dropdown: {
    position: "absolute",
    right: 0,
    top: "calc(100% + 8px)",
    background: "rgba(10,10,10,0.95)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 14,
    minWidth: 190,
    overflow: "hidden",
    boxShadow: "0 20px 40px rgba(0,0,0,0.45)",
  },
  ddItem: {
    display: "flex",
    gap: 8,
    alignItems: "center",
    padding: "10px 12px",
    color: "rgba(255,255,255,0.92)",
    textDecoration: "none",
    fontWeight: 800,
    fontSize: 13,
    borderBottom: "1px solid rgba(255,255,255,0.06)",
  },
  ddActive: {
    background: "rgba(79,108,255,0.18)",
  },

  loginBtn: {
    textDecoration: "none",
    color: "#061018",
    background: "linear-gradient(135deg, rgba(79,108,255,1), rgba(0,200,255,0.75))",
    padding: "9px 12px",
    borderRadius: 12,
    fontWeight: 900,
    fontSize: 13,
    border: "none",
  },

  burger: {
    display: "none",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.12)",
    color: "rgba(255,255,255,0.92)",
    padding: "9px 12px",
    borderRadius: 12,
    fontWeight: 900,
    cursor: "pointer",
  },

  mobilePanel: {
    display: "none",
    borderTop: "1px solid rgba(255,255,255,0.08)",
    padding: "10px 16px 16px",
    maxWidth: 1100,
    margin: "0 auto",
  },
  mobileLinks: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 },
  mobileLink: {
    textDecoration: "none",
    color: "rgba(255,255,255,0.92)",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 12,
    padding: "12px",
    fontWeight: 900,
    textAlign: "center",
  },
  mobileActions: { marginTop: 10 },
  mobileCta: {
    display: "block",
    textDecoration: "none",
    color: "#061018",
    background: "linear-gradient(135deg, rgba(79,108,255,1), rgba(0,200,255,0.75))",
    padding: "12px",
    borderRadius: 12,
    fontWeight: 900,
    textAlign: "center",
  },
};

/* Basit responsive: küçük ekranda desktop menüyü kapat, hamburger aç */
if (typeof window !== "undefined") {
  const apply = () => {
    const isMobile = window.matchMedia("(max-width: 860px)").matches;
    const style = document.documentElement.style;
    style.setProperty("--isMobile", isMobile ? "1" : "0");
  };
  window.addEventListener("resize", apply);
  apply();
}
