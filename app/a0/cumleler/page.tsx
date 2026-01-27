"use client";

import React, { useEffect, useMemo, useState } from "react";

type Item = {
  nl: string;
  tr: string;
  note?: string;
};

const BASIC: Item[] = [
  { nl: "Ik ben ...", tr: "Ben ...", note: "Ik ben Ali. = Ben Ali’yim." },
  { nl: "Mijn naam is ...", tr: "Benim adım ...", note: "Mijn naam is Ayşe." },
  { nl: "Ik kom uit Turkije.", tr: "Türkiye’den geliyorum." },
  { nl: "Ik woon in Amsterdam.", tr: "Amsterdam’da yaşıyorum." },
  { nl: "Ik spreek een beetje Nederlands.", tr: "Biraz Hollandaca konuşuyorum." },
  { nl: "Ik begrijp het.", tr: "Anlıyorum." },
  { nl: "Ik begrijp het niet.", tr: "Anlamıyorum." },
  { nl: "Ik weet het niet.", tr: "Bilmiyorum." },
  { nl: "Ik kan dat niet.", tr: "Bunu yapamam." },
  { nl: "Ik kan dat wel.", tr: "Bunu yapabilirim." },
  { nl: "Ik wil koffie.", tr: "Kahve istiyorum." },
  { nl: "Ik wil water.", tr: "Su istiyorum." },
  { nl: "Ik wil brood.", tr: "Ekmek istiyorum." },
  { nl: "Ik heb honger.", tr: "Açım." },
  { nl: "Ik heb dorst.", tr: "Susadım." },
  { nl: "Ik ben moe.", tr: "Yorgunum." },
  { nl: "Ik ben blij.", tr: "Mutluyum." },
  { nl: "Ik ben ziek.", tr: "Hastayım." },
  { nl: "Het is goed.", tr: "İyi." },
  { nl: "Het is slecht.", tr: "Kötü." },
  { nl: "Dat is mooi.", tr: "Bu güzel." },
  { nl: "Dat is duur.", tr: "Bu pahalı." },
  { nl: "Dat is goedkoop.", tr: "Bu ucuz." },
  { nl: "Ik ga naar huis.", tr: "Eve gidiyorum." },
  { nl: "Ik ga naar school.", tr: "Okula gidiyorum." },
  { nl: "Ik ga naar mijn werk.", tr: "İşe gidiyorum." },
  { nl: "Ik kom zo terug.", tr: "Hemen döneceğim." },
  { nl: "Tot straks.", tr: "Sonra görüşürüz." },
  { nl: "Tot morgen.", tr: "Yarın görüşürüz." },
  { nl: "Tot ziens.", tr: "Görüşürüz." },
  { nl: "Dank je wel.", tr: "Teşekkür ederim." },
  { nl: "Graag gedaan.", tr: "Rica ederim." },
  { nl: "Alsjeblieft.", tr: "Lütfen / Buyurun." },
  { nl: "Sorry.", tr: "Özür dilerim." },
  { nl: "Geen probleem.", tr: "Sorun değil." },
  { nl: "Ik heb een vraag.", tr: "Bir sorum var." },
  { nl: "Ik heb geen tijd.", tr: "Zamanım yok." },
  { nl: "Ik heb tijd.", tr: "Zamanım var." },
  { nl: "Ik werk vandaag.", tr: "Bugün çalışıyorum." },
  { nl: "Ik werk morgen.", tr: "Yarın çalışıyorum." },
  { nl: "Ik ben thuis.", tr: "Evdeyim." },
  { nl: "Ik ben onderweg.", tr: "Yoldayım." },
  { nl: "Ik ben hier.", tr: "Buradayım." },
  { nl: "Ik ben daar.", tr: "Oradayım." },
  { nl: "Ik vind het leuk.", tr: "Hoşuma gidiyor / Beğeniyorum." },
  { nl: "Ik vind het niet leuk.", tr: "Hoşuma gitmiyor." },
];

const QUESTIONS: Item[] = [
  { nl: "Hoe heet je?", tr: "Adın ne?" },
  { nl: "Wat is je naam?", tr: "Adın ne?" },
  { nl: "Waar kom je vandaan?", tr: "Nerelisin?" },
  { nl: "Waar woon je?", tr: "Nerede yaşıyorsun?" },
  { nl: "Hoe gaat het?", tr: "Nasılsın?" },
  { nl: "Gaat het?", tr: "İyi misin? / Her şey yolunda mı?" },
  { nl: "Wat is dit?", tr: "Bu nedir?" },
  { nl: "Wat is dat?", tr: "Şu nedir?" },
  { nl: "Waar is het toilet?", tr: "Tuvalet nerede?" },
  { nl: "Waar is de uitgang?", tr: "Çıkış nerede?" },
  { nl: "Waar is de ingang?", tr: "Giriş nerede?" },
  { nl: "Hoe laat is het?", tr: "Saat kaç?" },
  { nl: "Hoeveel kost dit?", tr: "Bu ne kadar?" },
  { nl: "Is dit duur?", tr: "Bu pahalı mı?" },
  { nl: "Is dit goedkoop?", tr: "Bu ucuz mu?" },
  { nl: "Kun je dat herhalen?", tr: "Tekrar eder misin?" },
  { nl: "Kunt u dat herhalen?", tr: "Tekrar eder misiniz? (resmi)" },
  { nl: "Kun je langzamer praten?", tr: "Daha yavaş konuşur musun?" },
  { nl: "Spreek je Engels?", tr: "İngilizce konuşuyor musun?" },
  { nl: "Spreekt u Engels?", tr: "İngilizce konuşuyor musunuz? (resmi)" },
  { nl: "Begrijp je het?", tr: "Anlıyor musun?" },
  { nl: "Begrijpt u het?", tr: "Anlıyor musunuz? (resmi)" },
  { nl: "Wil je koffie?", tr: "Kahve ister misin?" },
  { nl: "Wil je water?", tr: "Su ister misin?" },
  { nl: "Heb je honger?", tr: "Aç mısın?" },
  { nl: "Heb je dorst?", tr: "Susadın mı?" },
  { nl: "Ben je moe?", tr: "Yorgun musun?" },
  { nl: "Kun je me helpen?", tr: "Bana yardım eder misin?" },
  { nl: "Kunt u me helpen?", tr: "Bana yardım eder misiniz? (resmi)" },
  { nl: "Waar is de halte?", tr: "Durak nerede?" },
  { nl: "Wanneer vertrekt de trein?", tr: "Tren ne zaman kalkıyor?" },
  { nl: "Waar gaat deze bus heen?", tr: "Bu otobüs nereye gidiyor?" },
  { nl: "Mag ik pinnen?", tr: "Kartla ödeyebilir miyim?" },
  { nl: "Mag ik contant betalen?", tr: "Nakit ödeyebilir miyim?" },
  { nl: "Kan ik een bon krijgen?", tr: "Fiş alabilir miyim?" },
  { nl: "Is het hier vrij?", tr: "Burası boş mu?" },
];

function speakNL(text: string) {
  if (typeof window === "undefined") return;
  const synth = window.speechSynthesis;
  if (!synth) {
    alert("Tarayıcı sesli okuma desteklemiyor.");
    return;
  }
  synth.cancel();

  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "nl-NL";
  utter.rate = 0.9;

  const voices = synth.getVoices();
  const nlVoice = voices.find(v => v.lang?.toLowerCase().startsWith("nl"));
  if (nlVoice) utter.voice = nlVoice;

  synth.speak(utter);
}

function shuffle<T>(arr: T[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function A0CumlelerPage() {
  const [ready, setReady] = useState(false);

  const quizPool = useMemo(() => shuffle([...BASIC, ...QUESTIONS]).slice(0, 12), []);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const current = quizPool[idx];

  const options = useMemo(() => {
    if (!current) return [];
    const others = shuffle(quizPool.filter(x => x.nl !== current.nl)).slice(0, 3);
    return shuffle([current, ...others]).map(x => x.tr);
  }, [idx]);

  useEffect(() => {
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

  const onAnswer = (ans: string) => {
    if (!current) return;
    setPicked(ans);
    if (ans === current.tr) setScore(s => s + 1);
    setTimeout(() => {
      setPicked(null);
      setIdx(i => Math.min(i + 1, quizPool.length));
    }, 800);
  };

  const resetQuiz = () => window.location.reload();

  return (
    <main style={s.page}>
      <div style={s.container}>
        <h1 style={s.h1}>A0 – Cümleler</h1>
        <p style={s.sub}>
          Hollandaca cümleleri dinle, Türkçesini öğren, sonra mini test ile pekiştir.
        </p>

        <div style={s.topRow}>
          <span style={s.badge}>{ready ? "Ses hazır ✅" : "Ses hazırlanıyor…"}</span>
          <div style={s.topLinks}>
            <a href="/a0" style={s.linkBtn}>← A0 Ana Sayfa</a>
            <a href="/a0/kelimeler" style={s.linkBtn}>← Kelimeler</a>
          </div>
        </div>

        {/* 1) Temel cümleler */}
        <section style={s.section}>
          <h2 style={s.h2}>1) Temel cümleler</h2>
          <div style={s.grid}>
            {BASIC.map((x) => (
              <div key={x.nl} style={s.card}>
                <div style={s.row}>
                  <div>
                    <div style={s.nl}>{x.nl}</div>
                    <div style={s.tr}>{x.tr}</div>
                    {x.note ? <div style={s.note}>{x.note}</div> : null}
                  </div>
                  <button style={s.play} onClick={() => speakNL(x.nl)}>🔊</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2) Soru cümleleri */}
        <section style={s.section}>
          <h2 style={s.h2}>2) Soru cümleleri</h2>
          <div style={s.grid}>
            {QUESTIONS.map((x) => (
              <div key={x.nl} style={s.card}>
                <div style={s.row}>
                  <div>
                    <div style={s.nl}>{x.nl}</div>
                    <div style={s.tr}>{x.tr}</div>
                  </div>
                  <button style={s.play} onClick={() => speakNL(x.nl)}>🔊</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3) Mini test */}
        <section style={s.section}>
          <h2 style={s.h2}>3) Mini test (Dinle → Türkçesini seç)</h2>

          {idx >= quizPool.length ? (
            <div style={s.quizDone}>
              <div style={s.quizTitle}>Bitti! 🎉</div>
              <div style={s.quizScore}>Skor: {score} / {quizPool.length}</div>
              <button style={s.bigBtn} onClick={resetQuiz}>Tekrar başlat</button>
            </div>
          ) : (
            <div style={s.quizBox}>
              <div style={s.quizTop}>
                <div style={s.quizCounter}>Soru {idx + 1} / {quizPool.length}</div>
                <button style={s.bigBtn} onClick={() => speakNL(current.nl)}>🔊 Dinle</button>
              </div>

              <div style={s.quizWord}>{current.nl}</div>

              <div style={s.options}>
                {options.map((o) => {
                  const isCorrect = picked && o === current.tr;
                  const isWrong = picked && o === picked && o !== current.tr;

                  return (
                    <button
                      key={o}
                      onClick={() => (picked ? null : onAnswer(o))}
                      style={{
                        ...s.optBtn,
                        ...(isCorrect ? s.correct : {}),
                        ...(isWrong ? s.wrong : {}),
                      }}
                    >
                      {o}
                    </button>
                  );
                })}
              </div>

              <div style={s.quizHint}>
                İpucu: Önce 🔊 dinle, sonra anlamı seç. Bitince otomatik sonraki soruya geçer.
              </div>
            </div>
          )}
        </section>

        <div style={s.navRow}>
          <a href="/a0/alfabe" style={s.linkBtn}>← Alfabe</a>
          <a href="/a0/kelimeler" style={s.linkBtn}>← Kelimeler</a>
        </div>
      </div>
    </main>
  );
}

const s: Record<string, React.CSSProperties> = {
  page: { minHeight: "100vh", background: "#070A12", color: "white", padding: "32px 0" },
  container: { maxWidth: 1100, margin: "0 auto", padding: "0 16px" },
  h1: { fontSize: 34, marginBottom: 6 },
  sub: { opacity: 0.75, marginBottom: 16, lineHeight: 1.6 },

  topRow: { display: "flex", gap: 10, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", marginBottom: 18 },
  topLinks: { display: "flex", gap: 10, flexWrap: "wrap" },
  badge: { fontSize: 12, opacity: 0.8, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", padding: "8px 10px", borderRadius: 999 },
  linkBtn: { textDecoration: "none", color: "rgba(255,255,255,0.92)", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", padding: "10px 12px", borderRadius: 12, fontWeight: 800 },

  section: { marginTop: 24 },
  h2: { fontSize: 18, marginBottom: 12 },

  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 },
  card: { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: 14 },
  row: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10 },
  nl: { fontSize: 16, fontWeight: 950 },
  tr: { marginTop: 4, opacity: 0.9 },
  note: { marginTop: 6, fontSize: 12, opacity: 0.65, lineHeight: 1.4 },

  play: { cursor: "pointer", border: "none", borderRadius: 12, padding: "10px 12px", background: "rgba(120,140,255,0.95)", color: "#0B1020", fontWeight: 900 },

  quizBox: { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: 16 },
  quizTop: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" },
  quizCounter: { opacity: 0.75 },
  quizWord: { fontSize: 24, fontWeight: 950, marginTop: 12, marginBottom: 12 },

  options: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 10 },
  optBtn: { cursor: "pointer", padding: "12px 12px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.06)", color: "white", fontWeight: 900 },
  correct: { border: "1px solid rgba(0,255,160,0.4)", background: "rgba(0,255,160,0.12)" },
  wrong: { border: "1px solid rgba(255,80,80,0.45)", background: "rgba(255,80,80,0.12)" },

  quizHint: { marginTop: 10, fontSize: 12, opacity: 0.65, lineHeight: 1.5 },

  quizDone: { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: 16, textAlign: "center" },
  quizTitle: { fontSize: 22, fontWeight: 950 },
  quizScore: { marginTop: 8, opacity: 0.85, marginBottom: 12 },
  bigBtn: { cursor: "pointer", border: "none", borderRadius: 12, padding: "10px 12px", background: "rgba(0,200,255,0.18)", color: "white", fontWeight: 950 },

  navRow: { display: "flex", gap: 10, justifyContent: "space-between", flexWrap: "wrap", marginTop: 26 },
};
