import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";

export type Lesson = {
  id: string;
  title: string;
  level: string; // "A0", "A1" vs
  order?: number;
  description?: string;
};

export async function getAllLessons(): Promise<Lesson[]> {
  const colRef = collection(db, "lessons");
  const snap = await getDocs(colRef);

  const lessons: Lesson[] = snap.docs.map((d) => {
    const data = d.data() as any;
    return {
      id: d.id,
      title: data.title ?? "",
      level: data.level ?? "A0",
      order: data.order ?? 0,
      description: data.description ?? "",
    };
  });

  lessons.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  return lessons;
}

export async function getLessonsByLevel(level: string): Promise<Lesson[]> {
  const colRef = collection(db, "lessons");
  const q = query(colRef, where("level", "==", level));
  const snap = await getDocs(q);

  const lessons: Lesson[] = snap.docs.map((d) => {
    const data = d.data() as any;
    return {
      id: d.id,
      title: data.title ?? "",
      level: data.level ?? level,
      order: data.order ?? 0,
      description: data.description ?? "",
    };
  });

  lessons.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  return lessons;
}

/**
 * ✅ Geriye dönük uyumluluk:
 * Bazı dosyalar getLessons() çağırıyor. Bu alias ile build kırılmaz.
 */
export const getLessons = getAllLessons;
