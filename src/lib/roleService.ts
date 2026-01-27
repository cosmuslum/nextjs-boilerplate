import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

/**
 * Kullanıcı rolünü getirir.
 * Eğer kullanıcı Firestore'da yoksa otomatik user olarak oluşturur.
 */
export async function getUserRole(uid: string, email?: string | null) {
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    await setDoc(ref, {
      email: email || "",
      role: "user",
      createdAt: Date.now(),
    });
    return "user";
  }

  const data = snap.data();
  return (data.role as "admin" | "teacher" | "user") || "user";
}