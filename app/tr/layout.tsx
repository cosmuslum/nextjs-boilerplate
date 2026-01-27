import type { Metadata } from "next";
import TopBarTR from "./_ui/TopBarTR";

export const metadata: Metadata = {
  title: "NederLearn – Hollandaca Öğren",
  description: "Hollandacayı sıfırdan, sesli ve adım adım öğren",
};

export default function TrLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="nl-shell">
      <TopBarTR />
      <main className="nl-container">{children}</main>

      <footer className="nl-footer">
        <div className="nl-footer-inner">
          <div className="nl-footer-top">
            <div className="nl-footer-brand">NederLearn</div>
            <div className="nl-footer-links">
              <a href="/tr">Ana Sayfa</a>
              <a href="/tr/a0/alfabe">Alfabe (Sesli)</a>
              <a href="/tr/login">Giriş</a>
            </div>
          </div>
          <div className="nl-footer-copy">
            © {new Date().getFullYear()} NederLearn — Hollandaca öğrenmenin en net yolu
          </div>
        </div>
      </footer>
    </div>
  );
}
