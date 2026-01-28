const items = [
  {
    name: "Merve A.",
    place: "Rotterdam",
    stars: 5,
    text: "Günlük 10 dakikayla düzenli ilerledim. En sevdiğim şey kısa ve net dersler."
  },
  {
    name: "Emre K.",
    place: "Utrecht",
    stars: 5,
    text: "Telaffuz kısmı çok iyi. A1'i bitirince konuşmalar daha rahat akmaya başladı."
  },
  {
    name: "Zeynep S.",
    place: "Amsterdam",
    stars: 5,
    text: "Quiz + tekrar sistemi motive ediyor. Ürün hissi gerçekten premium."
  }
];

export default function Testimonials() {
  return (
    <section className="space-y-4">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold md:text-2xl">
            Memnuniyet yazıları
          </h2>
          <p className="mt-1 text-white/60">
            Gerçek kullanıcıların deneyimlerinden kısa notlar.
          </p>
        </div>

        <div className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur md:block">
          Ortalama 4.9/5
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {items.map((t, idx) => (
          <div
            key={idx}
            className="rounded-[22px] border border-white/10 bg-white/5 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <Avatar name={t.name} />
              <div className="min-w-0">
                <div className="truncate text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-white/60">{t.place}</div>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-1 text-white/80">
              {Array.from({ length: t.stars }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>

            <p className="mt-3 text-sm leading-6 text-white/75">{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((x) => x[0])
    .join("")
    .toUpperCase();

  return (
    <div className="h-10 w-10 shrink-0 rounded-full border border-white/15 bg-white/5 grid place-items-center text-sm font-semibold text-white/80">
      {initials}
    </div>
  );
}
