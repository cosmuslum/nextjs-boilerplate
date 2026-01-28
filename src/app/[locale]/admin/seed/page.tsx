"use client";

import React, { useMemo, useState } from "react";
import {
  collection,
  doc,
  writeBatch,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

// Seed dataların nerede duruyorsa import yolu aynen kalsın.
// Sende farklıysa sadece burayı düzelt.
import { lessons, quizzes } from "@/data/a0a1.seed";

export default function AdminSeedPage() {
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string>("");

  const hasDb = useMemo(() => !!db, []);

  async function runSeed() {
    try {
      setBusy(true);
      setMsg("");

      if (!db) {
        setMsg(
          "Firebase yapılandırması yok. Vercel Environment Variables (Firebase keys) eklemeden seed çalışmaz."
        );
        return;
      }

      const batch = writeBatch(db);

      // Lessons
      const lessonsCol = collection(db, "lessons");
      lessons.forEach((l: any) => {
        const ref = doc(lessonsCol);
        batch.set(ref, {
          ...l,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });
      });

      // Quizzes
      const quizzesCol = collection(db, "quizzes");
      quizzes.forEach((qz: any) => {
        const ref = doc(quizzesCol);
        batch.set(ref, {
          ...qz,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });
      });

      await batch.commit();
      setMsg("✅ Seed tamamlandı: lessons + quizzes yazıldı.");
    } catch (e: any) {
      setMsg(e?.message ?? "Seed sırasında hata oluştu");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main style={s.page}>
      <h1 style={s.h1}>Seed (Admin)</h1>

      <p style={s.p}>
        Bu sayfa Firestore’a başlangıç derslerini/quizlerini yazar.
        <br />
        <b>Not:</b> Firebase env yoksa build kırılmasın diye burada güvenli şekilde durur.
      </p>

      <div style={s.card}>
        <div style={s.row}>
          <span style={s.badge}>{hasDb ? "DB: Hazır ✅" : "DB: Yok ⚠️"}</span>
          <button
            onClick={runSeed}
            disabled={busy || !hasDb}
            style={{
              ...s.btn,
              ...(busy || !hasDb ? s.btnDisabled : null),
            }}
          >
            {busy ? "Yazılıyor..." : "Seed Çalıştır"}
          </button>
        </div>

        {msg ? <div style={s.msg}>{msg}</div> : null}
      </div>
    </main>
  );
}

const s: Record<string, React.CSSProperties> = {
  page: { padding: 24, color: "white" },
  h1: { fontSize: 26, fontWeight: 900, marginBottom: 10 },
  p: { opacity: 0.8, lineHeight: 1.6, marginBottom: 16 },
  card: {
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(0,0,0,0.25)",
    borderRadius: 14,
    padding: 16,
    maxWidth: 520,
  },
  row: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 },
  badge: {
    fontSize: 13,
    padding: "6px 10px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(255,255,255,0.06)",
  },
  btn: {
    cursor: "pointer",
    padding: "10px 12px",
    borderRadius: 10,
    border: "none",
    fontWeight: 800,
    background: "#7c8cff",
    color: "#0b1020",
  },
  btnDisabled: { opacity: 0.5, cursor: "not-allowed" },
  msg: { marginTop: 12, fontWeight: 700, opacity: 0.9 },
};
