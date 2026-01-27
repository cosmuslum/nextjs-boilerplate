import React from "react";

export default function FooterTR() {
  return (
    <footer style={s.footer}>
      <div style={s.inner}>
        <div style={s.brandRow}>
          <div style={s.logo}>N</div>
          <div>
            <div style={s.brand}>NederLearn</div>
            <div style={s.motto}>Hollandaca öğrenmenin en net yolu</div>
          </div>
        </div>

        <div style={s.links}>
          <a href="#seviyeler" style={s.link}>Seviyeler</a>
          <a href="/tr/a0/alfabe" style={s.link}>Alfabe (Sesli)</a>
          <a href="/tr/login" style={s.link}>Giriş</a>
        </div>

        <div style={s.copy}>© 2026 NederLearn</div>
      </div>
    </footer>
  );
}

const s: Record<string, React.CSSProperties> = {
  footer: {
    borderTop: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(7,10,18,0.9)",
  },
  inner: {
    maxWidth: 1120,
    margin: "0 auto",
    padding: "22px 16px",
    display: "grid",
    gap: 16,
  },
  brandRow: { display: "flex", gap: 12, alignItems: "center" },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 14,
    display: "grid",
    placeItems: "center",
    fontWeight: 900,
    background: "rgba(120,140,255,0.95)",
    color: "#0B1020",
  },
  brand: { fontWeight: 900, fontSize: 16 },
  motto: { opacity: 0.7, fontSize: 13, marginTop: 2 },
  links: { display: "flex", gap: 14, flexWrap: "wrap", opacity: 0.9, fontWeight: 800 },
  link: {
    padding: "10px 12px",
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.04)",
  },
  copy: { opacity: 0.6, fontSize: 12, marginTop: 6 },
};
