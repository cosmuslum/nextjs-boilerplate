import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "NederLearn – Hollandaca Öğren",
  description: "Hollandacayı sıfırdan, sesli ve adım adım öğren",
};

export default function TrLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="nl-body">
        {/* HEADER */}
        <header className="nl-header">
          <div className="nl-header-inner">
            <div className="nl-logo">🇳🇱 NederLearn</div>

            <nav className="nl-nav desktop-only">
              <a href="/tr">Ana Sayfa</a>
              <a href="/tr/a0">A0</a>
              <a href="/tr/login" className="btn-primary">Giriş</a>
            </nav>

            {/* Mobil hamburger */}
            <div className="mobile-only nl-hamburger">☰</div>
          </div>
        </header>

        {/* CONTENT */}
        <main className="nl-main">{children}</main>

        {/* FOOTER */}
        <footer className="nl-footer">
          <div>© 2026 NederLearn</div>
          <div className="nl-footer-sub">
            Hollandaca öğrenmenin en net yolu
          </div>
        </footer>
      </body>
    </html>
  );
}
