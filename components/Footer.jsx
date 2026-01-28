export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          {/* Left: About (solda, tek blok) */}
          <div className="space-y-2">
            <div className="text-base font-semibold text-white">Hakkımızda</div>
            <p className="text-sm leading-6 text-white/60 max-w-md">
              NederLearn, Hollandaca’yı kısa dersler ve pratik tekrarlarla
              düzenli öğrenmen için tasarlandı. Amaç: sade, hızlı ve
              sürdürülebilir ilerleme.
            </p>
            <div className="pt-2 text-xs text-white/40">
              © {new Date().getFullYear()} NederLearn
            </div>
          </div>

          {/* Right: Links (yan yana / düzenli) */}
          <div className="flex flex-wrap items-center justify-start gap-3 md:justify-end">
            <FooterLink href="/">Ana Sayfa</FooterLink>
            <FooterLink href="/dersler">Dersler</FooterLink>
            <FooterLink href="/alfabe">Alfabe (Sesli)</FooterLink>
            <FooterLink href="/giris">Giriş</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/75 hover:bg-white/10 transition"
    >
      {children}
    </a>
  );
}
