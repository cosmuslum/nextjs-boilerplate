"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {useEffect, useRef, useState} from "react";

const LANGS = [
  { code: "tr", label: "Türkçe", icon: "🇹🇷" },
  { code: "nl", label: "Nederlands", icon: "🇳🇱" },
  { code: "en", label: "English", icon: "🇬🇧" },
  { code: "es", label: "Español", icon: "🇪🇸" },
  { code: "ar", label: "العربية", icon: "🇸🇦" }
] as const;

export default function TopBar() {
  const pathname = usePathname() || "/tr";
  const currentLocale = (pathname.split("/")[1] || "tr") as typeof LANGS[number]["code"];

  const current = LANGS.find(l => l.code === currentLocale) || LANGS[0];

  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  const goLocale = (code: string) => {
    // TR dışını şimdilik kilitliyoruz (istersen sonra açarız)
    if (code !== "tr") {
      alert("Şimdilik Türkçe ile başlıyoruz ✅ (Diğer dilleri sonra açacağız)");
      return;
    }
    // Aynı sayfa içinde locale değişimi: /tr/... yap
    const parts = pathname.split("/");
    parts[1] = "tr";
    window.location.href = parts.join("/") || "/tr";
  };

  return (
    <header className="topbar">
      <div className="container topbarInner" ref={wrapRef}>
        <Link href="/tr" className="brand" aria-label="NederLearn">
          <span className="brandIcon">🇳🇱</span>
          <span>NederLearn</span>
        </Link>

        <nav className="nav">
          <Link className="navLink" href="/tr">Ana Sayfa</Link>
          <Link className="navLink" href="/tr/a0">A0</Link>
          <Link className="navLink" href="/tr/a0/alfabe">Alfabe</Link>

          <div className="langWrap">
            <button className="navLink langBtn" onClick={() => setLangOpen(v => !v)} type="button">
              <span>{current.icon}</span>
              <span style={{opacity:.9}}>{current.code.toUpperCase()}</span>
              <span style={{opacity:.7}}>▾</span>
            </button>

            {langOpen && (
              <div className="langMenu" role="menu">
                {LANGS.map(l => (
                  <button key={l.code} className="langItem" type="button" onClick={() => { setLangOpen(false); goLocale(l.code); }}>
                    <span style={{display:"flex", alignItems:"center", gap:10}}>
                      <span>{l.icon}</span>
                      <span>{l.label}</span>
                    </span>
                    <span style={{opacity:.7, fontSize:12}}>{l.code.toUpperCase()}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <a className="navLink" href="#" onClick={(e) => {e.preventDefault(); alert("Giriş sistemi sonra eklenecek ✅");}}>
            Giriş
          </a>
        </nav>

        <div className="mobileOnly">
          <button className="iconBtn" type="button" onClick={() => setMobileOpen(v => !v)} aria-label="Menü">
            ☰
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="container mobileMenu">
          <a className="navLink" href="/tr">Ana Sayfa</a>
          <a className="navLink" href="/tr/a0">A0</a>
          <a className="navLink" href="/tr/a0/alfabe">Alfabe</a>
          <a className="navLink" href="#" onClick={(e)=>{e.preventDefault(); alert("Giriş sistemi sonra eklenecek ✅");}}>Giriş</a>

          <div style={{marginTop:10}}>
            <button className="navLink langBtn" type="button" onClick={() => setLangOpen(v=>!v)}>
              <span>{current.icon}</span>
              <span>Dil: {current.code.toUpperCase()}</span>
              <span style={{opacity:.7}}>▾</span>
            </button>
            {langOpen && (
              <div className="langMenu" style={{position:"relative", top:10, right:"auto", left:0}}>
                {LANGS.map(l => (
                  <button key={l.code} className="langItem" type="button" onClick={() => { setLangOpen(false); goLocale(l.code); }}>
                    <span style={{display:"flex", alignItems:"center", gap:10}}>
                      <span>{l.icon}</span>
                      <span>{l.label}</span>
                    </span>
                    <span style={{opacity:.7, fontSize:12}}>{l.code.toUpperCase()}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
