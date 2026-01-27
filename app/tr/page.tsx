export default function TrHomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <span className="badge">🇳🇱 Hollandaca Öğren · A0 → B1</span>

          <h1>
            NederLearn ile <span>adım adım</span><br />
            Hollandaca öğren.
          </h1>

          <p>
            Sıfırdan başlayıp düzenli ders akışı ile ilerle.
            Kısa, anlaşılır anlatımlar + bol pratik.
          </p>

          <div className="hero-actions">
            <a href="/tr/a0" className="btn-primary">A0’a Başla</a>
            <a href="/tr/a0/alfabe" className="btn-secondary">Alfabe (Sesli)</a>
          </div>

          <div className="hero-tags">
            <span>📱 Mobil uyumlu</span>
            <span>🔊 Sesli pratik</span>
            <span>🧩 Bölüm bölüm</span>
          </div>
        </div>

        {/* SAĞ KART */}
        <div className="hero-card">
          <h3>Bugün · A0</h3>

          <ul>
            <li><b>1.</b> Alfabe <small>Harfleri dinle + tekrar et</small></li>
            <li><b>2.</b> Kelimeler <small>Günlük temel kelimeler</small></li>
            <li><b>3.</b> Cümleler <small>Basit kalıplarla pratik</small></li>
          </ul>

          <a href="/tr/a0/alfabe" className="card-btn">
            Alfabe sayfasına git →
          </a>
        </div>
      </section>

      {/* NEDEN */}
      <section className="section">
        <h2>Neden NederLearn?</h2>

        <div className="grid-3">
          <div className="card">🧭 Net bir yol haritası</div>
          <div className="card">📊 Ölçülebilir ilerleme</div>
          <div className="card">🌍 Çok dilli deneyim</div>
          <div className="card">📘 Kolay ve sade dersler</div>
          <div className="card">🧠 Quiz & tekrar</div>
          <div className="card">⏱️ Günde 10–15 dk</div>
        </div>
      </section>

      {/* NASIL */}
      <section className="section">
        <h2>Nasıl çalışır?</h2>

        <div className="grid-3">
          <div className="step">
            <span>STEP 01</span>
            <b>Seviyeni seç</b>
            <p>Sıfırdan ileri seviyeye.</p>
          </div>

          <div className="step">
            <span>STEP 02</span>
            <b>Dersleri tamamla</b>
            <p>Kısa, net ve sesli anlatımlar.</p>
          </div>

          <div className="step">
            <span>STEP 03</span>
            <b>Quizlerle pekiştir</b>
            <p>Hatalarını gör, ilerle.</p>
          </div>
        </div>
      </section>

      {/* YORUMLAR */}
      <section className="section">
        <h2>Kullanıcılar ne diyor?</h2>

        <div className="grid-3">
          <div className="card">
            “5–10 dakikada ilerlemek harika.”
            <small>— Emre</small>
          </div>
          <div className="card">
            “Sesli alfabe mükemmel.”
            <small>— Ayşe</small>
          </div>
          <div className="card">
            “Gerçekten düzenli kalabiliyorum.”
            <small>— Murat</small>
          </div>
        </div>
      </section>
    </>
  );
}
