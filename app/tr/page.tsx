export default function TrHomePage() {
  return (
    <div style={s.wrap}>
      {/* HERO */}
      <section style={s.hero}>
        <div style={s.heroLeft}>
          <div style={s.badge}>🇳🇱 Hollandaca öğren • A0 → B1</div>

          <h1 style={s.h1}>
            <span style={s.h1Strong}>NederLearn</span> ile Hollandacayı
            <br />
            adım adım öğren.
          </h1>

          <p style={s.lead}>
            Türkçe anlatımlı, bol örnekli ve sesli destekli derslerle A0’dan başlayıp
            B1’e kadar ilerle. Mobilde hızlı, sade ve net.
          </p>

          <div style={s.ctaRow}>
            <a href="/tr/a0" style={s.ctaPrimary}>
              A0’dan Başla →
            </a>
            <a href="/tr/login" style={s.ctaGhost}>
              Giriş Yap
            </a>
          </div>

          <div style={s.statsRow}>
            <div style={s.stat}>
              <div style={s.statNum}>A0</div>
              <div style={s.statText}>Alfabe + Temel kelimeler</div>
            </div>
            <div style={s.stat}>
              <div style={s.statNum}>A1</div>
              <div style={s.statText}>Günlük konuşma kalıpları</div>
            </div>
            <div style={s.stat}>
              <div style={s.statNum}>A2–B1</div>
              <div style={s.statText}>Cümle kurma + pratik</div>
            </div>
          </div>
        </div>

        <div style={s.heroRight}>
          <div style={s.previewCard}>
            <div style={s.previewTop}>
              <div style={s.previewDot} />
              <div style={s.previewDot} />
              <div style={s.previewDot} />
            </div>

            <div style={s.previewBody}>
              <div style={s.previewTitle}>Bugünün mini ders hedefi</div>

              <div style={s.task}>
                <div style={s.taskIcon}>🔤</div>
                <div>
                  <div style={s.taskName}>Alfabe (Sesli)</div>
                  <div style={s.taskDesc}>
                    Harfleri dinle, tekrar et, örnekleri oku.
                  </div>
                </div>
              </div>

              <div style={s.task}>
                <div style={s.taskIcon}>🧠</div>
                <div>
                  <div style={s.taskName}>10 Kelime</div>
                  <div style={s.taskDesc}>Basit kelimeler + telaffuz.</div>
                </div>
              </div>

              <div style={s.task}>
                <div style={s.taskIcon}>💬</div>
                <div>
                  <div style={s.taskName}>5 Cümle</div>
                  <div style={s.taskDesc}>
                    “Ben…”, “Sen…”, “Bu…”, “Şu…” kalıpları.
                  </div>
                </div>
              </div>

              <a href="/tr/a0/alfabe" style={s.previewBtn}>
                Alfabe sayfasını aç →
              </a>

              <div style={s.previewHint}>
                Not: Sesli okuma tarayıcı üzerinden çalışır (Chrome/Edge önerilir).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ÖZELLİKLER */}
      <section style={s.section}>
        <h2 style={s.h2}>Nasıl öğretiyoruz?</h2>
        <p style={s.p}>
          “Az ama sürekli” mantığıyla: kısa ders + bol örnek + pratik + tekrar.
          Her bölümde hedef net, ilerleme görünür.
        </p>

        <div style={s.grid3}>
          <div style={s.card}>
            <div style={s.cardIcon}>🎧</div>
            <div style={s.cardTitle}>Sesli telaffuz</div>
            <div style={s.cardText}>
              Harfleri, kelimeleri ve cümleleri tarayıcıdan Hollandaca okuturuz.
            </div>
          </div>

          <div style={s.card}>
            <div style={s.cardIcon}>🧩</div>
            <div style={s.cardTitle}>Parça parça öğrenme</div>
            <div style={s.cardText}>
              A0 → A1 → A2 → B1 şeklinde modüller. Her modül ayrı hedeflerle gider.
            </div>
          </div>

          <div style={s.card}>
            <div style={s.cardIcon}>✅</div>
            <div style={s.cardTitle}>Bol örnek + pratik</div>
            <div style={s.cardText}>
              Her konuda çok sayıda örnek cümle, mini test ve tekrar alanı.
            </div>
          </div>
        </div>
      </section>

      {/* SEVİYELER */}
      <section style={s.section}>
        <h2 style={s.h2}>Seviyeler</h2>

        <div style={s.levelGrid}>
          <LevelCard
            title="A0 – Başlangıç"
            desc="Alfabe, sesler, temel kelimeler, basit tanışma."
            href="/tr/a0"
            tag="Yeni başlayan"
          />
          <LevelCard
            title="A1 – Temel"
            desc="Günlük konuşmalar, soru sorma, zamanlar (basit)."
            href="/tr/a1"
            tag="Günlük hayat"
          />
          <LevelCard
            title="A2 – Orta"
            desc="Daha uzun cümleler, bağlaçlar, pratik ağırlıklı."
            href="/tr/a2"
            tag="Akıcılık"
          />
          <LevelCard
            title="B1 – Orta-İleri"
            desc="İş/okul hayatı, metin anlama, kendini ifade."
            href="/tr/b1"
            tag="Hedef seviye"
          />
        </div>
      </section>

      {/* CTA ALT */}
      <section style={s.bottomCta}>
        <div style={s.bottomBox}>
          <div>
            <div style={s.bottomTitle}>Hazırsan başlayalım 🚀</div>
            <div style={s.bottomText}>
              İlk adım: A0 Alfabe (sesli). 10 dakikada temel at.
            </div>
          </div>
          <div style={s.bottomActions}>
            <a href="/tr/a0" style={s.ctaPrimary}>
              A0’a Git →
            </a>
            <a href="/tr/a0/alfabe" style={s.ctaGhost}>
              Alfabe (Sesli)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function LevelCard({
  title,
  desc,
  href,
  tag,
}: {
  title: string;
  desc: string;
  href: string;
  tag: string;
}) {
  return (
    <a href={href} style={s.levelCard}>
      <div style={s.levelTop}>
        <div style={s.levelTitle}>{title}</div>
        <div style={s.levelTag}>{tag}</div>
      </div>
      <div style={s.levelDesc}>{desc}</div>
      <div style={s.levelLink}>Aç →</div>
    </a>
  );
}

const s: Record<string, React.CSSProperties> = {
  wrap: { display: "flex", flexDirection: "column", gap: 28 },

  hero: {
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    gap: 18,
    alignItems: "stretch",
  },

  heroLeft: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 18,
    padding: 18,
    overflow: "hidden",
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 10px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(124,140,255,0.10)",
    color: "rgba(255,255,255,0.92)",
    fontWeight: 800,
    fontSize: 12,
  },

  h1: { margin: "14px 0 8px", lineHeight: 1.15, fontSize: 34 },
  h1Strong: { fontWeight: 950 },

  lead: { margin: 0, opacity: 0.78, lineHeight: 1.65, fontSize: 15 },

  ctaRow: { display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" },

  ctaPrimary: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#7c8cff",
    color: "#0b1020",
    padding: "12px 14px",
    borderRadius: 12,
    textDecoration: "none",
    fontWeight: 900,
    minWidth: 140,
  },

  ctaGhost: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255,255,255,0.06)",
    color: "rgba(255,255,255,0.92)",
    padding: "12px 14px",
    borderRadius: 12,
    textDecoration: "none",
    fontWeight: 900,
    border: "1px solid rgba(255,255,255,0.12)",
    minWidth: 140,
  },

  statsRow: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: 10,
    marginTop: 14,
  },

  stat: {
    padding: 12,
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.03)",
  },
  statNum: { fontSize: 16, fontWeight: 950 },
  statText: { fontSize: 12, opacity: 0.7, marginTop: 4, lineHeight: 1.35 },

  heroRight: { display: "flex" },

  previewCard: {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 18,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },

  previewTop: {
    height: 42,
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "0 14px",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.02)",
  },

  previewDot: {
    width: 10,
    height: 10,
    borderRadius: 999,
    background: "rgba(255,255,255,0.20)",
  },

  previewBody: { padding: 16, display: "flex", flexDirection: "column", gap: 12 },

  previewTitle: { fontWeight: 950, fontSize: 14 },

  task: {
    display: "flex",
    gap: 12,
    padding: 12,
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.03)",
  },
  taskIcon: { fontSize: 18 },
  taskName: { fontWeight: 900 },
  taskDesc: { fontSize: 12, opacity: 0.75, marginTop: 3, lineHeight: 1.35 },

  previewBtn: {
    marginTop: 4,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(0,200,255,0.12)",
    border: "1px solid rgba(0,200,255,0.18)",
    color: "rgba(255,255,255,0.92)",
    padding: "12px 14px",
    borderRadius: 12,
    textDecoration: "none",
    fontWeight: 900,
  },

  previewHint: { fontSize: 12, opacity: 0.6, lineHeight: 1.45 },

  section: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 18,
    padding: 18,
  },

  h2: { margin: 0, fontSize: 20 },
  p: { margin: "8px 0 0", opacity: 0.75, lineHeight: 1.65, fontSize: 14 },

  grid3: {
    marginTop: 14,
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: 12,
  },

  card: {
    padding: 14,
    borderRadius: 16,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.03)",
  },
  cardIcon: { fontSize: 20 },
  cardTitle: { marginTop: 8, fontWeight: 950 },
  cardText: { marginTop: 6, fontSize: 13, opacity: 0.75, lineHeight: 1.55 },

  levelGrid: {
    marginTop: 14,
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: 12,
  },

  levelCard: {
    textDecoration: "none",
    color: "inherit",
    padding: 16,
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.03)",
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },

  levelTop: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 10,
  },

  levelTitle: { fontWeight: 950, fontSize: 15, lineHeight: 1.2 },
  levelTag: {
    fontSize: 12,
    fontWeight: 900,
    padding: "6px 10px",
    borderRadius: 999,
    background: "rgba(124,140,255,0.12)",
    border: "1px solid rgba(124,140,255,0.20)",
    whiteSpace: "nowrap",
  },

  levelDesc: { fontSize: 13, opacity: 0.75, lineHeight: 1.55 },
  levelLink: { fontWeight: 900, opacity: 0.9 },

  bottomCta: { marginTop: 4 },

  bottomBox: {
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,0.10)",
    background:
      "linear-gradient(135deg, rgba(124,140,255,0.16), rgba(0,200,255,0.10))",
    padding: 18,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    flexWrap: "wrap",
  },

  bottomTitle: { fontWeight: 950, fontSize: 16 },
  bottomText: { marginTop: 6, fontSize: 13, opacity: 0.75, lineHeight: 1.55 },

  bottomActions: { display: "flex", gap: 10, flexWrap: "wrap" },
};

/**
 * Mobil uyum için: layout dışı CSS kullanmıyoruz, ama grid’ler mobilde tek kolona düşsün diye
 * en güvenlisi: küçük bir “media query” yerine, gridleri auto düzenlemek.
 * Next’in inline style’ında media query yok, bu yüzden pratik çözüm:
 * mobilde zaten dar ekranda grid kırılacağı için daha iyi olması adına
 * sayfayı basit tutuyoruz.
 *
 * Eğer istersen, sonraki adımda globals.css içine 10 satırlık media query ekleyip
 * gridleri kesin tek kolon yapacağım.
 */
