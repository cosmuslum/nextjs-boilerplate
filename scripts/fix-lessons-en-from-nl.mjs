import admin from "firebase-admin";
import fs from "fs";
import path from "path";

const serviceAccountPath = path.resolve(process.cwd(), "serviceAccountKey.json");
if (!fs.existsSync(serviceAccountPath)) {
  console.error("❌ serviceAccountKey.json bulunamadı. Proje köküne koymalısın.");
  process.exit(1);
}
const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf8"));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

function ensureMap(obj) {
  return obj && typeof obj === "object" ? obj : {};
}

function setEnFromNl(map) {
  const m = ensureMap(map);
  // en yoksa en = nl, nl yoksa en = tr
  if (!m.en || String(m.en).trim() === "") {
    m.en = m.nl || m.tr || m.ku || m.ar || "";
  }
  return m;
}

async function main() {
  console.log("🔧 lessons: en alanları nl'den dolduruluyor (yoksa tr fallback)...");

  const snap = await db.collection("lessons").get();
  if (snap.empty) {
    console.log("⚠️ lessons boş.");
    return;
  }

  let updated = 0;
  const batchSize = 400;
  let batch = db.batch();
  let op = 0;

  for (const doc of snap.docs) {
    const data = doc.data() || {};

    const title = ensureMap(data.title);
    const description = ensureMap(data.description);
    const content = ensureMap(data.content);

    const newTitle = setEnFromNl({ ...title });
    const newDesc = setEnFromNl({ ...description });

    const hasContent = data.content && typeof data.content === "object";
    const newContent = hasContent ? setEnFromNl({ ...content }) : null;

    const changed =
      JSON.stringify(newTitle) !== JSON.stringify(title) ||
      JSON.stringify(newDesc) !== JSON.stringify(description) ||
      (hasContent && JSON.stringify(newContent) !== JSON.stringify(content));

    if (!changed) continue;

    const payload = { title: newTitle, description: newDesc };
    if (hasContent) payload.content = newContent;

    batch.update(doc.ref, payload);
    op++;
    updated++;

    if (op >= batchSize) {
      await batch.commit();
      batch = db.batch();
      op = 0;
      console.log(`✅ Batch commit. Güncellenen: ${updated}`);
    }
  }

  if (op > 0) await batch.commit();

  console.log(`🎉 Tamam! Güncellenen ders: ${updated}`);
}

main().catch((e) => {
  console.error("❌ Hata:", e);
  process.exit(1);
});