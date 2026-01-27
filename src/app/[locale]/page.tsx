"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("home");

  return (
    <main className="w-full min-h-[calc(100vh-72px)] px-4 py-14 md:py-20">
      <div className="w-full px-4 md:px-10 2xl:px-16">
        {/* HERO */}
        <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
          {/* ambient */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-28 -right-28 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          </div>

          <div className="relative p-8 md:p-12 lg:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* LEFT: content (CENTERED only this part) */}
              <div className="lg:col-span-6">
                <div className="mx-auto max-w-2xl text-center lg:text-left lg:mx-0">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm text-white/80">
                    {t("badge")}
                  </div>

                  <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
                    <span className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                      {t("title")}
                    </span>
                  </h1>

                  <p className="mt-5 text-white/70 text-base md:text-lg leading-relaxed">
                    {t("subtitle")}
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                    <Link
                      href="/tr/lessons"
                      className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold bg-white text-black hover:opacity-90 transition"
                    >
                      {t("cta.primary")}
                    </Link>

                    <a
                      href="#how"
                      className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold border border-white/20 text-white/90 hover:bg-white/10 transition"
                    >
                      {t("cta.secondary")}
                    </a>
                  </div>

                  <p className="mt-3 text-xs text-white/50">{t("cta.note")}</p>

                  {/* trust line */}
                  <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-4">
                    <div className="text-white font-semibold">{t("trust.title")}</div>
                    <div className="text-white/60 text-sm mt-1">{t("trust.subtitle")}</div>
                  </div>

                  {/* mini stats */}
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <StatCard value="120+" label={t("stats.items.lessons")} />
                    <StatCard value="300+" label={t("stats.items.quizzes")} />
                    <StatCard value="5" label={t("stats.items.languages")} />
                  </div>
                </div>
              </div>

              {/* RIGHT: premium mock card */}
              <div className="lg:col-span-6">
                <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl overflow-hidden">
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute -top-16 left-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
                    <div className="absolute -bottom-16 right-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
                  </div>

                  <div className="relative p-7 md:p-9">
                    <div className="flex items-center justify-between">
                      <div className="text-white font-semibold">DutchLearn</div>
                      <div className="flex gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <MiniCard title="Günlük hedef" value="10 dk" />
                      <MiniCard title="Seri" value="3 gün" />
                      <MiniCard title="Ortalama skor" value="84%" />
                      <MiniCard title="Son ders" value="A1 • 05" />
                    </div>

                    <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
                      <div className="text-white/80 text-sm font-semibold">Bugünün önerisi</div>
                      <div className="text-white text-lg font-bold mt-1">
                        “Selamlaşma & günlük ifadeler”
                      </div>
                      <div className="mt-4 h-2 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full w-2/3 bg-white/35 rounded-full" />
                      </div>
                      <div className="mt-2 text-white/50 text-xs">İlerleme: %66</div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      <Tag>Akıllı tekrar</Tag>
                      <Tag>Quiz</Tag>
                      <Tag>İlerleme</Tag>
                      <Tag>Çok dil</Tag>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="mt-12">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-white text-2xl md:text-3xl font-bold">
              {t("highlights.title")}
            </h2>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <InfoCard
              icon="🧭"
              title={t("highlights.items.h1Title")}
              text={t("highlights.items.h1Text")}
            />
            <InfoCard
              icon="📈"
              title={t("highlights.items.h2Title")}
              text={t("highlights.items.h2Text")}
            />
            <InfoCard
              icon="🌍"
              title={t("highlights.items.h3Title")}
              text={t("highlights.items.h3Text")}
            />
          </div>
        </section>

        {/* FEATURES (seninki) */}
        <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: "📚", title: t("features.easyTitle"), text: t("features.easyText") },
            { icon: "🧠", title: t("features.quizTitle"), text: t("features.quizText") },
            { icon: "🌍", title: t("features.langTitle"), text: t("features.langText") }
          ].map((f, i) => (
            <div
              key={i}
              className="p-7 rounded-3xl bg-white/5 border border-white/10 text-left backdrop-blur-xl shadow-lg transition-all hover:-translate-y-1 hover:bg-white/10 hover:border-white/20"
            >
              <h3 className="text-white font-bold text-xl flex items-center gap-2">
                <span className="text-2xl">{f.icon}</span> {f.title}
              </h3>
              <p className="text-white/60 mt-3 text-sm leading-relaxed">{f.text}</p>
            </div>
          ))}
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="mt-14">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-white text-2xl md:text-3xl font-bold">
              {t("how.title")}
            </h2>
            <div className="hidden md:block text-white/50 text-sm">
              {t("stats.title")}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <StepCard step="01" title={t("how.steps.step1Title")} text={t("how.steps.step1Text")} />
            <StepCard step="02" title={t("how.steps.step2Title")} text={t("how.steps.step2Text")} />
            <StepCard step="03" title={t("how.steps.step3Title")} text={t("how.steps.step3Text")} />
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="mt-14">
          <h2 className="text-white text-2xl md:text-3xl font-bold">
            {t("testimonials.title")}
          </h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <QuoteCard
              text={t("testimonials.items.t1Text")}
              name={t("testimonials.items.t1Name")}
              role={t("testimonials.items.t1Role")}
            />
            <QuoteCard
              text={t("testimonials.items.t2Text")}
              name={t("testimonials.items.t2Name")}
              role={t("testimonials.items.t2Role")}
            />
            <QuoteCard
              text={t("testimonials.items.t3Text")}
              name={t("testimonials.items.t3Name")}
              role={t("testimonials.items.t3Role")}
            />
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 pb-8 text-center text-white/40 text-xs">
        </footer>
      </div>
    </main>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 shadow-lg">
      <div className="text-white text-2xl font-extrabold">{value}</div>
      <div className="text-white/60 text-sm mt-1">{label}</div>
    </div>
  );
}

function StepCard({ step, title, text }: { step: string; title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 shadow-lg">
      <div className="text-white/40 text-sm font-semibold">STEP {step}</div>
      <h3 className="mt-2 text-white text-xl font-bold">{title}</h3>
      <p className="mt-3 text-white/60 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

function InfoCard({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 shadow-lg">
      <div className="text-2xl">{icon}</div>
      <h3 className="mt-3 text-white text-xl font-bold">{title}</h3>
      <p className="mt-3 text-white/60 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

function QuoteCard({ text, name, role }: { text: string; name: string; role: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 shadow-lg">
      <div className="text-white/70 text-sm leading-relaxed">“{text}”</div>
      <div className="mt-5 flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-white/10 border border-white/10" />
        <div>
          <div className="text-white font-semibold text-sm">{name}</div>
          <div className="text-white/50 text-xs">{role}</div>
        </div>
      </div>
    </div>
  );
}

function MiniCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="text-white/60 text-xs">{title}</div>
      <div className="mt-1 text-white text-xl font-extrabold">{value}</div>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1 rounded-full border border-white/15 bg-white/5 text-white/70 text-xs">
      {children}
    </span>
  );
}