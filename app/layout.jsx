import "./globals.css";
import Providers from "./providers";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <Providers>

          {/* ===== NAVBAR ===== */}
          <nav style={nav}>
            <Link href="/" style={logo}>🇳🇱 NederLearn</Link>
            <div style={right}>
              <Link href="/dersler">Dersler</Link>
              <Link href="/giris">Giriş</Link>
            </div>
          </nav>

          {/* ===== CONTENT ===== */}
          <main>{children}</main>

          {/* ===== FOOTER ===== */}
          <footer style={footer}>
            © 2026 NederLearn.nl
          </footer>

        </Providers>
      </body>
    </html>
  );
}

/* ===== STYLES ===== */
const nav = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 24px",
  background: "rgba(0,0,0,0.6)",
  backdropFilter: "blur(10px)",
};

const logo = {
  color: "#fff",
  fontWeight: "bold",
  textDecoration: "none",
};

const right = {
  display: "flex",
  gap: "16px",
};

const footer = {
  textAlign: "center",
  padding: "24px",
  opacity: 0.6,
};
