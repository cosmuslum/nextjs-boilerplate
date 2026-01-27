import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { lessons, quizzes } from "@/data/a0a1.seed";

async function run() {
  console.log("📘 A0-A1 dersleri Firestore'a yazılıyor...");

  for (const lesson of lessons) {
    await addDoc(collection(db, "lessons"), lesson);
  }

  console.log("✅ Dersler eklendi");
}

run().catch(console.error);
