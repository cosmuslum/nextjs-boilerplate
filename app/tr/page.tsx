// app/tr/page.tsx
import React from "react";

export const metadata = {
  title: "NederLearn | Hollandaca Öğren",
  description:
    "NederLearn ile Hollandaca öğrenmeye sıfırdan başla. A0’dan B1’e adım adım dersler, pratikler ve örneklerle ilerle.",
};

type LevelItem = {
  title: string;
  desc: string;
  href: string;
  badge: string;
  disabled?: boolean;
};

const LEVELS: LevelItem[] = [
  {
    title: "A0 – Sıfırdan Başla",
    desc: "Alfabe, temel telaffuz, ilk kelimeler ve en basit cümle kalıpları.",
    href: "/tr/a0",
    badge: "Başlangıç",
  },
  {
    title: "A1 – Temel",
    desc: "Günlük konuşmalar, selamlaşma, tanışma, basit diyaloglar ve temel gramer.",
    href: "/tr/a1",
    badge: "Yakında",
    disabled: true,
  },
  {
    title: "A2 – Orta",
    desc: "Daha uzun cümleler, zamanlar, günlük senaryolar (market, iş, randevu, yol tarifi).",
    href: "/tr/a2",
    badge: "Yakında",
    disabled: true,
  },
  {
    title: "B1 – Orta-İleri",
    desc: "Akıcı anlatım, iş/okul senaryoları, yazma-dinleme pratikleri ve daha doğal konuşma.",
    href: "/tr/b1",
    badge: "Yakında",
    disabled: true,
  },
];

export default function TrHomePage() {
  return (
    <main style={s.page}>
      <Header />

      <section style={s.hero}>
        <div style={s.heroInner}>
          <div style={s.heroLeft}>
            <div style={s.pill}>🇳🇱 Hollandaca öğrenmeye başla</div>
            <h1 style={s.h1}>
              NederLearn ile <span style={s.gradText}>adım adım</span> Hollandaca
            </h1>
            <p style={s.lead}>
              Sıfırdan başlayıp A0 → B1 seviyelerine kadar düzenli, anlaşılır ve pratik odaklı
              ilerle. Amaç: Hollandaca’yı <b>kullanabilir</b> hale getirmek.
            </p>

            <div style={s.ctaRow}>
              <a href="/tr/a0" style={s.ctaPrimary}>
                A0’a Başla
              </a>
              <a href="/tr/login" style={s.ctaSecondary}>
                Giriş Yap
              </a>
              <a href="/tr/register" style={s.ctaGhost}>
                Kayıt Ol
              </a>
            </div>

            <div style={s.trustRow}>
              <div style={s.trustItem}>
                <div style={s.trustIcon}>⚡</div>
                <div>
                  <div style={s.trustTitle}>Hızlı Başlangıç</div>
                  <div style={s.trustText}>A0 ile hemen öğrenmeye başla</div>
                </div>
              </div>
              <div style={s.trustItem}>
                <div style={s.trustIcon}>🔊</div>
                <div>
                  <div style={s.trustTitle}>Telaffuz Desteği</div>
                  <div style={s.trustText}>Tarayıcı seslendirme ile pratik</div>
                </div>
              </div>
              <div style={s.trustItem}>
                <div style={s.trustIcon}>🧭</div>
                <div>
                  <div style={s.trustTitle}>Seviyeli Sistem</div>
                  <div style={s.trustText}>A0’dan B1’e planlı ilerleme</div>
                </div>
              </div>
            </div>
          </div>

          <div style={s.heroRight}>
            <div style={s.cardBig}>
              <div style={s.cardBigTop}>
                <div style={s.cardBigBadge}>Bugün</div>
                <div style={s.cardBigTitle}>Kısa Plan</div>
              </div>

              <div style={s.steps}>
                <div style={s.step}>
                  <div style={s.stepNum}>1</div>
                  <div>
                    <div style={s.stepTitle}>Alfabeyi öğren</div>
                    <div style={s.stepText}>Harfler + temel telaffuz</div>
                  </div>
                </div>
                <div style={s.step}>
                  <div style={s.stepNum}>2</div>
                  <div>
                    <div style={s.stepTitle}>İlk kelimeler</div>
                    <div style={s.stepText}>Sık kullanılan günlük kelimeler</div>
                  </div>
                </div>
                <div style={s.step}>
                  <div style={s.stepNum}>3</div>
                  <div>
                    <div style={s.stepTitle}>Basit cümleler</div>
                    <div style={s.stepText}>Tanışma ve günlük kalıplar</div>
                  </div>
                </div>
              </div>

              <div style={s.cardBigBottom}>
                <a href="/tr/a0/alfabe" style={s.inlineBtn}>
                  A0 Alfabe (Sesli) →
                </a>
                <div style={s.miniNote}>
                  Not: Ses, cihazın/tarayıcının desteklediği ses motoru ile çalışır.
                </div>
              </div>
            </div>

            <div style={s.miniGrid}>
              <div style={s.miniCard}>
                <div style={s.miniTitle}>Hedef</div>
                <div style={s.miniText}>
                  Hollandaca’yı günlük hayatta rahatça kullanmak.
                </div>
              </div>
              <div style={s.miniCard}>
                <div style={s.miniTitle}>Metod</div>
                <div style={s.miniText}>
                  Az teori + bol örnek + pratik + tekrar.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={s.heroGlow} />
      </section>

      <section id="levels" style={s.section}>
        <div style={s.sectionInner}>
          <h2 style={s.h2}>Seviyeler</h2>
          <p style={s.sectionLead}>
            İçerikler seviye seviye açılır. Şu an A0 aktif. Diğerleri yakında.
          </p>

          <div style={s.levelGrid}>
            {LEVELS.map((x) => (
              <a
                key={x.title}
                href={x.disabled ? "#" : x.href}
                style={{
                  ...s.levelCard,
                  ...(x.disabled ? s.levelCardDisabled : null),
                }}
                onClick={(e) => {
                  if (x.disabled) e.preventDefault();
                }}
              >
                <div style={s.levelTop}>
                  <div style={s.levelTitle}>{x.title}</div>
                  <div
                    style={{
                      ...s.badge,
                      ...(x.disabled ? s.badgeMuted : s.badgeLive),
                    }}
                  >
                    {x.badge}
                  </div>
                </div>
                <div style={s.levelDesc}>{x.desc}</div>
                <div style={s.levelBottom}>
                  <span style={s.levelLink}>
                    {x.disabled ? "Yakında" : "Aç →"}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={s.sectionAlt}>
        <div style={s.sectionInner}>
          <h2 style={s.h2}>Neler Bulacaksın?</h2>
          <div style={s.featureGrid}>
            <div style={s.featureCard}>
              <div style={s.featureIcon}>🧠</div>
              <div style={s.featureTitle}>Basit ve net anlatım</div>
              <div style={s.featureText}>
                Kafa karıştıran uzun teoriler yerine kısa, anlaşılır açıklamalar.
              </div>
            </div>
            <div style={s.featureCard}>
              <div style={s.featureIcon}>🗣️</div>
              <div style={s.featureTitle}>Cümle odaklı öğrenme</div>
              <div style={s.featureText}>
                Kelime ezberlemek yerine cümle içinde kullanmayı öğrenirsin.
              </div>
            </div>
            <div style={s.featureCard}>
              <div style={s.featureIcon}>🎯</div>
              <div style={s.featureTitle}>Hedefe yönelik</div>
              <div style={s.featureText}>
                Günlük hayat, iş ve resmi işlemlerde işine yarayacak kalıplar.
              </div>
            </div>
            <div style={s.featureCard}>
              <div style={s.featureIcon}>🔁</div>
              <div style={s.featureTitle}>Tekrar ve pekiştirme</div>
              <div style={s.featureText}>
                Aynı yapıları farklı örneklerle tekrar ederek kalıcı öğrenme.
              </div>
            </div>
          </div>

          <div style={s.bigCTABox}>
            <div>
              <div style={s.bigCTATitle}>Hazırsan başlayalım</div>
              <div style={s.bigCTAText}>
                A0 seviyesinde Alfabe + Telaffuz + İlk kelimeler ile başla.
              </div>
            </div>
            <a href="/tr/a0" style={s.bigCTAButton}>
              A0’a Git →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* -------------------- HEADER -------------------- */

function Header() {
  return (
    <header style={s.header}>
      <div style={s.headerInner}>
        <a href="/tr" style={s.brand}>
          <span style={s.brandMark}>N</span>
          <span style={s.brandText}>NederLearn</span>
        </a>

        {/* Desktop Nav */}
        <nav style={s.navDesktop} aria-label="Üst Menü">
          <a href="#levels" style={s.navLink}>
            Seviyeler
          </a>
          <a href="/tr/a0" style={s.navLink}>
            A0’a Başla
          </a>
          <a href="/tr/login" style={s.navBtn}>
            Giriş Yap
          </a>
          <a href="/tr/register" style={s.navBtnGhost}>
            Kayıt Ol
          </a>

          {/* Dil butonu (şimdilik TR) */}
          <span style={s.langPill} title="Dil">
            🇹🇷 TR
          </span>
        </nav>

        {/* Mobile menu (CSS-only) */}
        <div style={s.navMobile}>
          <input id="mnav" type="checkbox" style={s.mobileToggle} />
          <label htmlFor="mnav" style={s.burger} aria-label="Menüyü Aç/Kapat">
            <span style={s.burgerLine} />
            <span style={s.burgerLine} />
            <span style={s.burgerLine} />
          </label>

          <div style={s.mobilePanel}>
            <div style={s.mobilePanelTop}>
              <div style={s.mobileTitle}>Menü</div>
              <label htmlFor="mnav" style={s.mobileClose} aria-label="Kapat">
                ✕
              </label>
            </div>

            <a href="#levels" style={s.mobileLink}>
              Seviyeler
            </a>
            <a href="/tr/a0" style={s.mobileLink}>
              A0’a Başla
            </a>
            <a href="/tr/login" style={s.mobileLinkStrong}>
              Giriş Yap
            </a>
            <a href="/tr/register" style={s.mobileLinkStrong}>
              Kayıt Ol
            </a>

            <div style={s.mobileLangRow}>
              <span style={s.mobileLangLabel}>Dil:</span>
              <span style={s.langPill}>🇹🇷 TR</span>
            </div>

            <div style={s.mobileHint}>
              Not: Diğer diller daha sonra eklenecek. Şu an ana dil Türkçe.
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

/* -------------------- FOOTER -------------------- */

function Footer() {
  return (
    <footer style={s.footer}>
      <div style={s.footerInner}>
        <div style={s.footerLeft}>
          <div style={s.footerBrand}>NederLearn</div>
          <div style={s.footerText}>
            Hollandaca öğrenmek için seviyeli, pratik odaklı eğitim platformu.
          </div>
        </div>

        <div style={s.footerCols}>
          <div style={s.footerCol}>
            <div style={s.footerColTitle}>Hızlı</div>
            <a style={s.footerLink} href="/tr/a0">
              A0’a Başla
            </a>
            <a style={s.footerLink} href="/tr/a0/alfabe">
              A0 Alfabe (Sesli)
            </a>
          </div>

          <div style={s.footerCol}>
            <div style={s.footerColTitle}>Hesap</div>
            <a style={s.footerLink} href="/tr/login">
              Giriş Yap
            </a>
            <a style={s.footerLink} href="/tr/register">
              Kayıt Ol
            </a>
          </div>
        </div>
      </div>

      <div style={s.footerBottom}>
        <span>© {new Date().getFullYear()} NederLearn</span>
        <span style={s.footerDot}>•</span>
        <span style={s.footerMini}>Mobil uyumlu • Hızlı • Basit</span>
      </div>
    </footer>
  );
}

/* -------------------- STYLES -------------------- */

const s: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#070A12",
    color: "rgba(255,255,255,0.92)",
  },

  header: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    backdropFilter: "blur(10px)",
    background: "rgba(7,10,18,0.7)",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },
  headerInner: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "14px 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  brand: {
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: 10,
    color: "rgba(255,255,255,0.95)",
    fontWeight: 900,
    letterSpacing: 0.2,
  },
  brandMark: {
    width: 36,
    height: 36,
    borderRadius: 12,
    display: "grid",
    placeItems: "center",
    background: "linear-gradient(135deg, rgba(120,140,255,0.95), rgba(0,200,255,0.55))",
    color: "#0B1020",
    fontWeight: 1000,
  },
  brandText: { fontSize: 16 },

  navDesktop: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  navLink: {
    textDecoration: "none",
    color: "rgba(255,255,255,0.78)",
    padding: "10px 10px",
    borderRadius: 12,
    fontWeight: 800,
  },
  navBtn: {
    textDecoration: "none",
    color: "#0B1020",
    background: "rgba(120,140,255,0.95)",
    padding: "10px 12px",
    borderRadius: 12,
    fontWeight: 1000,
  },
  navBtnGhost: {
    textDecoration: "none",
    color: "rgba(255,255,255,0.9)",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    padding: "10px 12px",
    borderRadius: 12,
    fontWeight: 1000,
  },
  langPill: {
    marginLeft: 6,
    padding: "8px 10px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.10)",
    fontWeight: 900,
    fontSize: 12,
    color: "rgba(255,255,255,0.9)",
  },

  navMobile: {
    display: "none",
    position: "relative",
  },
  mobileToggle: {
    display: "none",
  },
  burger: {
    cursor: "pointer",
    width: 44,
    height: 40,
    borderRadius: 12,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    display: "grid",
    placeItems: "center",
    gap: 4,
    padding: "8px 10px",
  },
  burgerLine: {
    display: "block",
    width: 18,
    height: 2,
    background: "rgba(255,255,255,0.9)",
    borderRadius: 999,
  },

  mobilePanel: {
    position: "absolute",
    right: 0,
    top: 52,
    width: 300,
    maxWidth: "calc(100vw - 32px)",
    background: "rgba(10,14,26,0.98)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 16,
    padding: 14,
    boxShadow: "0 20px 80px rgba(0,0,0,0.55)",
    display: "none",
  },
  mobilePanelTop: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  mobileTitle: { fontWeight: 1000 },
  mobileClose: {
    cursor: "pointer",
    width: 36,
    height: 36,
    borderRadius: 12,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    display: "grid",
    placeItems: "center",
    fontWeight: 1000,
  },
  mobileLink: {
    display: "block",
    textDecoration: "none",
    color: "rgba(255,255,255,0.86)",
    padding: "10px 10px",
    borderRadius: 12,
    fontWeight: 900,
  },
  mobileLinkStrong: {
    display: "block",
    textDecoration: "none",
    color: "rgba(255,255,255,0.95)",
    padding: "10px 10px",
    borderRadius: 12,
    fontWeight: 1000,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.10)",
    marginTop: 8,
  },
  mobileLangRow: {
    marginTop: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    paddingTop: 12,
    borderTop: "1px solid rgba(255,255,255,0.08)",
  },
  mobileLangLabel: { opacity: 0.75, fontWeight: 900 },
  mobileHint: { marginTop: 10, fontSize: 12, opacity: 0.65, lineHeight: 1.5 },

  hero: {
    position: "relative",
    padding: "36px 0 10px",
    overflow: "hidden",
  },
  heroInner: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "0 16px",
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    gap: 18,
  },
  heroLeft: {
    borderRadius: 20,
    padding: 18,
  },
  heroRight: {
    borderRadius: 20,
    padding: 18,
  },
  heroGlow: {
    position: "absolute",
    inset: "-40% -20% auto -20%",
    height: 520,
    background:
      "radial-gradient(closest-side, rgba(120,140,255,0.22), rgba(0,200,255,0.10), transparent 70%)",
    filter: "blur(6px)",
    pointerEvents: "none",
  },

  pill: {
    display: "inline-block",
    padding: "8px 10px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.10)",
    fontWeight: 900,
    fontSize: 12,
    marginBottom: 12,
  },
  h1: {
    fontSize: 44,
    lineHeight: 1.05,
    margin: "0 0 10px",
    letterSpacing: -0.8,
    fontWeight: 1100,
  },
  gradText: {
    background:
      "linear-gradient(135deg, rgba(120,140,255,0.98), rgba(0,200,255,0.7))",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  },
  lead: { margin: 0, opacity: 0.85, lineHeight: 1.7, fontSize: 15 },

  ctaRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 16,
    alignItems: "center",
  },
  ctaPrimary: {
    textDecoration: "none",
    background: "rgba(120,140,255,0.95)",
    color: "#0B1020",
    padding: "12px 14px",
    borderRadius: 14,
    fontWeight: 1100,
  },
  ctaSecondary: {
    textDecoration: "none",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    color: "rgba(255,255,255,0.92)",
    padding: "12px 14px",
    borderRadius: 14,
    fontWeight: 1000,
  },
  ctaGhost: {
    textDecoration: "none",
    color: "rgba(255,255,255,0.75)",
    padding: "12px 10px",
    borderRadius: 14,
    fontWeight: 1000,
  },

  trustRow: {
    marginTop: 18,
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 10,
  },
  trustItem: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: 12,
    borderRadius: 16,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  trustIcon: {
    width: 34,
    height: 34,
    borderRadius: 14,
    display: "grid",
    placeItems: "center",
    background: "rgba(0,200,255,0.12)",
    border: "1px solid rgba(0,200,255,0.18)",
  },
  trustTitle: { fontWeight: 1100, fontSize: 13 },
  trustText: { opacity: 0.7, fontSize: 12, marginTop: 2 },

  cardBig: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 20,
    padding: 16,
  },
  cardBigTop: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  cardBigBadge: {
    padding: "6px 10px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.10)",
    fontWeight: 1000,
    fontSize: 12,
  },
  cardBigTitle: { fontWeight: 1100 },

  steps: { display: "grid", gap: 10, marginTop: 10 },
  step: {
    display: "flex",
    gap: 10,
    alignItems: "flex-start",
    padding: 12,
    borderRadius: 16,
    background: "rgba(0,0,0,0.18)",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  stepNum: {
    width: 28,
    height: 28,
    borderRadius: 10,
    display: "grid",
    placeItems: "center",
    background: "rgba(120,140,255,0.18)",
    border: "1px solid rgba(120,140,255,0.22)",
    fontWeight: 1100,
  },
  stepTitle: { fontWeight: 1100, fontSize: 13 },
  stepText: { opacity: 0.72, fontSize: 12, marginTop: 2, lineHeight: 1.5 },

  cardBigBottom: { marginTop: 12 },
  inlineBtn: {
    display: "inline-block",
    textDecoration: "none",
    background: "rgba(0,200,255,0.12)",
    border: "1px solid rgba(0,200,255,0.18)",
    color: "rgba(255,255,255,0.92)",
    padding: "10px 12px",
    borderRadius: 14,
    fontWeight: 1000,
  },
  miniNote: { marginTop: 8, fontSize: 12, opacity: 0.65, lineHeight: 1.5 },

  miniGrid: {
    marginTop: 12,
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 10,
  },
  miniCard: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 18,
    padding: 14,
  },
  miniTitle: { fontWeight: 1100, marginBottom: 6 },
  miniText: { opacity: 0.75, fontSize: 13, lineHeight: 1.55 },

  section: { padding: "26px 0 10px" },
  sectionAlt: { padding: "26px 0 50px" },
  sectionInner: { maxWidth: 1100, margin: "0 auto", padding: "0 16px" },
  h2: { margin: 0, fontSize: 26, fontWeight: 1100, letterSpacing: -0.2 },
  sectionLead: { margin: "8px 0 0", opacity: 0.72, lineHeight: 1.6 },

  levelGrid: {
    marginTop: 14,
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: 12,
  },
  levelCard: {
    textDecoration: "none",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 18,
    padding: 14,
    color: "rgba(255,255,255,0.92)",
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  levelCardDisabled: {
    opacity: 0.65,
    cursor: "not-allowed",
  },
  levelTop: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 10,
  },
  levelTitle: { fontWeight: 1100, lineHeight: 1.2 },
  badge: {
    padding: "6px 10px",
    borderRadius: 999,
    fontWeight: 1100,
    fontSize: 12,
    whiteSpace: "nowrap",
  },
  badgeLive: {
    background: "rgba(120,140,255,0.18)",
    border: "1px solid rgba(120,140,255,0.22)",
  },
  badgeMuted: {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.10)",
  },
  levelDesc: { opacity: 0.75, fontSize: 13, lineHeight: 1.55 },
  levelBottom: { marginTop: 2, display: "flex", justifyContent: "flex-end" },
  levelLink: { fontWeight: 1100, opacity: 0.85 },

  featureGrid: {
    marginTop: 14,
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: 12,
  },
  featureCard: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 18,
    padding: 14,
  },
  featureIcon: {
    width: 38,
    height: 38,
    borderRadius: 14,
    display: "grid",
    placeItems: "center",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.10)",
    marginBottom: 10,
  },
  featureTitle: { fontWeight: 1100 },
  featureText: { marginTop: 6, opacity: 0.75, fontSize: 13, lineHeight: 1.55 },

  bigCTABox: {
    marginTop: 16,
    background:
      "linear-gradient(135deg, rgba(120,140,255,0.18), rgba(0,200,255,0.10))",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 20,
    padding: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    flexWrap: "wrap",
  },
  bigCTATitle: { fontWeight: 1200, fontSize: 16 },
  bigCTAText: { opacity: 0.75, marginTop: 4, lineHeight: 1.55, fontSize: 13 },
  bigCTAButton: {
    textDecoration: "none",
    background: "rgba(120,140,255,0.95)",
    color: "#0B1020",
    padding: "12px 14px",
    borderRadius: 14,
    fontWeight: 1100,
  },

  footer: {
    borderTop: "1px solid rgba(255,255,255,0.08)",
    padding: "28px 0 14px",
    marginTop: 10,
    background: "rgba(0,0,0,0.18)",
  },
  footerInner: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "0 16px",
    display: "flex",
    justifyContent: "space-between",
    gap: 18,
    flexWrap: "wrap",
  },
  footerLeft: { maxWidth: 420 },
  footerBrand: { fontWeight: 1200, fontSize: 16 },
  footerText: { marginTop: 8, opacity: 0.72, lineHeight: 1.6, fontSize: 13 },

  footerCols: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 180px))",
    gap: 14,
  },
  footerColTitle: { fontWeight: 1100, marginBottom: 8 },
  footerCol: {},
  footerLink: {
    display: "block",
    textDecoration: "none",
    color: "rgba(255,255,255,0.78)",
    padding: "6px 0",
    fontWeight: 900,
    fontSize: 13,
  },

  footerBottom: {
    maxWidth: 1100,
    margin: "14px auto 0",
    padding: "12px 16px 0",
    borderTop: "1px solid rgba(255,255,255,0.08)",
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    alignItems: "center",
    opacity: 0.75,
    fontSize: 12,
  },
  footerDot: { opacity: 0.45 },
  footerMini: { opacity: 0.8 },

  /* --------- Responsive tweaks (inline CSS trick with media queries yok)
     Next.js inline style'da media query yok.
     Bu yüzden mobil menü görünürlüğünü basitçe "display" ile yönetemiyoruz.
     Çözüm: Desktop nav her zaman görünür olmaz; ama pratikte mobilde de çalışır.
     Yine de mobil hamburgeri göstermek için küçük bir CSS blokunu globals.css'e eklemek ideal.
     Sen istemediğin için burada dokunmuyorum.
  */
};

/*
  NOT:
  Inline style ile media query kullanılamadığı için “navDesktop/ navMobile” responsive
  değişimi için en doğru yer app/globals.css.

  Eğer istersen sonraki mesajda sana globals.css’e EKLENECEK minicik kodu veririm:
  - 900px altında navDesktop gizle
  - navMobile göster
  - checkbox açıkken mobilePanel göster
*/
