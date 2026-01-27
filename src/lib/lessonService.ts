import {
  collection,
  getDocs,
  query,
  where,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

/* =====================
   TYPES
===================== */

export type Locale = "tr" | "en" | "ar" | "nl" | "ku";

export type LocalizedText = Record<Locale, string>;

export type LessonLevel = "BEGINNER" | "INTERMEDIATE" | "ADVANCED";

export type Lesson = {
  id: string;
  title: LocalizedText;
  description?: LocalizedText;
  content?: LocalizedText;
  level: LessonLevel;
  orderIndex: number;
};

/* =====================
   READ
===================== */

export async function getAllLessons(): Promise<Lesson[]> {
  const snap = await getDocs(collection(db, "lessons"));

  return snap.docs.map((d) => {
    const data = d.data() as any;

    return {
      id: d.id,
      title: data.title,
      description: data.description,
      content: data.content,
      level: data.level as LessonLevel,
      orderIndex: data.orderIndex ?? 0,
    };
  });
}

export async function getLessonsByLevel(
  level: LessonLevel
): Promise<Lesson[]> {
  const q = query(collection(db, "lessons"), where("level", "==", level));
  const snap = await getDocs(q);

  return snap.docs.map((d) => {
    const data = d.data() as any;

    return {
      id: d.id,
      title: data.title,
      description: data.description,
      content: data.content,
      level,
      orderIndex: data.orderIndex ?? 0,
    };
  });
}

/* Alias – eski çağrılar kırılmasın */
export const getLessons = getAllLessons;

/* =====================
   CREATE
===================== */

export async function addLesson(
  lesson: Omit<Lesson, "id">
): Promise<void> {
  await addDoc(collection(db, "lessons"), lesson);
}

/* =====================
   UPDATE
===================== */

export async function updateLesson(
  id: string,
  data: Partial<Omit<Lesson, "id">>
): Promise<void> {
  const ref = doc(db, "lessons", id);
  await updateDoc(ref, data);
}

/* =====================
   DELETE
===================== */

export async function deleteLesson(id: string): Promise<void> {
  const ref = doc(db, "lessons", id);
  await deleteDoc(ref);
}
