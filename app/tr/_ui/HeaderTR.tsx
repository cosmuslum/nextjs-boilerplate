"use client";

import React, { useEffect, useRef, useState } from "react";

export default function HeaderTR() {
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as any)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div style={{ width: "100%" }} ref={wrapRef}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <a className="brand" href="/tr">
          <span className="flag">🇳🇱</span>
          NederLearn
        </a>

        {/* Desktop nav */}
        <div className="nav">
          <a className="pill" href="/tr">Ana Sayfa</a>
          <a className="pill" href="/tr/a0">Dersler</a>
          <a className="pill" href="/tr/login">Profil</a>

          <div className="langWrap">
            <button
              className="pill langBtn"
              onClick={() => setLangOpen((s) => !s)}
              type="button"
            >
              🇹🇷 TR <span className="caret">▾</span>
            </button>

            {langOpen && (
              <div className="langMenu">
                {/* Şimdilik sadece görünüm – linkleri sonra bağlarız */}
                <button className="langItem" onClick={() => setLangOpen(false)}>
                  Türkçe <span>🇹🇷</span>
                </button>
                <button className="langItem" onClick={() => alert("Diğer dilleri sonra aktif edeceğiz.")}>
                  English <span>🇬🇧</span>
                </button>
                <button className="langItem" onClick={() => alert("Diğer dilleri sonra aktif edeceğiz.")}>
                  Español <span>🇪🇸</span>
                </button>
                <button className="langItem" onClick={() => alert("Diğer dilleri sonra aktif edeceğiz.")}>
                  العربية <span>🇸🇦</span>
                </button>
                <button className="langItem" onClick={() => alert("Diğer dilleri sonra aktif edeceğiz.")}>
                  Nederlands <span>🇳🇱</span>
                </button>
              </div>
            )}
          </div>

          <a className="pill pill-primary" href="/tr/login">Giriş</a>
        </div>

        {/* Mobile burger */}
        <button
          className="burger"
          type="button"
          onClick={() => setMobileOpen((s) => !s)}
          aria-label="Menü"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileOpen && (
        <div className="mobileMenu">
          <div style={{ display: "grid", gap: 10 }}>
            <a className="pill" href="/tr">Ana Sayfa</a>
            <a className="pill" href="/tr/a0">Dersler</a>
            <a className="pill" href="/tr/login">Profil</a>

            <button
              className="pill"
              onClick={() => setLangOpen((s) => !s)}
              type="button"
            >
              🇹🇷 Dil: TR ▾
            </button>

            {langOpen && (
              <div style={{ padding: 10, borderRadius: 16, border: "1px solid rgba(255,255,255,.12)", background: "rgba(255,255,255,.06)" }}>
                <button className="langItem" onClick={() => setLangOpen(false)}>Türkçe 🇹🇷</button>
                <button className="langItem" onClick={() => alert("Sonra aktif.")}>English 🇬🇧</button>
                <button className="langItem" onClick={() => alert("Sonra aktif.")}>Español 🇪🇸</button>
                <button className="langItem" onClick={() => alert("Sonra aktif.")}>العربية 🇸🇦</button>
                <button className="langItem" onClick={() => alert("Sonra aktif.")}>Nederlands 🇳🇱</button>
              </div>
            )}

            <a className="pill pill-primary" href="/tr/login">Giriş</a>
          </div>
        </div>
      )}
    </div>
  );
}
