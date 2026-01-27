"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

type Locale = "tr" | "en" | "nl" | "ar" | "ku";

type Localized = Record<Locale, string>;

type Lesson = {
  id: string;
  level: string;
  orderIndex: number;
  title: Localized;
  description: Localized;
  content: Localized;
};

export default function LessonDetailPage({
  params,
}: {
  params: { locale: Locale; id: string };
}) {
  const locale = params.locale ?? "tr";
  const id = params.id;

  const [loading, setLoading] = useState(true);
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [err, setErr] = useState<string | null>(null);

  const langLabel = useMemo(() => {
    const map: Record<Locale, string> = {
      tr: "Türkçe",
      en: "English",
      nl: "Nederlands",
      ar: "العربية",
      ku: "Kurdî",
    };
    return map[locale] ?? "Türkçe";
  }, [locale]);

  useEffect(() => {
    let alive = true;

    async function run() {
      try {
        setLoading(true);
        setErr(null);

        if (!db) {
          // Firebase env yoksa: sayfa çalışsın ama uyarı versin (build kırılmasın)
          throw new Error(
            "Firebase ayarları eksik. Vercel → Settings → Environment Variables içine NEXT_PUBLIC_FIREBASE_* değerlerini eklemelisin."
          );
        }

        const ref = doc(db, "lessons", id);
        const snap = await getDoc(ref);

        if (!alive) return;

        if (!snap.exists()) {
          setLesson(null);
          setErr("Ders bulunamadı.");
          return;
        }

        const data = snap.data() as Lesson;
        setLesson({ ...data, id: snap.id });
      } catch (e: any) {
        if (!alive) return;
        setErr(e?.message ?? "Bir hata oluştu.");
      } finally {
        if (!alive) return;
        setLoading(false);
      }
    }

    run();
    return () => {
      alive = false;
    };
  }, [id]);

  return (
    <main style={s.page}>
      <div style={s.wrap}>
        <div style={s.top}>
          <Link href={`/${locale}/lessons`} style={s.back}>
            ← Derslere dön
          </Link>
          <span style={s.badge}>{langLabel}</span>
        </div>

        <div style={s.card}>
          {loading ? (
            <div style={s.muted}>Yükleniyor…</div>
          ) : err ? (
            <div>
              <div style={s.errTitle}>Hata</div>
              <div style={s.errText}>{err}</div>
              <div style={{ marginTop: 14 }}>
                <Link href={`/${locale}`} style={s.btn}>
                  Ana sayfa
                </Link>
              </div>
            </div>
          ) : !lesson ? (
            <div style={s.muted}>Ders bulunamadı.</div>
          ) : (
            <>
              <div style={s.header}>
                <h1 style={s.h1}>{lesson.title?.[locale] ?? "Ders"}</h1>
                <div style={s.sub}>
                  Seviye: <b>{lesson.level}</b> • Sıra: <b>{lesson.orderIndex}</b>
                </div>
              </div>

              <div style={s.section}>
                <div style={s.label}>Açıklama</div>
                <div style={s.text}>
                  {lesson.description?.[locale] ?? ""}
                </div>
              </div>

              <div style={s.section}>
                <div style={s.label}>İçerik</div>
                <div style={s.text}>
                  {lesson.content?.[locale] ?? ""}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

const s: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#0b1020 0%, #121a35 35%, #2a1f44 100%)",
    color: "white",
    padding: "28px 0",
  },
  wrap: { maxWidth: 980, margin: "0 auto", padding: "0 16px" },
  top: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
    marginBottom: 14,
  },
  back: {
    color: "rgba(255,255,255,0.85)",
    textDecoration: "none",
    fontWeight: 700,
  },
  badge: {
    fontSize: 12,
    padding: "6px 10px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(255,255,255,0.06)",
  },
  card: {
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(0,0,0,0.18)",
    boxShadow: "0 18px 60px rgba(0,0,0,0.35)",
    padding: 18,
  },
  muted: { opacity: 0.75 },
  errTitle: { fontSize: 18, fontWeight: 900, marginBottom: 6 },
  errText: { opacity: 0.85, lineHeight: 1.55 },
  btn: {
    display: "inline-block",
    background: "rgba(124,140,255,0.95)",
    color: "#0b1020",
    padding: "10px 12px",
    borderRadius: 12,
    fontWeight: 900,
    textDecoration: "none",
  },
  header: { marginBottom: 10 },
  h1: { fontSize: 26, margin: 0, fontWeight: 950, lineHeight: 1.2 },
  sub: { marginTop: 8, opacity: 0.8, fontSize: 13 },
  section: { marginTop: 16 },
  label: { fontSize: 12, opacity: 0.7, marginBottom: 6, fontWeight: 800 },
  text: {
    whiteSpace: "pre-wrap",
    lineHeight: 1.7,
    opacity: 0.95,
  },
};
