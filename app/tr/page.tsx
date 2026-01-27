export default function TrHome() {
  return (
    <main style={{ padding: 32, fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: 36, marginBottom: 8 }}>NederLearn</h1>
      <p style={{ opacity: 0.8 }}>Hollandaca öğrenmeye başla 🇳🇱</p>

      <h2 style={{ marginTop: 24 }}>Seviyeler</h2>
      <ul>
        <li>A0 – Başlangıç</li>
        <li>A1 – Temel</li>
        <li>A2 – Orta</li>
        <li>B1 – Orta-İleri</li>
      </ul>

      <div style={{ marginTop: 24 }}>
        <b>Dil seç:</b>{" "}
        <a href="/tr">TR</a> | <a href="/nl">NL</a> | <a href="/en">EN</a> |{" "}
        <a href="/es">ES</a> | <a href="/ar">AR</a>
      </div>
    </main>
  );
}
