import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function getUserRole(
  uid: string
): Promise<"admin" | "teacher" | "user"> {
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) return "user";
  const data = snap.data();
  const role = (data.role || data.Role || "user").toString().toLowerCase();

  if (role === "admin") return "admin";
  if (role === "teacher") return "teacher";
  return "user";
}