import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { getLessons } from "@/lib/lessonService";

export async function initUser(uid: string, email: string) {
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);

  if (snap.exists()) return;

  const lessons = await getLessons();
  const totalLessons = lessons.length;

  await setDoc(ref, {
    uid,
    email,
    createdAt: serverTimestamp(),
    completedLessons: 0,
    totalLessons,
    completedLessonIds: [],
  });
}
