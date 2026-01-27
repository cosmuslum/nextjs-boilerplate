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

export type LessonLevel = "A0" | "A1" | "A2" | "B1";

export type Lesson = {
  id: string;
  title: string;
  description?: string;
  level: LessonLevel;
  order: number;
};

/* =====================
   READ
===================== */

export async function getAllLessons(): Promise<Lesson[]> {
  const snap = await getDocs(collection(db, "lessons"));

  const lessons = snap.docs.map((d) => {
    const data = d.data() as any;
    return {
      id: d.id,
      title: data.title ?? "",
      description: data.description ?? "",
      level: data.level ?? "A0",
      order: data.order ?? 0,
    };
  });

  return lessons.sort((a, b) => a.order - b.order);
}

export async function getLessonsByLevel(
  level: LessonLevel
): Promise<Lesson[]> {
  const q = query(
    collection(db, "lessons"),
    where("level", "==", level)
  );
  const snap = await getDocs(q);

  const lessons = snap.docs.map((d) => {
    const data = d.data() as any;
    return {
      id: d.id,
      title: data.title ?? "",
      description: data.description ?? "",
      level,
      order: data.order ?? 0,
    };
  });

  return lessons.sort((a, b) => a.order - b.order);
}

/* ⛑️ Backward compatibility */
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
