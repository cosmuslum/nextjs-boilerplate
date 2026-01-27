"use client";

import React from "react";

const letters = [
  { l: "A a", tr: "a", audio: "/audio/alfabe/a.mp3", note: "Türkçedeki 'a' gibi" },
  { l: "B b", tr: "be", audio: "/audio/alfabe/b.mp3", note: "Türkçedeki 'be' gibi" },
  { l: "C c", tr: "se", audio: "/audio/alfabe/c.mp3", note: "Türkçedeki 'se' gibi" },
  { l: "D d", tr: "de", audio: "/audio/alfabe/d.mp3", note: "Türkçedeki 'de' gibi" },
  {
    l: "G g",
    tr: "hırıltılı g",
    audio: "/audio/alfabe/g.mp3",
    note: "Türkçedeki 'g' gibi değil, boğazdan çıkar"
  },
  {
    l: "J j",
    tr: "y",
    audio: "/audio/alfabe/j.mp3",
    note: "Hollandaca'da 'y' gibi okunur"
  }
];

export default function AlfabePage() {
  return (
    <main style={s.page}>
      <div style={s.container}>
        <h1 style={s.h1}>A0 – Alfabe</h1>
        <p style={s.intro}>
          Hollandaca alfabesini sesli örneklerle öğren.  
          Her harfi dinle, oku ve alış.
        </p>

        <div style={s.grid}>
          {letters.map((x) => (
            <div key={x.l} style={s.card}>
              <div style={s.letter}>{x.l}</div>
              <div style={s.read}>
                Okunuş: <b>{x.tr}</b>
              </div>
              <div style={s.note}>{x.note}</div>

              <audio controls style={s.audio}>
                <source src={x.audio} type="audio/mpeg" />
                Tarayıcın ses oynatmayı desteklemiyor.
              </audio>
            </div>
          ))}
        </div>

        <div style={s.next}>
          <a href="/tr/a0" style={s.btn}>
            ← A0 Derslerine Dön
          </a>
        </div>
      </div>
    </main>
  );
}

const s: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#070A12",
    color: "white",
    padding: "32px 0"
  },
  container: { maxWidth: 1000, margin: "0 auto", padding: "0 16px" },
  h1: { fontSize: 34, marginBottom: 8 },
  intro: { opacity: 0.75, marginBottom: 28 },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: 16
  },
  card: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 16,
    padding: 16
  },
  letter: { fontSize: 28, fontWeight: 900 },
  read: { marginTop: 6 },
  note: { fontSize: 13, opacity: 0.7, marginTop: 4 },
  audio: { marginTop: 10, width: "100%" },

  next: { marginTop: 32 },
  btn: {
    textDecoration: "none",
    background: "rgba(120,140,255,0.95)",
    color: "#0B1020",
    padding: "12px 16px",
    borderRadius: 12,
    fontWeight: 900
  }
};
