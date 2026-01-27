"use client";

import React, { useEffect, useMemo, useState } from "react";

type Lesson = {
  key: "alfabe" | "kelimeler" | "cumleler";
  title: string;
  desc: string;
  href: string;
  badge: string;
};

const LESSONS: Lesson[] = [
  {
    key: "alfabe",
    title: "Alfabe",
    desc: "Harfleri sesli dinle, telaffuzu oturt. Hollandaca öğrenmenin temeli.",
    href: "/a0/alfabe",
    badge: "Temel"
  },
  {
    key: "kelimeler",
    title: "Kelimeler",
    desc: "Temel kelimeler + günlük kalıplar + mini test ile pekiştir.",
    href: "/a0/kelimeler",
    badge: "Pratik"
  },
  {
    key: "cumleler",
    title: "Cümleler",
    desc: "Bol cümle dinle, anlamını öğren, mini test ile tekrar et.",
    href: "/a0/cumleler",
    badge: "Konuşma"
  }
];

function storageKey(lessonKey: Lesson["key"]) {
  return `nederlearn_a0_done_${lessonKey}`;
}

export default function A0HubPage() {
  const [done, setDone] = useState<Record<Lesson["key"], boolean>>({
    alfabe: false,
    kelimeler: false,
    cumleler: false
  });

  // localStorage'dan oku
  useEffect(() => {
    if (typeof window === "undefined") return;

    const next: Record<Lesson["key"], boolean> = {
      alfabe: localStorage.getItem(storageKey("alfabe")) === "1",
      kelimeler: localStorage.getItem(storageKey("kelimeler")) === "1",
      cumleler: localStorage.getItem(storageKey("cumleler")) === "1"
    };
    setDone(next);
  }, []);

  const progress = useMemo(() => {
    const total = LESSONS.length;
    const completed = LESSONS.filter(l => done[l.key]).length;
    const pct = Math.round((completed / total) * 100);
    return { total, completed, pct };
  }, [done]);

  const toggleDone = (key: Lesson["key"]) => {
    setDone(prev => {
      const next = { ...prev, [key]: !prev[key] };
      if (typeof window !== "undefined") {
        localStorage.setItem(storageKey(key), next[key] ? "1" : "0");
      }
      return next;
    });
  };

  const resetAll = () => {
    if (typeof window !== "undefined") {
      for (const l of LESSONS) localStorage.removeItem(storageKey(l.key));
    }
    setDone({ alfabe: false, kelimeler: false, cumleler: false });
  };

  return (
    <main style={s.page}>
      <div style={s.container}>
        <div style={s.top}>
          <div>
            <h1 style={s.h1}>A0 – Başlangıç</h1>
            <p style={s.sub}>
              Buradan A0 derslerine gir. Hedef dil her zaman <b>Hollandaca</b> 🇳🇱
            </p>
          </div>

          <div style={s.progressCard}>
            <div style={s.progressTop}>
              <div style={s.progressTitle}>İlerleme</div>
              <div style={s.progressPct}>{progress.pct}%</div>
            </div>

            <div style={s.barOuter}>
              <div style={{ ...s.barInner, width: `${progress.pct}%` }} />
            </div>

            <div style={s.progressMeta}>
              Tamamlanan: <b>{progress.completed}</b> / {progress.total}
            </div>

            <button style={s.resetBtn} onClick={resetAll}>
              Sıfırla
            </button>
          </div>
        </div>

        <div style={s.grid}>
          {LESSONS.map((l) => (
            <div key={l.key} style={s.card}>
              <div style={s.cardTop}>
                <span style={s.badge}>{l.badge}</span>
                <label style={s.checkWrap}>
                  <input
                    type="checkbox"
                    checked={done[l.key]}
                    onChange={() => toggleDone(l.key)}
                  />
                  <span style={s.checkText}>Tamamlandı</span>
                </label>
              </div>

              <div style={s.cardTitle}>{l.title}</div>
              <div style={s.cardDesc}>{l.desc}</div>

              <div style={s.cardActions}>
                <a href={l.href} style={s.goBtn}>
                  Derse git →
                </a>
                <a href="/" style={s.ghostBtn}>
                  Ana sayfa
                </a>
              </div>
            </div>
          ))}
        </div>

        <div style={s.bottomNav}>
          <a href="/tr" style={s.linkBtn}>← TR Ana Sayfa</a>
          <a href="/a0/alfabe" style={s.linkBtn}>Alfabe →</a>
        </div>

        <div style={s.tip}>
          Not: “Tamamlandı” işaretleri tarayıcıda saklanır. Başka cihazda görünmez.
        </div>
      </div>
    </main>
  );
}

const s: Record<string, React.CSSProperties> = {
  page: { minHeight: "100vh", background: "#070A12", color: "white", padding: "32px 0" },
  container: { maxWidth: 1100, margin: "0 auto", padding: "0 16px" },

  top: { display: "flex", gap: 16, justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap" },
  h1: { fontSize: 34, margin: 0 },
  sub: { opacity: 0.75, marginTop: 8, lineHeight: 1.6, maxWidth: 680 },

  progressCard: {
    width: 320,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 16,
    padding: 14
  },
  progressTop: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  progressTitle: { fontWeight: 900, opacity: 0.9 },
  progressPct: { fontWeight: 950, fontSize: 18 },

  barOuter: {
    height: 10,
    borderRadius: 999,
    background: "rgba(255,255,255,0.08)",
    overflow: "hidden",
    marginTop: 10
  },
  barInner: {
    height: 10,
    borderRadius: 999,
    background: "rgba(120,140,255,0.95)"
  },
  progressMeta: { marginTop: 10, fontSize: 12, opacity: 0.75 },
  resetBtn: {
    marginTop: 12,
    width: "100%",
    cursor: "pointer",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.06)",
    color: "rgba(255,255,255,0.92)",
    padding: "10px 12px",
    borderRadius: 12,
    fontWeight: 900
  },

  grid: {
    marginTop: 18,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 14
  },

  card: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 18,
    padding: 16
  },
  cardTop: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 },
  badge: {
    fontSize: 12,
    fontWeight: 900,
    padding: "6px 10px",
    borderRadius: 999,
    background: "rgba(0,200,255,0.12)",
    border: "1px solid rgba(0,200,255,0.18)"
  },
  checkWrap: { display: "flex", alignItems: "center", gap: 8, cursor: "pointer", opacity: 0.9, fontSize: 13 },
  checkText: { fontWeight: 800 },

  cardTitle: { marginTop: 10, fontSize: 18, fontWeight: 950 },
  cardDesc: { marginTop: 6, fontSize: 13, opacity: 0.72, lineHeight: 1.55 },

  cardActions: { marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" },
  goBtn: {
    textDecoration: "none",
    background: "rgba(120,140,255,0.95)",
    color: "#0B1020",
    padding: "10px 12px",
    borderRadius: 12,
    fontWeight: 950
  },
  ghostBtn: {
    textDecoration: "none",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    color: "rgba(255,255,255,0.92)",
    padding: "10px 12px",
    borderRadius: 12,
    fontWeight: 900
  },

  bottomNav: { marginTop: 20, display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap" },
  linkBtn: {
    textDecoration: "none",
    color: "rgba(255,255,255,0.92)",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    padding: "10px 12px",
    borderRadius: 12,
    fontWeight: 900
  },

  tip: { marginTop: 14, fontSize: 12, opacity: 0.6, lineHeight: 1.5 }
};
