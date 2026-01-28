"use client";

export default function Error({ error, reset }) {
  return (
    <div style={{ padding: 48, textAlign: "center" }}>
      <h2 style={{ marginBottom: 10 }}>Bir hata oluştu</h2>
      <p style={{ opacity: 0.8, maxWidth: 700, margin: "0 auto 18px" }}>
        {error?.message || "Beklenmeyen bir hata"}
      </p>

      <button
        onClick={() => reset()}
        style={{
          padding: "10px 16px",
          borderRadius: 10,
          border: "1px solid #333",
          background: "#111",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Tekrar Dene
      </button>
    </div>
  );
}
