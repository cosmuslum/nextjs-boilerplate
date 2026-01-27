import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import { db } from "../lib/firebase";
import { lessons, quizzes } from "../data/a0a1.seed";

async function run() {
  console.log("🔥 A0→A1 dersleri Firestore’a yazılıyor...");

  for (const lesson of lessons) {
    await setDoc(doc(db, "lessons", lesson.id), lesson);
    console.log("✅ Ders eklendi:", lesson.id);
  }

  console.log("🔥 Quizler ekleniyor...");

  for (const quiz of quizzes) {
    await addDoc(collection(db, "quizzes"), quiz);
    console.log("✅ Quiz eklendi:", quiz.lessonId);
  }

  console.log("🎉 SEED TAMAMLANDI!");
}

run().catch(console.error);