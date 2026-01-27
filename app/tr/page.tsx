"use client";

import React, { useEffect, useRef, useState } from "react";

export default function TrHome() {
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement | null>(null);

  // ✅ Title: NederLearn
  useEffect(() => {
    document.title = "NederLearn";
  }, []);

  // ✅ dışarı tıklayınca kapan
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!langRef.current) return;
      const target = e.target as Node;
      if (!langRef.current.contains(target)) setLangOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="nav">
            <a className="brand" href="/tr" aria-label="NederLearn Ana Sayfa">
              Neder<span className="brandAccent">Learn</span>
            </a>

            <nav className="navLinks" aria-label="Üst menü">
              <a className="link" href="#seviyeler">Seviyeler</a>
              <a className="link" href="#nasil">Nasıl çalışır?</a>
              <a className="link" href="#hedef">Hedef</a>
            </nav>

            <div className="actions">
              {/* Language dropdown */}
              <div ref={langRef} className="langWrap">
                <button
                  type="button"
                  className="langButton"
                  onClick={() => setLangOpen(v => !v)}
                  aria-haspopup="menu"
                  aria-expanded={langOpen}
                  title="Dil seç"
                >
                  <span className="langIcon">🌐</span>
                  <span className="caret">{langOpen ? "▴" : "▾"}</span>
                </button>

                {langOpen && (
                  <div className="langMenu" role="menu">
                    <a className="langItem" href="/tr" role="menuitem">🇹🇷 Türkçe</a>
                    <a className="langItem" href="/nl" role="menuitem">🇳🇱 Nederlands</a>
                    <a className="langItem" href="/en" role="menuitem">🇬🇧 English</a>
                    <a className="langItem" href="/es" role="menuitem">🇪🇸 Español</a>
                    <a className="langItem" href="/ar" role="menuitem">🇸🇦 العربية</a>
                  </div>
                )}
              </div>

              <a className="btnGhost" href="/login">Giriş</a>
              <a className="btn" href="/register">Kayıt Ol</a>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="container">
            <div className="heroGrid">
              <div className="heroLeft">
                <div className="badge">🇳🇱 Hollandaca Öğren • A0 → B1</div>

                <h1 className="h1">
                  Hollandacayı <span className="h1Accent">düzenli</span> ve{" "}
                  <span className="h1Accent2">kolay</span> öğren.
                </h1>

                <p className="lead">
                  Ana dilin Türkçe. Açıklamalar Türkçe, örnekler ve pratikler Hollandaca.
                  A0’dan başlayıp B1’e kadar adım adım ilerle.
                </p>

                <div className="ctaRow">
                  <a className="btnBig" href="#seviyeler">A0 ile başla</a>
                  <a className="btnBigGhost" href="/register">Ücretsiz hesap aç</a>
                </div>

                <div className="miniInfo">
                  <div className="miniCard">
                    <div className="miniTitle">Mobil uyumlu ✅</div>
                    <div className="miniText">Telefonundan da rahatça çalış.</div>
                  </div>
                  <div className="miniCard">
                    <div className="miniTitle">Hedef dil: Hollandaca ✅</div>
                    <div className="miniText">Türkçe açıklama, Hollandaca pratik.</div>
                  </div>
                </div>
              </div>

              {/* RIGHT PANEL */}
              <aside className="panel" aria-label="Önerilen içerik">
                <div className="panelTop">
                  <div className="panelTitle">Bugün önerilen</div>
                  <div className="pill">A0</div>
                </div>

                <div className="lesson">
                  <div className="dot" />
                  <div>
                    <div className="lessonTitle">Alfabe</div>
                    <div className="lessonMeta">Sesli öğrenme • 10 dk</div>
                  </div>
                  <a className="lessonGo" href="/a0/alfabe">Aç →</a>
                </div>

                <div className="lesson">
                  <div className="dot2" />
                  <div>
                    <div className="lessonTitle">Kelimeler</div>
                    <div className="lessonMeta">Temel kelimeler • 10 dk</div>
                  </div>
                  <a className="lessonGo" href="/a0/kelimeler">Aç →</a>
                </div>

                <div className="lesson">
                  <div className="dot3" />
                  <div>
                    <div className="lessonTitle">Cümleler</div>
                    <div className="lessonMeta">Bol pratik • 15 dk</div>
                  </div>
                  <a className="lessonGo" href="/a0/cumleler">Aç →</a>
                </div>

                <div className="panelCta">
                  <a className="btnFull" href="/a0">A0 merkezine git</a>
                  <div className="panelHint">
                    İpucu: Her gün <b>15 dakika</b> yeter.
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* LEVELS */}
        <section id="seviyeler" className="section">
          <div className="container">
            <h2 className="h2">Seviyeni seç</h2>
            <p className="muted">Bölüm bölüm ilerle: A0 → B1</p>

            <div className="grid">
              <a className="card" href="/a0">
                <div className="cardTop">
                  <span className="tag">A0</span>
                  <span className="arrow">→</span>
                </div>
                <div className="cardTitle">Başlangıç</div>
                <div className="cardText">Alfabe, temel kelime ve cümleler</div>
              </a>

              <a className="card" href="/a1">
                <div className="cardTop">
                  <span className="tag">A1</span>
                  <span className="arrow">→</span>
                </div>
                <div className="cardTitle">Temel</div>
                <div className="cardText">Günlük konuşmalar, temel gramer</div>
              </a>

              <a className="card" href="/a2">
                <div className="cardTop">
                  <span className="tag">A2</span>
                  <span className="arrow">→</span>
                </div>
                <div className="cardTitle">Orta</div>
                <div className="cardText">Okuma, dinleme, pratik alıştırmalar</div>
              </a>

              <a className="card" href="/b1">
                <div className="cardTop">
                  <span className="tag">B1</span>
                  <span className="arrow">→</span>
                </div>
                <div className="cardTitle">Orta-İleri</div>
                <div className="cardText">Senaryolar, akıcılık ve kelime dağarcığı</div>
              </a>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="nasil" className="sectionAlt">
          <div className="container">
            <h2 className="h2">Nasıl çalışır?</h2>
            <p className="muted">Öğren → Alıştırma → İlerleme</p>

            <div className="steps">
              <div className="step">
                <div className="stepNum">1</div>
                <div className="stepTitle">Ders</div>
                <div className="cardText">Türkçe açıklama + Hollandaca örnekler</div>
              </div>
              <div className="step">
                <div className="stepNum">2</div>
                <div className="stepTitle">Alıştırma</div>
                <div className="cardText">Dinle, tekrar et, mini testlerle pekiştir</div>
              </div>
              <div className="step">
                <div className="stepNum">3</div>
                <div className="stepTitle">İlerleme</div>
                <div className="cardText">A0 merkezinde tamamlananları işaretle</div>
              </div>
            </div>
          </div>
        </section>

        {/* GOAL */}
        <section id="hedef" className="section">
          <div className="container">
            <h2 className="h2">Hedefimiz</h2>
            <p className="muted">
              Türkçe bilen herkesin Hollandacayı A0’dan B1’e kadar net bir yol haritasıyla öğrenmesi.
              İleride diğer diller eklenecek ama hedef her zaman Hollandaca olacak.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footerText">© {new Date().getFullYear()} NederLearn</div>
        </div>
      </footer>

      {/* ✅ Responsive + optimize CSS (tek dosya içinde) */}
      <style jsx global>{`
        :root {
          --bg: #070a12;
          --card: rgba(255, 255, 255, 0.04);
          --border: rgba(255, 255, 255, 0.10);
          --text: rgba(255, 255, 255, 0.92);
          --muted: rgba(255, 255, 255, 0.70);
          --accent: rgba(120, 140, 255, 0.95);
          --accent2: rgba(0, 200, 255, 0.90);
        }

        * { box-sizing: border-box; }
        html, body { margin: 0; padding: 0; background: var(--bg); color: var(--text); }
        a { color: inherit; }
        .page { min-height: 100vh; background: var(--bg); }

        .container { max-width: 1100px; margin: 0 auto; padding: 0 18px; }

        .header {
          position: sticky; top: 0; z-index: 20;
          background: rgba(7, 10, 18, 0.72);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(10px);
        }

        .nav {
          height: 68px;
          display: flex; align-items: center; justify-content: space-between;
          gap: 12px;
        }

        .brand { font-weight: 900; letter-spacing: -0.2px; text-decoration: none; }
        .brandAccent { color: var(--accent); }

        .navLinks { display: flex; gap: 14px; flex-wrap: wrap; }
        .link { text-decoration: none; color: rgba(255,255,255,0.75); font-size: 14px; }
        .link:hover { color: rgba(255,255,255,0.92); }

        .actions { display: flex; gap: 10px; align-items: center; }
        .btnGhost {
          text-decoration: none;
          padding: 10px 12px;
          border-radius: 10px;
          font-size: 13px;
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(255,255,255,0.02);
          color: rgba(255,255,255,0.90);
        }
        .btn {
          text-decoration: none;
          padding: 10px 12px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 900;
          background: var(--accent);
          color: #0b1020;
        }

        .langWrap { position: relative; }
        .langButton {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 10px 10px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.9);
          cursor: pointer;
          min-height: 40px;
        }
        .langMenu {
          position: absolute; top: 48px; right: 0;
          min-width: 180px;
          background: #0b1020;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 14px 34px rgba(0,0,0,0.45);
        }
        .langItem {
          display: block;
          padding: 10px 12px;
          text-decoration: none;
          font-size: 13px;
          color: rgba(255,255,255,0.92);
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .langItem:hover { background: rgba(255,255,255,0.05); }

        .hero {
          padding: 56px 0 26px;
          background:
            radial-gradient(1200px 600px at 20% 10%, rgba(120,140,255,0.18), transparent 60%),
            radial-gradient(900px 500px at 90% 20%, rgba(0,200,255,0.14), transparent 55%);
        }

        .heroGrid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 22px;
          align-items: stretch;
        }

        .badge {
          display: inline-flex;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.10);
          font-size: 13px;
        }

        .h1 {
          margin: 14px 0 10px;
          font-size: 44px;
          line-height: 1.05;
          letter-spacing: -0.8px;
        }
        .h1Accent { color: var(--accent2); }
        .h1Accent2 { color: var(--accent); }

        .lead {
          margin: 0;
          font-size: 16px;
          line-height: 1.6;
          color: rgba(255,255,255,0.72);
          max-width: 680px;
        }

        .ctaRow { display: flex; gap: 12px; margin-top: 18px; flex-wrap: wrap; }
        .btnBig {
          text-decoration: none;
          padding: 12px 16px;
          border-radius: 14px;
          font-weight: 900;
          background: var(--accent);
          color: #0b1020;
        }
        .btnBigGhost {
          text-decoration: none;
          padding: 12px 16px;
          border-radius: 14px;
          font-weight: 900;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.10);
          color: rgba(255,255,255,0.92);
        }

        .miniInfo {
          margin-top: 16px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .miniCard {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 16px;
          padding: 12px;
        }
        .miniTitle { font-weight: 900; }
        .miniText { opacity: 0.7; font-size: 13px; margin-top: 4px; line-height: 1.45; }

        .panel {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 18px;
          padding: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.35);
        }
        .panelTop { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
        .panelTitle { font-weight: 900; }
        .pill {
          font-size: 12px;
          padding: 6px 10px;
          border-radius: 999px;
          border: 1px solid rgba(0,200,255,0.18);
          background: rgba(0,200,255,0.12);
        }

        .lesson {
          display: grid;
          grid-template-columns: 12px 1fr auto;
          gap: 10px;
          align-items: start;
          padding: 10px 10px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(0,0,0,0.15);
          margin-top: 10px;
        }
        .dot, .dot2, .dot3 {
          width: 10px; height: 10px; border-radius: 999px; margin-top: 4px;
        }
        .dot { background: var(--accent); box-shadow: 0 0 0 4px rgba(120,140,255,0.12); }
        .dot2 { background: var(--accent2); box-shadow: 0 0 0 4px rgba(0,200,255,0.12); }
        .dot3 { background: rgba(0,255,160,0.9); box-shadow: 0 0 0 4px rgba(0,255,160,0.12); }

        .lessonTitle { font-weight: 900; }
        .lessonMeta { opacity: 0.65; font-size: 12px; margin-top: 2px; }
        .lessonGo {
          text-decoration: none;
          padding: 8px 10px;
          border-radius: 12px;
          font-weight: 900;
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.92);
          white-space: nowrap;
        }
        .lessonGo:hover { background: rgba(255,255,255,0.07); }

        .panelCta { margin-top: 14px; }
        .btnFull {
          display: block;
          text-align: center;
          text-decoration: none;
          padding: 12px 14px;
          border-radius: 14px;
          font-weight: 900;
          background: var(--accent);
          color: #0b1020;
        }
        .panelHint { margin-top: 10px; font-size: 12px; opacity: 0.72; }

        .section { padding: 34px 0; }
        .sectionAlt {
          padding: 34px 0;
          background: rgba(255,255,255,0.02);
          border-top: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .h2 { margin: 0; font-size: 26px; letter-spacing: -0.3px; }
        .muted { margin: 6px 0 0; color: var(--muted); line-height: 1.6; }

        .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-top: 14px;
        }

        .card {
          text-decoration: none;
          color: rgba(255,255,255,0.92);
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 18px;
          padding: 16px;
          transition: transform 150ms ease, background 150ms ease, border-color 150ms ease;
        }
        .card:hover {
          transform: translateY(-2px);
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.14);
        }

        .cardTop { display: flex; justify-content: space-between; align-items: center; }
        .tag {
          font-size: 12px; font-weight: 900;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(0,200,255,0.10);
          border: 1px solid rgba(0,200,255,0.18);
        }
        .arrow { opacity: 0.6; }
        .cardTitle { font-weight: 950; margin-top: 8px; }
        .cardText { color: rgba(255,255,255,0.68); font-size: 13px; line-height: 1.5; margin-top: 6px; }

        .steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 14px; }
        .step {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 18px;
          padding: 16px;
        }
        .stepNum {
          width: 30px; height: 30px;
          border-radius: 10px;
          display: grid; place-items: center;
          font-weight: 900;
          background: var(--accent);
          color: #0b1020;
          margin-bottom: 10px;
        }
        .stepTitle { font-weight: 900; }

        .footer {
          border-top: 1px solid rgba(255,255,255,0.08);
          background: rgba(0,0,0,0.20);
          padding: 18px 0;
        }
        .footerText { opacity: 0.7; font-size: 12px; }

        /* ✅ MOBİL OPTİMİZASYON */
        @media (max-width: 980px) {
          .heroGrid { grid-template-columns: 1fr; }
          .panel { order: 2; }
          .heroLeft { order: 1; }
          .grid { grid-template-columns: repeat(2, 1fr); }
          .miniInfo { grid-template-columns: 1fr; }
        }

        @media (max-width: 640px) {
          .navLinks { display: none; } /* mobilde sade üst bar */
          .h1 { font-size: 34px; }
          .container { padding: 0 14px; }
          .grid { grid-template-columns: 1fr; }
          .steps { grid-template-columns: 1fr; }
          .btnGhost, .btn { padding: 10px 10px; }
        }

        /* Dokunmatik optimizasyon */
        button, a { -webkit-tap-highlight-color: transparent; }
      `}</style>
    </div>
  );
}
