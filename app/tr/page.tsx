import React from "react";

export default function TRHome() {
  return (
    <main style={s.page}>
      <section style={s.hero} className="force-hero">
        <div style={s.left}>
          <div style={s.pill}>🇳🇱 Hollandaca Öğren • A0 → B1</div>

          <h1 style={s.h1}>
            NederLearn ile <span style={s.grad}>adım adım</span> Hollandaca öğren.
          </h1>

          <p style={s.sub}>
            Sıfırdan başlayıp düzenli ders akışı ile ilerle. Kısa, anlaşılır anlatımlar + bol pratik.
          </p>

          <div style={s.ctaRow}>
            <a href="/tr/a0" style={s.primary}>A0’a Başla</a>
            <a href="/tr/a0/alfabe" style={s.secondary}>Alfabe (Sesli)</a>
          </div>

          <div style={s.badges}>
            <div style={s.badge}>📱 Mobil uyumlu</div>
            <div style={s.badge}>🔊 Sesli pratik</div>
            <div style={s.badge}>🧩 Bölüm bölüm</div>
          </div>
        </div>

        <aside style={s.right}>
          <div style={s.card}>
            <div style={s.cardTop}>
              <div>
                <div style={s.cardTitle}>Bugün</div>
                <div style={s.cardSub}>Başlangıç planı</div>
              </div>
              <div style={s.tag}>A0</div>
            </div>

            <div style={s.steps}>
              <div style={s.step}>
                <div style={s.num}>1</div>
                <div>
                  <div style={s.stepTitle}>Alfabe</div>
                  <div style={s.stepSub}>Harfleri dinle + tekrar et</div>
                </div>
              </div>

              <div style={s.step}>
                <div style={s.num}>2</div>
                <div>
                  <div style={s.stepTitle}>Kelimeler</div>
                  <div style={s.stepSub}>Günlük temel kelimeler</div>
                </div>
              </div>

              <div style={s.step}>
                <div style={s.num}>3</div>
                <div>
                  <div style={s.stepTitle}>Cümleler</div>
                  <div style={s.stepSub}>Basit kalıplarla pratik</div>
                </div>
              </div>
            </div>

            <a href="/tr/a0/alfabe" style={s.bigLink}>
              Alfabe sayfasına git →
            </a>

            <div style={s.note}>
              Not: Ses tarayıcı üzerinden çalışır (Chrome/Edge önerilir).
            </div>
          </div>
        </aside>
      </section>

      <section id="seviyeler" style={s.section}>
        <h2 style={s.h2}>Seviyeler</h2>
        <p style={s.p}>
          Önce A0 içeriğini tamamen bitireceğiz. Sonra A1/A2/B1 açılacak.
        </p>

        <div style={s.grid3} className="force-3">
          <div style={s.box}>
            <div style={s.boxTag}>Aktif</div>
            <div style={s.boxTitle}>A0 – Sıfırdan</div>
            <div style={s.boxText}>Alfabe, temel sesler, ilk kelimeler ve kısa cümleler.</div>
            <a href="/tr/a0" style={s.boxBtn}>A0’a git →</a>
          </div>

          <div style={{ ...s.box, opacity: 0.65 }}>
            <div style={s.boxTag2}>Yakında</div>
            <div style={s.boxTitle}>A1 – Temel</div>
            <div style={s.boxText}>Günlük konuşma kalıpları ve temel gramer.</div>
            <div style={s.boxBtnDisabled}>Yakında</div>
          </div>

          <div style={{ ...s.box, opacity: 0.65 }}>
            <div style={s.boxTag2}>Yakında</div>
            <div style={s.boxTitle}>A2/B1 – Orta</div>
            <div style={s.boxText}>Daha uzun cümleler, diyaloglar ve akıcı pratik.</div>
            <div style={s.boxBtnDisabled}>Yakında</div>
          </div>
        </div>
      </section>

      <section id="nasil" style={s.section}>
        <h2 style={s.h2}>Nasıl çalışır?</h2>
        <div style={s.grid2} className="force-2">
          <div style={s.tipCard}>
            <div style={s.tipTitle}>🎯 Net hedef</div>
            <div style={s.tipText}>Her bölüm tek bir beceriye odaklanır: ses, kelime, cümle.</div>
          </div>
          <div style={s.tipCard}>
            <div style={s.tipTitle}>🔁 Tekrar sistemi</div>
            <div style={s.tipText}>Kısa tekrarlarla öğrenme kalıcı olur. 10–15 dk yeter.</div>
          </div>
          <div style={s.tipCard}>
            <div style={s.tipTitle}>🔊 Sesli pratik</div>
            <div style={s.tipText}>Tarayıcı seslendirmesiyle (nl-NL) telaffuz çalışırsın.</div>
          </div>
          <div style={s.tipCard}>
            <div style={s.tipTitle}>📱 Mobil öncelik</div>
            <div style={s.tipText}>Telefon ekranında rahat kullanım için tasarlandı.</div>
          </div>
        </div>
      </section>

      <section id="sss" style={s.section}>
        <h2 style={s.h2}>SSS</h2>
        <div style={s.faqWrap}>
          <details style={s.faq}>
            <summary style={s.sum}>▶ Ses neden bazen çıkmıyor?</summary>
            <div style={s.ans}>
              Bazı telefonlarda ilk ses için tıklama gerekir. “Deneme sesi” gibi bir butona basıp tekrar deneyin.
            </div>
          </details>

          <details style={s.faq}>
            <summary style={s.sum}>▶ Şimdilik sadece Türkçe mi?</summary>
            <div style={s.ans}>
              Evet. Türkçe içeriği tamamen bitirince İngilizce/İspanyolca/Arapça/Hollandaca arayüzlerini ekleyeceğiz.
            </div>
          </details>

          <details style={s.faq}>
            <summary style={s.sum}>▶ Hızlı ilerlemek için öneri?</summary>
            <div style={s.ans}>
              Her gün 10–15 dk. Alfabe → kelime → cümle sırasını bozma. Bol tekrar yap.
            </div>
          </details>
        </div>
      </section>
    </main>
  );
}

const s: Record<string, React.CSSProperties> = {
  page: { minHeight: "100vh" },

  hero: {
    maxWidth: 1120,
    margin: "0 auto",
    padding: "28px 16px 18px",
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    gap: 18,
    alignItems: "start",
  },
  left: { paddingTop: 10 },
  pill: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "10px 14px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.04)",
    fontWeight: 900,
    opacity: 0.95,
  },
  h1: { fontSize: 54, lineHeight: 1.05, margin: "16px 0 10px", fontWeight: 950, letterSpacing: -0.6 },
  grad: { color: "rgba(120,140,255,0.95)" },
  sub: { fontSize: 16, lineHeight: 1.6, opacity: 0.75, maxWidth: 560 },

  ctaRow: { display: "flex", gap: 12, flexWrap: "wrap", marginTop: 16 },
  primary: {
    padding: "14px 16px",
    borderRadius: 16,
    background: "rgba(120,140,255,0.95)",
    color: "#0B1020",
    fontWeight: 950,
    border: "1px solid rgba(120,140,255,0.4)",
    display: "inline-block",
  },
  secondary: {
    padding: "14px 16px",
    borderRadius: 16,
    background: "rgba(255,255,255,0.04)",
    color: "rgba(255,255,255,0.92)",
    fontWeight: 950,
    border: "1px solid rgba(255,255,255,0.12)",
    display: "inline-block",
  },

  badges: { display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 },
  badge: {
    padding: "10px 12px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.12)",
    fontWeight: 900,
    opacity: 0.92,
  },

  right: { paddingTop: 10 },
  card: {
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.04)",
    padding: 16,
    boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
  },
  cardTop: { display: "flex", alignItems: "start", justifyContent: "space-between", gap: 12 },
  cardTitle: { fontWeight: 950, fontSize: 16 },
  cardSub: { opacity: 0.7, marginTop: 4 },
  tag: {
    padding: "8px 10px",
    borderRadius: 999,
    border: "1px solid rgba(0,200,255,0.18)",
    background: "rgba(0,200,255,0.12)",
    fontWeight: 950,
  },

  steps: { display: "grid", gap: 10, marginTop: 14 },
  step: {
    display: "grid",
    gridTemplateColumns: "32px 1fr",
    gap: 10,
    alignItems: "center",
    padding: 12,
    borderRadius: 16,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(0,0,0,0.18)",
  },
  num: {
    width: 28,
    height: 28,
    borderRadius: 999,
    display: "grid",
    placeItems: "center",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    fontWeight: 950,
  },
  stepTitle: { fontWeight: 950 },
  stepSub: { opacity: 0.7, fontSize: 13, marginTop: 2 },

  bigLink: {
    marginTop: 12,
    display: "block",
    textAlign: "center",
    padding: "12px 12px",
    borderRadius: 16,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.04)",
    fontWeight: 950,
  },
  note: { marginTop: 10, fontSize: 12, opacity: 0.65, lineHeight: 1.5 },

  section: {
    maxWidth: 1120,
    margin: "0 auto",
    padding: "20px 16px",
  },
  h2: { fontSize: 28, margin: "8px 0 8px", fontWeight: 950 },
  p: { opacity: 0.75, lineHeight: 1.6, marginBottom: 14 },

  grid3: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 },
  grid2: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 },

  box: {
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.04)",
    padding: 16,
  },
  boxTag: {
    display: "inline-block",
    padding: "7px 10px",
    borderRadius: 999,
    background: "rgba(120,140,255,0.15)",
    border: "1px solid rgba(120,140,255,0.25)",
    fontWeight: 950,
    marginBottom: 10,
  },
  boxTag2: {
    display: "inline-block",
    padding: "7px 10px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    fontWeight: 950,
    marginBottom: 10,
  },
  boxTitle: { fontSize: 18, fontWeight: 950, marginBottom: 6 },
  boxText: { opacity: 0.75, lineHeight: 1.6, marginBottom: 12 },
  boxBtn: {
    display: "inline-block",
    padding: "12px 12px",
    borderRadius: 14,
    background: "rgba(120,140,255,0.95)",
    color: "#0B1020",
    fontWeight: 950,
    border: "1px solid rgba(120,140,255,0.4)",
  },
  boxBtnDisabled: {
    display: "inline-block",
    padding: "12px 12px",
    borderRadius: 14,
    background: "rgba(255,255,255,0.04)",
    color: "rgba(255,255,255,0.6)",
    fontWeight: 950,
    border: "1px solid rgba(255,255,255,0.10)",
  },

  tipCard: {
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.04)",
    padding: 16,
  },
  tipTitle: { fontWeight: 950, marginBottom: 6 },
  tipText: { opacity: 0.75, lineHeight: 1.6 },

  faqWrap: { display: "grid", gap: 10, marginTop: 10 },
  faq: {
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.04)",
    padding: 14,
  },
  sum: { cursor: "pointer", fontWeight: 950, listStyle: "none" },
  ans: { opacity: 0.75, lineHeight: 1.6, marginTop: 8 },
};
