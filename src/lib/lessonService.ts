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

/**
 * Admin panel şu seviyeleri kullanıyor:
 * BEGINNER / INTERMEDIATE / ADVANCED
 * (Build hatan buradan geliyordu.)
 */
export type LessonLevel = "BEGINNER" | "INTERMEDIATE" | "ADVANCED";

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
      level: (data.level ?? "BEGINNER") as LessonLevel,
      order: data.order ?? 0,
    };
  });

  return lessons.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export async function getLessonsByLevel(level: LessonLevel): Promise<Lesson[]> {
  const q = query(collection(db, "lessons"), where("level", "==", level));
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

  return lessons.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

/**
 * Pakette bazı yerler getLessons diye çağırıyor olabilir.
 * Kırılmasın diye alias bıraktım.
 */
export const getLessons = getAllLessons;

/* =====================
   CREATE
===================== */

export async function addLesson(lesson: Omit<Lesson, "id">): Promise<void> {
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
