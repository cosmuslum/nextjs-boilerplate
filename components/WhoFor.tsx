const cards = [
  { title: "Hollanda’da yaşayanlar", desc: "Günlük konuşma ve resmi işlemler için pratik odaklı." },
  { title: "Öğrenciler", desc: "Düzenli program + quiz ile sürdürülebilir ilerleme." },
  { title: "Yeni taşınanlar", desc: "Temelden başlayıp kısa derslerle hızlı adapte ol." }
];

export default function WhoFor() {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold md:text-2xl">Kimler için uygun?</h2>
        <p className="mt-1 text-white/60">Üç temel kullanım senaryosu için tasarlandı.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((c) => (
          <div
            key={c.title}
            className="rounded-[22px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:bg-white/10 transition"
          >
            <div className="text-base font-semibold">{c.title}</div>
            <div className="mt-2 text-sm leading-6 text-white/70">{c.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
