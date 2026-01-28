export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* HERO */}
      <section className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.35)] p-8 md:p-10">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Yeni: NederLearn yayında
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-5xl">
              Hollandaca Öğren
            </h1>
            <p className="mt-3 text-white/70">
              Dersler, quizler ve sesli pratik ile A0&apos;dan B1&apos;e kadar
              düzenli ilerle.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/dersler"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90"
              >
                Hemen Başla
              </a>
              <a
                href="/alfabe"
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Alfabe (Sesli)
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
              <Stat value="120+" label="Ders" />
              <Stat value="300+" label="Quiz" />
              <Stat value="5" label="Dil" />
            </div>
          </div>

          {/* SAĞ KARTLAR - hepsi aynı stil */}
          <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 md:p-6">
            <div className="grid gap-3">
              <div className="grid grid-cols-2 gap-3">
                <MiniCard title="Seri" value="3 gün" />
                <MiniCard title="Ortalama skor" value="84%" />
              </div>
              <MiniCard title="Son ders" value="A1 · 05" />
              {/* “Günlük hedef” kaldırıldı */}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS (ortalanmış başlık + açıklama) */}
      <section>
        <div className="text-center">
          <h2 className="text-2xl font-bold">Memnuniyet yazıları</h2>
          <p className="mt-2 text-white/60">
            Gerçek kullanıcıların deneyimlerinden kısa notlar.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Testi
            name="Merve A."
            city="Rotterdam"
            text="Günlük 10 dakikayla düzenli ilerledim. Kısa ve net dersler çok iyi."
          />
          <Testi
            name="Emre K."
            city="Utrecht"
            text="Quizler öğrenmeyi hızlandırdı. Tasarım da çok temiz."
          />
          <Testi
            name="Zeynep S."
            city="Amsterdam"
            text="Sesli pratik bölümü özellikle telaffuz için harika."
          />
        </div>
      </section>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-xs text-white/60 mt-1">{label}</div>
    </div>
  );
}

function MiniCard({ title, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-xs text-white/60">{title}</div>
      <div className="mt-1 text-lg font-semibold">{value}</div>
    </div>
  );
}

function Testi({ name, city, text }) {
  return (
    <div className="rounded-[22px] border border-white/10 bg-white/5 p-5">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full border border-white/10 bg-white/10 flex items-center justify-center font-semibold">
          {name
            .split(" ")
            .map((p) => p[0])
            .slice(0, 2)
            .join("")}
        </div>
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-xs text-white/60">{city}</div>
        </div>
      </div>

      <div className="mt-4 text-white/70 text-sm leading-relaxed">{text}</div>

      <div className="mt-4 text-sm">★★★★★</div>
    </div>
  );
}
