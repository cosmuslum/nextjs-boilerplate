export default function TrHome() {
  return (
    <div className="wrap dl-wrap">
      {/* HERO */}
      <section className="glass hero">
        <div className="hero-grid">
          {/* LEFT */}
          <div>
            <div className="kicker">Yeni: NederLearn yayında</div>

            <h1 className="h1">Hollandaca Öğren</h1>

            <p className="p">
              Dersler, quizler ve (yakında) çok dilli destek ile hızlı öğren.
            </p>

            <div className="ctaRow">
              <a className="btnWhite" href="/tr/a0">Hemen Başla</a>
              <a className="btnGhost" href="/tr/a0/alfabe">Demo izle</a>
            </div>

            <div className="subnote">Ücretsiz başla • İstediğin zaman bırak</div>

            <div className="glass-soft" style={{ padding: 14, marginTop: 14 }}>
              <div style={{ fontWeight: 950, marginBottom: 6 }}>
                Öğrenmeyi ciddiye alanlar için
              </div>
              <div style={{ color: "rgba(255,255,255,.72)", lineHeight: 1.55 }}>
                Kısa dersler, akıllı tekrar ve ölçülebilir ilerleme.
              </div>
            </div>

            <div className="statsRow">
              <div className="glass-soft statBox">
                <div className="statNum">120+</div>
                <div className="statLbl">Ders</div>
              </div>
              <div className="glass-soft statBox">
                <div className="statNum">300+</div>
                <div className="statLbl">Quiz</div>
              </div>
              <div className="glass-soft statBox">
                <div className="statNum">5</div>
                <div className="statLbl">Dil</div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="glass-soft dash">
            <div className="dashTitle">NederLearn</div>

            <div className="dashGrid">
              <div className="glass-soft dashCard">
                <div className="smallLbl">Günlük hedef</div>
                <div className="bigVal">10 dk</div>
              </div>
              <div className="glass-soft dashCard">
                <div className="smallLbl">Seri</div>
                <div className="bigVal">3 gün</div>
              </div>
              <div className="glass-soft dashCard">
                <div className="smallLbl">Ortalama skor</div>
                <div className="bigVal">84%</div>
              </div>
              <div className="glass-soft dashCard">
                <div className="smallLbl">Son ders</div>
                <div className="bigVal">A1 • 05</div>
              </div>
            </div>

            <div className="glass-soft reco">
              <div className="smallLbl">Bugünün önerisi</div>
              <div style={{ marginTop: 6, fontWeight: 950 }}>
                “Selamlaşma & günlük ifadeler”
              </div>
              <div style={{ marginTop: 8, color: "rgba(255,255,255,.72)", fontWeight: 800 }}>
                İlerleme: %66
              </div>

              <div className="progress">
                <div />
              </div>

              <div style={{ marginTop: 10, display: "flex", gap: 8, flexWrap: "wrap" }}>
                <span className="pill" style={{ padding: "7px 10px" }}>Akıllı tekrar</span>
                <span className="pill" style={{ padding: "7px 10px" }}>Quiz</span>
                <span className="pill" style={{ padding: "7px 10px" }}>İlerleme</span>
                <span className="pill" style={{ padding: "7px 10px" }}>Çok dil</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEDEN */}
      <section className="section">
        <h2 className="h2">Neden NederLearn?</h2>

        <div className="grid3">
          <div className="glass-soft card">
            <div className="cardTitle">⏱️ Net bir yol haritası</div>
            <div className="cardText">Seviyene göre plan, her gün küçük ama düzenli adımlar.</div>
          </div>
          <div className="glass-soft card">
            <div className="cardTitle">📈 Ölçülebilir ilerleme</div>
            <div className="cardText">Quiz skorları, seri takibi ve tamamlanan dersler.</div>
          </div>
          <div className="glass-soft card">
            <div className="cardTitle">🌍 Çok dilli deneyim</div>
            <div className="cardText">TR/EN/NL ve daha fazlası (yakında).</div>
          </div>

          <div className="glass-soft card">
            <div className="cardTitle">📚 Kolay</div>
            <div className="cardText">Adım adım derslerle öğren.</div>
          </div>
          <div className="glass-soft card">
            <div className="cardTitle">🧠 Quiz</div>
            <div className="cardText">Kendini test et, puanını gör.</div>
          </div>
          <div className="glass-soft card">
            <div className="cardTitle">🗣️ Sesli pratik</div>
            <div className="cardText">Tarayıcı üzerinden Hollandaca telaffuz dinle.</div>
          </div>
        </div>
      </section>

      {/* NASIL */}
      <section className="section">
        <h2 className="h2">Nasıl çalışır?</h2>

        <div className="steps">
          <div className="glass-soft step">
            <div className="stepTag">STEP 01</div>
            <div className="stepTitle">Seviyeni seç</div>
            <div className="stepText">Başlangıçtan ileri seviyeye kadar hedefini belirle.</div>
          </div>
          <div className="glass-soft step">
            <div className="stepTag">STEP 02</div>
            <div className="stepTitle">Dersleri tamamla</div>
            <div className="stepText">Kısa ve net içeriklerle her gün ilerle.</div>
          </div>
          <div className="glass-soft step">
            <div className="stepTag">STEP 03</div>
            <div className="stepTitle">Quizlerle pekiştir</div>
            <div className="stepText">Hatalarını gör, puanını yükselt.</div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section">
        <h2 className="h2">Kullanıcılar ne diyor?</h2>

        <div className="reviews">
          <div className="glass-soft review">
            <div className="quote">“Dersler kısa ve net. Quizler gerçekten hatalarımı gösteriyor.”</div>
            <div className="userRow">
              <div className="avatar" />
              <div>
                <div className="userName">Murat</div>
                <div className="userRole">Yeni başlayan</div>
              </div>
            </div>
          </div>

          <div className="glass-soft review">
            <div className="quote">“İlerleme ekranı motivasyon veriyor. Her gün biraz daha iyi.”</div>
            <div className="userRow">
              <div className="avatar" />
              <div>
                <div className="userName">Ayşe</div>
                <div className="userRole">Orta seviye</div>
              </div>
            </div>
          </div>

          <div className="glass-soft review">
            <div className="quote">“5–10 dakikada ilerleyebilmek harika. Düzenli kalabiliyorum.”</div>
            <div className="userRow">
              <div className="avatar" />
              <div>
                <div className="userName">Emre</div>
                <div className="userRole">Yoğun çalışan</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
