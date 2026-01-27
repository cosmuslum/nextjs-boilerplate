import admin from "firebase-admin";
import fs from "fs";
import path from "path";

// 1) Service account yolu (proje kökünde olmalı)
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

// Burada hangi dilleri zorunlu yapacağız?
const REQUIRED_LOCALES = ["tr", "en", "nl", "ku", "ar"];

// Güvenli fallback: önce tr, sonra en, sonra nl, sonra ku, sonra ar, sonra boş
function pickBest(map = {}) {
  return (
    map.tr ||
    map.en ||
    map.nl ||
    map.ku ||
    map.ar ||
    ""
  );
}

// Eğer bir dil eksikse, onu fallback metinle doldur
function fillMissing(map = {}) {
  const base = pickBest(map);
  const out = { ...map };

  for (const loc of REQUIRED_LOCALES) {
    if (!out[loc] || String(out[loc]).trim() === "") {
      out[loc] = base; // eksikse base metni koy
    }
  }
  return out;
}

async function main() {
  console.log("🔧 lessons koleksiyonu taranıyor...");

  const snap = await db.collection("lessons").get();
  if (snap.empty) {
    console.log("⚠️ lessons koleksiyonu boş.");
    return;
  }

  let updated = 0;

  const batchSize = 400; // Firestore batch limiti 500, güvenli kalsın
  let batch = db.batch();
  let opCount = 0;

  for (const doc of snap.docs) {
    const data = doc.data() || {};

    const title = data.title || {};
    const description = data.description || {};
    const content = data.content || {};

    const newTitle = fillMissing(title);
    const newDesc = fillMissing(description);

    // content varsa onu da dolduralım; yoksa hiç eklemeyelim (istersen ekleriz)
    const hasContent = data.content && typeof data.content === "object";
    const newContent = hasContent ? fillMissing(content) : null;

    // Değişiklik var mı kontrol
    const changed =
      JSON.stringify(newTitle) !== JSON.stringify(title) ||
      JSON.stringify(newDesc) !== JSON.stringify(description) ||
      (hasContent && JSON.stringify(newContent) !== JSON.stringify(content));

    if (!changed) continue;

    const updatePayload = {
      title: newTitle,
      description: newDesc,
    };
    if (hasContent) updatePayload.content = newContent;

    batch.update(doc.ref, updatePayload);
    opCount++;
    updated++;

    if (opCount >= batchSize) {
      await batch.commit();
      batch = db.batch();
      opCount = 0;
      console.log(`✅ Batch commit yapıldı. Şu ana kadar güncellenen: ${updated}`);
    }
  }

  if (opCount > 0) {
    await batch.commit();
  }

  console.log(`🎉 Bitti! Güncellenen ders sayısı: ${updated}`);
  console.log("Not: Eksik çeviriler fallback ile dolduruldu. İstersen sonra gerçek EN/NL/KU metinleriyle değiştirirsin.");
}

main().catch((e) => {
  console.error("❌ Hata:", e);
  process.exit(1);
});