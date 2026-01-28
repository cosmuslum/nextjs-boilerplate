export default function HomePage() {
  return (
    <div className="py-10">
      <div className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Yeni: NederLearn yayında
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight">Hollandaca Öğren</h1>
        <p className="mt-3 text-white/70 max-w-xl">
          Dersler, quizler ve sesli pratik ile A0’dan B1’e kadar ilerle.
        </p>

        <div className="mt-6 flex gap-3">
          <a
            href="/dersler"
            className="rounded-full px-5 py-3 bg-white text-black font-medium hover:opacity-90 transition"
          >
            Hemen Başla
          </a>
          <a
            href="/alfabe"
            className="rounded-full px-5 py-3 border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            Alfabe (Sesli)
          </a>
        </div>
      </div>
    </div>
  );
}
