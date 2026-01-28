export default function NotFound() {
  return (
    <div style={{ padding: 48, textAlign: "center" }}>
      <h1 style={{ fontSize: 42, margin: 0 }}>404</h1>
      <p style={{ opacity: 0.8 }}>Sayfa bulunamadı.</p>
      <a href="/" style={{ textDecoration: "underline" }}>
        Ana sayfaya dön
      </a>
    </div>
  );
}
