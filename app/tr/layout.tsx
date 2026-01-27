import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "NederLearn",
  description: "Hollandacayı sıfırdan, sesli ve adım adım öğren.",
};

export default function TrLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="dl-body">
        <header className="dl-header">
          <div className="dl-header-inner">
            <a className="dl-brand" href="/tr">
              🇳🇱 <span>DutchLearn</span>
            </a>

            <nav className="dl-nav desktop-only">
              <div className="dl-lang">
                <span className="dot tr" />
                TR <span className="chev">▾</span>
              </div>

              <a className="dl-pill" href="/tr/admin">Admin</a>
              <a className="dl-pill" href="/tr/profil">Profil</a>
              <a className="dl-pill" href="/tr/dersler">Dersler</a>
              <a className="dl-pill danger" href="/tr/logout">Çıkış</a>
            </nav>

            {/* sadece mobil */}
            <button className="dl-burger mobile-only" aria-label="Menü">
              ☰
            </button>
          </div>
        </header>

        <main className="dl-main">{children}</main>

        <footer className="dl-footer">
          <div className="dl-footer-inner">
            <div className="dl-foot-copy">© 2026 DutchLearn · Tüm hakları saklıdır</div>
            <div className="dl-foot-sub">Hollandaca öğrenmeyi kolaylaştıran dersler ve quizler.</div>
            <div className="dl-foot-links">
              <a href="/tr/gizlilik">Gizlilik</a>
              <a href="/tr/destek">Destek</a>
              <a href="/tr/iletisim">İletişim</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
