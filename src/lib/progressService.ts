import { db } from "@/lib/firebase";
import {
  doc,
  setDoc,
  getDoc,
  serverTimestamp,
  collection,
  getDocs,
} from "firebase/firestore";

// ✅ Kullanıcının tamamladığı dersleri çek
export async function getUserProgress(uid: string) {
  const snap = await getDocs(collection(db, "users", uid, "progress"));
  return snap.docs.map((d) => d.id);
}

// ✅ Dersi tamamla
export async function completeLesson(uid: string, lessonId: string) {
  await setDoc(doc(db, "users", uid, "progress", lessonId), {
    completedAt: serverTimestamp(),
  });
}

// ✅ Bir ders tamamlandı mı?
export async function isLessonCompleted(uid: string, lessonId: string) {
  const snap = await getDoc(doc(db, "users", uid, "progress", lessonId));
  return snap.exists();
}