import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import WhoFor from "../components/WhoFor";
import FeatureShowcase from "../components/FeatureShowcase";

export default function Home() {
  return (
    <div className="min-h-screen">
      <BackgroundFX />

      <Navbar />

      <main className="relative mx-auto max-w-6xl px-4 pb-20 pt-10 md:pt-14">
        <Hero />

        <div className="mt-10 md:mt-14" />
        <Testimonials />

        <div className="mt-10 md:mt-14" />
        <WhoFor />

        <div className="mt-10 md:mt-14" />
        <FeatureShowcase />
      </main>

      <Footer />
    </div>
  );
}

function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#05060a]" />
      <div className="absolute -left-32 top-[-120px] h-[480px] w-[480px] rounded-full bg-blue-600/25 blur-[90px]" />
      <div className="absolute right-[-160px] top-[40px] h-[520px] w-[520px] rounded-full bg-violet-600/25 blur-[100px]" />
      <div className="absolute left-[30%] top-[55%] h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
              Yeni: NederLearn yayında
            </div>

            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Hollandaca Öğren
            </h1>

            <p className="text-white/70">
              Dersler, quizler ve sesli pratik ile A0&apos;dan başlayıp B1&apos;e kadar düzenli ilerle.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="/dersler"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black shadow hover:bg-white/90"
              >
                Hemen Başla
              </a>
              <a
                href="/dersler"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10"
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

          <div className="w-full md:max-w-md">
            <div className="rounded-[22px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">NederLearn</div>
                <div className="text-white/60">•••</div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <MiniCard title="Günlük hedef" value="10 dk" />
                <MiniCard title="Seri" value="3 gün" />
                <MiniCard title="Ortalama skor" value="84%" />
                <MiniCard title="Son ders" value="A1 · 05" />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}<div style={{ height: 400, background: "red", color: "white" }}>
  TEST ALANI — EĞER BUNU GÖRMÜYORSAN BU DOSYA ÇALIŞMIYOR
</div>

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[18px] border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-xl">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="mt-1 text-sm text-white/60">{label}</div>
    </div>
  );
}

function MiniCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-[18px] border border-white/10 bg-white/5 p-4">
      <div className="text-xs text-white/60">{title}</div>
      <div className="mt-1 text-lg font-semibold">{value}</div>
    </div>
  );
}
