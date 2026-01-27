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

const LEVELS = [
  {
    title: "A0 – Sıfırdan Başla",
    desc: "Alfabe, temel sesler, ilk kelimeler ve çok basit cümleler.",
    href: "/tr/a0",
    badge: "Yeni başlayan",
  },
  {
    title: "A1 – Temel",
    desc: "Günlük konuşmalar, soru-cevap kalıpları, temel gramer.",
    href: "/tr/a1",
    badge: "Yakında",
    disabled: true,
  },
  {
    title: "A2 – Orta",
    desc: "Daha uzun cümleler, zamanlar, günlük senaryolar.",
    href: "/tr/a2",
    badge: "Yakında",
    disabled: true,
  },
  {
    title: "B1 – Orta-İleri",
    desc: "Akıcı anlatım, iş/okul senaryoları, yazma ve dinleme.",
    href: "/tr/b1",
    badge: "Yakında",
    disabled: true,
  },
] as const;

function cx(...x: Array<string | false | undefined>) {
  return x.filter(Boolean).join(" ");
}

export default function TrHomePage() {
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Dışarı tıklayınca kapansın
  useMemo(() => {
    if (typeof window === "undefined") return;
    const onClick = (e: any) => {
      const target = e?.target as HTMLElement | null;
      if (!target) return;
      if (target.closest?.("[data-langmenu]")) return;
      setLangOpen(false);
    };
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  return (
    <main style={s.page}>
      {/* ÜST BAR */}
      <header style={s.header}>
        <div style={s.headerInner}>
          {/* Logo */}
          <a href="/tr" style={s.brand}>
            <span style={s.brandMark}>N</span>
            <span style={s.brandText}>NederLearn</span>
          </a>

          {/* Desktop nav */}
          <nav style={s.navDesktop} aria-label="Üst menü">
            <a href="/tr#a0" style={s.navLink}>
              Dersler
            </a>
            <a href="/tr#nasil" style={s.navLink}>
              Nasıl çalışır?
            </a>
            <a href="/tr#sss" style={s.navLink}>
              SSS
            </a>

            {/* Dil menüsü */}
            <div style={{ position: "relative" }} data-langmenu>
              <button
                type="button"
                onClick={() => setLangOpen((v) => !v)}
                style={s.langBtn}
                aria-haspopup="menu"
                aria-expanded={langOpen}
              >
                <span style={{ fontSize: 16 }}>🌐</span>
                <span style={{ fontWeight: 900 }}>Türkçe</span>
                <span style={{ opacity: 0.8 }}>▾</span>
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
                    Amaç: <b>Hollandaca</b> öğrenmek
                  </div>
                </div>
              )}
            </div>

            {/* Sağ ikonlar */}
            <a href="/tr/login" style={s.iconBtn} title="Giriş Yap" aria-label="Giriş Yap">
              👤
            </a>
          </nav>

          {/* Mobil sağ */}
          <div style={s.navMobileRight}>
            <a href="/tr/login" style={s.iconBtn} title="Giriş Yap" aria-label="Giriş Yap">
              👤
            </a>
            <button
              type="button"
              style={s.burger}
              aria-label="Menüyü Aç/Kapat"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span style={s.burgerLine} />
              <span style={s.burgerLine} />
              <span style={s.burgerLine} />
            </button>
          </div>
        </div>

        {/* Mobil menü paneli */}
        {mobileOpen && (
          <div style={s.mobilePanel}>
            <div style={s.mobilePanelInner}>
              <a href="/tr#a0" style={s.mobileLink} onClick={() => setMobileOpen(false)}>
                Dersler
              </a>
              <a href="/tr#nasil" style={s.mobileLink} onClick={() => setMobileOpen(false)}>
                Nasıl çalışır?
              </a>
              <a href="/tr#sss" style={s.mobileLink} onClick={() => setMobileOpen(false)}>
                SSS
              </a>

              <div style={s.mobileDivider} />

              <div style={s.mobileSectionTitle}>Dil</div>
              <div style={s.mobileLangGrid}>
                {LANGS.map((l) => (
                  <a
                    key={l.code}
                    href={l.href}
                    style={s.mobileLangItem}
                    onClick={() => setMobileOpen(false)}
                  >
                    <span>{l.flag}</span>
                    <span style={{ fontWeight: 800 }}>{l.label}</span>
                  </a>
                ))}
              </div>

              <div style={s.mobileHint}>
                Bu sayfa Türkçe. Hedef: <b>Hollandaca</b> öğretmek ✅
              </div>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section style={s.hero}>
        <div style={s.heroInner} className="force-hero">
          <div>
            <div style={s.kicker}>Hollandaca Öğren • A0 → B1</div>
            <h1 style={s.h1}>
              NederLearn ile <span style={s.h1Accent}>Hollandaca</span>yı adım adım öğren.
            </h1>
            <p style={s.lead}>
              Sıfırdan başlayıp düzenli ders akışı ile ilerle. Kısa, anlaşılır anlatımlar +
              bol pratik.
            </p>

            <div style={s.heroCtas}>
              <a href="/tr/a0" style={s.primaryBtn}>
                A0’a Başla
              </a>
              <a href="/tr/a0/alfabe" style={s.secondaryBtn}>
                Alfabe (Sesli)
              </a>
            </div>

            <div style={s.heroBadges}>
              <span style={s.badge}>📱 Mobil uyumlu</span>
              <span style={s.badge}>🔊 Sesli pratik</span>
              <span style={s.badge}>🧩 Bölüm bölüm</span>
            </div>
          </div>

          {/* Sağ görsel kutu */}
          <div style={s.heroCard}>
            <div style={s.heroCardTop}>
              <div style={s.heroMiniTitle}>Bugün</div>
              <div style={s.heroMiniRight}>A0</div>
            </div>

            <div style={s.heroCardMain}>
              <div style={s.heroCardBig}>Alfabe</div>
              <div style={s.heroCardText}>
                Harfleri dinle, tekrar et. Sonra hece → kelime → cümle akışına geç.
              </div>
            </div>

            <div style={s.heroCardList}>
              <div style={s.heroCardItem}>
                <span>1</span>
                <b>Dinle</b>
                <small>Hollandaca telaffuz</small>
              </div>
              <div style={s.heroCardItem}>
                <span>2</span>
                <b>Tekrar et</b>
                <small>Yavaş / net</small>
              </div>
              <div style={s.heroCardItem}>
                <span>3</span>
                <b>Pratik yap</b>
                <small>Kısa egzersizler</small>
              </div>
            </div>

            <a href="/tr/a0/alfabe" style={s.heroCardBtn}>
              Alfabe sayfasına git →
            </a>
          </div>
        </div>
      </section>

      {/* SEVİYELER */}
      <section id="a0" style={s.section}>
        <div style={s.sectionHead}>
          <h2 style={s.h2}>Seviyeler</h2>
          <p style={s.sub}>
            A0’dan başlayıp B1’e kadar adım adım. Önce A0’ı sağlam bitireceğiz.
          </p>
        </div>

        <div style={s.levelGrid} className="force-3">
          {LEVELS.map((x) => (
            <a
              key={x.title}
              href={x.disabled ? "#" : x.href}
              style={{
                ...s.levelCard,
                ...(x.disabled ? s.levelCardDisabled : null),
              }}
              aria-disabled={x.disabled ? true : undefined}
              onClick={(e) => {
                if (x.disabled) e.preventDefault();
              }}
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
      </section>

      {/* NASIL ÇALIŞIR */}
      <section id="nasil" style={s.section}>
        <div style={s.sectionHead}>
          <h2 style={s.h2}>Nasıl çalışır?</h2>
          <p style={s.sub}>
            Kısa ders + örnek + pratik. Hedef: Hollandacayı günlük hayatta kullanmak.
          </p>
        </div>

        <div style={s.stepsGrid} className="force-2">
          {[
            {
              title: "1) Dersi oku",
              desc: "Kısa ve net anlatımlar. Gereksiz uzun teori yok.",
              icon: "📘",
            },
            {
              title: "2) Dinle & tekrar et",
              desc: "Tarayıcı seslendirme ile Hollandaca telaffuzu duy.",
              icon: "🔊",
            },
            {
              title: "3) Mini pratik",
              desc: "Kelime-kalıp-cümle alıştırmalarıyla pekiştir.",
              icon: "✅",
            },
            {
              title: "4) Biriktir",
              desc: "Her gün 10–15 dk. Düzenli tekrar = hızlanma.",
              icon: "⏱️",
            },
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
      </section>

      {/* SSS */}
      <section id="sss" style={s.section}>
        <div style={s.sectionHead}>
          <h2 style={s.h2}>SSS</h2>
          <p style={s.sub}>En çok sorulanlar.</p>
        </div>

        <div style={s.faq}>
          <details style={s.faqItem}>
            <summary style={s.faqSum}>Ses neden bazen çıkmıyor?</summary>
            <div style={s.faqBody}>
              Bazı tarayıcılar ilk tıklamada izin ister. “Alfabe (Sesli)” sayfasında bir kez
              butona bas. Chrome/Edge en iyi çalışır.
            </div>
          </details>

          <details style={s.faqItem}>
            <summary style={s.faqSum}>Şimdilik sadece Türkçe mi?</summary>
            <div style={s.faqBody}>
              Evet. Önce Türkçe içeriği tamamlayıp sonra İngilizce/İspanyolca/Arapça/Nederlandca
              sürümlerini ekleyeceğiz.
            </div>
          </details>

          <details style={s.faqItem}>
            <summary style={s.faqSum}>Hedefim hızlı konuşmak. Ne yapmalıyım?</summary>
            <div style={s.faqBody}>
              Her gün 10–15 dk: (1) dinle (2) tekrar et (3) kısa cümle kur. Düzenli tekrar en
              hızlı yol.
            </div>
          </details>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={s.footer}>
        <div style={s.footerInner}>
          <div style={s.footerBrand}>
            <span style={s.brandMarkSmall}>N</span>
            <div>
              <div style={{ fontWeight: 1000 }}>NederLearn</div>
              <div style={{ opacity: 0.7, fontSize: 13 }}>
                Hollandaca öğrenmek için sade ve pratik platform
              </div>
            </div>
          </div>

          <div style={s.footerLinks}>
            <a href="/tr#a0" style={s.footerLink}>Dersler</a>
            <a href="/tr/a0/alfabe" style={s.footerLink}>Alfabe (Sesli)</a>
            <a href="/tr/login" style={s.footerLink}>Giriş</a>
          </div>

          <div style={s.footerCopy}>
            © {new Date().getFullYear()} NederLearn
          </div>
        </div>
      </footer>
    </main>
  );
}

const s: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#070A12",
    color: "white",
  },

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

  brand: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    textDecoration: "none",
    color: "white",
  },
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

  navDesktop: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  navLink: {
    padding: "10px 10px",
    borderRadius: 10,
    color: "rgba(255,255,255,0.9)",
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
    fontWeight: 900,
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
    fontWeight: 800,
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

  navMobileRight: {
    display: "none",
    alignItems: "center",
    gap: 10,
  },
  burger: {
    width: 44,
    height: 44,
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.06)",
    display: "grid",
    placeItems: "center",
    cursor: "pointer",
  },
  burgerLine: {
    display: "block",
    width: 18,
    height: 2,
    background: "rgba(255,255,255,0.92)",
    borderRadius: 99,
    margin: 2,
  },

  mobilePanel: {
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(7,10,18,0.92)",
    backdropFilter: "blur(10px)",
  },
  mobilePanelInner: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "10px 16px 16px",
    display: "grid",
    gap: 10,
  },
  mobileLink: {
    padding: "12px 12px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.05)",
    color: "rgba(255,255,255,0.95)",
    fontWeight: 900,
    textDecoration: "none",
  },
  mobileDivider: {
    height: 1,
    background: "rgba(255,255,255,0.10)",
    margin: "6px 0",
  },
  mobileSectionTitle: { fontSize: 12, opacity: 0.7, fontWeight: 900, marginTop: 2 },
  mobileLangGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 10,
  },
  mobileLangItem: {
    padding: "12px 12px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.05)",
    color: "rgba(255,255,255,0.95)",
    textDecoration: "none",
    display: "flex",
    gap: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  mobileHint: {
    fontSize: 12,
    opacity: 0.75,
    lineHeight: 1.5,
    padding: "10px 12px",
    borderRadius: 12,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
  },

  hero: { padding: "40px 0 10px" },
  heroInner: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "0 16px",
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    gap: 20,
    alignItems: "start",
  },
  kicker: {
    display: "inline-block",
    padding: "8px 10px",
    borderRadius: 999,
    background: "rgba(120,140,255,0.14)",
    border: "1px solid rgba(120,140,255,0.22)",
    color: "rgba(255,255,255,0.92)",
    fontWeight: 900,
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

  heroCtas: { display: "flex", gap: 12, flexWrap: "wrap", marginTop: 10 },
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
  heroBadges: { display: "flex", flexWrap: "wrap", gap: 10, marginTop: 16 },
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
  heroMiniTitle: { fontSize: 12, opacity: 0.7, fontWeight: 1000 },
  heroMiniRight: {
    fontSize: 12,
    fontWeight: 1000,
    padding: "6px 10px",
    borderRadius: 999,
    background: "rgba(0,200,255,0.12)",
    border: "1px solid rgba(0,200,255,0.18)",
  },
  heroCardMain: { padding: "6px 0 10px" },
  heroCardBig: { fontSize: 22, fontWeight: 1000, marginBottom: 8 },
  heroCardText: { fontSize: 13, opacity: 0.78, lineHeight: 1.55 },

  heroCardList: { display: "grid", gap: 10, marginTop: 10 },
  heroCardItem: {
    display: "grid",
    gridTemplateColumns: "28px 1fr",
    gap: 10,
    alignItems: "center",
    padding: "10px 10px",
    borderRadius: 14,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  heroCardBtn: {
    display: "block",
    marginTop: 12,
    textAlign: "center",
    padding: "10px 12px",
    borderRadius: 14,
    textDecoration: "none",
    fontWeight: 1000,
    color: "rgba(255,255,255,0.95)",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
  },

  section: { padding: "34px 0" },
  sectionHead: { maxWidth: 1100, margin: "0 auto", padding: "0 16px", marginBottom: 14 },
  h2: { fontSize: 26, margin: 0, fontWeight: 1000 },
  sub: { opacity: 0.75, marginTop: 8, lineHeight: 1.6 },

  levelGrid: { maxWidth: 1100, margin: "0 auto", padding: "0 16px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 },
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
  levelCardDisabled: { opacity: 0.55 },
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

  stepsGrid: { maxWidth: 1100, margin: "0 auto", padding: "0 16px", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 },
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

  faq: { maxWidth: 1100, margin: "0 auto", padding: "0 16px", display: "grid", gap: 10 },
  faqItem: {
    borderRadius: 16,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.04)",
    padding: 12,
  },
  faqSum: { cursor: "pointer", fontWeight: 1000 },
  faqBody: { marginTop: 10, opacity: 0.8, lineHeight: 1.6, fontSize: 13 },

  footer: { borderTop: "1px solid rgba(255,255,255,0.08)", padding: "26px 0" },
  footerInner: { maxWidth: 1100, margin: "0 auto", padding: "0 16px", display: "grid", gap: 14 },
  footerBrand: { display: "flex", gap: 10, alignItems: "center" },
  brandMarkSmall: {
    width: 32,
    height: 32,
    borderRadius: 12,
    display: "grid",
    placeItems: "center",
    fontWeight: 1000,
    background: "rgba(120,140,255,0.95)",
    color: "#0B1020",
  },
  footerLinks: { display: "flex", gap: 14, flexWrap: "wrap" },
  footerLink: { color: "rgba(255,255,255,0.88)", textDecoration: "none", fontWeight: 900, opacity: 0.9 },
  footerCopy: { fontSize: 12, opacity: 0.65 },

  // Responsive: JS ile değil, CSS ile (globals.css + medya)
};

// Mobil görünüm: üst menüyü otomatik uyarlamak için min-width bazlı inline hile
// (Next/React inline style ile media query yok; o yüzden CSS tarafında da destekleyeceğiz.)
if (typeof window !== "undefined") {
  const w = window.innerWidth;
  // 900 altı mobil sayalım:
  // Desktop nav gizle, mobil sağ göster
  if (w < 900) {
    // @ts-ignore
    s.navDesktop.display = "none";
    // @ts-ignore
    s.navMobileRight.display = "flex";
    // Grid kolonları tek kolona düşür
    // @ts-ignore
    s.heroInner.gridTemplateColumns = "1fr";
    // @ts-ignore
    s.levelGrid.gridTemplateColumns = "1fr";
    // @ts-ignore
    s.stepsGrid.gridTemplateColumns = "1fr";
    // @ts-ignore
    s.h1.fontSize = 34;
  }
}
