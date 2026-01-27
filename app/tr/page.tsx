export default function TrHomePage() {
  return (
    <div className="nl-page">
      <section className="nl-hero">
        <div className="nl-hero-left">
          <div className="nl-kicker">Yeni: NederLearn yayında</div>

          <h1 className="nl-h1">
            Hollandaca <span className="nl-accent">Öğren</span>
          </h1>

          <p className="nl-lead">
            Dersler, quizler ve sesli pratik ile A0’dan başlayıp B1’e kadar düzenli ilerle.
          </p>

          <div className="nl-cta">
            <a className="nl-btn-primary" href="/tr/a0">Hemen Başla</a>
            <a className="nl-btn-ghost" href="/tr/a0/alfabe">Alfabe (Sesli)</a>
          </div>

          <div className="nl-stats">
            <div className="nl-stat">
              <div className="nl-stat-num">120+</div>
              <div className="nl-stat-lbl">Ders</div>
            </div>
            <div className="nl-stat">
              <div className="nl-stat-num">300+</div>
              <div className="nl-stat-lbl">Quiz</div>
            </div>
            <div className="nl-stat">
              <div className="nl-stat-num">5</div>
              <div className="nl-stat-lbl">Dil</div>
            </div>
          </div>
        </div>

        <aside className="nl-panel">
          <div className="nl-panel-head">
            <b>NederLearn</b>
            <span className="nl-dots">•••</span>
          </div>

          <div className="nl-panel-grid">
            <div className="nl-mini-card">
              <small>Günlük hedef</small>
              <b>10 dk</b>
            </div>
            <div className="nl-mini-card">
              <small>Seri</small>
              <b>3 gün</b>
            </div>
            <div className="nl-mini-card">
              <small>Ortalama skor</small>
              <b>84%</b>
            </div>
            <div className="nl-mini-card">
              <small>Son ders</small>
              <b>A1 · 05</b>
            </div>
          </div>

          <div className="nl-reco">
            <small>Bugünün önerisi</small>
            <b>“Selamlaşma & günlük ifadeler”</b>

            <div className="nl-progress">
              <i style={{ width: "66%" }} />
            </div>

            <div className="nl-progress-sub">İlerleme: %66</div>
          </div>
        </aside>
      </section>
    </div>
  );
}
