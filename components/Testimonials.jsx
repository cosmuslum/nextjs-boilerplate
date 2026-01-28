const items = [
  {
    name: "Merve A.",
    place: "Rotterdam",
    text: "Günlük 10 dakikayla düzenli ilerledim. Kısa ve net dersler çok iyi.",
  },
  {
    name: "Emre K.",
    place: "Utrecht",
    text: "Telaffuz kısmı güzel. A1’den sonra konuşmalar daha rahat akıyor.",
  },
  {
    name: "Zeynep S.",
    place: "Amsterdam",
    text: "Quiz + tekrar sistemi motive ediyor. Tasarım premium duruyor.",
  },
];

export default function Testimonials() {
  return (
    <section className="space-y-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-xl font-semibold md:text-2xl text-white">
          Memnuniyet yazıları
        </h2>
        <p className="mt-2 text-white/60">
          Gerçek kullanıcıların deneyimlerinden kısa notlar.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {items.map((t, idx) => (
          <div
            key={idx}
            className="rounded-[22px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <Avatar name={t.name} />
              <div>
                <div className="text-sm font-semibold text-white">{t.name}</div>
                <div className="text-xs text-white/60">{t.place}</div>
              </div>
            </div>

            <div className="mt-3 text-white/80">★★★★★</div>
            <p className="mt-3 text-sm leading-6 text-white/75">{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Avatar({ name }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((x) => x[0])
    .join("")
    .toUpperCase();

  return (
    <div className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-sm font-semibold text-white/80">
      {initials}
    </div>
  );
}
