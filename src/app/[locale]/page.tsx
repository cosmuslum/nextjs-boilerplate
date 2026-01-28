import Link from "next/link";
import {useTranslations} from "next-intl";

export default function HomePage() {
  const t = useTranslations();

  return (
    <div style={{paddingBottom: 18}}>
      <section className="glass card" style={{borderRadius: 28, padding: 22}}>
        <div className="grid2" style={{alignItems: "stretch"}}>
          <div style={{display: "flex", flexDirection: "column", gap: 14}}>
            <div className="badge">{t("hero.kicker")}</div>

            <h1 className="h1">{t("hero.title")}</h1>
            <p className="muted" style={{lineHeight: 1.6, maxWidth: 620}}>
              {t("hero.lead")}
            </p>

            <div style={{display: "flex", flexWrap: "wrap", gap: 10, marginTop: 6}}>
              <Link className="btn btnPrimary" href="/tr/a0">{t("cta.start")}</Link>
              <Link className="btn" href="/tr/a0/alfabe">{t("cta.demo")}</Link>
            </div>

            <div className="grid3" style={{marginTop: 8}}>
              <div className="glass card" style={{borderRadius: 18}}>
                <div style={{fontSize: 22, fontWeight: 1000}}>A0 → B1</div>
                <div className="muted" style={{marginTop: 4, fontSize: 13}}>Seviyeli, bölüm bölüm</div>
              </div>
              <div className="glass card" style={{borderRadius: 18}}>
                <div style={{fontSize: 22, fontWeight: 1000}}>Sesli</div>
                <div className="muted" style={{marginTop: 4, fontSize: 13}}>Tarayıcıdan telaffuz</div>
              </div>
              <div className="glass card" style={{borderRadius: 18}}>
                <div style={{fontSize: 22, fontWeight: 1000}}>Mobil</div>
                <div className="muted" style={{marginTop: 4, fontSize: 13}}>Tam uyumlu tasarım</div>
              </div>
            </div>
          </div>

          <aside className="glass card" style={{borderRadius: 22, padding: 16}}>
            <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
              <b>NederLearn</b>
              <span style={{opacity:.6}}>•••</span>
            </div>

            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginTop:12}}>
              {[
                ["Günlük hedef","10 dk"],
                ["Seri","3 gün"],
                ["Skor","84%"],
                ["Son ders","A0 · 01"]
              ].map(([k,v]) => (
                <div key={k} className="glass card" style={{borderRadius:16, padding:12}}>
                  <div className="muted" style={{fontSize:12, fontWeight:900}}>{k}</div>
                  <div style={{marginTop:4, fontSize:18, fontWeight:1000}}>{v}</div>
                </div>
              ))}
            </div>

            <div className="glass card" style={{borderRadius:16, padding:12, marginTop:12}}>
              <div className="muted" style={{fontSize:12, fontWeight:900}}>Bugünün önerisi</div>
              <div style={{marginTop:6, fontWeight:1000}}>Selamlaşma & günlük ifadeler</div>
              <div style={{height:10, borderRadius:999, background:"rgba(255,255,255,.10)", border:"1px solid rgba(255,255,255,.10)", overflow:"hidden", marginTop:10}}>
                <div style={{height:"100%", width:"66%", background:"rgba(124,140,255,.9)"}}/>
              </div>
              <div className="muted" style={{marginTop:8, fontSize:12, fontWeight:900}}>İlerleme: %66</div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
