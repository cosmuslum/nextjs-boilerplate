export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-white/5 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3 md:items-start">
          <div>
            <div className="text-sm font-semibold">🇳🇱 NederLearn</div>
            <p className="mt-2 text-sm text-white/60">
              Hollandaca öğrenmenin en net yolu. Kısa dersler, pratik ve takip.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm text-white/70 md:justify-self-center">
            <a className="hover:text-white" href="/">Ana Sayfa</a>
            <a className="hover:text-white" href="/dersler">Dersler</a>
            <a className="hover:text-white" href="#">Hakkımızda</a>
            <a className="hover:text-white" href="#">İletişim</a>
            <a className="hover:text-white" href="#">Gizlilik</a>
            <a className="hover:text-white" href="#">KVKK</a>
          </div>

          <div className="md:justify-self-end">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm font-semibold">Günlük hedef</div>
              <p className="mt-1 text-sm text-white/60">
                Bugün 10 dakika ayır, seri yap.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} NederLearn</div>
          <div>Made with ❤️ for learners in the Netherlands</div>
        </div>
      </div>
    </footer>
  );
}
