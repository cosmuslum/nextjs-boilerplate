import admin from "firebase-admin";
import fs from "fs";
import path from "path";

const serviceAccountPath = path.resolve(process.cwd(), "serviceAccountKey.json");
if (!fs.existsSync(serviceAccountPath)) {
  console.error("❌ serviceAccountKey.json yok. Proje köküne koy.");
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

function pickSource(map) {
  const m = ensureMap(map);
  return m.nl || m.tr || m.ku || m.ar || "";
}

function fillEn(map) {
  const m = ensureMap(map);
  if (!m.en || String(m.en).trim() === "") {
    m.en = pickSource(m);
  }
  return m;
}

async function main() {
  console.log("🔧 lessons: eksik en alanları dolduruluyor (nl→tr→ku→ar) ...");

  const snap = await db.collection("lessons").get();
  if (snap.empty) {
    console.log("⚠️ lessons boş.");
    return;
  }

  let updated = 0;
  let batch = db.batch();
  let ops = 0;

  for (const doc of snap.docs) {
    const data = doc.data() || {};

    const title = ensureMap(data.title);
    const description = ensureMap(data.description);
    const content = ensureMap(data.content);

    const newTitle = fillEn({ ...title });
    const newDesc = fillEn({ ...description });
    const hasContent = data.content && typeof data.content === "object";
    const newContent = hasContent ? fillEn({ ...content }) : null;

    const changed =
      JSON.stringify(newTitle) !== JSON.stringify(title) ||
      JSON.stringify(newDesc) !== JSON.stringify(description) ||
      (hasContent && JSON.stringify(newContent) !== JSON.stringify(content));

    if (!changed) continue;

    const payload = { title: newTitle, description: newDesc };
    if (hasContent) payload.content = newContent;

    batch.update(doc.ref, payload);
    ops++;
    updated++;

    if (ops >= 400) {
      await batch.commit();
      batch = db.batch();
      ops = 0;
      console.log(`✅ batch commit. güncellenen: ${updated}`);
    }
  }

  if (ops > 0) await batch.commit();

  console.log(`🎉 Bitti! Güncellenen ders: ${updated}`);
}

main().catch((e) => {
  console.error("❌ Hata:", e);
  process.exit(1);
});