const levels = [
  {
    code: "A0",
    title: "Start vanaf nul",
    desc: "Alfabet, uitspraak, begroetingen en de eerste zinnen.",
    href: "/a0",
  },
  {
    code: "A1",
    title: "Basis",
    desc: "Dagelijkse gesprekken, eenvoudige grammatica en woordenschat.",
    href: "/a1",
  },
  {
    code: "A2",
    title: "Gevorderd basis",
    desc: "Meer spreektijd, luisteren, korte teksten en oefeningen.",
    href: "/a2",
  },
  {
    code: "B1",
    title: "Zelfstandig",
    desc: "Vloeiender spreken, langere teksten en echte situaties.",
    href: "/b1",
  },
];

export default function Home() {
  return (
    <div style={styles.page}>
      {/* Top bar */}
      <header style={styles.header}>
        <div style={styles.container}>
          <div style={styles.nav}>
            <a href="/" style={styles.brand}>
              Neder<span style={styles.brandAccent}>Learn</span>
            </a>

            <nav style={styles.navLinks}>
              <a href="#niveaus" style={styles.navLink}>Niveaus</a>
              <a href="#hoe-werkt-het" style={styles.navLink}>Hoe werkt het?</a>
              <a href="#faq" style={styles.navLink}>FAQ</a>
            </nav>

            <div style={styles.navActions}>
              <a href="/login" style={styles.linkButton}>Inloggen</a>
              <a href="/register" style={styles.primaryButton}>Account maken</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main style={styles.main}>
        <section style={styles.hero}>
          <div style={styles.container}>
            <div style={styles.heroGrid}>
              <div>
                <div style={styles.badge}>🇳🇱 Nederlands leren • A0 → B1</div>
                <h1 style={styles.h1}>
                  Leer Nederlands stap voor stap,{" "}
                  <span style={styles.h1Accent}>met duidelijke lessen</span>.
                </h1>
                <p style={styles.lead}>
                  Korte hoofdstukken, oefeningen en voortgang. Perfect als je
                  vanaf A0 begint en door wilt groeien naar B1.
                </p>

                <div style={styles.ctaRow}>
                  <a href="#niveaus" style={styles.primaryButtonLarge}>
                    Begin met A0
                  </a>
                  <a href="/register" style={styles.secondaryButtonLarge}>
                    Gratis account
                  </a>
                </div>

                <div style={styles.heroStats}>
                  <div style={styles.statCard}>
                    <div style={styles.statNum}>4</div>
                    <div style={styles.statLabel}>niveaus</div>
                  </div>
                  <div style={styles.statCard}>
                    <div style={styles.statNum}>Korte</div>
                    <div style={styles.statLabel}>lessen</div>
                  </div>
                  <div style={styles.statCard}>
                    <div style={styles.statNum}>⚡</div>
                    <div style={styles.statLabel}>oefeningen</div>
                  </div>
                </div>
              </div>

              {/* Right card */}
              <div style={styles.heroCard}>
                <div style={styles.heroCardTop}>
                  <div style={styles.heroCardTitle}>Vandaag</div>
                  <div style={styles.heroCardPill}>Aanbevolen</div>
                </div>

                <div style={styles.lessonItem}>
                  <div style={styles.lessonDot} />
                  <div>
                    <div style={styles.lessonTitle}>Begroetingen</div>
                    <div style={styles.lessonMeta}>A0 • 5 minuten</div>
                  </div>
                </div>

                <div style={styles.lessonItem}>
                  <div style={styles.lessonDot} />
                  <div>
                    <div style={styles.lessonTitle}>Zich voorstellen</div>
                    <div style={styles.lessonMeta}>A0 • 7 minuten</div>
                  </div>
                </div>

                <div style={styles.lessonItem}>
                  <div style={styles.lessonDot} />
                  <div>
                    <div style={styles.lessonTitle}>Veelgebruikte woorden</div>
                    <div style={styles.lessonMeta}>A1 • 8 minuten</div>
                  </div>
                </div>

                <div style={styles.heroCardBottom}>
                  <a href="#niveaus" style={styles.primaryButtonFull}>
                    Ga naar niveaus
                  </a>
                  <p style={styles.smallMuted}>
                    Tip: Maak een account om je voortgang op te slaan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Levels */}
        <section id="niveaus" style={styles.section}>
          <div style={styles.container}>
            <div style={styles.sectionHead}>
              <h2 style={styles.h2}>Kies je niveau</h2>
              <p style={styles.muted}>
                Begin waar jij je prettig voelt. Je kunt altijd wisselen.
              </p>
            </div>

            <div style={styles.grid}>
              {levels.map((lvl) => (
                <a key={lvl.code} href={lvl.href} style={styles.card}>
                  <div style={styles.cardTop}>
                    <div style={styles.levelTag}>{lvl.code}</div>
                    <div style={styles.cardArrow}>→</div>
                  </div>
                  <div style={styles.cardTitle}>{lvl.title}</div>
                  <div style={styles.cardDesc}>{lvl.desc}</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="hoe-werkt-het" style={styles.sectionAlt}>
          <div style={styles.container}>
            <div style={styles.sectionHead}>
              <h2 style={styles.h2}>Hoe werkt het?</h2>
              <p style={styles.muted}>
                Simpel: leer, oefen, en zie je voortgang groeien.
              </p>
            </div>

            <div style={styles.steps}>
              <div style={styles.stepCard}>
                <div style={styles.stepNum}>1</div>
                <div style={styles.stepTitle}>Les</div>
                <div style={styles.stepDesc}>Korte uitleg met voorbeelden.</div>
              </div>
              <div style={styles.stepCard}>
                <div style={styles.stepNum}>2</div>
                <div style={styles.stepTitle}>Oefenen</div>
                <div style={styles.stepDesc}>Mini-quiz en herhaling.</div>
              </div>
              <div style={styles.stepCard}>
                <div style={styles.stepNum}>3</div>
                <div style={styles.stepTitle}>Voortgang</div>
                <div style={styles.stepDesc}>Bewaar je resultaat met een account.</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" style={styles.section}>
          <div style={styles.container}>
            <div style={styles.sectionHead}>
              <h2 style={styles.h2}>FAQ</h2>
              <p style={styles.muted}>Veelgestelde vragen.</p>
            </div>

            <div style={styles.faq}>
              <div style={styles.faqItem}>
                <div style={styles.faqQ}>Is het gratis?</div>
                <div style={styles.faqA}>
                  Ja, je kunt starten zonder betaling. Later kun je extra’s toevoegen.
                </div>
              </div>
              <div style={styles.faqItem}>
                <div style={styles.faqQ}>Voor wie is dit?</div>
                <div style={styles.faqA}>
                  Voor iedereen die Nederlands wil leren van A0 tot B1, stap voor stap.
                </div>
              </div>
              <div style={styles.faqItem}>
                <div style={styles.faqQ}>Is er een admin panel?</div>
                <div style={styles.faqA}>
                  Ja. We bouwen straks een admin omgeving om lessen en niveaus te beheren.
                </div>
              </div>
            </div>

            <div style={styles.bottomCta}>
              <a href="/register" style={styles.primaryButtonLarge}>
                Start nu
              </a>
              <a href="/login" style={styles.secondaryButtonLarge}>
                Ik heb al een account
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer style={styles.footer}>
        <div style={styles.container}>
          <div style={styles.footerRow}>
            <div style={styles.footerBrand}>NederLearn</div>
            <div style={styles.footerLinks}>
              <a href="#niveaus" style={styles.footerLink}>Niveaus</a>
              <a href="/login" style={styles.footerLink}>Inloggen</a>
              <a href="/register" style={styles.footerLink}>Account maken</a>
            </div>
          </div>
          <div style={styles.footerSmall}>
            © {new Date().getFullYear()} NederLearn. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "radial-gradient(1200px 600px at 20% 10%, rgba(120, 140, 255, 0.18), transparent 60%), radial-gradient(900px 500px at 90% 20%, rgba(0, 200, 255, 0.14), transparent 55%), #070A12",
    color: "rgba(255,255,255,0.92)",
  },
  header: {
    position: "sticky",
    top: 0,
    zIndex: 10,
    backdropFilter: "blur(10px)",
    background: "rgba(7, 10, 18, 0.55)",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },
  container: { maxWidth: 1100, margin: "0 auto", padding: "0 18px" },
  nav: { display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 },
  brand: { fontSize: 18, fontWeight: 800, letterSpacing: 0.2, textDecoration: "none", color: "white" },
  brandAccent: { color: "rgba(120, 140, 255, 0.95)" },
  navLinks: { display: "flex", gap: 16, alignItems: "center" },
  navLink: { color: "rgba(255,255,255,0.75)", textDecoration: "none", fontSize: 14 },
  navActions: { display: "flex", gap: 10, alignItems: "center" },

  main: { paddingBottom: 50 },
  hero: { padding: "54px 0 24px" },
  heroGrid: { display: "grid", gridTemplateColumns: "1.25fr 0.9fr", gap: 22, alignItems: "stretch" },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 12px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.10)",
    fontSize: 13,
    color: "rgba(255,255,255,0.80)",
  },
  h1: { margin: "14px 0 10px", fontSize: 44, lineHeight: 1.05, letterSpacing: -0.8 },
  h1Accent: { color: "rgba(0, 200, 255, 0.9)" },
  lead: { margin: 0, maxWidth: 620, fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,0.72)" },

  ctaRow: { display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" },
  primaryButton: {
    background: "rgba(120, 140, 255, 0.95)",
    color: "#0B1020",
    padding: "10px 12px",
    borderRadius: 10,
    textDecoration: "none",
    fontWeight: 800,
    fontSize: 13,
  },
  linkButton: {
    color: "rgba(255,255,255,0.78)",
    textDecoration: "none",
    padding: "10px 10px",
    borderRadius: 10,
    fontSize: 13,
  },
  primaryButtonLarge: {
    background: "rgba(120, 140, 255, 0.95)",
    color: "#0B1020",
    padding: "12px 16px",
    borderRadius: 14,
    textDecoration: "none",
    fontWeight: 900,
    fontSize: 14,
  },
  secondaryButtonLarge: {
    background: "rgba(255,255,255,0.06)",
    color: "rgba(255,255,255,0.88)",
    padding: "12px 16px",
    borderRadius: 14,
    textDecoration: "none",
    fontWeight: 800,
    fontSize: 14,
    border: "1px solid rgba(255,255,255,0.10)",
  },

  heroStats: { display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" },
  statCard: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 14,
    padding: "12px 14px",
    minWidth: 120,
  },
  statNum: { fontWeight: 900, fontSize: 16, marginBottom: 4 },
  statLabel: { color: "rgba(255,255,255,0.70)", fontSize: 13 },

  heroCard: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 18,
    padding: 16,
    boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
  },
  heroCardTop: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 },
  heroCardTitle: { fontWeight: 900, fontSize: 14 },
  heroCardPill: {
    fontSize: 12,
    color: "rgba(255,255,255,0.85)",
    background: "rgba(0, 200, 255, 0.12)",
    border: "1px solid rgba(0, 200, 255, 0.18)",
    padding: "6px 10px",
    borderRadius: 999,
  },
  lessonItem: {
    display: "flex",
    gap: 10,
    alignItems: "flex-start",
    padding: "10px 10px",
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(0,0,0,0.15)",
    marginTop: 10,
  },
  lessonDot: {
    width: 10,
    height: 10,
    borderRadius: 999,
    marginTop: 4,
    background: "rgba(120, 140, 255, 0.95)",
    boxShadow: "0 0 0 4px rgba(120,140,255,0.12)",
  },
  lessonTitle: { fontWeight: 850, fontSize: 14 },
  lessonMeta: { color: "rgba(255,255,255,0.62)", fontSize: 12, marginTop: 2 },

  heroCardBottom: { marginTop: 14 },
  primaryButtonFull: {
    display: "block",
    textAlign: "center",
    background: "rgba(120, 140, 255, 0.95)",
    color: "#0B1020",
    padding: "12px 14px",
    borderRadius: 14,
    textDecoration: "none",
    fontWeight: 900,
  },
  smallMuted: { margin: "10px 2px 0", fontSize: 12, color: "rgba(255,255,255,0.60)" },

  section: { padding: "34px 0" },
  sectionAlt: {
    padding: "34px 0",
    background: "rgba(255,255,255,0.02)",
    borderTop: "1px solid rgba(255,255,255,0.06)",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
  },
  sectionHead: { marginBottom: 14 },
  h2: { margin: 0, fontSize: 26, letterSpacing: -0.3 },
  muted: { margin: "6px 0 0", color: "rgba(255,255,255,0.70)", lineHeight: 1.6 },

  grid: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 },
  card: {
    textDecoration: "none",
    color: "rgba(255,255,255,0.92)",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 18,
    padding: 16,
    transition: "transform 120ms ease, border-color 120ms ease",
  },
  cardTop: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 },
  levelTag: {
    fontSize: 12,
    fontWeight: 900,
    letterSpacing: 0.6,
    padding: "6px 10px",
    borderRadius: 999,
    background: "rgba(0, 200, 255, 0.10)",
    border: "1px solid rgba(0, 200, 255, 0.18)",
    color: "rgba(255,255,255,0.85)",
  },
  cardArrow: { color: "rgba(255,255,255,0.55)", fontSize: 16 },
  cardTitle: { fontWeight: 900, fontSize: 15, marginBottom: 6 },
  cardDesc: { color: "rgba(255,255,255,0.68)", fontSize: 13, lineHeight: 1.5 },

  steps: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 },
  stepCard: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 18,
    padding: 16,
  },
  stepNum: {
    width: 30,
    height: 30,
    borderRadius: 10,
    display: "grid",
    placeItems: "center",
    fontWeight: 900,
    background: "rgba(120, 140, 255, 0.95)",
    color: "#0B1020",
    marginBottom: 10,
  },
  stepTitle: { fontWeight: 900, marginBottom: 6 },
  stepDesc: { color: "rgba(255,255,255,0.70)", lineHeight: 1.5, fontSize: 13 },

  faq: { display: "grid", gap: 10 },
  faqItem: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 16,
    padding: 14,
  },
  faqQ: { fontWeight: 900, marginBottom: 6 },
  faqA: { color: "rgba(255,255,255,0.70)", lineHeight: 1.55, fontSize: 13 },

  bottomCta: { marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" },

  footer: {
    borderTop: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(0,0,0,0.20)",
    padding: "18px 0",
  },
  footerRow: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" },
  footerBrand: { fontWeight: 900 },
  footerLinks: { display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" },
  footerLink: { color: "rgba(255,255,255,0.70)", textDecoration: "none", fontSize: 13 },
  footerSmall: { marginTop: 10, color: "rgba(255,255,255,0.55)", fontSize: 12 },
};
