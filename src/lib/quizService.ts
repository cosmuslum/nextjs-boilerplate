import { db } from "@/lib/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

// ✅ Tüm quizleri getir
export async function getAllQuizzes() {
  const snap = await getDocs(collection(db, "quizzes"));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() })) as any[];
}

// ✅ Bir derse ait quizleri getir
export async function getQuizzesByLessonId(lessonId: string) {
  const q = query(collection(db, "quizzes"), where("lessonId", "==", lessonId));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() })) as any[];
}

// ✅ Quiz ekle
export async function addQuiz(data: any) {
  const ref = await addDoc(collection(db, "quizzes"), {
    ...data,
    createdAt: serverTimestamp(),
  });
  return ref.id;
}

// ✅ Quiz sil
export async function deleteQuiz(id: string) {
  await deleteDoc(doc(db, "quizzes", id));
}

// ✅ Kullanıcının quiz sonuçlarını getir (profil için)
export async function getUserQuizResults(uid: string) {
  const q = query(collection(db, "quizResults"), where("uid", "==", uid));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() })) as any[];
}

// ✅ Quiz sonucu kaydet
export async function saveQuizResult(uid: string, lessonId: string, score: number) {
  const ref = doc(collection(db, "quizResults"));

  await setDoc(ref, {
    uid,
    lessonId,
    score,
    createdAt: serverTimestamp(),
  });

  return ref.id;
}