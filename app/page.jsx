// app/page.jsx
import Link from "next/link";

export default function Page() {
  const stats = [
    { value: "120+", label: "Ders" },
    { value: "300+", label: "Quiz" },
    { value: "5", label: "Dil" },
  ];

  const highlights = [
    {
      title: "Kısa dersler",
      desc: "Günde 10 dakika ile ilerleme. Her ders net, pratik ve hedef odaklı.",
      icon: "⚡️",
    },
    {
      title: "Sesli pratik",
      desc: "Alfabe ve telaffuz alıştırmalarıyla kulağın hızla alışır.",
      icon: "🔊",
    },
    {
      title: "A0 → B1 planı",
      desc: "Seviyelere göre düzenli akış: A0’dan başlayıp adım adım B1’e.",
      icon: "🧭",
    },
  ];

  const testimonials = [
    {
      name: "Merve A.",
      city: "Rotterdam",
      text: "Günlük 10 dakikayla düzenli ilerledim. Kısa ve net dersler çok iyi.",
      stars: 5,
    },
    {
      name: "Emre K.",
      city: "Utrecht",
      text: "Quizler sayesinde kelimeler kalıcı oldu. Tasarım da çok rahat.",
      stars: 5,
    },
    {
      name: "Zeynep S.",
      city: "Amsterdam",
      text: "Sesli pratik bölümü mükemmel. Telaffuzum belirgin şekilde gelişti.",
      stars: 5,
    },
  ];

  return (
    <main className="min-h-screen">
      {/* BACKDROP */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[#07080d]" />
        <div className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-indigo-600/20 blur-[90px]" />
        <div className="absolute top-20 right-[-120px] h-[540px] w-[540px] rounded-full bg-emerald-500/15 blur-[100px]" />
        <div className="absolute bottom-[-180px] left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[110px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
      </div>

      {/* CONTAINER */}
      <div className="mx-auto w-full max-w-6xl px-5 pb-16 pt-20 sm:pt-24">
        {/* HERO CARD */}
        <section className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(99,102,241,0.18),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(16,185,129,0.14),transparent_55%)]" />

          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                Yeni: NederLearn yayında
              </div>

              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Hollandaca Öğren
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
                Dersler, quizler ve sesli pratik ile A0’dan B1’e kadar adım adım ilerle.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/dersler"
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-black shadow-sm transition hover:opacity-90"
                >
                  Hemen Başla
                </Link>

                <Link
                  href="/alfabe"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                >
                  Alfabe (Sesli)
                </Link>
              </div>

              {/* STATS */}
              <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-white/10 bg-black/25 p-4 backdrop-blur"
                  >
                    <div className="text-2xl font-semibold text-white">{s.value}</div>
                    <div className="mt-1 text-xs text-white/60">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="relative rounded-3xl border border-white/10 bg-black/25 p-5 backdrop-blur sm:p-6">
              <div className="grid gap-3 sm:grid-cols-2">
                <MiniCard title="Günlük hedef" value="10 dk" />
                <MiniCard title="Seri" value="3 gün" />
                <MiniCard title="Ortalama skor" value="84%" />
                <MiniCard title="Son ders" value="A1 · 05" />
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/65">
                İpucu: Her gün 10 dakika + 1 quiz = hızlı ilerleme.
              </div>
            </div>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="mt-10 grid gap-4 md:grid-cols-3">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-lg">
                  {h.icon}
                </div>
                <div>
                  <div className="text-base font-semibold text-white">{h.title}</div>
                  <p className="mt-1 text-sm leading-relaxed text-white/70">{h.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* TESTIMONIALS */}
        <section className="mt-12">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Memnuniyet yazıları
            </h2>
            <p className="mt-2 text-sm text-white/70">
              Gerçek kullanıcıların deneyimlerinden kısa notlar.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/30 text-sm font-semibold text-white/80">
                    {t.name
                      .split(" ")
                      .slice(0, 2)
                      .map((x) => x[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-white/55">{t.city}</div>
                  </div>
                </div>

                <div className="mt-3 flex gap-1 text-sm text-white/70">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                <p className="mt-3 text-sm leading-relaxed text-white/70">{t.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function MiniCard({ title, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-xs text-white/55">{title}</div>
      <div className="mt-1 text-lg font-semibold text-white">{value}</div>
    </div>
  );
}
