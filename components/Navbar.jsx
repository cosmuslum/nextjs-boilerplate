"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header style={wrap}>
      <div style={bar}>
        <Link href="/" style={brand}>
          🇳🇱 NederLearn
        </Link>

        <nav style={nav}>
          <Link href="/dersler" style={pill}>
            Dersler
          </Link>

          <Link href="/giris" style={{ ...pill, ...pillPrimary }}>
            Giriş
          </Link>
        </nav>
      </div>
    </header>
  );
}

const wrap = {
  position: "sticky",
  top: 0,
  zIndex: 50,
  padding: "14px 16px",
  background: "rgba(0,0,0,0.35)",
  backdropFilter: "blur(10px)",
};

const bar = {
  maxWidth: 1100,
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 12,
};

const brand = {
  color: "white",
  textDecoration: "none",
  fontWeight: 800,
  letterSpacing: 0.2,
};

const nav = {
  display: "flex",
  gap: 10,
  alignItems: "center",
};

const pill = {
  color: "white",
  textDecoration: "none",
  padding: "10px 14px",
  borderRadius: 999,
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.06)",
  fontSize: 14,
};

const pillPrimary = {
  background: "rgba(255,255,255,0.92)",
  color: "#111",
  border: "1px solid rgba(255,255,255,0.25)",
  fontWeight: 700,
};
