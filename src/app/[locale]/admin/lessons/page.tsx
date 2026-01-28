"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

type Lesson = {
  id: string;
  title?: any;
  description?: any;
  level?: string;
};

export default function LessonsPage() {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        // 🔒 BUILD + RUNTIME GÜVENLİK
        if (!db) {
          setError("Firebase yapılandırması yok");
          setLoading(false);
          return;
        }

        const snap = await getDocs(collection(db, "lessons"));
        const items: Lesson[] = snap.docs.map((d) => ({
          id: d.id,
          ...(d.data() as any),
        }));

        setLessons(items);
      } catch (e: any) {
        setError(e?.message ?? "Dersler yüklenemedi");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading) {
    return <div style={s.center}>Yükleniyor…</div>;
  }

  if (error) {
    return <div style={s.center}>⚠️ {error}</div>;
  }

  return (
    <main style={s.page}>
      <h1 style={s.h1}>Dersler</h1>

      <div style={s.grid}>
        {lessons.map((l) => (
          <div key={l.id} style={s.card}>
            <div style={s.title}>
              {typeof l.title === "string"
                ? l.title
                : l.title?.tr ?? "Başlıksız"}
            </div>

            <div style={s.desc}>
              {typeof l.description === "string"
                ? l.description
                : l.description?.tr ?? ""}
            </div>

            {l.level ? <div style={s.badge}>{l.level}</div> : null}
          </div>
        ))}
      </div>
    </main>
  );
}

const s: Record<string, React.CSSProperties> = {
  page: { padding: 24, color: "white" },
  h1: { fontSize: 28, fontWeight: 900, marginBottom: 20 },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: 16,
  },
  card: {
    background: "rgba(0,0,0,0.25)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 16,
    padding: 16,
  },
  title: { fontSize: 18, fontWeight: 800, marginBottom: 6 },
  desc: { opacity: 0.8, fontSize: 14, lineHeight: 1.5 },
  badge: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: 700,
    padding: "4px 8px",
    borderRadius: 999,
    display: "inline-block",
    background: "#7c8cff",
    color: "#0b1020",
  },
  center: {
    padding: 40,
    textAlign: "center",
    color: "white",
    opacity: 0.85,
  },
};
