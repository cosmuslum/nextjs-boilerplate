export default function FeatureShowcase() {
  return (
    <section className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-10">
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        {/* left mock */}
        <div className="rounded-[22px] border border-white/10 bg-white/5 p-5">
          <div className="text-sm text-white/70">NederLearn • Dashboard</div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <Tile t="Günlük hedef" v="10 dk" />
            <Tile t="Seri" v="3 gün" />
            <Tile t="Skor" v="84%" />
            <Tile t="Son ders" v="A1 · 05" />
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-xs text-white/60">Bugünün önerisi</div>
            <div className="mt-1 text-sm font-semibold text-white">
              “Selamlaşma & günlük ifadeler”
            </div>

            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[66%] rounded-full bg-white/70" />
            </div>
            <div className="mt-2 text-xs text-white/60">İlerleme: %66</div>
          </div>

          <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 font-semibold text-white/80">
                NL
              </div>
              <div>
                <div className="text-sm font-semibold text-white">NederLearn</div>
                <div className="text-xs text-white/60">
                  Hollandaca öğrenmenin net yolu
                </div>
              </div>
            </div>
            <div className="text-xs text-white/60">v1.0</div>
          </div>
        </div>

        {/* right copy */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold md:text-2xl text-white">
            Gerçek hayatta kullanılan Hollandaca
          </h2>
          <p className="text-white/70 leading-6">
            Ezber değil; kısa dersler, quizler ve tekrar mantığıyla düzenli
            ilerlersin.
          </p>

          <div className="grid gap-3">
            <Bullet
              t="🎧 Sesli telaffuz"
              d="Doğru telaffuzu duy, tekrar et, alışkanlık kazan."
            />
            <Bullet
              t="📈 İlerleme takibi"
              d="Hedef ve seri sistemiyle motivasyonu koru."
            />
            <Bullet
              t="🧠 Akıllı tekrar"
              d="Unutmamak için doğru zamanda tekrar."
            />
          </div>

          <a
            href="/dersler"
            className="inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
          >
            Derslere Git
          </a>
        </div>
      </div>
    </section>
  );
}

function Tile({ t, v }) {
  return (
    <div className="rounded-[18px] border border-white/10 bg-white/5 p-4">
      <div className="text-xs text-white/60">{t}</div>
      <div className="mt-1 text-lg font-semibold text-white">{v}</div>
    </div>
  );
}

function Bullet({ t, d }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-sm font-semibold text-white">{t}</div>
      <div className="mt-1 text-sm text-white/65">{d}</div>
    </div>
  );
}
