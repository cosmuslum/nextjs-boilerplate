export default function TrHomePage() {
  return (
    <div className="nl-page">
      {/* HERO */}
      <section className="nl-hero force-hero">
        <div className="nl-hero-left">
          <div className="nl-pill">🇳🇱 Hollandaca Öğren • A0 → B1</div>

          <h1 className="nl-h1">
            NederLearn ile <span className="nl-accent">adım adım</span> Hollandaca
            öğren.
          </h1>

          <p className="nl-lead">
            Sıfırdan başlayıp düzenli ders akışı ile ilerle. Kısa, anlaşılır
            anlatımlar + bol pratik.
          </p>

          <div className="nl-cta">
            <a className="nl-cta-primary" href="/tr/a0">
              A0’a Başla
            </a>
            <a className="nl-cta-secondary" href="/tr/a0/alfabe">
              Alfabe (Sesli)
            </a>
          </div>

          <div className="nl-badges force-3">
            <div className="nl-badge">📱 Mobil uyumlu</div>
            <div className="nl-badge">🔊 Sesli pratik</div>
            <div className="nl-badge">🧩 Bölüm bölüm</div>
          </div>
        </div>

        <aside className="nl-hero-right">
          <div className="nl-card">
            <div className="nl-card-head">
              <div>
                <div className="nl-card-title">Bugün</div>
                <div className="nl-card-sub">Başlangıç planı</div>
              </div>
              <div className="nl-chip">A0</div>
            </div>

            <div className="nl-plan">
              <div className="nl-plan-item">
                <div className="nl-num">1</div>
                <div>
                  <div className="nl-plan-title">Alfabe</div>
                  <div className="nl-plan-sub">Harfleri dinle + tekrar et</div>
                </div>
              </div>

              <div className="nl-plan-item">
                <div className="nl-num">2</div>
                <div>
                  <div className="nl-plan-title">Kelimeler</div>
                  <div className="nl-plan-sub">Günlük temel kelimeler</div>
                </div>
              </div>

              <div className="nl-plan-item">
                <div className="nl-num">3</div>
                <div>
                  <div className="nl-plan-title">Cümleler</div>
                  <div className="nl-plan-sub">Basit kalıplarla pratik</div>
                </div>
              </div>
            </div>

            <a className="nl-card-link" href="/tr/a0/alfabe">
              Alfabe sayfasına git →
            </a>

            <div className="nl-note">
              Not: Ses tarayıcı üzerinden çalışır (Chrome/Edge önerilir).
            </div>
          </div>
        </aside>
      </section>

      {/* LEVELS */}
      <section id="seviyeler" className="nl-section">
        <h2 className="nl-h2">Seviyeler</h2>
        <p className="nl-muted">
          Önce A0 içeriğini tamamen bitireceğiz. Sonra A1/A2/B1 açılacak.
        </p>

        <div className="nl-levels force-3">
          <div className="nl-level">
            <div className="nl-level-top">
              <span className="nl-tag active">Aktif</span>
            </div>
            <div className="nl-level-title">A0 – Sıfırdan</div>
            <div className="nl-level-desc">
              Alfabe, temel sesler, ilk kelimeler ve kısa cümleler.
            </div>
            <a className="nl-level-btn" href="/tr/a0">
              A0’a Git →
            </a>
          </div>

          <div className="nl-level nl-disabled">
            <div className="nl-level-top">
              <span className="nl-tag">Yakında</span>
            </div>
            <div className="nl-level-title">A1 – Temel</div>
            <div className="nl-level-desc">
              Günlük konuşma kalıpları ve temel gramer.
            </div>
            <div className="nl-level-btn ghost">Yakında</div>
          </div>

          <div className="nl-level nl-disabled">
            <div className="nl-level-top">
              <span className="nl-tag">Yakında</span>
            </div>
            <div className="nl-level-title">A2/B1 – Orta</div>
            <div className="nl-level-desc">
              Daha uzun cümleler, diyaloglar ve akıcı pratik.
            </div>
            <div className="nl-level-btn ghost">Yakında</div>
          </div>
        </div>
      </section>

      {/* HOW */}
      <section id="nasil-calisir" className="nl-section">
        <h2 className="nl-h2">Nasıl çalışır?</h2>

        <div className="nl-steps force-3">
          <div className="nl-step">
            <div className="nl-step-title">🧠 Kısa ders</div>
            <div className="nl-step-desc">
              3–7 dakikalık parçalar. Sıkılmazsın.
            </div>
          </div>
          <div className="nl-step">
            <div className="nl-step-title">🔊 Sesli tekrar</div>
            <div className="nl-step-desc">
              Harf/kelime/cümleleri dinle, tekrar et.
            </div>
          </div>
          <div className="nl-step">
            <div className="nl-step-title">✅ Mini pratik</div>
            <div className="nl-step-desc">
              Öğrendiğini hemen pekiştir.
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sss" className="nl-section">
        <h2 className="nl-h2">SSS</h2>

        <div className="nl-faq">
          <details className="nl-qa">
            <summary>Ses neden bazen çıkmıyor?</summary>
            <p>
              Bazı tarayıcılar ilk tıklamada izin ister. Chrome/Edge önerilir.
            </p>
          </details>

          <details className="nl-qa">
            <summary>Şimdilik sadece Türkçe mi?</summary>
            <p>
              Evet. Türkçe içerik tamamlanınca diğer dilleri sırayla ekleyeceğiz.
            </p>
          </details>

          <details className="nl-qa">
            <summary>Hızlı ilerlemek için öneri?</summary>
            <p>
              Her gün 10–15 dakika yeter. Düzenli ol, sesli tekrar yap, not al.
            </p>
          </details>
        </div>
      </section>
    </div>
  );
}
