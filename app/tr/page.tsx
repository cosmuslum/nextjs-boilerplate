"use client";

import React, { useMemo, useState } from "react";

type Lang = "tr" | "en" | "es" | "ar" | "nl";

const LANGS: { code: Lang; label: string; flag: string; href: string }[] = [
  { code: "tr", label: "Türkçe", flag: "🇹🇷", href: "/tr" },
  { code: "en", label: "English", flag: "🇬🇧", href: "/en" },
  { code: "es", label: "Español", flag: "🇪🇸", href: "/es" },
  { code: "ar", label: "العربية", flag: "🇸🇦", href: "/ar" },
  { code: "nl", label: "Nederlands", flag: "🇳🇱", href: "/nl" },
];

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
    badge: "Aktif",
  },
  {
    title: "A1 – Temel",
    desc: "Günlük konuşmalar, tanışma, soru sorma ve temel gramer.",
    href: "/tr/a1",
    badge: "Yakında",
    disabled: true,
  },
  {
    title: "A2 – Orta",
    desc: "Daha uzun cümleler, zamanlar, günlük senaryolar ve pratikler.",
    href: "/tr/a2",
    badge: "Yakında",
    disabled: true,
  },
  {
    title: "B1 – Orta-İleri",
    desc: "Akıcılık, iş/okul senaryoları, metin anlama ve yazma-dinleme pratikleri.",
    href: "/tr/b1",
    badge: "Yakında",
    disabled: true,
  },
];

export default function TrHomePage() {
  const [langOpen, setLangOpen] = useState(false);

  // dışarı tıklayınca dil menüsünü kapat
  useMemo(() => {
    if (typeof window === "undefined") return;
    const onClick = (e: any) => {
      const el = e?.target as HTMLElement | null;
      if (!el) return;
      if (el.closest?.("[data-langwrap]")) return;
      setLangOpen(false);
    };
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  return (
    <main style={s.page}>
      {/* HEADER */}
      <header style={s.header}>
        <div style={s.headerInner}>
          <a href="/tr" style={s.brand} aria-label="NederLearn">
            <span style={s.brandMark}>N</span>
            <span style={s.brandText}>NederLearn</span>
          </a>

          {/* Desktop nav */}
          <nav style={s.navDesktop} aria-label="Üst Menü">
            <a href="#levels" style={s.navLink}>
              Seviyeler
            </a>
            <a href="#nasil" style={s.navLink}>
              Nasıl çalışır?
            </a>
            <a href="#sss" style={s.navLink}>
              SSS
            </a>

            {/* Dil menüsü */}
            <div style={{ position: "relative" }} data-langwrap>
              <button
                type="button"
                style={s.langBtn}
                onClick={() => setLangOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={langOpen}
                title="Dil seç"
              >
                <span style={{ fontSize: 16 }}>🌐</span>
                <span style={{ fontWeight: 1000 }}>TR</span>
                <span style={{ opacity: 0.75 }}>▾</span>
              </button>

              {langOpen && (
                <div style={s.langMenu} role="menu">
                  {LANGS.map((l) => (
                    <a
                      key={l.code}
                      href={l.href}
                      style={s.langItem}
                      role="menuitem"
                      onClick={() => setLangOpen(false)}
                    >
                      <span style={{ width: 22, display: "inline-block" }}>
                        {l.flag}
                      </span>
                      <span>{l.label}</span>
                    </a>
                  ))}
                  <div style={s.langHint}>
                    Amaç: <b>Hollandaca</b> öğrenmek ✅
                  </div>
                </div>
              )}
            </div>

            {/* Giriş ikonu */}
            <a href="/tr/login" style={s.iconBtn} aria-label="Giriş Yap" title="Giriş Yap">
              👤
            </a>
          </nav>

          {/* Mobile nav (hamburger) */}
          <div style={s.navMobile}>
            <a href="/tr/login" style={s.iconBtn} aria-label="Giriş Yap" title="Giriş Yap">
              👤
            </a>

            <input id="mnav" type="checkbox" style={s.mobileToggle} />

            <label htmlFor="mnav" style={s.burger} aria-label="Menüyü Aç/Kapat" title="Menü">
              <span style={s.burgerLine} />
              <span style={s.burgerLine} />
              <span style={s.burgerLine} />
            </label>

            <div style={s.mobilePanel}>
              <div style={s.mobileTop}>
                <div style={{ fontWeight: 1000 }}>Menü</div>
                <label htmlFor="mnav" style={s.mobileClose} aria-label="Kapat" title="Kapat">
                  ✕
                </label>
              </div>

              <a href="#levels" style={s.mobileLink}>
                Seviyeler
              </a>
              <a href="#nasil" style={s.mobileLink}>
                Nasıl çalışır?
              </a>
              <a href="#sss" style={s.mobileLink}>
                SSS
              </a>

              <div style={s.mobileDivider} />

              <div style={s.mobileSectionTitle}>Dil</div>
              <div style={s.mobileLangGrid}>
                {LANGS.map((l) => (
                  <a key={l.code} href={l.href} style={s.mobileLangItem}>
                    <span>{l.flag}</span>
                    <span style={{ fontWeight: 900 }}>{l.label}</span>
                  </a>
                ))}
              </div>

              <div style={s.mobileHint}>
                Bu sayfa Türkçe. Hedef: <b>Hollandaca</b> öğretmek.
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section style={s.hero}>
        <div style={s.container}>
          <div className="force-hero" style={s.heroGrid}>
            <div style={s.heroLeft}>
              <div style={s.kicker}>🇳🇱 Hollandaca Öğren • A0 → B1</div>
              <h1 style={s.h1}>
                NederLearn ile <span style={s.h1Accent}>adım adım</span> Hollandaca öğren.
              </h1>
              <p style={s.lead}>
                Sıfırdan başlayıp düzenli ders akışı ile ilerle. Kısa, anlaşılır anlatımlar + bol pratik.
              </p>

              <div style={s.ctaRow}>
                <a href="/tr/a0" style={s.primaryBtn}>
                  A0’a Başla
                </a>
                <a href="/tr/a0/alfabe" style={s.secondaryBtn}>
                  Alfabe (Sesli)
                </a>
              </div>

              <div style={s.badgeRow}>
                <span style={s.badge}>📱 Mobil uyumlu</span>
                <span style={s.badge}>🔊 Sesli pratik</span>
                <span style={s.badge}>🧩 Bölüm bölüm</span>
              </div>
            </div>

            <div style={s.heroCard}>
              <div style={s.heroCardTop}>
                <div style={{ fontWeight: 1000 }}>Bugün</div>
                <div style={s.pill}>A0</div>
              </div>

              <div style={s.heroCardMain}>
                <div style={s.heroCardTitle}>Başlangıç planı</div>

                <div style={s.planItem}>
                  <span style={s.planNum}>1</span>
                  <div>
                    <div style={s.planTitle}>Alfabe</div>
                    <div style={s.planText}>Harfleri dinle + tekrar et</div>
                  </div>
                </div>

                <div style={s.planItem}>
                  <span style={s.planNum}>2</span>
                  <div>
                    <div style={s.planTitle}>Kelimeler</div>
                    <div style={s.planText}>Günlük temel kelimeler</div>
                  </div>
                </div>

                <div style={s.planItem}>
                  <span style={s.planNum}>3</span>
                  <div>
                    <div style={s.planTitle}>Cümleler</div>
                    <div style={s.planText}>Basit kalıplarla pratik</div>
                  </div>
                </div>

                <a href="/tr/a0/alfabe" style={s.fullBtn}>
                  Alfabe sayfasına git →
                </a>

                <div style={s.smallNote}>
                  Not: Ses tarayıcı üzerinden çalışır (Chrome/Edge önerilir).
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEVELS */}
      <section id="levels" style={s.section}>
        <div style={s.container}>
          <h2 style={s.h2}>Seviyeler</h2>
          <p style={s.sub}>
            Önce A0 içeriğini tamamen bitireceğiz. Sonra A1/A2/B1 açılacak.
          </p>

          <div className="force-3" style={s.levelGrid}>
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
                aria-disabled={x.disabled ? true : undefined}
              >
                <div style={s.levelTop}>
                  <div style={s.levelBadge}>{x.badge}</div>
                  <div style={s.levelArrow}>{x.disabled ? "⏳" : "→"}</div>
                </div>
                <div style={s.levelTitle}>{x.title}</div>
                <div style={s.levelDesc}>{x.desc}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* HOW */}
      <section id="nasil" style={s.sectionAlt}>
        <div style={s.container}>
          <h2 style={s.h2}>Nasıl çalışır?</h2>
          <p style={s.sub}>
            Kısa ders + örnek + pratik. Hedef: Hollandacayı günlük hayatta kullanmak.
          </p>

          <div className="force-2" style={s.stepsGrid}>
            {[
              { icon: "📘", title: "Dersi oku", desc: "Kısa ve net anlatım. Gereksiz uzun teori yok." },
              { icon: "🔊", title: "Dinle & tekrar et", desc: "Tarayıcı seslendirme ile telaffuz duy." },
              { icon: "✅", title: "Mini pratik", desc: "Kelime-kalıp-cümle alıştırmalarıyla pekiştir." },
              { icon: "⏱️", title: "Düzenli ol", desc: "Her gün 10–15 dakika yeter. İstikrarlı ilerlersin." },
            ].map((st) => (
              <div key={st.title} style={s.stepCard}>
                <div style={s.stepIcon}>{st.icon}</div>
                <div>
                  <div style={s.stepTitle}>{st.title}</div>
                  <div style={s.stepDesc}>{st.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sss" style={s.section}>
        <div style={s.container}>
          <h2 style={s.h2}>SSS</h2>
          <div style={s.faqGrid}>
            <details style={s.faqItem}>
              <summary style={s.faqSum}>Ses neden bazen çıkmıyor?</summary>
              <div style={s.faqBody}>
                Bazı tarayıcılar ilk tıklamada izin ister. “Alfabe (Sesli)” sayfasında bir kez butona bas.
                Chrome/Edge en iyi çalışır.
              </div>
            </details>

            <details style={s.faqItem}>
              <summary style={s.faqSum}>Şimdilik sadece Türkçe mi?</summary>
              <div style={s.faqBody}>
                Evet. Önce Türkçe içeriği tamamlayıp sonra İngilizce/İspanyolca/Arapça/Nederlandca sürümlerini ekleyeceğiz.
              </div>
            </details>

            <details style={s.faqItem}>
              <summary style={s.faqSum}>Hızlı ilerlemek için öneri?</summary>
              <div style={s.faqBody}>
                Her gün 10–15 dk: (1) dinle (2) tekrar et (3) kısa cümle kur. Düzenli tekrar en hızlı yoldur.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={s.footer}>
        <div style={s.container}>
          <div style={s.footerTop}>
            <div style={s.footerBrand}>NederLearn</div>
            <div style={s.footerLinks}>
              <a href="#levels" style={s.footerLink}>Seviyeler</a>
              <a href="/tr/a0/alfabe" style={s.footerLink}>Alfabe (Sesli)</a>
              <a href="/tr/login" style={s.footerLink}>Giriş</a>
            </div>
          </div>
          <div style={s.footerCopy}>© {new Date().getFullYear()} NederLearn</div>
        </div>
      </footer>
    </main>
  );
}

const s: Record<string, React.CSSProperties> = {
  page: { minHeight: "100vh", background: "#070A12", color: "rgba(255,255,255,0.92)" },

  header: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    backdropFilter: "blur(10px)",
    background: "rgba(7,10,18,0.72)",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },
  headerInner: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "12px 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  brand: { display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: "white" },
  brandMark: {
    width: 36,
    height: 36,
    borderRadius: 12,
    display: "grid",
    placeItems: "center",
    fontWeight: 1000,
    background: "rgba(120,140,255,0.95)",
    color: "#0B1020",
  },
  brandText: { fontWeight: 1000, letterSpacing: 0.2 },

  navDesktop: { display: "flex", alignItems: "center", gap: 12 },
  navLink: {
    padding: "10px 10px",
    borderRadius: 10,
    color: "rgba(255,255,255,0.86)",
    textDecoration: "none",
    fontWeight: 800,
    fontSize: 14,
  },

  langBtn: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "10px 12px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.06)",
    color: "rgba(255,255,255,0.92)",
    fontWeight: 1000,
    cursor: "pointer",
  },
  langMenu: {
    position: "absolute",
    right: 0,
    top: "calc(100% + 10px)",
    width: 220,
    borderRadius: 14,
    background: "rgba(10,14,24,0.98)",
    border: "1px solid rgba(255,255,255,0.12)",
    boxShadow: "0 12px 40px rgba(0,0,0,0.35)",
    padding: 10,
  },
  langItem: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "10px 10px",
    borderRadius: 12,
    textDecoration: "none",
    color: "rgba(255,255,255,0.95)",
    fontWeight: 900,
  },
  langHint: {
    marginTop: 8,
    fontSize: 12,
    opacity: 0.75,
    padding: "10px 10px",
    borderRadius: 12,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
  },

  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    display: "grid",
    placeItems: "center",
    textDecoration: "none",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.06)",
    color: "rgba(255,255,255,0.92)",
    fontSize: 18,
  },

  navMobile: { display: "block", position: "relative" },
  mobileToggle: { display: "none" },

  burger: {
    width: 44,
    height: 44,
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.06)",
    display: "grid",
    placeItems: "center",
    cursor: "pointer",
    marginLeft: 10,
  },
  burgerLine: { display: "block", width: 18, height: 2, background: "rgba(255,255,255,0.92)", borderRadius: 99, margin: 2 },

  mobilePanel: {
    position: "absolute",
    right: 0,
    top: 54,
    width: 320,
    maxWidth: "calc(100vw - 32px)",
    background: "rgba(7,10,18,0.98)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 16,
    padding: 14,
    boxShadow: "0 16px 50px rgba(0,0,0,0.55)",
    display: "none",
  },
  mobileTop: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 },
  mobileClose: {
    cursor: "pointer",
    width: 36,
    height: 36,
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.06)",
    display: "grid",
    placeItems: "center",
    fontWeight: 1000,
  },
  mobileLink: {
    display: "block",
    padding: "10px 10px",
    borderRadius: 12,
    textDecoration: "none",
    color: "rgba(255,255,255,0.92)",
    fontWeight: 900,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.04)",
    marginTop: 8,
  },
  mobileDivider: { height: 1, background: "rgba(255,255,255,0.10)", margin: "14px 0 10px" },
  mobileSectionTitle: { fontSize: 12, opacity: 0.75, fontWeight: 1000, marginBottom: 8 },
  mobileLangGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 },
  mobileLangItem: {
    padding: "10px 10px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.04)",
    color: "rgba(255,255,255,0.92)",
    textDecoration: "none",
    display: "flex",
    gap: 10,
    alignItems: "center",
  },
  mobileHint: {
    marginTop: 10,
    fontSize: 12,
    opacity: 0.75,
    lineHeight: 1.5,
    padding: "10px 10px",
    borderRadius: 12,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
  },

  container: { maxWidth: 1100, margin: "0 auto", padding: "0 16px" },

  hero: { padding: "40px 0 10px" },
  heroGrid: { display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 20, alignItems: "start" },
  heroLeft: {},
  kicker: {
    display: "inline-block",
    padding: "8px 10px",
    borderRadius: 999,
    background: "rgba(120,140,255,0.14)",
    border: "1px solid rgba(120,140,255,0.22)",
    fontWeight: 1000,
    fontSize: 13,
    marginBottom: 12,
  },
  h1: { fontSize: 44, lineHeight: 1.05, margin: "6px 0 12px", fontWeight: 1000 },
  h1Accent: {
    background: "linear-gradient(90deg, rgba(120,140,255,1), rgba(0,200,255,1))",
    WebkitBackgroundClip: "text",
    color: "transparent",
  },
  lead: { opacity: 0.78, lineHeight: 1.65, fontSize: 16, marginBottom: 16 },

  ctaRow: { display: "flex", gap: 12, flexWrap: "wrap", marginTop: 10 },
  primaryBtn: {
    background: "rgba(120,140,255,0.95)",
    color: "#0B1020",
    padding: "12px 14px",
    borderRadius: 14,
    textDecoration: "none",
    fontWeight: 1000,
  },
  secondaryBtn: {
    background: "rgba(255,255,255,0.06)",
    color: "rgba(255,255,255,0.92)",
    padding: "12px 14px",
    borderRadius: 14,
    textDecoration: "none",
    fontWeight: 1000,
    border: "1px solid rgba(255,255,255,0.12)",
  },

  badgeRow: { display: "flex", flexWrap: "wrap", gap: 10, marginTop: 16 },
  badge: {
    padding: "8px 10px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.10)",
    fontSize: 13,
    fontWeight: 900,
    opacity: 0.92,
  },

  heroCard: {
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
    padding: 16,
  },
  heroCardTop: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 },
  pill: {
    fontSize: 12,
    fontWeight: 1000,
    padding: "6px 10px",
    borderRadius: 999,
    background: "rgba(0,200,255,0.12)",
    border: "1px solid rgba(0,200,255,0.18)",
  },
  heroCardMain: { display: "grid", gap: 10 },
  heroCardTitle: { fontSize: 16, fontWeight: 1000, marginBottom: 6 },

  planItem: {
    display: "grid",
    gridTemplateColumns: "28px 1fr",
    gap: 10,
    alignItems: "center",
    padding: "10px 10px",
    borderRadius: 14,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  planNum: {
    width: 24,
    height: 24,
    borderRadius: 10,
    display: "grid",
    placeItems: "center",
    fontWeight: 1000,
    background: "rgba(120,140,255,0.18)",
    border: "1px solid rgba(120,140,255,0.22)",
  },
  planTitle: { fontWeight: 1000 },
  planText: { fontSize: 12, opacity: 0.72, marginTop: 2 },

  fullBtn: {
    display: "block",
    textAlign: "center",
    marginTop: 12,
    padding: "10px 12px",
    borderRadius: 14,
    textDecoration: "none",
    fontWeight: 1000,
    color: "rgba(255,255,255,0.95)",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
  },
  smallNote: { marginTop: 10, fontSize: 12, opacity: 0.65, lineHeight: 1.5 },

  section: { padding: "34px 0" },
  sectionAlt: {
    padding: "34px 0",
    background: "rgba(255,255,255,0.02)",
    borderTop: "1px solid rgba(255,255,255,0.06)",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
  },
  h2: { fontSize: 26, margin: 0, fontWeight: 1000 },
  sub: { opacity: 0.75, marginTop: 8, lineHeight: 1.6 },

  levelGrid: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginTop: 14 },
  levelCard: {
    borderRadius: 16,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.04)",
    padding: 14,
    textDecoration: "none",
    color: "rgba(255,255,255,0.95)",
    minHeight: 140,
    display: "grid",
    gap: 10,
  },
  levelCardDisabled: { opacity: 0.55, cursor: "not-allowed" },
  levelTop: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  levelBadge: {
    fontSize: 12,
    fontWeight: 1000,
    padding: "6px 10px",
    borderRadius: 999,
    background: "rgba(120,140,255,0.14)",
    border: "1px solid rgba(120,140,255,0.22)",
  },
  levelArrow: { fontSize: 18, opacity: 0.9 },
  levelTitle: { fontSize: 16, fontWeight: 1000, lineHeight: 1.25 },
  levelDesc: { fontSize: 13, opacity: 0.78, lineHeight: 1.55 },

  stepsGrid: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12, marginTop: 14 },
  stepCard: {
    borderRadius: 16,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.04)",
    padding: 14,
    display: "flex",
    gap: 12,
    alignItems: "flex-start",
  },
  stepIcon: { fontSize: 22 },
  stepTitle: { fontWeight: 1000, marginBottom: 6 },
  stepDesc: { opacity: 0.78, lineHeight: 1.55, fontSize: 13 },

  faqGrid: { display: "grid", gap: 10, marginTop: 14 },
  faqItem: {
    borderRadius: 16,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.04)",
    padding: 12,
  },
  faqSum: { cursor: "pointer", fontWeight: 1000 },
  faqBody: { marginTop: 10, opacity: 0.8, lineHeight: 1.6, fontSize: 13 },

  footer: { borderTop: "1px solid rgba(255,255,255,0.08)", padding: "26px 0" },
  footerTop: { display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", alignItems: "center" },
  footerBrand: { fontWeight: 1000 },
  footerLinks: { display: "flex", gap: 14, flexWrap: "wrap" },
  footerLink: { color: "rgba(255,255,255,0.88)", textDecoration: "none", fontWeight: 900, opacity: 0.9 },
  footerCopy: { marginTop: 12, fontSize: 12, opacity: 0.65 },
};
