"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  onAuthStateChanged,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { auth } from "@/lib/firebase";
import { getUserQuizResults } from "@/lib/quizService";
import { useTranslations } from "next-intl";

type QuizResult = {
  lessonId: string;
  score: number;
  passed: boolean;
  updatedAt: number;
};

function calcProgress(passedCount: number) {
  if (passedCount >= 7) return 100;
  if (passedCount >= 3) return 34 + Math.round(((passedCount - 3) / 4) * 32);
  return Math.round((passedCount / 2) * 33);
}

function BadgeToast({
  open,
  title,
  subtitle,
  badgeTitle,
  badgeIcon,
  cta,
  ok,
  onClose,
}: {
  open: boolean;
  title: string;
  subtitle: string;
  badgeTitle: string;
  badgeIcon: string;
  cta: string;
  ok: string;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <div className="bg-black/80 border border-white/10 rounded-3xl p-5 backdrop-blur-xl shadow-2xl w-[320px] animate-[pop_0.25s_ease-out]">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="text-3xl">{badgeIcon}</div>
            <div>
              <p className="text-white font-extrabold">{title}</p>
              <p className="text-white/70 text-sm mt-1">
                {subtitle}:{" "}
                <span className="text-white/90 font-semibold">{badgeTitle}</span>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition"
            aria-label="close"
          >
            ✕
          </button>
        </div>

        <div className="mt-4 flex gap-3">
          <Link
            href="#badges"
            className="flex-1 text-center px-4 py-2 rounded-2xl bg-green-500/90 hover:bg-green-500 text-black font-bold transition"
            onClick={onClose}
          >
            {cta}
          </Link>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold transition"
          >
            {ok}
          </button>
        </div>
      </div>

      <style jsx global>{`
        @keyframes pop {
          from {
            transform: translateY(10px);
            opacity: 0;
          }
          to {
            transform: translateY(0px);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default function ProfilePage() {
  const tCommon = useTranslations("common");
  const tTopbar = useTranslations("topbar");
  const t = useTranslations("profilePage");

  const router = useRouter();
  const params = useParams() as { locale: string };
  const locale = params?.locale || "tr";

  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [uid, setUid] = useState<string | null>(null);
  const [results, setResults] = useState<QuizResult[]>([]);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");
  const [sendingReset, setSendingReset] = useState(false);

  const [toastOpen, setToastOpen] = useState(false);
  const [toastBadgeTitle, setToastBadgeTitle] = useState("");
  const [toastBadgeIcon, setToastBadgeIcon] = useState("🏅");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      if (!u) {
        router.push(`/${locale}/login`);
        return;
      }

      setUserEmail(u.email || null);
      setUid(u.uid);

      try {
        const r = await getUserQuizResults(u.uid);
        setResults(r as any);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    });

    return () => unsub();
  }, [router, locale]);

  const passedCount = useMemo(
    () => results.filter((r) => r.passed).length,
    [results]
  );

  const avgScore = useMemo(() => {
    if (results.length === 0) return 0;
    const sum = results.reduce((acc, r) => acc + (r.score || 0), 0);
    return Math.round(sum / results.length);
  }, [results]);

  const progressPercent = useMemo(() => calcProgress(passedCount), [passedCount]);

  const level = useMemo(() => {
    if (passedCount >= 7) {
      return {
        name: t("level.advanced"),
        emoji: "🔵",
        color: "bg-blue-500/20 border-blue-500/30 text-blue-200",
        next: null as null | string,
      };
    }
    if (passedCount >= 3) {
      return {
        name: t("level.intermediate"),
        emoji: "🟡",
        color: "bg-yellow-500/20 border-yellow-500/30 text-yellow-200",
        next: t("level.advanced"),
      };
    }
    return {
      name: t("level.beginner"),
      emoji: "🟢",
      color: "bg-green-500/20 border-green-500/30 text-green-200",
      next: t("level.intermediate"),
    };
  }, [passedCount, t]);

  const badgeData = useMemo(() => {
    const solved = results.length;
    const passed = results.filter((r) => r.passed).length;
    const bestScore = results.reduce((max, r) => Math.max(max, r.score || 0), 0);

    const byDay: Record<string, number> = {};
    results.forEach((r) => {
      const d = new Date(r.updatedAt);
      const key = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
      byDay[key] = (byDay[key] || 0) + 1;
    });
    const maxSameDay = Object.values(byDay).reduce((m, v) => Math.max(m, v), 0);

    const badges = [
      { id: "first-quiz", icon: "🏁", earned: solved >= 1 },
      { id: "first-pass", icon: "✅", earned: passed >= 1 },
      { id: "pass-3", icon: "🎯", earned: passed >= 3 },
      { id: "quiz-master", icon: "🧠", earned: solved >= 5 },
      { id: "hard-worker", icon: "🏆", earned: passed >= 7 },
      { id: "excellence", icon: "🌟", earned: bestScore >= 90 },
      { id: "streak", icon: "🔥", earned: maxSameDay >= 3 },
    ].map((b) => ({
      ...b,
      title: t(`badges.${b.id}.title`),
      desc: t(`badges.${b.id}.desc`),
    }));

    const earnedCount = badges.filter((b) => b.earned).length;

    return { badges, earnedCount, bestScore, maxSameDay };
  }, [results, t]);

  useEffect(() => {
    if (!uid) return;

    const earnedIds = badgeData.badges.filter((b) => b.earned).map((b) => b.id);
    const key = `badges_seen_${uid}`;
    const seenRaw = localStorage.getItem(key);
    const seen = seenRaw ? (JSON.parse(seenRaw) as string[]) : [];

    const newBadges = earnedIds.filter((id) => !seen.includes(id));
    if (newBadges.length > 0) {
      const b = badgeData.badges.find((x) => x.id === newBadges[0]);
      if (b) {
        setToastBadgeTitle(b.title);
        setToastBadgeIcon(b.icon);
        setToastOpen(true);
        setTimeout(() => setToastOpen(false), 7000);
      }
      localStorage.setItem(key, JSON.stringify([...seen, ...newBadges]));
    }
  }, [badgeData.badges, uid]);

  async function handleResetPassword() {
    setMsg("");
    setErr("");

    try {
      if (!userEmail) {
        setErr(t("reset.errNoEmail"));
        return;
      }

      setSendingReset(true);
      await sendPasswordResetEmail(auth, userEmail);
      setMsg(t("reset.success"));
    } catch (e: any) {
      setErr(e?.message || t("reset.errGeneric"));
    } finally {
      setSendingReset(false);
    }
  }

  async function handleLogout() {
    await signOut(auth);
    router.push(`/${locale}`);
  }

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center text-white/70">
        {tCommon("loading")}
      </div>
    );
  }

  return (
    <main className="min-h-[calc(100vh-70px)] text-white relative overflow-hidden">
      <BadgeToast
        open={toastOpen}
        title={t("toast.title")}
        subtitle={t("toast.subtitle")}
        badgeTitle={toastBadgeTitle}
        badgeIcon={toastBadgeIcon}
        cta={t("toast.cta")}
        ok={t("toast.ok")}
        onClose={() => setToastOpen(false)}
      />

      <section className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-2">{t("title")}</h1>
            <p className="text-white/60">{t("subtitle")}</p>
          </div>

          <div className="flex gap-3">
            <Link
              href={`/${locale}/lessons`}
              className="px-5 py-3 rounded-2xl bg-green-500/90 hover:bg-green-500 text-black font-bold transition"
            >
              {t("goLessons")} →
            </Link>
            <button
              onClick={handleLogout}
              className="px-5 py-3 rounded-2xl bg-red-500/80 hover:bg-red-500 text-white font-semibold transition"
            >
              {tTopbar("logout")}
            </button>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md shadow-xl mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className={`inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full border ${level.color}`}>
                <span className="text-lg">{level.emoji}</span>
                <span className="font-semibold">{level.name}</span>
              </div>

              <p className="text-white/70 mt-4">
                {t("stats.completedLessons")}:{" "}
                <span className="text-white font-semibold">{passedCount}</span>
              </p>

              <p className="text-white/60 text-sm mt-1">
                {t("stats.avgScore")}:{" "}
                <span className="text-white font-semibold">{avgScore}%</span>
              </p>

              {level.next && (
                <p className="text-white/50 text-sm mt-2">
                  {t("stats.nextLevel")}:{" "}
                  <span className="text-white/80 font-semibold">{level.next}</span>
                </p>
              )}
            </div>

            <div className="w-full md:w-[360px]">
              <div className="flex items-center justify-between text-xs text-white/60 mb-2">
                <span>{t("progress.title")}</span>
                <span className="text-white/80 font-semibold">{progressPercent}%</span>
              </div>

              <div className="h-3 w-full rounded-full bg-white/10 overflow-hidden">
                <div className="h-full bg-green-500/80 transition-all" style={{ width: `${progressPercent}%` }} />
              </div>

              <p className="text-white/40 text-xs mt-2">{t("progress.hint")}</p>
            </div>
          </div>
        </div>

        <div id="badges" className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md shadow-xl mb-8">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-extrabold">{t("badges.title")}</h2>
              <p className="text-white/60 text-sm mt-1">
                {badgeData.earnedCount} / {badgeData.badges.length} {t("badges.opened")}
              </p>
            </div>

            <div className="text-right text-white/60 text-sm">
              <p>
                {t("badges.bestScore")}:{" "}
                <span className="text-white font-semibold">{badgeData.bestScore}%</span>
              </p>
              <p>
                {t("badges.maxSameDay")}:{" "}
                <span className="text-white font-semibold">{badgeData.maxSameDay}</span>
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {badgeData.badges.map((b) => (
              <div
                key={b.id}
                className={`rounded-3xl p-6 border backdrop-blur-md transition ${
                  b.earned ? "bg-white/10 border-white/15 hover:bg-white/15" : "bg-black/30 border-white/10 opacity-60"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{b.icon}</span>
                  {b.earned ? (
                    <span className="text-xs px-3 py-1 rounded-full bg-green-500/20 text-green-200 border border-green-500/30">
                      {t("badges.unlocked")}
                    </span>
                  ) : (
                    <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/60 border border-white/10">
                      {t("badges.locked")}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold">{b.title}</h3>
                <p className="text-white/60 text-sm mt-2 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md shadow-xl">
          <h3 className="text-white font-bold text-xl mb-2">{t("reset.title")}</h3>
          <p className="text-white/60 mb-6">{t("reset.subtitle")}</p>

          <button
            onClick={handleResetPassword}
            disabled={sendingReset}
            className="px-6 py-3 rounded-2xl bg-blue-500/80 hover:bg-blue-500 text-white font-semibold transition disabled:opacity-50"
          >
            {sendingReset ? t("reset.sending") : t("reset.button")}
          </button>

          {msg && (
            <div className="mt-5 p-4 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-200 text-sm">
              {msg}
            </div>
          )}
          {err && (
            <div className="mt-5 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-200 text-sm">
              {err}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}