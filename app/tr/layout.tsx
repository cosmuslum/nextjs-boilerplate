import type { Metadata } from "next";
import "./globals.css";
import HeaderTR from "./_ui/HeaderTR";

export const metadata: Metadata = {
  title: "NederLearn – Hollandaca Öğren",
  description: "Hollandacayı sıfırdan, sesli ve adım adım öğren",
};

export default function TrLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <div className="header">
          <div className="wrap header-inner">
            <HeaderTR />
          </div>
        </div>

        <main className="wrap dl-main">{children}</main>

        <footer className="footer">
          <div className="wrap">
            © {new Date().getFullYear()} NederLearn • Tüm hakları saklıdır
            <div className="footerLinks">
              <a href="#">Gizlilik</a>
              <a href="#">Destek</a>
              <a href="#">İletişim</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
