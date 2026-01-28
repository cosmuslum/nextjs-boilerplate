"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Letter = { label: string; say: string; tr: string; note: string };

const LETTERS: Letter[] = [
  { label: "A a", say: "a", tr: "a", note: "Türkçedeki 'a' gibi" },
  { label: "B b", say: "bee", tr: "be", note: "Genelde 'bee' gibi" },
  { label: "C c", say: "see", tr: "se", note: "Genelde 'see' gibi" },
  { label: "D d", say: "dee", tr: "de", note: "Genelde 'dee' gibi" },
  { label: "E e", say: "ee", tr: "e", note: "Kısa/uzun olabilir" },
  { label: "F f", say: "ef", tr: "ef", note: "Ef" },
  { label: "G g", say: "g", tr: "g (gırtlaktan)", note: "Türkçe 'g' değil, boğazdan" },
  { label: "H h", say: "haa", tr: "ha", note: "Haa gibi uzayabilir" },
  { label: "I i", say: "ie", tr: "i", note: "Hollandaca i farklı duyulabilir" },
  { label: "J j", say: "jay", tr: "y", note: "Hollandaca'da 'y' gibi" },
  { label: "K k", say: "kaa", tr: "k", note: "Kaa" },
  { label: "L l", say: "el", tr: "el", note: "El" },
  { label: "M m", say: "em", tr: "em", note: "Em" },
  { label: "N n", say: "en", tr: "en", note: "En" },
  { label: "O o", say: "oo", tr: "o", note: "O uzayabilir" },
  { label: "P p", say: "pee", tr: "pe", note: "Pee" },
  { label: "R r", say: "er", tr: "r", note: "Boğaz/yuvarlak 'r'" },
  { label: "S s", say: "es", tr: "es", note: "Es" },
  { label: "T t", say: "tee", tr: "te", note: "Tee" },
  { label: "U u", say: "uu", tr: "u/ü arası", note: "Türkçeden farklı hissedilebilir" },
  { label: "V v", say: "vee", tr: "ve", note: "Vee" },
  { label: "W w", say: "way", tr: "v'ye yakın", note: "W çoğu zaman v'ye yakın" },
  { label: "X x", say: "iks", tr: "iks", note: "İks" },
  { label: "Y y", say: "ie griek", tr: "i griek", note: "Bazen 'ie griek' denir" },
  { label: "Z z", say: "zet", tr: "zet", note: "Zet" },
];

function pickDutchVoice() {
  const synth = window.speechSynthesis;
  const voices = synth.getVoices();
  return (
    voices.find(v => v.lang === "nl-NL") ||
    voices.find(v => v.lang?.toLowerCase().startsWith("nl")) ||
    null
  );
}

function speakNL(text: string) {
  const synth = window.speechSynthesis;
  if (!synth) return;

  synth.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "nl-NL";
  u.rate = 0.88;
  u.pitch = 1;

  const v = pickDutchVoice();
  if (v) u.voice = v;

  synth.speak(u);
}

export default function AlfabePage() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const onVoices = () => setReady(true);
    synth.addEventListener?.("voiceschanged", onVoices as any);
    setTimeout(() => { synth.getVoices(); setReady(true); }, 250);
    return () => synth.removeEventListener?.("voiceschanged", onVoices as any);
  }, []);

  return (
    <div style={{paddingBottom: 18}}>
      <section className="glass card" style={{borderRadius: 24}}>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap: 12, flexWrap:"wrap"}}>
          <h2 className="h2" style={{marginBottom:0}}>A0 – Alfabe (Sesli)</h2>
          <span className="badge">{ready ? "Ses hazır ✅" : "Ses hazırlanıyor…"}</span>
        </div>

        <p className="muted" style={{marginTop:10, lineHeight:1.6}}>
          MP3 yok. Butona basınca tarayıcı Hollandaca okur. (En iyi: Chrome/Edge)
        </p>

        <div style={{display:"flex", gap:10, flexWrap:"wrap", marginTop:12}}>
          <button className="btn btnPrimary" onClick={() => speakNL("Welkom bij NederLearn. We beginnen met het alfabet.")}>
            ▶️ Deneme sesi
          </button>
          <Link className="btn" href="/tr/a0">← A0</Link>
        </div>
      </section>

      <section style={{marginTop:16}}>
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))", gap: 14}}>
          {LETTERS.map((x) => (
            <div key={x.label} className="glass card" style={{borderRadius: 20}}>
              <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:10}}>
                <div style={{fontSize:26, fontWeight:1000}}>{x.label}</div>
                <button className="btn" onClick={() => speakNL(x.say)}>🔊 Dinle</button>
              </div>
              <div style={{marginTop:8}}>
                <span className="muted">Türkçe açıklama: </span><b>{x.tr}</b>
              </div>
              <div className="muted" style={{marginTop:6, fontSize:13, lineHeight:1.5}}>{x.note}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
