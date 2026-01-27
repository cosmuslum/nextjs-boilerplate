import {
  doc,
  getDoc,
  updateDoc,
  increment,
  arrayUnion,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

/**
 * ✅ Quiz sonuçlarını kaydeder
 * ✅ passed=true ise lesson completed yapar ama tekrar artmaz
 */
export async function saveQuizResultAndProgress({
  uid,
  lessonId,
  score,
  correctCount,
  total,
  passed,
}: {
  uid: string;
  lessonId: string;
  score: number;
  correctCount: number;
  total: number;
  passed: boolean;
}) {
  // ✅ result kaydı (her zaman güncellenir)
  const resultRef = doc(db, "users", uid, "results", lessonId);

  await setDoc(
    resultRef,
    {
      lessonId,
      score,
      correctCount,
      total,
      passed,
      updatedAt: serverTimestamp(),
    },
    { merge: true }
  );

  // ✅ eğer passed değilse completion yapma
  if (!passed) return;

  // ✅ user doc kontrol
  const userRef = doc(db, "users", uid);
  const snap = await getDoc(userRef);
  if (!snap.exists()) return;

  const data = snap.data();
  const completedLessonIds: string[] = data.completedLessonIds || [];

  // ✅ daha önce tamamlanmışsa tekrar artırma
  if (completedLessonIds.includes(lessonId)) return;

  await updateDoc(userRef, {
    completedLessons: increment(1),
    completedLessonIds: arrayUnion(lessonId),
  });
}