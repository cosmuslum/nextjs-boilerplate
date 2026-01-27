"use client";

import { speakDutch } from "../../_shared/tts";

const SENTENCES = [
  ["Ik ben Ali.", "Ben Ali’yim"],
  ["Ik kom uit Turkije.", "Türkiye’den geliyorum"],
  ["Ik woon in Nederland.", "Hollanda’da yaşıyorum"],
  ["Ik begrijp het.", "Anlıyorum"],
  ["Ik begrijp het niet.", "Anlamıyorum"],
  ["Ik spreek een beetje Nederlands.", "Biraz Hollandaca konuşuyorum"],
  ["Dank je wel.", "Teşekkür ederim"],
  ["Geen probleem.", "Sorun değil"],
  ["Waar is het toilet?", "Tuvalet nerede?"],
  ["Hoe gaat het?", "Nasılsın?"],
  ["Hoe laat is het?", "Saat kaç?"],
  ["Ik wil koffie.", "Kahve istiyorum"],
  ["Ik wil water.", "Su istiyorum"],
  ["Ik heb honger.", "Açım"],
  ["Ik heb dorst.", "Susadım"],
  ["Kun je me helpen?", "Bana yardım eder misin?"],
  ["Tot ziens.", "Görüşürüz"],
  ["Tot morgen.", "Yarın görüşürüz"],
  ["Fijne dag!", "İyi günler!"],
  ["Goedenavond.", "İyi akşamlar"],
];

export default function CumlelerPage() {
  return (
    <main style={s.page}>
      <div style={s.container}>
        <h1>A0 – Cümleler</h1>

        <div style={s.list}>
          {SENTENCES.map(([nl, tr]) => (
            <div key={nl} style={s.card}>
              <div style={s.nl}>{nl}</div>
              <div style={s.tr}>{tr}</div>
              <button onClick={() => speakDutch(nl)} style={s.btn}>🔊 Dinle</button>
            </div>
          ))}
        </div>

        <a href="/a0" style={s.link}>← A0 Ana Sayfa</a>
      </div>
    </main>
  );
}

const s: any = {
  page: { background: "#070A12", color: "white", minHeight: "100vh", padding: 24 },
  container: { maxWidth: 900, margin: "0 auto" },
  list: { display: "grid", gridTemplateColumns: "1fr", gap: 14 },
  card: { background: "rgba(255,255,255,.05)", padding: 16, borderRadius: 12 },
  nl: { fontWeight: 800, fontSize: 16 },
  tr: { opacity: .8, margin: "6px 0" },
  btn: { padding: "6px 10px", borderRadius: 8, cursor: "pointer" },
  link: { display: "inline-block", marginTop: 20, color: "#9db4ff" }
};
