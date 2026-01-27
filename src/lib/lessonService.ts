import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export type LocaleKey = "tr" | "nl" | "en" | "ar" | "ku";
export type LessonLevel = "BEGINNER" | "INTERMEDIATE" | "ADVANCED";

export type LessonDoc = {
  id?: string;
  level: LessonLevel;
  orderIndex?: number;
  title: Record<LocaleKey, string>;
  description: Record<LocaleKey, string>;
  content: Record<LocaleKey, string>;
  createdAt?: number;
  updatedAt?: number;
};

const LOCALES: LocaleKey[] = ["tr", "nl", "en", "ar", "ku"];
const COL = "lessons";

/** Bir map içinden dolu ilk değeri seç */
function pickBase(map: Partial<Record<LocaleKey, string>>) {
  const v =
    map.tr?.trim() ||
    map.nl?.trim() ||
    map.en?.trim() ||
    map.ar?.trim() ||
    map.ku?.trim() ||
    "";
  return v;
}

/**
 * Admin TR yazsa bile diğer diller boş kalmasın diye doldurur.
 * Base tamamen boşsa (hiçbir dil girilmemişse) boş döner.
 */
function ensureLocales(map: Partial<Record<LocaleKey, string>>) {
  const base = pickBase(map);

  const out: Record<LocaleKey, string> = {
    tr: (map.tr ?? "").trim() || base,
    nl: (map.nl ?? "").trim() || base,
    en: (map.en ?? "").trim() || base,
    ar: (map.ar ?? "").trim() || base,
    ku: (map.ku ?? "").trim() || base,
  };

  // Eğer base da boşsa her şey boş kalır (zorla bir şey uydurmayız)
  return out;
}

/**
 * Normalize:
 * - title/description/content her zaman 5 dil içerir
 * - createdAt: sadece ilk oluştururken set edilir (update’te korunur)
 * - updatedAt: her zaman güncellenir
 */
function normalizeLesson(
  payload: Partial<LessonDoc>,
  opts?: { keepCreatedAt?: number }
): LessonDoc {
  const now = Date.now();

  const title = ensureLocales((payload.title || {}) as any);
  const description = ensureLocales((payload.description || {}) as any);
  const content = ensureLocales((payload.content || {}) as any);

  const createdAt =
    typeof opts?.keepCreatedAt === "number"
      ? opts.keepCreatedAt
      : typeof payload.createdAt === "number"
      ? payload.createdAt
      : now;

  return {
    level: (payload.level as LessonLevel) || "BEGINNER",
    orderIndex: typeof payload.orderIndex === "number" ? payload.orderIndex : 0,
    title,
    description,
    content,
    createdAt,
    updatedAt: now,
  };
}

export async function addLesson(payload: Partial<LessonDoc>) {
  const normalized = normalizeLesson(payload);
  const ref = await addDoc(collection(db, COL), normalized);
  return ref.id;
}

export async function updateLesson(lessonId: string, payload: Partial<LessonDoc>) {
  const ref = doc(db, COL, lessonId);

  // Var olanı çek -> merge (kayıp alan olmasın)
  const currentSnap = await getDoc(ref);
  const current = currentSnap.exists() ? (currentSnap.data() as any) : {};

  const merged: Partial<LessonDoc> = {
    ...current,
    ...payload,
    title: { ...(current.title || {}), ...(payload.title || {}) },
    description: { ...(current.description || {}), ...(payload.description || {}) },
    content: { ...(current.content || {}), ...(payload.content || {}) },
  };

  // createdAt sabit kalsın
  const keepCreatedAt =
    typeof current.createdAt === "number" ? current.createdAt : undefined;

  const normalized = normalizeLesson(merged, { keepCreatedAt });
  await updateDoc(ref, normalized as any);
}

export async function deleteLesson(lessonId: string) {
  await deleteDoc(doc(db, COL, lessonId));
}

export async function getLessonById(lessonId: string) {
  const snap = await getDoc(doc(db, COL, lessonId));
  if (!snap.exists()) return null;
  return { id: snap.id, ...(snap.data() as any) };
}

export async function getLessonsByLevel(level: LessonLevel) {
  // orderIndex yoksa bile sorun çıkmasın diye ASC kullanıyoruz
  const q = query(
    collection(db, COL),
    where("level", "==", level),
    orderBy("orderIndex", "asc")
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) }));
}

export async function getAllLessons() {
  const q = query(collection(db, COL), orderBy("updatedAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) }));
}