import type { Metadata } from "next";

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
        {/* HEADER */}
        <header style={s.header}>
          <div style={s.headerInner}>
            <div style={s.logo}>NederLearn</div>

            {/* DESKTOP NAV */}
            <nav style={s.navDesktop}>
              <a href="/tr" style={s.navLink}>Ana Sayfa</a>
              <a href="/tr/a0" style={s.navLink}>A0</a>
              <a href="/tr/login" style={s.navBtn}>Giriş</a>
            </nav>

            {/* MOBILE ICON (sadece görsel, JS yok) */}
            <div style={s.mobileIcon}>☰</div>
          </div>
        </header>

        {/* CONTENT */}
        <main style={s.main}>{children}</main>

        {/* FOOTER */}
        <footer style={s.footer}>
          <div style={s.footerInner}>
            <div style={s.footerBrand}>NederLearn</div>
            <div style={s.footerLinks}>
              <a href="/tr">Ana Sayfa</a>
              <a href="/tr/a0/alfabe">Alfabe (Sesli)</a>
              <a href="/tr/login">Giriş</a>
            </div>
            <div style={s.footerCopy}>
              © {new Date().getFullYear()} NederLearn — Hollandaca öğrenmenin en net yolu
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

/* ================= STYLES ================= */

const s: Record<string, React.CSSProperties> = {
  body: {
    margin: 0,
    minHeight: "100vh",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
    background: "linear-gradient(180deg,#05070f,#0b1020)",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
  },

  /* HEADER */
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

  navDesktop: {
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

  mobileIcon: {
    display: "none",
    fontSize: 22,
    cursor: "pointer",
  },

  /* MAIN */
  main: {
    flex: 1,
    maxWidth: 1200,
    margin: "0 auto",
    padding: "24px 16px",
    width: "100%",
  },

  /* FOOTER */
  footer: {
    borderTop: "1px solid rgba(255,255,255,0.08)",
    padding: "32px 16px",
    opacity: 0.85,
  },

  footerInner: {
    maxWidth: 1200,
    margin: "0 auto",
    textAlign: "center",
  },

  footerBrand: {
    fontWeight: 900,
    marginBottom: 8,
  },

  footerLinks: {
    display: "flex",
    justifyContent: "center",
    gap: 16,
    flexWrap: "wrap",
    marginBottom: 10,
  },

  footerCopy: {
    fontSize: 12,
    opacity: 0.6,
  },
};
