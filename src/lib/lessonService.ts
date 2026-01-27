import { collection, getDocs, getDoc, doc, orderBy, query } from "firebase/firestore";
import { db } from "./firebase";

export type Lesson = {
  id: string;
  title: Record<string, string>;
  description?: Record<string, string>;
  content?: Record<string, string>;
  updatedAt?: any;
};

export async function getLessons(): Promise<Lesson[]> {
  const q = query(collection(db, "lessons"), orderBy("updatedAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) }));
}

export async function getLessonById(id: string): Promise<Lesson | null> {
  const ref = doc(db, "lessons", id);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return { id: snap.id, ...(snap.data() as any) } as Lesson;
}
