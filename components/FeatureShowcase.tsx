export default function FeatureShowcase() {
  return (
    <section className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-10">
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        {/* left: mockup */}
        <div className="rounded-[22px] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-5">
          <div className="flex items-center justify-between text-sm text-white/70">
            <span>NederLearn</span>
            <span className="text-white/50">Dashboard</span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <MockTile title="Günlük hedef" value="10 dk" />
            <MockTile title="Seri" value="3 gün" />
            <MockTile title="Skor" value="84%" />
            <MockTile title="Son ders" value="A1 · 05" />
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-xs text-white/60">Bugünün önerisi</div>
            <div className="mt-1 text-sm font-semibold">“Selamlaşma & günlük ifadeler”</div>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[66%] rounded-full bg-white/70" />
            </div>
          </div>

          {/* name strip (görsel isim gibi) */}
          <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full border border-white/15 bg-white/5 grid place-items-center font-semibold text-white/80">
                NL
              </div>
              <div>
                <div className="text-sm font-semibold">NederLearn</div>
                <div className="text-xs text-white/60">Hollandaca öğrenmenin net yolu</div>
              </div>
            </div>
            <div className="text-xs text-white/60">v1.0</div>
          </div>
        </div>

        {/* right: copy */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold md:text-2xl">
            Gerçek hayatta kullanılan Hollandaca
          </h2>
          <p className="text-white/70 leading-6">
            Ezber değil; kısa dersler, quizler ve tekrar mantığıyla düzenli ilerlersin.
            Tasarım sade kalırken ürün hissi premium durur.
          </p>

          <div className="grid gap-3">
            <Bullet title="🎧 Sesli telaffuz" desc="Doğru telaffuzu duy, tekrar et, alışkanlık kazan." />
            <Bullet title="📈 İlerleme takibi" desc="Hedef ve seri sistemiyle motivasyonu koru." />
            <Bullet title="🧠 Akıllı tekrar" desc="Öğrendiklerini unutmamak için doğru zamanda tekrar." />
          </div>

          <div className="pt-2">
            <a
              href="/dersler"
              className="inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
            >
              Derslere Git
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function MockTile({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-[18px] border border-white/10 bg-white/5 p-4">
      <div className="text-xs text-white/60">{title}</div>
      <div className="mt-1 text-lg font-semibold">{value}</div>
    </div>
  );
}

function Bullet({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-1 text-sm text-white/65">{desc}</div>
    </div>
  );
}
