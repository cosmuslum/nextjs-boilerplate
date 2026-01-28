export default function HomePage() {
  return (
    <div className="py-8 md:py-10">
      <BackgroundFX />

      <div className="space-y-10 md:space-y-14">
        <Hero />

        <SectionDivider />

        <Highlights />

        <SectionDivider />

        <LessonsPreview />

        <SectionDivider />

        <Testimonials />

        <SectionDivider />

        <LanguageAccordion />

        <SectionDivider />

        <BottomAbout />
      </div>
    </div>
  );
}

/* ----------------------------- FX / Helpers ----------------------------- */

function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#05060a]" />

      <div className="absolute -left-32 top-[-140px] h-[520px] w-[520px] rounded-full bg-blue-600/18 blur-[100px]" />
      <div className="absolute right-[-200px] top-[40px] h-[560px] w-[560px] rounded-full bg-violet-600/16 blur-[110px]" />
      <div className="absolute left-[28%] top-[55%] h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/45" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.06),transparent_45%)]" />
    </div>
  );
}

function SectionDivider() {
  return (
    <div className="flex items-center gap-3">
      <div className="h-px flex-1 bg-white/10" />
      <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
      <div className="h-px flex-1 bg-white/10" />
    </div>
  );
}

function GlassCard({ children, className = "" }) {
  return (
    <div
      className={[
        "rounded-[26px] border border-white/10 bg-white/5 backdrop-blur-xl",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_70px_rgba(0,0,0,0.40)]",
        className
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
      {children}
    </span>
  );
}

/* --------------------------------- HERO --------------------------------- */

function Hero() {
  return (
    <section className="relative">
      <GlassCard className="p-6 md:p-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Left */}
          <div className="max-w-2xl space-y-4">
            <Pill>
              <span className="h-2 w-2 rounded-full bg-emerald-400/90" />
              Yeni: NederLearn yayında
            </Pill>

            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Hollandaca Öğren
            </h1>

            <p className="text-white/70 leading-relaxed">
              Dersler, quizler ve sesli pratik ile A0’dan B1’e kadar düzenli ilerle.
              Mobilde de hızlı, temiz ve akıcı.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="/dersler"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black shadow hover:bg-white/90 transition"
              >
                Hemen Başla
              </a>
              <a
                href="/giris"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
              >
                Giriş / Kayıt
              </a>
              <a
                href="/alfabe"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
              >
                Alfabe (Sesli)
              </a>
            </div>

            <div className="grid gap-3 pt-6 sm:grid-cols-3">
              <StatCard value="120+" label="Ders" />
              <StatCard value="300+" label="Quiz" />
              <StatCard value="5" label="Dil" />
            </div>
          </div>

          {/* Right: compact dashboard */}
          <div className="w-full md:max-w-md">
            <div className="rounded-[22px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">NederLearn</div>
                <div className="text-white/50">•••</div>
              </div>

              {/* Removed "Günlük hedef" here (you wanted it gone before) */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <MiniCard title="Seri" value="3 gün" />
                <MiniCard title="Ortalama skor" value="84%" />
                <MiniCard title="Son ders" value="A1 · 05" />
                <MiniCard title="Hedef" value="B1" />
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs text-white/60">Bugünün önerisi</div>
                <div className="mt-1 text-sm font-semibold">
                  “Selamlaşma & günlük ifadeler”
                </div>

                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[66%] rounded-full bg-white/70" />
                </div>
                <div className="mt-2 text-xs text-white/60">İlerleme: %66</div>

                <div className="mt-4 flex items-center gap-2 text-xs text-white/60">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-400/80" />
                  Mobil uyumlu hızlı deneyim
                </div>
              </div>
            </div>
          </div>
        </div>
      </GlassCard>
    </section>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-[18px] border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-xl">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="mt-1 text-sm text-white/60">{label}</div>
    </div>
  );
}

function MiniCard({ title, value }) {
  return (
    <div className="rounded-[18px] border border-white/10 bg-white/5 p-4">
      <div className="text-xs text-white/60">{title}</div>
      <div className="mt-1 text-lg font-semibold">{value}</div>
    </div>
  );
}

/* ------------------------------ HIGHLIGHTS ------------------------------ */

function Highlights() {
  const items = [
    {
      title: "Kısa ve net dersler",
      desc: "Her ders tek bir hedefe odaklı. Mobilde 5 dakikada bile ilerlersin."
    },
    {
      title: "Quiz + tekrar sistemi",
      desc: "Hızlı quizlerle öğrendiğini kalıcı hale getir. İlerleme görünür."
    },
    {
      title: "Sesli pratik",
      desc: "Telaffuzu güçlendir. Alfabe ve temel cümlelerde ses desteği."
    }
  ];

  return (
    <section>
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Profesyonel öğrenme akışı</h2>
          <p className="mt-2 text-white/60 max-w-2xl">
            Tasarımı bozmadan, daha zengin ve güven veren bir ana sayfa.
          </p>
        </div>

        <Pill>
          <span className="h-2 w-2 rounded-full bg-sky-400/80" />
          Mobilde mükemmel
        </Pill>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {items.map((it) => (
          <GlassCard
            key={it.title}
            className="p-5 md:p-6 hover:bg-white/[0.06] transition"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-lg font-semibold">{it.title}</div>
                <div className="mt-2 text-sm text-white/65 leading-relaxed">
                  {it.desc}
                </div>
              </div>
              <div className="shrink-0 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/60">
                Pro
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2 text-xs text-white/55">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/30" />
              Hızlı • Temiz • Akıcı
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ LESSONS PREVIEW ------------------------------ */

function LessonsPreview() {
  const cards = [
    { level: "A0", title: "Alfabe & sesler", meta: "Sesli pratik" },
    { level: "A1", title: "Selamlaşma", meta: "Günlük ifadeler" },
    { level: "A1", title: "Tanışma", meta: "Kendini anlat" },
    { level: "A2", title: "Rutinler", meta: "Geniş zaman" }
  ];

  return (
    <section>
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Derslere hızlı giriş</h2>
          <p className="mt-2 text-white/60 max-w-2xl">
            Kısa kartlar: mobilde kolay dokunma alanı, masaüstünde geniş görünüm.
          </p>
        </div>

        <a
          href="/dersler"
          className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition"
        >
          Tüm dersler →
        </a>
      </div>

      {/* All cards same visual style */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c, idx) => (
          <a
            key={`${c.title}-${idx}`}
            href="/dersler"
            className="group block"
          >
            <GlassCard className="p-5 md:p-6 hover:bg-white/[0.06] transition">
              <div className="flex items-center justify-between">
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                  {c.level}
                </div>
                <div className="text-white/40 text-xs group-hover:text-white/60 transition">
                  →
                </div>
              </div>

              <div className="mt-4 text-lg font-semibold">{c.title}</div>
              <div className="mt-2 text-sm text-white/60">{c.meta}</div>

              <div className="mt-5 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                <div className="h-full w-[58%] rounded-full bg-white/60" />
              </div>
              <div className="mt-2 text-xs text-white/55">Örnek ilerleme</div>
            </GlassCard>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ TESTIMONIALS ------------------------------ */

function Testimonials() {
  const list = [
    {
      name: "Merve A.",
      city: "Rotterdam",
      text:
        "Dersler kısa ve hedef odaklı. Mobilde 10 dakika ayırarak bile düzenli ilerleyebildim."
    },
    {
      name: "Emre K.",
      city: "Utrecht",
      text:
        "Quiz sistemi çok iyi. Öğrendiklerim kalıcı oldu. Tasarım da gerçekten profesyonel."
    },
    {
      name: "Zeynep S.",
      city: "Amsterdam",
      text:
        "Sesli pratik sayesinde telaffuzum düzeldi. Her şey sade ama çok güçlü."
    }
  ];

  return (
    <section>
      {/* Centered as you requested */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Memnuniyet yazıları</h2>
        <p className="mt-2 text-white/60">
          Gerçek kullanıcıların deneyimlerinden kısa notlar.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {list.map((t) => (
          <GlassCard key={t.name} className="p-5 md:p-6">
            <div className="flex items-center gap-3">
              <Avatar name={t.name} />
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs text-white/60">{t.city}</div>
              </div>
            </div>

            <div className="mt-4 text-sm text-white/70 leading-relaxed">
              {t.text}
            </div>

            <div className="mt-4 text-sm">★★★★★</div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}

function Avatar({ name }) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="h-10 w-10 rounded-full border border-white/10 bg-white/10 flex items-center justify-center font-semibold">
      {initials}
    </div>
  );
}

/* ------------------------------ LANG ACCORDION ------------------------------ */

function LanguageAccordion() {
  // purely UI, no i18n system forced
  return (
    <section>
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Dil seçimi</h2>
          <p className="mt-2 text-white/60 max-w-2xl">
            TR bölümüne tıklayınca aşağı doğru açılır ve içerik görünür.
          </p>
        </div>
        <Pill>
          <span className="h-2 w-2 rounded-full bg-amber-400/80" />
          Açılır liste
        </Pill>
      </div>

      <div className="mt-6">
        <details className="group rounded-[26px] border border-white/10 bg-white/5 backdrop-blur-xl">
          <summary className="cursor-pointer list-none p-5 md:p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70">
                TR
              </div>
              <div>
                <div className="font-semibold">Türkçe</div>
                <div className="text-xs text-white/60">
                  Diğer dilleri görmek için aç
                </div>
              </div>
            </div>
            <div className="text-white/60 group-open:rotate-180 transition">▼</div>
          </summary>

          <div className="px-5 pb-5 md:px-6 md:pb-6">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <LangItem code="EN" label="English" />
              <LangItem code="AR" label="العربية" />
              <LangItem code="NL" label="Nederlands" />
              <LangItem code="ES" label="Español" />
              <LangItem code="TR" label="Türkçe" />
            </div>

            <div className="mt-4 text-xs text-white/55">
              Not: Bu kısım UI’dır. İstersen sonraki adımda seçilen dili site genelinde
              gerçek çeviri sistemine bağlarız.
            </div>
          </div>
        </details>
      </div>
    </section>
  );
}

function LangItem({ code, label }) {
  return (
    <button
      type="button"
      className="text-left rounded-2xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition"
      onClick={() => {
        // şimdilik sadece UI
        alert(`${label} seçildi (UI)`);
      }}
    >
      <div className="flex items-center justify-between">
        <div className="font-semibold">{label}</div>
        <div className="text-xs text-white/60">{code}</div>
      </div>
      <div className="mt-1 text-xs text-white/55">Geliştirilebilir</div>
    </button>
  );
}

/* ------------------------------ ABOUT (BOTTOM, SIDE BY SIDE) ------------------------------ */

function BottomAbout() {
  return (
    <section>
      <div className="grid gap-4 md:grid-cols-5">
        {/* Left: About (as you wanted, left-aligned and not stacked below) */}
        <GlassCard className="p-6 md:col-span-3">
          <h3 className="text-xl font-semibold">Hakkımızda</h3>
          <p className="mt-3 text-white/70 leading-relaxed">
            NederLearn, Hollandaca öğrenmeyi sade ama güçlü bir deneyime dönüştürür.
            Kısa dersler, pratik tekrarlar ve mobilde akıcı kullanım ile hedefinize
            hızlı ilerlersiniz.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <MiniInfo title="Odak" value="Hızlı öğrenme" />
            <MiniInfo title="Tarz" value="Modern UI" />
            <MiniInfo title="Hedef" value="B1+ ilerleme" />
          </div>
        </GlassCard>

        {/* Right: CTA */}
        <GlassCard className="p-6 md:col-span-2">
          <h3 className="text-xl font-semibold">Bugün başlayalım</h3>
          <p className="mt-3 text-white/70 leading-relaxed">
            2 dakikada giriş yap, ilk dersi aç. Mobilde de masaüstünde de aynı kalite.
          </p>

          <div className="mt-5 flex flex-col gap-3">
            <a
              href="/dersler"
              className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90 transition text-center"
            >
              Derslere git
            </a>
            <a
              href="/giris"
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10 transition text-center"
            >
              Giriş / Kayıt
            </a>
          </div>

          <div className="mt-5 text-xs text-white/55">
            Admin paneli, profil ve rol sistemi hazır.
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

function MiniInfo({ title, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-xs text-white/60">{title}</div>
      <div className="mt-1 font-semibold">{value}</div>
    </div>
  );
}
