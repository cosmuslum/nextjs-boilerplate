import React from "react";

export default function Footer() {
  return (
    <footer style={s.footer}>
      <div style={s.wrap}>
        <div style={s.brand}>
          <b>NederLearn</b>
          <span style={s.sub}>A0’dan B1’e Hollandaca öğren.</span>
        </div>

        <div style={s.links}>
          <a href="/tr#a0" style={s.link}>A0</a>
          <a href="/tr#a1" style={s.link}>A1</a>
          <a href="/tr#a2" style={s.link}>A2</a>
          <a href="/tr#b1" style={s.link}>B1</a>
          <a href="/tr/login" style={s.link}>Giriş</a>
        </div>

        <div style={s.copy}>© {new Date().getFullYear()} NederLearn</div>
      </div>
    </footer>
  );
}

const s: Record<string, React.CSSProperties> = {
  footer: {
    marginTop: 40,
    borderTop: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(10,10,10,0.6)",
  },
  wrap: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "22px 16px",
    display: "grid",
    gap: 12,
  },
  brand: { display: "grid", gap: 4, color: "white" },
  sub: { opacity: 0.7, fontSize: 13 },
  links: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
  },
  link: {
    textDecoration: "none",
    color: "rgba(255,255,255,0.86)",
    fontWeight: 800,
    fontSize: 13,
    padding: "8px 10px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.04)",
  },
  copy: { opacity: 0.6, fontSize: 12, color: "white" },
};
