"use client";

import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { completeLesson, isLessonCompleted } from "@/lib/progressService";

export default function CompleteLessonButton({ lessonId }: { lessonId: string }) {
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function check() {
      const user = auth.currentUser;
      if (!user) return;

      const completed = await isLessonCompleted(user.uid, lessonId);
      setDone(completed);
    }
    check();
  }, [lessonId]);

  async function handleComplete() {
    const user = auth.currentUser;
    if (!user) return;

    setLoading(true);
    await completeLesson(user.uid, lessonId);
    setDone(true);
    setLoading(false);
  }

  return (
    <button
      disabled={done || loading}
      onClick={handleComplete}
      className={`px-8 py-4 rounded-2xl font-semibold shadow-xl transition w-full md:w-auto
        ${
          done
            ? "bg-white/10 text-white/40 cursor-not-allowed border border-white/10"
            : "bg-blue-600 hover:bg-blue-700 text-white"
        }
      `}
    >
      {done ? "✅ Ders Tamamlandı" : loading ? "⏳ Kaydediliyor..." : "✅ Dersi Tamamla"}
    </button>
  );
}