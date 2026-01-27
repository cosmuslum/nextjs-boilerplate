export default function A0Page() {
  return (
    <main style={styles.page}>
      <h1 style={styles.title}>A0 – Başlangıç</h1>

      <p style={styles.text}>
        Bu bölüm, Hollandaca öğrenmeye sıfırdan başlayanlar içindir.
      </p>

      <div style={styles.box}>
        <a href="/tr/a0/alfabe" style={styles.link}>
          🔤 Alfabe (Sesli)
        </a>
        <a href="#" style={styles.linkDisabled}>
          🧱 Temel Kelimeler (yakında)
        </a>
        <a href="#" style={styles.linkDisabled}>
          💬 Basit Cümleler (yakında)
        </a>
      </div>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#0a0a0a",
    color: "#fff",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 12,
  },
  text: {
    opacity: 0.8,
    marginBottom: 24,
    lineHeight: 1.6,
  },
  box: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    maxWidth: 320,
  },
  link: {
    padding: "14px 16px",
    borderRadius: 12,
    background: "#4f6cff",
    color: "#000",
    fontWeight: "bold",
    textDecoration: "none",
    textAlign: "center",
  },
  linkDisabled: {
    padding: "14px 16px",
    borderRadius: 12,
    background: "#222",
    color: "#777",
    textAlign: "center",
    cursor: "not-allowed",
  },
};
