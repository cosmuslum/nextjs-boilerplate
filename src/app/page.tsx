import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="card p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tight">
              Landing + Dersler
            </h1>
            <p className="muted max-w-2xl">
              Firebase tamamen kaldırıldı. Proje Vercel’de sorunsuz deploy olur.
              Burada sadece landing ve öğrenme sayfaları var.
            </p>
          </div>

          <div className="flex gap-3">
            <Link className="btn-primary" href="/dersler">Derslere Git</Link>
            <a
              className="btn-ghost"
              href="https://vercel.com"
              target="_blank"
              rel="noreferrer"
            >
              Vercel
            </a>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="card p-6">
          <h3 className="font-semibold">Temiz yapı</h3>
          <p className="muted mt-2">Auth/DB yok. Sadece sayfalar ve içerik.</p>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold">Vercel uyumlu</h3>
          <p className="muted mt-2">Next.js App Router ile deploy-ready.</p>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold">Ders sayfaları</h3>
          <p className="muted mt-2">Liste + detay (slug) yapısı hazır.</p>
        </div>
      </section>

      <section className="card p-8">
        <h2 className="text-xl font-semibold">Hızlı Başlangıç</h2>
        <ol className="muted mt-3 list-decimal pl-5 space-y-2">
          <li>
            Ders içeriklerini <code>src/lib/lessons.ts</code> dosyasından düzenle.
          </li>
          <li>GitHub’a pushla.</li>
          <li>Vercel → New Project → repo seç → Deploy.</li>
        </ol>
      </section>
    </div>
  );
}
