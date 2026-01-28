export default function Navbar() {
  return (
    <header className="relative">
      <div className="mx-auto max-w-6xl px-4 pt-5">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl">
          <div className="flex items-center gap-2 font-semibold text-white">
            <span className="text-white/80">🇳🇱</span>
            NederLearn
          </div>

          <nav className="hidden items-center gap-2 md:flex">
            <Pill>TR</Pill>
            <Pill>Admin</Pill>
            <Pill>Profil</Pill>
            <Pill active>Dersler</Pill>
            <Pill>Çıkış</Pill>
          </nav>

          <div className="md:hidden text-white/70">☰</div>
        </div>
      </div>
    </header>
  );
}

function Pill({ children, active }) {
  return (
    <a
      href="/"
      className={[
        "rounded-full px-4 py-2 text-sm font-semibold transition",
        active
          ? "bg-white text-black"
          : "border border-white/10 bg-white/5 text-white/80 hover:bg-white/10"
      ].join(" ")}
    >
      {children}
    </a>
  );
}
