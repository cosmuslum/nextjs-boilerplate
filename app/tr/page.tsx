export default function TrHome() {
  return (
    <div style={s.page}>
      <header style={s.header}>
        <div style={s.container}>
          <div style={s.nav}>
            <div style={s.brand}>
              Neder<span style={s.brandAccent}>Learn</span>
            </div>

            <nav style={s.navLinks}>
              <a style={s.link} href="#seviyeler">Seviyeler</a>
              <a style={s.link} href="#nasil">Nasıl çalışır?</a>
              <a style={s.link} href="#hedef">Hedef</a>
            </nav>

            <div style={s.actions}>
              <a style={s.btnGhost} href="/login">Giriş</a>
              <a style={s.btn} href="/register">Kayıt Ol</a>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section style={s.hero}>
          <div style={s.container}>
            <div style={s.heroGrid}>
              <div>
                <div style={s.badge}>🇳🇱 Hollandaca Öğren • A0 → B1</div>

                <h1 style={s.h1}>
                  Hollandacayı{" "}
                  <span style={s.h1Accent}>düzenli</span> ve{" "}
                  <span style={s.h1Accent2}>kolay</span> öğren.
                </h1>

                <p style={s.lead}>
                  Ana dilin Türkçe. Açıklamalar Türkçe, örnekler ve pratikler
                  Hollandaca. A0’dan başlayıp B1’e kadar adım adım ilerle.
                </p>

                <div style={s.ctaRow}>
                  <a style={s.btnBig} href="#seviyeler">A0 ile başla</a>
                  <a style={s.btnBigGhost} href="/register">Ücretsiz hesap aç</a>
                </div>

                <div style={s.langRow}>
                  <span style={s.langLabel}>Dil:</span>
                  <a style={s.lang} href="/tr">TR</a>
                  <a style={s.lang} href="/nl">NL</a>
                  <a style={s.lang} href="/en">EN</a>
                  <a style={s.lang} href="/es">ES</a>
                  <a style={s.lang} href="/ar">AR</a>
                </div>
              </div>

              {/* RIGHT CARD */}
              <div style={s.panel}>
                <div style={s.panelTop}>
                  <div style={{ fontWeight: 900 }}>Bugün önerilen</div>
                  <div style={s.pill}>A0</div>
                </div>

                <div style={s.lesson}>
                  <div style={s.dot} />
                  <div>
                    <div style={s.lessonTitle}>Begroetingen</div>
                    <div style={s.lessonMeta}>Selamlaşma • 5 dk</div>
                  </div>
                </div>

                <div style={s.lesson}>
                  <div style={s.dot2} />
                  <div>
                    <div style={s.lessonTitle}>Zich voorstellen</div>
                    <div style={s.lessonMeta}>Kendini tanıtma • 7 dk</div>
                  </div>
                </div>

                <div style={s.panelCta}>
                  <a style={s.btnFull} href="#seviyeler">Seviyeleri gör</a>
                  <div style={s.panelHint}>
                    Hedef dil her zaman <b>Hollandaca</b> ✅
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LEVELS */}
        <section id="seviyeler" style={s.section}>
          <div style={s.container}>
            <h2 style={s.h2}>Seviyeni seç</h2>
            <p style={s.muted}>Bölüm bölüm ilerle: A0 → B1</p>

            <div style={s.grid}>
              <a style={s.card} href="/a0">
                <div style={s.cardTop}>
                  <span style={s.tag}>A0</span>
                  <span style={s.arrow}>→</span>
                </div>
                <div style={s.cardTitle}>Başlangıç</div>
                <div style={s.cardText}>Telaffuz, selamlaşma, ilk cümleler</div>
              </a>

              <a style={s.card} href="/a1">
                <div style={s.cardTop}>
                  <span style={s.tag}>A1</span>
                  <span style={s.arrow}>→</span>
                </div>
                <div style={s.cardTitle}>Temel</div>
                <div style={s.cardText}>Günlük konuşmalar, temel gramer</div>
              </a>

              <a style={s.card} href="/a2">
                <div style={s.cardTop}>
                  <span style={s.tag}>A2</span>
                  <span style={s.arrow}>→</span>
                </div>
                <div style={s.cardTitle}>Orta</div>
                <div style={s.cardText}>Okuma, dinleme, pratik alıştırmalar</div>
              </a>

              <a style={s.card} href="/b1">
                <div style={s.cardTop}>
                  <span style={s.tag}>B1</span>
                  <span style={s.arrow}>→</span>
                </div>
                <div style={s.cardTitle}>Orta-İleri</div>
                <div style={s.cardText}>Senaryolar, akıcılık ve kelime dağarcığı</div>
              </a>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="nasil" style={s.sectionAlt}>
          <div style={s.container}>
            <h2 style={s.h2}>Nasıl çalışır?</h2>
            <p style={s.muted}>Öğren → Alıştırma → İlerleme</p>

            <div style={s.steps}>
              <div style={s.step}>
                <div style={s.stepNum}>1</div>
                <div style={s.stepTitle}>Ders</div>
                <div style={s.cardText}>Türkçe açıklama + Hollandaca örnekler</div>
              </div>
              <div style={s.step}>
                <div style={s.stepNum}>2</div>
                <div style={s.stepTitle}>Alıştırma</div>
                <div style={s.cardText}>Mini quiz + tekrar kartları</div>
              </div>
              <div style={s.step}>
                <div style={s.stepNum}>3</div>
                <div style={s.stepTitle}>İlerleme</div>
                <div style={s.cardText}>Hesapla gelişimini kaydet</div>
              </div>
            </div>
          </div>
        </section>

        {/* GOAL */}
        <section id="hedef" style={s.section}>
          <div style={s.container}>
            <h2 style={s.h2}>Hedefimiz</h2>
            <p style={s.muted}>
              Türkçe/İngilizce/İspanyolca/Arapça bilen herkesin Hollandacayı
              öğrenebilmesi. Bu yüzden her dilde açıklama var ama pratiklerin
              hedefi hep Hollandaca.
            </p>
          </div>
        </section>
      </main>

      <footer style={s.footer}>
        <div style={s.container}>
          <div style={s.footerText}>© {new Date().getFullYear()} NederLearn</div>
        </div>
      </footer>
    </div>
  );
}

const s: Record<string, React.CSSProperties> = {
  page: { minHeight: "100vh", background: "#070A12", color: "rgba(255,255,255,0.92)" },
  container: { maxWidth: 1100, margin: "0 auto", padding: "0 18px" },

  header: {
    position: "sticky",
    top: 0,
    zIndex: 10,
    background: "rgba(7,10,18,0.75)",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    backdropFilter: "blur(10px)"
  },
  nav: { height: 68, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" },
  brand: { fontWeight: 900, letterSpacing: -0.2, fontSize: 16 },
  brandAccent: { color: "rgba(120,140,255,0.95)" },
  navLinks: { display: "flex", gap: 14, flexWrap: "wrap" },
  link: { color: "rgba(255,255,255,0.75)", textDecoration: "none", fontSize: 14 },
  actions: { display: "flex", gap: 10 },
  btnGhost: { color: "rgba(255,255,255,0.85)", textDecoration: "none", padding: "10px 12px", borderRadius: 10, fontSize: 13, border: "1px solid rgba(255,255,255,0.10)" },
  btn: { background: "rgba(120,140,255,0.95)", color: "#0B1020", textDecoration: "none", padding: "10px 12px", borderRadius: 10, fontSize: 13, fontWeight: 900 },

  hero: {
    padding: "56px 0 26px",
    background:
      "radial-gradient(1200px 600px at 20% 10%, rgba(120,140,255,0.18), transparent 60%), radial-gradient(900px 500px at 90% 20%, rgba(0,200,255,0.14), transparent 55%)"
  },
  heroGrid: { display: "grid", gridTemplateColumns: "1.2fr 0.9fr", gap: 22, alignItems: "stretch" },
  badge: { display: "inline-flex", padding: "8px 12px", borderRadius: 999, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)", fontSize: 13 },
  h1: { margin: "14px 0 10px", fontSize: 44, lineHeight: 1.05, letterSpacing: -0.8 },
  h1Accent: { color: "rgba(0,200,255,0.9)" },
  h1Accent2: { color: "rgba(120,140,255,0.95)" },
  lead: { margin: 0, maxWidth: 650, fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,0.72)" },
  ctaRow: { display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" },
  btnBig: { background: "rgba(120,140,255,0.95)", color: "#0B1020", textDecoration: "none", padding: "12px 16px", borderRadius: 14, fontWeight: 900 },
  btnBigGhost: { background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.9)", textDecoration: "none", padding: "12px 16px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.10)", fontWeight: 800 },

  langRow: { display: "flex", gap: 10, alignItems: "center", marginTop: 16, flexWrap: "wrap" },
  langLabel: { fontSize: 13, opacity: 0.7 },
  lang: {
    fontSize: 13,
    color: "rgba(255,255,255,0.85)",
    textDecoration: "none",
    padding: "8px 10px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.04)"
  },

  panel: { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 18, padding: 16, boxShadow: "0 10px 30px rgba(0,0,0,0.35)" },
  panelTop: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 },
  pill: { fontSize: 12, padding: "6px 10px", borderRadius: 999, border: "1px solid rgba(0,200,255,0.18)", background: "rgba(0,200,255,0.12)" },
  lesson: { display: "flex", gap: 10, alignItems: "flex-start", padding: "10px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(0,0,0,0.15)", marginTop: 10 },
  dot: { width: 10, height: 10, borderRadius: 999, marginTop: 4, background: "rgba(120,140,255,0.95)", boxShadow: "0 0 0 4px rgba(120,140,255,0.12)" },
  dot2: { width: 10, height: 10, borderRadius: 999, marginTop: 4, background: "rgba(0,200,255,0.9)", boxShadow: "0 0 0 4px rgba(0,200,255,0.12)" },
  lessonTitle: { fontWeight: 900 },
  lessonMeta: { opacity: 0.65, fontSize: 12, marginTop: 2 },
  panelCta: { marginTop: 14 },
  btnFull: { display: "block", textAlign: "center", background: "rgba(120,140,255,0.95)", color: "#0B1020", textDecoration: "none", padding: "12px 14px", borderRadius: 14, fontWeight: 900 },
  panelHint: { marginTop: 10, fontSize: 12, opacity: 0.7 },

  section: { padding: "34px 0" },
  sectionAlt: { padding: "34px 0", background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" },
  h2: { margin: 0, fontSize: 26, letterSpacing: -0.3 },
  muted: { margin: "6px 0 0", color: "rgba(255,255,255,0.70)", lineHeight: 1.6 },

  grid: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginTop: 14 },
  card: { textDecoration: "none", color: "rgba(255,255,255,0.92)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 18, padding: 16 },
  cardTop: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  tag: { fontSize: 12, fontWeight: 900, padding: "6px 10px", borderRadius: 999, background: "rgba(0,200,255,0.10)", border: "1px solid rgba(0,200,255,0.18)" },
  arrow: { opacity: 0.6 },
  cardTitle: { fontWeight: 900, marginTop: 8 },
  cardText: { color: "rgba(255,255,255,0.68)", fontSize: 13, lineHeight: 1.5, marginTop: 6 },

  steps: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginTop: 14 },
  step: { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 18, padding: 16 },
  stepNum: { width: 30, height: 30, borderRadius: 10, display: "grid", placeItems: "center", fontWeight: 900, background: "rgba(120,140,255,0.95)", color: "#0B1020", marginBottom: 10 },
  stepTitle: { fontWeight: 900 },

  footer: { borderTop: "1px solid rgba(255,255,255,0.08)", background: "rgba(0,0,0,0.20)", padding: "18px 0" },
  footerText: { opacity: 0.7, fontSize: 12 }
};
