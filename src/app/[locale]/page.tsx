// src/app/[locale]/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-14">
      {/* HERO */}
      <section className="rounded-[28px] border border-white/10 bg-white/5 p-7 md:p-10 backdrop-blur-xl">
        <div className="grid items-stretch gap-8 md:grid-cols-2">
          {/* LEFT */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
              <span className="opacity-80">Yeni:</span>
              <span className="font-semibold">NederLearn yayında</span>
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Hollandaca Öğren
            </h1>

            <p className="max-w-xl text-white/75">
              Dersler, pratik ve çok dilli destek ile hızlı ilerle. (Şimdilik TR ile başlıyoruz.)
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/tr/a0"
                className="rounded-xl bg-white px-5 py-3 font-bold text-black hover:opacity-90"
              >
                Hemen Başla
              </Link>

              <Link
                href="/tr/a0/alfabe"
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-bold text-white hover:bg-white/10"
              >
                Demo izle
              </Link>
            </div>

            <div className="text-sm text-white/60">
              Ücretsiz başla • İstediğin zaman bırak
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80">
              <div className="font-semibold text-white">
                Öğrenmeyi ciddiye alanlar için
              </div>
              <div className="mt-1 text-sm text-white/70">
                Kısa dersler, akıllı tekrar ve ölçülebilir ilerleme.
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <StatCard value="120+" label="Ders" />
              <StatCard value="300+" label="Quiz" />
              <StatCard value="5" label="Dil" />
            </div>
          </div>

          {/* RIGHT (DASHBOARD CARD) */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div className="font-bold">NederLearn</div>
              <div className="flex gap-1 text-white/40">
                <span>•</span><span>•</span><span>•</span>
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <MiniCard title="Günlük hedef" value="10 dk" />
              <MiniCard title="Seri" value="3 gün" />
              <MiniCard title="Ortalama skor" value="84%" />
              <MiniCard title="Son ders" value="A0 • 01" />
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm text-white/70">Bugünün önerisi</div>
              <div className="mt-1 font-semibold">
                “Selamlaşma & günlük ifadeler”
              </div>

              <div className="mt-4 h-2 w-full rounded-full bg-white/10">
                <div className="h-2 w-[66%] rounded-full bg-white/60" />
              </div>

              <div className="mt-2 text-sm text-white/60">İlerleme: %66</div>

              <div className="mt-4 flex flex-wrap gap-2">
                <Tag>Akıllı tekrar</Tag>
                <Tag>Quiz</Tag>
                <Tag>İlerleme</Tag>
                <Tag>Çok dil</Tag>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="space-y-6">
        <h2 className="text-3xl font-black">Neden NederLearn?</h2>

        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            title="Net bir yol haritası"
            desc="Seviyene göre plan, her gün küçük ama düzenli adımlar."
            icon="🧭"
          />
          <FeatureCard
            title="Ölçülebilir ilerleme"
            desc="Quiz skorları, seri takibi ve tamamlanan dersler."
            icon="📈"
          />
          <FeatureCard
            title="Çok dilli deneyim"
            desc="TR/EN/NL ve daha fazlası ile rahat öğren."
            icon="🌍"
          />
          <FeatureCard
            title="Kolay"
            desc="Adım adım derslerle öğren."
            icon="📘"
          />
          <FeatureCard
            title="Quiz"
            desc="Kendini test et, puanını gör."
            icon="🧠"
          />
          <FeatureCard
            title="Çok Dil"
            desc="TR/EN/NL ve daha fazlası."
            icon="💬"
          />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="space-y-6">
        <div className="flex items-end justify-between gap-3">
          <h2 className="text-3xl font-black">Nasıl çalışır?</h2>
          <div className="text-sm text-white/60">İlerlemeni takip et</div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <StepCard step="STEP 01" title="Seviyeni seç" desc="Başlangıçtan ileri seviyeye kadar hedefini belirle." />
          <StepCard step="STEP 02" title="Dersleri tamamla" desc="Kısa ve net içeriklerle her gün ilerle." />
          <StepCard step="STEP 03" title="Quizlerle pekiştir" desc="Hatalarını gör, puanını yükselt." />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="space-y-6">
        <h2 className="text-3xl font-black">Kullanıcılar ne diyor?</h2>

        <div className="grid gap-4 md:grid-cols-3">
          <QuoteCard name="Murat" role="Yeni başlayan" quote="Dersler kısa ve net. Quizler gerçekten hatalarımı gösteriyor." />
          <QuoteCard name="Ayşe" role="Orta seviye" quote="İlerleme ekranı motivasyon veriyor. Her gün biraz daha iyi." />
          <QuoteCard name="Emre" role="Yoğun çalışan" quote="5-10 dakikada ilerleyebilmek harika. Düzenli kalabiliyorum." />
        </div>
      </section>
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-2xl font-black">{value}</div>
      <div className="mt-1 text-sm text-white/60">{label}</div>
    </div>
  );
}

function MiniCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-sm text-white/60">{title}</div>
      <div className="mt-1 text-xl font-black">{value}</div>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
      {children}
    </span>
  );
}

function FeatureCard({ title, desc, icon }: { title: string; desc: string; icon: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="text-xl">{icon}</div>
      <div className="mt-3 font-bold">{title}</div>
      <div className="mt-1 text-sm text-white/70">{desc}</div>
    </div>
  );
}

function StepCard({ step, title, desc }: { step: string; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="text-xs tracking-widest text-white/50">{step}</div>
      <div className="mt-2 text-xl font-black">{title}</div>
      <div className="mt-2 text-sm text-white/70">{desc}</div>
    </div>
  );
}

function QuoteCard({ name, role, quote }: { name: string; role: string; quote: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="text-white/80">“{quote}”</div>
      <div className="mt-5 flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-white/10" />
        <div>
          <div className="font-bold">{name}</div>
          <div className="text-xs text-white/60">{role}</div>
        </div>
      </div>
    </div>
  );
}
