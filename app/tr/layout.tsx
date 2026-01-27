import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NederLearn – Hollandaca Öğren",
  description: "Hollandacayı sıfırdan, sesli ve adım adım öğren",
};

export default function TrLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="nl-shell">
      {/* HEADER */}
      <header className="nl-header">
        <div className="nl-header-inner">
          <a className="nl-brand" href="/tr" aria-label="NederLearn Ana Sayfa">
            <span className="nl-logo">N</span>
            <span className="nl-brand-text">NederLearn</span>
          </a>

          {/* DESKTOP NAV (mobilde gizli) */}
          <nav className="nl-nav" aria-label="Üst menü">
            <a className="nl-link" href="/tr#seviyeler">
              Seviyeler
            </a>
            <a className="nl-link" href="/tr#nasil-calisir">
              Nasıl çalışır?
            </a>
            <a className="nl-link" href="/tr#sss">
              SSS
            </a>

            <div className="nl-lang">
              <span className="nl-globe">🌐</span>
              <span>TR</span>
              <span className="nl-caret">▾</span>
            </div>

            <a className="nl-btn" href="/tr/login">
              Giriş
            </a>
          </nav>

          {/* MOBILE ACTIONS (desktop’ta gizli) */}
          <div className="nl-mobile">
            <a className="nl-iconbtn" href="/tr/login" aria-label="Giriş">
              👤
            </a>
            <button className="nl-iconbtn" aria-label="Menü">
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <main className="nl-main">{children}</main>

      {/* FOOTER (TEK) */}
      <footer className="nl-footer">
        <div className="nl-footer-inner">
          <div className="nl-footer-top">
            <div className="nl-footer-brand">NederLearn</div>
            <div className="nl-footer-links">
              <a href="/tr#seviyeler">Seviyeler</a>
              <a href="/tr/a0/alfabe">Alfabe (Sesli)</a>
              <a href="/tr/login">Giriş</a>
            </div>
          </div>

          <div className="nl-footer-copy">
            © {new Date().getFullYear()} NederLearn — Hollandaca öğrenmenin en net
            yolu
          </div>
        </div>
      </footer>
    </div>
  );
}
