"use client";

import { useMemo, useState } from "react";
import { speakDutch } from "../../_shared/tts";

type Word = {
  nl: string;
  tr: string;
  category: string;
};

const WORDS: Word[] = [
  // Selam & Nezaket
  { nl: "hallo", tr: "merhaba", category: "Selam" },
  { nl: "hoi", tr: "selam", category: "Selam" },
  { nl: "goedemorgen", tr: "günaydın", category: "Selam" },
  { nl: "goedemiddag", tr: "iyi günler", category: "Selam" },
  { nl: "goedenavond", tr: "iyi akşamlar", category: "Selam" },
  { nl: "tot ziens", tr: "görüşürüz", category: "Selam" },
  { nl: "dank je wel", tr: "teşekkür ederim", category: "Nezaket" },
  { nl: "alsjeblieft", tr: "lütfen / buyurun", category: "Nezaket" },
  { nl: "sorry", tr: "özür dilerim", category: "Nezaket" },

  // İnsan
  { nl: "man", tr: "erkek", category: "İnsan" },
  { nl: "vrouw", tr: "kadın", category: "İnsan" },
  { nl: "kind", tr: "çocuk", category: "İnsan" },
  { nl: "vriend", tr: "arkadaş", category: "İnsan" },
  { nl: "familie", tr: "aile", category: "İnsan" },

  // Yer
  { nl: "huis", tr: "ev", category: "Yer" },
  { nl: "school", tr: "okul", category: "Yer" },
  { nl: "werk", tr: "iş", category: "Yer" },
  { nl: "winkel", tr: "mağaza", category: "Yer" },
  { nl: "station", tr: "istasyon", category: "Yer" },
  { nl: "straat", tr: "sokak", category: "Yer" },
  { nl: "toilet", tr: "tuvalet", category: "Yer" },
  { nl: "ingang", tr: "giriş", category: "Yer" },
  { nl: "uitgang", tr: "çıkış", category: "Yer" },

  // Zaman
  { nl: "vandaag", tr: "bugün", category: "Zaman" },
  { nl: "morgen", tr: "yarın", category: "Zaman" },
  { nl: "gisteren", tr: "dün", category: "Zaman" },
  { nl: "nu", tr: "şimdi", category: "Zaman" },
  { nl: "later", tr: "sonra", category: "Zaman" },

  // Yiyecek & İçecek
  { nl: "water", tr: "su", category: "Yemek" },
  { nl: "koffie", tr: "kahve", category: "Yemek" },
  { nl: "thee", tr: "çay", category: "Yemek" },
  { nl: "brood", tr: "ekmek", category: "Yemek" },
  { nl: "melk", tr: "süt", category: "Yemek" },
  { nl: "appel", tr: "elma", category: "Yemek" },
  { nl: "banaan", tr: "muz", category: "Yemek" },

  // Sıfatlar
  { nl: "goed", tr: "iyi", category: "Sıfat" },
  { nl: "slecht", tr: "kötü", category: "Sıfat" },
  { nl: "groot", tr: "büyük", category: "Sıfat" },
  { nl: "klein", tr: "küçük", category: "Sıfat" },
  { nl: "mooi", tr: "güzel", category: "Sıfat" },
  { nl: "duur", tr: "pahalı", category: "Sıfat" },
  { nl: "goedkoop", tr: "ucuz", category: "Sıfat" },

  // Fiiller
  { nl: "zijn", tr: "olmak", category: "Fiil" },
  { nl: "hebben", tr: "sahip olmak", category: "Fiil" },
  { nl: "gaan", tr: "gitmek", category: "Fiil" },
  { nl: "komen", tr: "gelmek", category: "Fiil" },
  { nl: "werken", tr: "çalışmak", category: "Fiil" },
  { nl: "wonen", tr: "yaşamak", category: "Fiil" },

  // Sayılar
  { nl: "een", tr: "bir", category: "Sayı" },
  { nl: "twee", tr: "iki", category: "Sayı" },
  { nl: "drie", tr: "üç", category: "Sayı" },
  { nl: "vier", tr: "dört", category: "Sayı" },
  { nl: "vijf", tr: "beş", category: "Sayı" },
  { nl: "zes", tr: "altı", category: "Sayı" },
  { nl: "zeven", tr: "yedi", category: "Sayı" },
  { nl: "acht", tr: "sekiz", category: "Sayı" },
  { nl: "negen", tr: "dokuz", category: "Sayı" },
  { nl: "tien", tr: "on", category: "Sayı" },
];

export default function KelimelerPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Hepsi");

  const categories = ["Hepsi", ...Array.from(new Set(WORDS.map(w => w.category)))];

  const filtered = useMemo(() => {
    return WORDS.filter(w => {
      const matchCat = category === "Hepsi" || w.category === category;
      const q = query.toLowerCase();
      const matchQ = !q || w.nl.includes(q) || w.tr.includes(q);
      return matchCat && matchQ;
    });
  }, [query, category]);

  return (
    <main style={s.page}>
      <div style={s.container}>
        <h1>A0 – Kelimeler</h1>

        <div style={s.filters}>
          <input
            placeholder="Ara: huis / ev"
            value={query}
            onChange={e => setQuery(e.target.value)}
            style={s.input}
          />
          <select value={category} onChange={e => setCategory(e.target.value)} style={s.select}>
            {categories.map(c => <option key={c}>{c}</option>)}
          </select>
        </div>

        <div style={s.grid}>
          {filtered.map(w => (
            <div key={w.nl} style={s.card}>
              <div style={s.word}>{w.nl}</div>
              <div style={s.tr}>{w.tr}</div>
              <button onClick={() => speakDutch(w.nl)} style={s.btn}>🔊 Dinle</button>
            </div>
          ))}
        </div>

        <a href="/a0/cumleler" style={s.link}>Sonraki → Cümleler</a>
      </div>
    </main>
  );
}

const s: any = {
  page: { background: "#070A12", color: "white", minHeight: "100vh", padding: 24 },
  container: { maxWidth: 1100, margin: "0 auto" },
  filters: { display: "flex", gap: 10, marginBottom: 16, flexWrap: "wrap" },
  input: { padding: 10, borderRadius: 8, flex: 1 },
  select: { padding: 10, borderRadius: 8 },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 14 },
  card: { background: "rgba(255,255,255,.05)", padding: 14, borderRadius: 12 },
  word: { fontSize: 18, fontWeight: 800 },
  tr: { opacity: .8, marginBottom: 6 },
  btn: { padding: "6px 10px", borderRadius: 8, cursor: "pointer" },
  link: { display: "inline-block", marginTop: 20, color: "#9db4ff" }
};
