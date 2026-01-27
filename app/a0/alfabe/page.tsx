"use client";

import React, { useEffect, useState } from "react";

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
  { label: "R r", say: "er", tr: "r", note: "Boğazdan R" },
  { label: "S s", say: "es", tr: "es", note: "Es" },
  { label: "T t", say: "tee", tr: "te", note: "Tee" },
  { label: "U u", say: "uu", tr: "u/ü", note: "Arada bir ses" },
  { label: "V v", say: "vee", tr: "ve", note: "Vee" },
  { label: "W w", say: "way", tr: "v", note: "V’ye çok yakın" },
  { label: "X x", say: "iks", tr: "iks", note: "İks" },
  { label: "Y y", say: "ie griek", tr: "i griek", note: "Özel isim" },
  { label: "Z z", say: "zet", tr: "zet", note: "Zet" },
];

function speak(text: string) {
  const synth = window.speechSynthesis;
  synth.cancel();

  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "nl-NL";
  utter.rate = 0.9;

  const voice = synth.getVoices().find(v => v.lang.startsWith("nl"));
  if (voice) utter.voice = voice;

  synth.speak(utter);
}

export default function AlfabePage() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const synth = window.speechSynthesis;
    synth.onvoiceschanged = () => setReady(true);
    synth.getVoices();
  }, []);

  return (
    <main style={styles.page}>
      <h1 style={styles.h1}>A0 – Hollandaca Alfabe</h1>
      <p style={styles.info}>
        Harfe tıkla, Hollandaca telaffuzu dinle.
      </p>

      <div style={styles.grid}>
        {LETTERS.map(l => (
          <div key={l.label} style={styles.card}>
            <div style={styles.letter}>{l.label}</div>
            <button style={styles.btn} onClick={() => speak(l.say)}>
              🔊 Dinle
            </button>
            <div style={styles.tr}>{l.tr}</div>
            <div style={styles.note}>{l.note}</div>
          </div>
        ))}
      </div>

      <div style={styles.nav}>
        <a href="/a0" style={styles.link}>← A0 Ana Sayfa</a>
      </div>

      {!ready && <p style={styles.warn}>Ses hazırlanıyor…</p>}
    </main>
  );
}

const styles = {
  page: { background: "#070A12", minHeight: "100vh", padding: 24, color: "#fff" },
  h1: { fontSize: 32, marginBottom: 8 },
  info: { opacity: 0.7, marginBottom: 20 },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px,1fr))", gap: 16 },
  card: { background: "rgba(255,255,255,0.05)", padding: 16, borderRadius: 14 },
  letter: { fontSize: 26, fontWeight: 900 },
  btn: { marginTop: 8, padding: 8, borderRadius: 10, cursor: "pointer" },
  tr: { marginTop: 6, fontWeight: 600 },
  note: { fontSize: 12, opacity: 0.7 },
  nav: { marginTop: 30 },
  link: { color: "#9db4ff", textDecoration: "none", fontWeight: 700 },
  warn: { opacity: 0.6, marginTop: 10 }
};
