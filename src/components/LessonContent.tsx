"use client";

type Word = {
  nl: string;
  tr: string;
};

export default function LessonContent({
  title = "📘 Ders İçeriği",
  words,
}: {
  title?: string;
  words: Word[];
}) {
  return (
    <section className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 shadow-2xl">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-white flex items-center gap-3">
          📘 {title}
        </h2>
        <p className="text-white/60 mt-2">
          Bu derste öğreneceğin temel kelimeler aşağıdadır.
        </p>
      </div>

      {/* Word Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {words.map((w, i) => (
          <div
            key={i}
            className="group relative rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-5 shadow-lg hover:from-emerald-500/20 hover:to-emerald-500/5 transition"
          >
            <div className="absolute -top-3 -left-3 w-9 h-9 rounded-full bg-emerald-500 text-black font-extrabold flex items-center justify-center shadow">
              {i + 1}
            </div>

            <div className="mt-3">
              <div className="text-xl font-bold text-white group-hover:text-emerald-300 transition">
                {w.nl}
              </div>
              <div className="text-white/60 mt-1">{w.tr}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-sm text-white/50 italic">
        💡 İpucu: Her kelimeyle kısa bir cümle kurarak yüksek sesle tekrar et.
      </div>
    </section>
  );
}