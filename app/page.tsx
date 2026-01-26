<p>VS-CODE-TEST</p>
<p>TEST-123</p>

export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>NederLearn</h1>
      <p>Hollandaca öğrenmeye başla 🇳🇱</p>

      <ul>
        <li>A0 – Başlangıç</li>
        <li>A1 – Temel</li>
        <li>A2 – Orta</li>
        <li>B1 – Orta-İleri</li>
      </ul>

      <p>
        <a href="/login">Giriş Yap</a> |{" "}
        <a href="/register">Kayıt Ol</a>
      </p>
    </main>
  );
}
