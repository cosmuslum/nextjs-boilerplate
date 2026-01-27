"use client";

import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";

type Quiz = {
  id: string;
  lessonId: string;
  question: string;
};

export default function AdminQuizzesPage() {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [filterLessonId, setFilterLessonId] = useState("");

  useEffect(() => {
    let alive = true;

    async function run() {
      try {
        setLoading(true);
        setErr(null);

        // 🔒 KRİTİK KONTROL — build kırılmasın
        if (!db) {
          throw new Error(
            "Firebase yapılandırması yok. Admin paneli çalıştırmak için Vercel Environment Variables gerekli."
          );
        }

        const colRef = collection(db, "quizzes");

        const q =
          filterLessonId.trim().length > 0
            ? query(
                colRef,
                where("lessonId", "==", filterLessonId.trim()),
                orderBy("updatedAt", "desc")
              )
            : query(colRef, orderBy("updatedAt", "desc"));

        const snap = await getDocs(q);

        if (!alive) return;

        const list: Quiz[] = snap.docs.map((d) => ({
          id: d.id,
          ...(d.data() as Omit<Quiz, "id">),
        }));

        setQuizzes(list);
      } catch (e: any) {
        if (!alive) return;
        setErr(e?.message ?? "Bir hata oluştu");
      } finally {
        if (!alive) return;
        setLoading(false);
      }
    }

    run();
    return () => {
      alive = false;
    };
  }, [filterLessonId]);

  return (
    <main style={s.page}>
      <h1 style={s.h1}>Quiz Yönetimi</h1>

      <input
        placeholder="Lesson ID ile filtrele"
        value={filterLessonId}
        onChange={(e) => setFilterLessonId(e.target.value)}
        style={s.input}
      />

      {loading ? (
        <div style={s.muted}>Yükleniyor…</div>
      ) : err ? (
        <div style={s.err}>{err}</div>
      ) : quizzes.length === 0 ? (
        <div style={s.muted}>Quiz bulunamadı</div>
      ) : (
        <ul style={s.list}>
          {quizzes.map((q) => (
            <li key={q.id} style={s.item}>
              <b>{q.lessonId}</b> — {q.question}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

const s: Record<string, React.CSSProperties> = {
  page: {
    padding: 24,
    color: "white",
  },
  h1: {
    fontSize: 26,
    fontWeight: 900,
    marginBottom: 16,
  },
  input: {
    padding: "10px 12px",
    borderRadius: 10,
    border: "1px solid rgba(255,255,255,0.2)",
    background: "rgba(0,0,0,0.25)",
    color: "white",
    marginBottom: 16,
    width: "100%",
    maxWidth: 320,
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  item: {
    padding: "10px 12px",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },
  muted: { opacity: 0.7 },
  err: {
    color: "#ff8a8a",
    fontWeight: 700,
  },
};
