import Link from "next/link";

export default function A0Page() {
  return (
    <div style={{paddingBottom: 18}}>
      <section className="glass card" style={{borderRadius: 24}}>
        <h2 className="h2">A0 – Başlangıç</h2>
        <p className="muted" style={{lineHeight:1.6}}>
          Bu bölümde alfabe, selamlaşma, temel cümleler ve günlük kalıplarla başlayacağız.
        </p>

        <div style={{display:"flex", gap:10, flexWrap:"wrap", marginTop:14}}>
          <Link className="btn btnPrimary" href="/tr/a0/alfabe">Alfabe (Sesli)</Link>
          <Link className="btn" href="/tr">← Ana Sayfa</Link>
        </div>
      </section>

      <section className="glass card" style={{borderRadius: 24, marginTop: 16}}>
        <h2 className="h2">Bu hafta planı</h2>
        <div className="grid3">
          {[
            ["1) Alfabe", "Harfleri tanı + sesli dinle"],
            ["2) Selamlaşma", "Hallo, Goedemorgen…"],
            ["3) Kendini tanıt", "Ik ben… / Mijn naam is…"],
          ].map(([t, d]) => (
            <div key={t} className="glass card" style={{borderRadius:18}}>
              <div style={{fontWeight:1000}}>{t}</div>
              <div className="muted" style={{marginTop:6, fontSize:13, lineHeight:1.5}}>{d}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
