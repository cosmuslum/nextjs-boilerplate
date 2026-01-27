import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NederLearn – Hollandaca Öğren",
  description: "Hollandacayı sıfırdan, sesli ve adım adım öğren",
};

export default function TrLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body style={s.body}>
        <header style={s.header}>
          <div style={s.headerInner}>
            <div style={s.logo}>NederLearn</div>
            <nav style={s.nav}>
              <a href="/tr" style={s.navLink}>Ana Sayfa</a>
              <a href="/tr/a0" style={s.navLink}>A0</a>
              <a href="/tr/login" style={s.navBtn}>Giriş</a>
            </nav>
          </div>
        </header>

        <main style={s.main}>{children}</main>

        <footer style={s.footer}>
          <div>© {new Date().getFullYear()} NederLearn</div>
          <div style={s.footerSmall}>
            Hollandaca öğrenmenin en net yolu
          </div>
        </footer>
      </body>
    </html>
  );
}

const s: Record<string, React.CSSProperties> = {
  body: {
    margin: 0,
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
    background: "linear-gradient(180deg,#05070f,#0b1020)",
    color: "#fff",
    minHeight: "100vh",
  },

  header: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    background: "rgba(5,7,15,0.85)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },

  headerInner: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "14px 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  logo: {
    fontSize: 22,
    fontWeight: 900,
    letterSpacing: 0.4,
  },

  nav: {
    display: "flex",
    gap: 14,
    alignItems: "center",
  },

  navLink: {
    color: "rgba(255,255,255,0.85)",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: 14,
  },

  navBtn: {
    background: "#7c8cff",
    color: "#0b1020",
    padding: "8px 12px",
    borderRadius: 10,
    textDecoration: "none",
    fontWeight: 800,
    fontSize: 14,
  },

  main: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "24px 16px",
  },

  footer: {
    marginTop: 48,
    padding: "32px 16px",
    borderTop: "1px solid rgba(255,255,255,0.08)",
    textAlign: "center",
    opacity: 0.8,
    fontSize: 14,
  },

  footerSmall: {
    fontSize: 12,
    marginTop: 6,
    opacity: 0.6,
  },
};
