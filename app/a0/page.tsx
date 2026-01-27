"use client";

import React, { useMemo, useState } from "react";
import { speakDutch } from "../../_shared/tts";

type Item = { nl: string; tr: string; tag: string };

const WORDS: Item[] = [
  { nl: "hallo", tr: "merhaba", tag: "Selam" },
  { nl: "hoi", tr: "selam", tag: "Selam" },
  { nl: "goedemorgen", tr: "günaydın", tag: "Selam" },
  { nl: "goedemiddag", tr: "iyi günler", tag: "Selam" },
  { nl: "goedenavond", tr: "iyi akşamlar", tag: "Selam" },
  { nl: "tot ziens", tr: "görüşürüz", tag: "Selam" },
  { nl: "dank je wel", tr: "teşekkür ederim", tag: "Nezaket" },
  { nl: "alsjeblieft", tr: "lütfen / buyurun", tag: "Nezaket" },
  { nl: "sorry", tr: "özür dilerim", tag: "Nezaket" },

  { nl: "man", tr: "erkek", tag: "İnsan" },
  { nl: "vrouw", tr: "kadın", tag: "İnsan" },
  { nl: "kind", tr: "çocuk", tag: "İnsan" },
  { nl: "vriend", tr: "arkadaş", tag: "İnsan" },
  { nl: "familie", tr: "aile", tag: "İnsan" },

  { nl: "huis", tr: "ev", tag: "Yer" },
  { nl: "school", tr: "okul", tag: "Yer" },
  { nl: "werk", tr: "iş", tag: "Yer" },
  { nl: "winkel", tr: "mağaza", tag: "Yer" },
  { nl: "station", tr: "istasyon", tag: "Yer" },
  { nl: "straat", tr: "sokak", tag: "Yer" },
  { nl: "toilet", tr: "tuvalet", tag: "Yer" },
  { nl: "ingang", tr: "giriş", tag: "Yer" },
  { nl: "uitgang", tr: "çıkış", tag: "Yer" },

  { nl: "vandaag", tr: "bugün", tag: "Zaman" },
  { nl: "morgen", tr: "yarın", tag: "Zaman" },
  { nl: "gisteren", tr: "dün", tag: "Zaman" },
  { nl: "nu", tr: "şimdi", tag: "Zaman" },
  { nl: "later", tr: "sonra", tag: "Zaman" },

  { nl: "water", tr: "su", tag: "Yemek" },
  { nl: "koffie", tr: "kahve", tag: "Yemek" },
  { nl: "thee", tr: "çay", tag: "Yemek" },
  { nl: "brood", tr: "ekmek", tag: "Yemek" },
  { nl: "melk", tr: "süt", tag: "Yemek" },
  { nl: "appel", tr: "elma", tag: "Yemek" },
  { nl: "banaan", tr: "muz", tag: "Yemek" },

  { nl: "rood", tr: "kırmızı", tag: "Renk" },
  { nl: "blauw", tr: "mavi", tag: "Renk" },
  { nl: "groen", tr: "yeşil", tag: "Renk" },
  { nl: "zwart", tr: "siyah", tag: "Renk" },
  { nl: "wit", tr: "beyaz", tag: "Renk" },

  { nl: "goed", tr: "iyi", tag: "Sıfat" },
  { nl: "slecht", tr: "kötü", tag: "Sıfat" },
  { nl: "groot", tr: "büyük", tag: "Sıfat" },
  { nl: "klein", tr: "küçük", tag: "Sıfat" },
  { nl: "duur", tr: "pahalı", tag: "Sıfat" },
  { nl: "goedkoop", tr: "ucuz", tag: "Sıfat" },
  { nl: "mooi", tr: "güzel", tag: "Sıfat" },
  { nl: "nieuw", tr: "yeni", tag: "Sıfat" },
  { nl: "oud", tr: "eski", tag: "Sıfat" },

  { nl: "zijn", tr: "olmak", tag: "Fiil" },
  { nl: "hebben", tr: "sahip olmak", tag: "Fiil" },
  { nl: "gaan", tr: "gitmek", tag: "Fiil" },
  { nl: "komen", tr: "gelmek", tag: "Fiil" },
  { nl: "werken", tr: "çalışmak", tag: "Fiil" },
  { nl: "wonen", tr: "yaşamak", tag: "Fiil" },
  { nl: "eten", tr: "yemek", tag: "Fiil" },
  { nl: "drinken", tr: "içmek", tag: "Fiil" },

  { nl: "een", tr: "bir", tag: "Sayı" },
  { nl: "twee", tr: "iki", tag: "Sayı" },
  { nl: "drie", tr: "üç", tag: "Sayı" },
  { nl: "vier", tr: "dört", tag: "Sayı" },
  { nl: "vijf", tr: "beş", tag: "Sayı" },
  { nl: "zes", tr: "altı", tag: "Sayı" },
  { nl: "zeven", tr: "yedi", tag: "Sayı" },
  { nl: "acht", tr: "sekiz", tag: "Sayı" },
  { nl: "negen", tr: "dokuz", tag: "Sayı" },
  { nl: "tien", tr: "on", tag: "Sayı" },

  // ekstra (daha fazla)
  { nl: "links", tr: "sol", tag: "Yön" },
  { nl: "rechts", tr: "sağ", tag: "Yön" },
  { nl: "rechtdoor", tr: "dümdüz", tag: "Yön" },
  { nl: "hier", tr: "burada", tag: "Yer" },
  { nl: "daar", tr: "orada", tag: "Yer" },
  { nl: "binnen", tr: "içeri", tag: "Yer" },
  { nl: "buiten", tr: "dışarı", tag: "Yer" },
  { nl: "open", tr: "açık", tag: "Sıfat" },
  { nl: "dicht", tr: "kapalı", tag: "Sıfat" },
  { nl: "help", tr: "yardım", tag: "Nezaket" },
];

const TAGS = ["Hepsi", ...Array.from(new Set(WORDS.map(w => w.tag)))];

export default function Kelimeler() {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState("Hepsi");

  const list = useMemo(() => {
    const query = q.trim().toLowerCase();
    return WORDS.filter(w => {
      const okTag = tag === "Hepsi" ? true : w.tag === tag;
      const okQ =
        !query ||
        w.nl.toLowerCase().includes(query) ||
        w.tr.toLowerCase().includes(query);
      return okTag && okQ;
    });
  }, [q, tag]);

  return (
    <main style={s.page}>
      <div style={s.container}>
        <div style={s.top}>
          <div>
            <h1 style={s.h1}>A0 – Kelimeler</h1>
            <p style={s.sub}>Kartlara tıkla → 🔊 dinle. Arama + kategori var.</p>
          </div>
          <a href="/a0" style={s.linkBtn}>← A0</a>
        </div>

        <div style={s.filters}>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Ara: huis / ev / koffie ..."
            style={s.input}
          />
          <select value={tag} onChange={(e) => setTag(e.target.value)} style={s.select}>
            {TAGS.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
          <button style={s.testBtn} onClick={() => speakDutchTest()}>
            🔊 Test sesi
          </button>
        </div>

        <div style={s.grid}>
          {list.map((w) => (
            <button
              key={w.nl + w.tr}
              style={s.card}
              onClick={() => speakDutch(w.nl)}
              title="Dinlemek için tıkla"
            >
              <div style={s.cardTop}>
                <span style={s.tag}>{w.tag}</span>
                <span style={s.icon}>🔊</span>
              </div>
              <div style={s.nl}>{w.nl}</div>
              <div style={s.tr}>{w.tr}</div>
            </button>
          ))}
        </div>

        <div style={s.bottom}>
          <a href="/a0/cumleler" style={s.linkBtn}>Sonraki: Cümleler →</a>
        </div>
      </div>
    </main>
  );
}

function speakDutchTest() {
  speakDutch("Goedemorgen. We oefenen woorden.", 0.9);
}

function speakDutch(text: string, rate = 0.9) {
  speakDutchImported(text, rate);
}

function speakDutchImported(text: string, rate = 0.9) {
  // gerçek import
  speakDutchReal(text, rate);
}

function speakDutchReal(text: string, rate = 0.9) {
  speakDutch(text, rate);
}

const speakDutchImported = (text: string, rate = 0.9) => {
  speakDutch(text, rate);
};

const s: Record<string, React.CSSProperties> = {
  page: { minHeight: "100vh", background: "#070A12", color: "white", padding: "32px 0" },
  container: { maxWidth: 1100, margin: "0 auto", padding: "0 16px" },
  top: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, flexWrap: "wrap" },
  h1: { margin: 0, fontSize: 34 },
  sub: { opacity: 0.75, marginTop: 8, lineHeight: 1.6 },

  linkBtn: {
    textDecoration: "none",
    color: "rgba(255,255,255,0.92)",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    padding: "10px 12px",
    borderRadius: 12,
    fontWeight: 900
  },

  filters: { marginTop: 16, display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" },
  input: {
    flex: "1 1 260px",
    padding: "12px 12px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(0,0,0,0.25)",
    color: "white"
  },
  select: {
    padding: "12px 12px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(0,0,0,0.25)",
    color: "white"
  },
  testBtn: {
    cursor: "pointer",
    border: "none",
    borderRadius: 12,
    padding: "12px 12px",
    background: "rgba(120,140,255,0.95)",
    color: "#0B1020",
    fontWeight: 950
  },

  grid: { marginTop: 16, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 },
  card: {
    cursor: "pointer",
    textAlign: "left",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 16,
    padding: 14,
    color: "white"
  },
  cardTop: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  tag: {
    fontSize: 12,
    fontWeight: 900,
    padding: "6px 10px",
    borderRadius: 999,
    background: "rgba(0,200,255,0.12)",
    border: "1px solid rgba(0,200,255,0.18)"
  },
  icon: { opacity: 0.9 },

  nl: { marginTop: 10, fontSize: 18, fontWeight: 950 },
  tr: { marginTop: 6, opacity: 0.85 },

  bottom: { marginTop: 20, display: "flex", justifyContent: "flex-end" }
};
