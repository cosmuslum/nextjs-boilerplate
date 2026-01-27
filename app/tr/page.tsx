export default function TrHomePage() {
  return (
    <div className="dl-wrap">
      {/* HERO */}
      <section className="dl-hero glass">
        <div className="dl-hero-left">
          <div className="dl-tag">Yeni: DutchLearn yayında</div>

          <h1 className="dl-title">Hollandaca Öğren</h1>
          <p className="dl-subtitle">
            Dersler, quizler ve çok dilli destek ile hızlı öğren.
          </p>

          <div className="dl-cta">
            <a className="btn-white" href="/tr/a0">Hemen Başla</a>
            <a className="btn-ghost" href="/tr/demo">Demo izle</a>
          </div>

          <div className="dl-mini">
            Ücretsiz başla · İstediğin zaman bırak
          </div>

          <div className="dl-note glass2">
            <b>Öğrenmeyi ciddiye alanlar için</b>
            <span>Kısa dersler, akıllı tekrar ve ölçülebilir ilerleme.</span>
          </div>

          <div className="dl-stats">
            <div className="stat glass2">
              <div className="stat-num">120+</div>
              <div className="stat-lbl">Ders</div>
            </div>
            <div className="stat glass2">
              <div className="stat-num">300+</div>
              <div className="stat-lbl">Quiz</div>
            </div>
            <div className="stat glass2">
              <div className="stat-num">5</div>
              <div className="stat-lbl">Dil</div>
            </div>
          </div>
        </div>

        <div className="dl-hero-right glass2">
          <div className="panel-head">
            <b>DutchLearn</b>
            <span className="dots">•••</span>
          </div>

          <div className="panel-grid">
            <div className="panel-box glass3">
              <small>Günlük hedef</small>
              <b>10 dk</b>
            </div>
            <div className="panel-box glass3">
              <small>Seri</small>
              <b>3 gün</b>
            </div>
            <div className="panel-box glass3">
              <small>Ortalama skor</small>
              <b>84%</b>
            </div>
            <div className="panel-box glass3">
              <small>Son ders</small>
              <b>A1 · 05</b>
            </div>
          </div>

          <div className="panel-big glass3">
            <small>Bugünün önerisi</small>
            <b>“Selamlaşma & günlük ifadeler”</b>
            <div className="bar">
              <i style={{ width: "66%" }} />
            </div>
            <div className="bar-sub">İlerleme: %66</div>

            <div className="chips">
              <span>Akıllı tekrar</span>
              <span>Quiz</span>
              <span>İlerleme</span>
              <span>Çok dil</span>
            </div>
          </div>
        </div>
      </section>

      {/* NEDEN */}
      <section className="dl-section">
        <h2>Neden DutchLearn?</h2>

        <div className="dl-grid-3">
          <div className="card glass2">
            <b>⏱️ Net bir yol haritası</b>
            <p>Seviyene göre plan, her gün küçük ama düzenli adımlar.</p>
          </div>
          <div className="card glass2">
            <b>📈 Ölçülebilir ilerleme</b>
            <p>Quiz skorları, seri takibi ve tamamlanan dersler.</p>
          </div>
          <div className="card glass2">
            <b>🌍 Çok dilli deneyim</b>
            <p>TR/EN/NL ve daha fazlası ile rahat öğren.</p>
          </div>
          <div className="card glass2">
            <b>📚 Kolay</b>
            <p>Adım adım derslerle öğren.</p>
          </div>
          <div className="card glass2">
            <b>🧠 Quiz</b>
            <p>Kendini test et, puanını gör.</p>
          </div>
          <div className="card glass2">
            <b>🗂️ Çok Dil</b>
            <p>TR/EN/NL ve daha fazlası.</p>
          </div>
        </div>
      </section>

      {/* NASIL */}
      <section className="dl-section">
        <div className="dl-section-head">
          <h2>Nasıl çalışır?</h2>
          <a className="muted" href="/tr/ilerleme">İlerlemeni takip et</a>
        </div>

        <div className="dl-grid-3">
          <div className="step glass2">
            <small>STEP 01</small>
            <b>Seviyeni seç</b>
            <p>Başlangıçtan ileri seviyeye kadar hedefini belirle.</p>
          </div>
          <div className="step glass2">
            <small>STEP 02</small>
            <b>Dersleri tamamla</b>
            <p>Kısa ve net içeriklerle her gün ilerle.</p>
          </div>
          <div className="step glass2">
            <small>STEP 03</small>
            <b>Quizlerle pekiştir</b>
            <p>Hatalarını gör, puanını yükselt.</p>
          </div>
        </div>
      </section>

      {/* YORUMLAR */}
      <section className="dl-section">
        <h2>Kullanıcılar ne diyor?</h2>

        <div className="dl-grid-3">
          <div className="review glass2">
            <p>“Dersler kısa ve net. Quizler gerçekten hatalarımı gösteriyor.”</p>
            <div className="who">
              <div className="avatar" />
              <div>
                <b>Murat</b>
                <small>Yeni başlayan</small>
              </div>
            </div>
          </div>

          <div className="review glass2">
            <p>“İlerleme ekranı motivasyon veriyor. Her gün biraz daha iyi.”</p>
            <div className="who">
              <div className="avatar" />
              <div>
                <b>Ayşe</b>
                <small>Orta seviye</small>
              </div>
            </div>
          </div>

          <div className="review glass2">
            <p>“5–10 dakikada ilerleyebilmek harika. Düzenli kalabiliyorum.”</p>
            <div className="who">
              <div className="avatar" />
              <div>
                <b>Emre</b>
                <small>Yoğun çalışan</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
