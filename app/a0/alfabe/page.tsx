"use client";

import React, { useEffect, useState } from "react";
import { speakDutch, getDutchVoices, saveVoiceName, getSavedVoiceName } from "../../_shared/tts";

type Letter = {
  label: string;
  say: string;
  tr: string;
  note: string;
};

const LETTERS: Letter[] = [
  { label: "A a", say: "a", tr: "a", note: "Türkçedeki a gibi" },
  { label: "B b", say: "bee", tr: "be", note: "Bee gibi okunur" },
  { label: "C c", say: "see", tr: "se", note: "See gibi" },
  { label: "D d", say: "dee", tr: "de", note: "Dee" },
  { label: "E e", say: "ee", tr: "e", note: "Kısa/uzun olabilir" },
  { label: "F f", say: "ef", tr: "ef", note: "Ef" },
  { label: "G g", say: "g", tr: "boğaz g", note: "Gırtlaktan gelir" },
  { label: "H h", say: "haa", tr: "ha", note: "Haa gibi uzar" },
  { label: "I i", say: "ie", tr: "i", note: "Türkçeden farklı" },
  { label: "J j", say: "yay", tr: "y", note: "Y sesi verir" },
  { label: "K k", say: "kaa", tr: "k", note: "Kaa" },
  { label: "L l", say: "el", tr: "el", note: "El" },
  { label: "M m", say: "em", tr: "em", note: "Em" },
  { label: "N n", say: "en", tr: "en", note: "En" },
  { label: "O o", say: "oo", tr: "o", note: "Uzayabilir" },
  { label: "P p", say: "pee", tr: "pe", note: "Pee" },
  { label: "R r", say: "er", tr: "r", note: "Boğazdan R olabilir" },
  { label: "S s", say: "es", tr: "es", note: "Es" },
  { label: "T t", say: "tee", tr: "te", note: "Tee" },
  { label: "U u", say: "uu", tr: "u/ü", note: "Arada bir ses" },
  { label: "V v", say: "vee", tr: "ve", note: "Vee" },
  { label: "W w", say: "way", tr: "v", note: "V’ye yakın" },
  { label: "X x", say: "iks", tr: "iks", note: "İks" },
  { label: "Y y", say: "ie griek", tr: "i griek", note: "Özel isim" },
  { label: "Z z", say: "zet", tr: "zet", note: "Zet" },
];

export default function AlfabePage() {
  return (
    <main style={s.page}>
      <div style={s.container}>
        <h1 style={s.h1}>A0 – Hollandaca Alfabe</h1>
        <p style={s.sub}>Harfe tıkla, Hollandaca telaffuzu dinle.</p>

        <VoicePicker />

        <div style={s.grid}>
          {LETTERS.map((l) => (
            <div key={l.label} style={s.card}>
              <div style={s.letterRow}>
                <div style={s.letter}>{l.label}</div>
                <button style={s.play} onClick={() => speakDutch(l.say)}>
                  🔊 Dinle
                </button>
              </div>
              <div style={s.tr}>
                Türkçe: <b>{l.tr}</b>
              </div>
              <div style={s.note}>{l.note}</div>
            </div>
          ))}
        </div>

        <div style={s.nav}>
          <a href="/a0" style={s.linkBtn}>← A0 Ana Sayfa</a>
          <a href="/a0/kelimeler" style={s.linkBtn}>Sonraki: Kelimeler →</a>
        </div>
      </div>
    </main>
  );
}

function VoicePicker() {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    const load = () => {
      const v = getDutchVoices();
      setVoices(v);
      setSelected(getSavedVoiceName() || (v[0]?.name ?? ""));
    };

    load();
    window.speechSynthesis?.addEventListener?.("voiceschanged", load as any);

    return () => {
      window.speechSynthesis?.removeEventListener?.("voiceschanged", load as any);
    };
  }, []);

  return (
    <div style={s.voiceBox}>
      <div style={s.voiceTitle}>Hollandaca ses</div>

      <select
        value={selected}
        onChange={(e) => {
          setSelected(e.target.value);
          saveVoiceName(e.target.value);
        }}
        style={s.select}
      >
        {voices.length === 0 ? (
          <option value="">Dutch (nl) voice bulunamadı</option>
        ) : (
          voices.map((v) => (
            <option key={v.name} value={v.name}>
              {v.name} — {v.lang}
            </option>
          ))
        )}
      </select>

      <button style={s.testBtn} onClick={() => speakDutch("Goedemorgen. Dit is Nederlands.")}>
        🔊 Test
      </button>

      <div style={s.voiceHint}>
        Net telaffuz için cihazında <b>Dutch (nl-NL)</b> voice yüklü olmalı.
      </div>
    </div>
  );
}

const s: Record<string, React.CSSProperties> = {
  page: { minHeight: "100vh", background: "#070A12", color: "white", padding: "32px 0" },
  container: { maxWidth: 1100, margin: "0 auto", padding: "0 16px" },
  h1: { fontSize: 34, margin: 0 },
  sub: { opacity: 0.75, marginTop: 8, marginBottom: 12, lineHeight: 1.6 },

  voiceBox: {
    marginTop: 10,
    marginBottom: 16,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 14,
    padding: 12,
    display: "flex",
    gap: 10,
    alignItems: "center",
    flexWrap: "wrap",
  },
  voiceTitle: { fontWeight: 900, opacity: 0.9 },
  select: {
    padding: "10px 12px",
    borderRadius: 12,
    background: "rgba(0,0,0,0.25)",
    color: "white",
    border: "1px solid rgba(255,255,255,0.14)",
    minWidth: 260,
  },
  testBtn: {
    cursor: "pointer",
    border: "none",
    borderRadius: 12,
    padding: "10px 12px",
    background: "rgba(120,140,255,0.95)",
    color: "#0B1020",
    fontWeight: 950,
  },
  voiceHint: { fontSize: 12, opacity: 0.65 },

  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: 14 },
  card: { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 16, padding: 14 },
  letterRow: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 },
  letter: { fontSize: 26, fontWeight: 950 },
  play: { cursor: "pointer", border: "none", borderRadius: 12, padding: "10px 12px", background: "rgba(0,200,255,0.18)", color: "white", fontWeight: 950 },
  tr: { marginTop: 8, opacity: 0.9 },
  note: { marginTop: 6, fontSize: 12, opacity: 0.65, lineHeight: 1.4 },

  nav: { marginTop: 20, display: "flex", gap: 10, justifyContent: "space-between", flexWrap: "wrap" },
  linkBtn: { textDecoration: "none", color: "rgba(255,255,255,0.92)", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", padding: "10px 12px", borderRadius: 12, fontWeight: 900 },
};
