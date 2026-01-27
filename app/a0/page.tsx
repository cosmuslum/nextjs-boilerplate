"use client";

import React, { useMemo, useState } from "react";

type Letter = {
  label: string;      // ekranda görünen
  say: string;        // seslendirilecek metin
  tr: string;         // Türkçe açıklama
  note: string;       // ipucu
};

const LETTERS: Letter[] = [
  { label: "A a", say: "a", tr: "a", note: "Türkçedeki 'a' gibi" },
  { label: "B b", say: "bee", tr: "be", note: "Genelde 'bee' gibi" },
  { label: "C c", say: "see", tr: "se", note: "Genelde 'see' gibi" },
  { label: "D d", say: "dee", tr: "de", note: "Genelde 'dee' gibi" },
  { label: "E e", say: "ee", tr: "e", note: "Kısa/uzun varyasyon olabilir" },
  { label: "F f", say: "ef", tr: "ef", note: "Ef" },
  { label: "G g", say: "g", tr: "boğazdan g", note: "Türkçe 'g' değil (gırtlaktan)" },
  { label: "H h", say: "haa", tr: "ha", note: "Haa gibi uzayabilir" },
  { label: "I i", say: "ie", tr: "i (farklı)", note: "Hollandaca i sesi farklı olabilir" },
  { label: "J j", say: "yay", tr: "y", note: "Hollandaca'da 'y' gibi" },
  { label: "K k", say: "kaa", tr: "k", note: "Kaa" },
  { label: "L l", say: "el", tr: "el", note: "El" },
  { label: "M m", say: "em", tr: "em", note: "Em" },
  { label: "N n", say: "en", tr: "en", note: "En" },
  { label: "O o", say: "oo", tr: "o", note: "O (uzayabilir)" },
  { label: "P p", say: "pee", tr: "pe", note: "Pee" },
  { label: "R r", say: "er", tr: "r", note: "R sesi daha boğaz/yuvarlak olabilir" },
  { label: "S s", say: "es", tr: "es", note: "Es" },
  { label: "T t", say: "tee", tr: "te", note: "Tee" },
  { label: "U u", say: "uu", tr: "ü/u arası", note: "Türkçeye göre farklı hissedilebilir" },
  { label: "V v", say: "vee", tr: "ve", note: "Vee" },
  { label: "W w", say: "way", tr: "v'ye yakın", note: "W çoğu zaman v'ye yakın" },
  { label: "X x", say: "iks", tr: "iks", note: "İks" },
  { label: "Y y", say: "ie griek", tr: "i griek", note: "Bazen 'ie griek' denir" },
  { label: "Z z", say: "zet", tr: "zet", note: "Zet" },
];

function speak(text: string) {
  if (typeof window === "undefined") return;
  const synth = window.speechSynthesis;
  if (!synth) {
    alert("Bu tarayıcı sesli okuma (SpeechSynthesis) desteklemiyor.");
    return;
  }

  synth.cancel();

  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "nl-NL";
  utter.rate = 0.9;
  utter.pitch = 1;

  const voices = synth.getVoices();
  const nlVoice =
    voices.find(v => /nl/i.test(v.lang) && /Netherlands|Dutch|Nederlands|NL/i.test(v.name)) ||
    voices.find(v => /nl/i.test(v.lang));

  if (nlVoice) utter.voice = nlVoice;

  synth.speak(utter);
}

export default function AlfabePage() {
  const [ready, setReady] = useState(false);

  useMemo(() => {
    if (typeof window === "undefined") return;
    const synth = window.speechSynthesis;
    if (!synth) return;

    const onVoices = () => setReady(true);
    synth.addEventListener?.("voiceschanged", onVoices as any);

    setTimeout(() => {
      synth.getVoices();
      setReady(true);
    }, 200);

    return () => synth.removeEventListener?.("voiceschanged", onVoices as any);
  }, []);

  return (
    <main style={s.page}>
      <div style={s.container}>
        <h1 style={s.h1}>A0 – Alfabe (Sesli)</h1>
        <p style={s.intro}>
          Bu sayfada mp3 dosyası yok. Butona basınca tarayıcı Hollandaca okur.
          (En iyi: Chrome/Edge)
        </p>

        <div style={s.topActions}>
          <button
            style={s.bigBtn}
            onClick={() => speak("Welkom bij NederLearn. We beginnen met het alfabet.")}
          >
            ▶️ Deneme sesi
          </button>
          <span style={s.status}>
            {ready ? "Ses sistemi hazır ✅" : "Ses hazırlanıyor…"}
          </span>
        </div>

        <div style={s.grid}>
          {LETTERS.map((x) => (
            <div key={x.label} style={s.card}>
              <div style={s.letterRow}>
                <div style={s.letter}>{x.label}</div>
                <button style={s.playBtn} onClick={() => speak(x.say)}>
                  🔊 Dinle
                </button>
              </div>

              <div style={s.read}>
                Türkçe açıklama: <b>{x.tr}</b>
              </div>
              <div style={s.note}>{x.note}</div>
            </div>
          ))}
        </div>

        {/* Genel örnekler: sadece bir yerde */}
        <div style={s.examplesBox}>
          <div style={s.examplesTitle}>Genel örnekler (Hollandaca) 🔊</div>
          <div style={s.examplesRow}>
            <button style={s.exampleBtn} onClick={() => speak("Hallo")}>
              Hallo
            </button>
            <button style={s.exampleBtn} onClick={() => speak("Goedemorgen")}>
              Goedemorgen
            </button>
            <button style={s.exampleBtn} onClick={() => speak("Dank je wel")}>
              Dank je wel
            </button>
            <button style={s.exampleBtn} onClick={() => speak("Tot ziens")}>
              Tot ziens
            </button>
          </div>
          <div style={s.examplesHint}>
            İpucu: Önce örneği dinle, sonra harfleri tek tek dinleyip tekrar et.
          </div>
        </div>

        <div style={s.next}>
          <a href="/tr/a0" style={s.backBtn}>
            ← A0 Derslerine Dön
          </a>
        </div>

        <div style={s.tip}>
          İpucu: Eğer ses çıkmıyorsa, tarayıcı bazen ilk tıklamada izin ister.
          Bir kere “Deneme sesi” butonuna bas.
        </div>
      </div>
    </main>
  );
}

const s: Record<string, React.CSSProperties> = {
  page: { minHeight: "100vh", background: "#070A12", color: "white", padding: "32px 0" },
  container: { maxWidth: 1000, margin: "0 auto", padding: "0 16px" },
  h1: { fontSize: 34, marginBottom: 8 },
  intro: { opacity: 0.75, marginBottom: 16, lineHeight: 1.6 },

  topActions: { display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap", marginBottom: 18 },
  bigBtn: {
    cursor: "pointer",
    background: "rgba(120,140,255,0.95)",
    color: "#0B1020",
    padding: "12px 14px",
    borderRadius: 12,
    border: "none",
    fontWeight: 900,
  },
  status: { fontSize: 13, opacity: 0.75 },

  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 },
  card: { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: 16 },

  letterRow: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 },
  letter: { fontSize: 28, fontWeight: 900 },
  playBtn: {
    cursor: "pointer",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    color: "rgba(255,255,255,0.92)",
    padding: "8px 10px",
    borderRadius: 12,
    fontWeight: 800,
  },

  read: { marginTop: 8 },
  note: { fontSize: 13, opacity: 0.7, marginTop: 6, lineHeight: 1.5 },

  examplesBox: {
    marginTop: 22,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 16,
    padding: 16,
  },
  examplesTitle: { fontWeight: 900, marginBottom: 10 },
  examplesRow: { display: "flex", gap: 10, flexWrap: "wrap" },
  exampleBtn: {
    cursor: "pointer",
    background: "rgba(0,200,255,0.12)",
    border: "1px solid rgba(0,200,255,0.18)",
    color: "rgba(255,255,255,0.92)",
    padding: "8px 10px",
    borderRadius: 999,
    fontWeight: 800,
  },
  examplesHint: { marginTop: 10, fontSize: 12, opacity: 0.65, lineHeight: 1.5 },

  next: { marginTop: 28 },
  backBtn: {
    textDecoration: "none",
    background: "rgba(255,255,255,0.06)",
    color: "rgba(255,255,255,0.92)",
    padding: "12px 14px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.12)",
    fontWeight: 900,
    display: "inline-block",
  },

  tip: { marginTop: 16, fontSize: 12, opacity: 0.65, lineHeight: 1.5 },
};
