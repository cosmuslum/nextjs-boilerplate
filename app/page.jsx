import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-[#0b0d17] via-[#101424] to-[#0b0d17] text-white flex flex-col">
      
      {/* NAVBAR */}
      <header className="w-full px-6 pt-6">
        <div className="mx-auto max-w-7xl flex items-center justify-between rounded-full bg-white/5 backdrop-blur border border-white/10 px-6 py-3">
          <div className="flex items-center gap-2 font-semibold">
            🇳🇱 <span>NederLearn</span>
          </div>

          <nav className="hidden md:flex items-center gap-3">
            <Link
              href="/dersler"
              className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition"
            >
              Dersler
            </Link>

            <Link
              href="/giris"
              className="px-4 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition"
            >
              Giriş
            </Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-5xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12 shadow-2xl">
          
          <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-1 text-sm text-green-400 mb-6">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            Yeni: NederLearn yayında
          </div>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Hollandaca Öğren
          </h1>

          <p className="mt-4 max-w-2xl text-white/70">
            Dersler, quizler ve sesli pratik ile A0’dan B1’e kadar adım adım ilerle.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/giris"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-black hover:bg-gray-200 transition"
            >
              Hemen Başla
            </Link>

            <Link
              href="/alfabe"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 hover:bg-white/10 transition"
            >
              Alfabe (Sesli)
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pb-6 text-center text-sm text-white/40">
        © 2026{" "}
        <a
          href="https://nederlearn.nl"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-white"
        >
          NederLearn.nl
        </a>
      </footer>
    </main>
  );
}
