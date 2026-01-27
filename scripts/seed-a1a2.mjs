import admin from "firebase-admin";

function required(name) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

const projectId = required("FIREBASE_PROJECT_ID");
const clientEmail = required("FIREBASE_CLIENT_EMAIL");
const privateKey = required("FIREBASE_PRIVATE_KEY").replace(/\\n/g, "\n");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({ projectId, clientEmail, privateKey }),
  });
}

const db = admin.firestore();
const seedTag = "a1a2_v1";
const now = () => Date.now();

/* =======================
   A1 → A2 LESSONS
======================= */

const lessons = [
  {
    id: "101",
    level: "INTERMEDIATE",
    title: {
      tr: "Geniş Zaman (Tegenwoordige tijd)",
      nl: "Tegenwoordige tijd",
      en: "Present tense",
      ar: "المضارع",
      ku: "Demê niha",
    },
    description: {
      tr: "Fiillerin geniş zamanda kullanımı.",
      nl: "Werkwoorden in de tegenwoordige tijd.",
      en: "Using verbs in present tense.",
      ar: "استخدام الأفعال في المضارع.",
      ku: "Bikaranîna lêkeran di demê niha de.",
    },
    content: {
      tr: "Ik werk, jij werkt, hij werkt.\nBen çalışırım, sen çalışırsın.",
      nl: "Ik werk, jij werkt, hij werkt.",
      en: "I work, you work, he works.",
      ar: "أنا أعمل، أنت تعمل.",
      ku: "Ez dixebitim, tu dixebitî.",
    },
  },
  {
    id: "102",
    level: "INTERMEDIATE",
    title: {
      tr: "Geçmiş Zaman (Verleden tijd)",
      nl: "Verleden tijd",
      en: "Past tense",
      ar: "الماضي",
      ku: "Demê borî",
    },
    description: {
      tr: "Geçmişte olan olaylar.",
      nl: "Gebeurtenissen in het verleden.",
      en: "Talking about the past.",
      ar: "الأحداث الماضية.",
      ku: "Bûyerên borî.",
    },
    content: {
      tr: "Ik werkte gisteren.\nDün çalıştım.",
      nl: "Ik werkte gisteren.",
      en: "I worked yesterday.",
      ar: "عملت أمس.",
      ku: "Do ez xebitîm.",
    },
  },
  {
    id: "103",
    level: "INTERMEDIATE",
    title: {
      tr: "Gelecek Zaman",
      nl: "Toekomende tijd",
      en: "Future tense",
      ar: "المستقبل",
      ku: "Demê pêşerojê",
    },
    description: {
      tr: "Gelecek planları anlatma.",
      nl: "Plannen voor de toekomst.",
      en: "Talking about the future.",
      ar: "الخطط المستقبلية.",
      ku: "Plana pêşerojê.",
    },
    content: {
      tr: "Ik ga werken.\nÇalışacağım.",
      nl: "Ik ga werken.",
      en: "I am going to work.",
      ar: "سأعمل.",
      ku: "Ez ê bixebitim.",
    },
  },
  {
    id: "104",
    level: "INTERMEDIATE",
    title: {
      tr: "Modal Fiiller",
      nl: "Modale werkwoorden",
      en: "Modal verbs",
      ar: "الأفعال المساعدة",
      ku: "Lêkerên modî",
    },
    description: {
      tr: "Kunnen, moeten, willen.",
      nl: "Kunnen, moeten, willen.",
      en: "Can, must, want.",
      ar: "يستطيع، يجب، يريد.",
      ku: "Dikarim, divê, dixwazim.",
    },
    content: {
      tr: "Ik kan komen.\nGelebilirim.",
      nl: "Ik kan komen.",
      en: "I can come.",
      ar: "أستطيع المجيء.",
      ku: "Ez dikarim bêjim.",
    },
  },
  {
    id: "105",
    level: "INTERMEDIATE",
    title: {
      tr: "Soru Cümleleri",
      nl: "Vragen stellen",
      en: "Asking questions",
      ar: "جمل السؤال",
      ku: "Hevokên pirsê",
    },
    description: {
      tr: "Soru sorma teknikleri.",
      nl: "Hoe stel je vragen.",
      en: "How to ask questions.",
      ar: "كيفية طرح الأسئلة.",
      ku: "Çawa pirs were kirin.",
    },
    content: {
      tr: "Waar woon je?\nNerede oturuyorsun?",
      nl: "Waar woon je?",
      en: "Where do you live?",
      ar: "أين تسكن؟",
      ku: "Tu li ku dijî?",
    },
  },
  {
    id: "106",
    level: "INTERMEDIATE",
    title: {
      tr: "Sıfatlar",
      nl: "Bijvoeglijke naamwoorden",
      en: "Adjectives",
      ar: "الصفات",
      ku: "Rengdêr",
    },
    description: {
      tr: "Nesneleri tanımlama.",
      nl: "Dingen beschrijven.",
      en: "Describing things.",
      ar: "وصف الأشياء.",
      ku: "Tiştan ravekirin.",
    },
    content: {
      tr: "Een groot huis.\nBüyük bir ev.",
      nl: "Een groot huis.",
      en: "A big house.",
      ar: "بيت كبير.",
      ku: "Mala mezin.",
    },
  },
  {
    id: "107",
    level: "INTERMEDIATE",
    title: {
      tr: "Zarf Kullanımı",
      nl: "Bijwoorden",
      en: "Adverbs",
      ar: "الظروف",
      ku: "Hêlker",
    },
    description: {
      tr: "Fiilleri detaylandırma.",
      nl: "Werkwoorden preciseren.",
      en: "Adding detail to verbs.",
      ar: "توضيح الأفعال.",
      ku: "Lêkeran zêdetir ravekirin.",
    },
    content: {
      tr: "Ik werk snel.\nHızlı çalışırım.",
      nl: "Ik werk snel.",
      en: "I work fast.",
      ar: "أعمل بسرعة.",
      ku: "Ez bi lez dixebitim.",
    },
  },
  {
    id: "108",
    level: "INTERMEDIATE",
    title: {
      tr: "Bağlaçlar",
      nl: "Voegwoorden",
      en: "Conjunctions",
      ar: "الروابط",
      ku: "Girêdan",
    },
    description: {
      tr: "Cümleleri bağlama.",
      nl: "Zinnen verbinden.",
      en: "Connecting sentences.",
      ar: "ربط الجمل.",
      ku: "Hevokan girêdan.",
    },
    content: {
      tr: "Ik werk en ik leer.",
      nl: "Ik werk en ik leer.",
      en: "I work and I learn.",
      ar: "أعمل وأتعلم.",
      ku: "Ez dixebitim û fêr dibim.",
    },
  },
  {
    id: "109",
    level: "INTERMEDIATE",
    title: {
      tr: "Günlük Diyaloglar",
      nl: "Dagelijkse dialogen",
      en: "Daily dialogues",
      ar: "حوارات يومية",
      ku: "Diyalogên rojane",
    },
    description: {
      tr: "Günlük konuşmalar.",
      nl: "Dagelijks spreken.",
      en: "Everyday conversations.",
      ar: "محادثات يومية.",
      ku: "Axaftinên rojane.",
    },
    content: {
      tr: "Hoe gaat het?\nİyi misin?",
      nl: "Hoe gaat het?",
      en: "How are you?",
      ar: "كيف حالك؟",
      ku: "Tu çawa yî?",
    },
  },
  {
    id: "110",
    level: "INTERMEDIATE",
    title: {
      tr: "Telefon Konuşması",
      nl: "Telefoneren",
      en: "Phone conversations",
      ar: "مكالمات الهاتف",
      ku: "Axaftina telefonê",
    },
    description: {
      tr: "Telefonda konuşma.",
      nl: "Bellen.",
      en: "Talking on the phone.",
      ar: "التحدث عبر الهاتف.",
      ku: "Bi telefonê axaftin.",
    },
    content: {
      tr: "Ik bel je later.\nSeni sonra ararım.",
      nl: "Ik bel je later.",
      en: "I will call you later.",
      ar: "سأتصل بك لاحقًا.",
      ku: "Ez ê paşê telefon bikim.",
    },
  },
];

/* =======================
   QUIZZES (1 per lesson)
======================= */

function quiz(lessonId, q, opts, correctIndex) {
  const langs = ["tr", "nl", "en", "ar", "ku"];
  const question = {};
  const options = {};
  for (const l of langs) {
    question[l] = q[l] || q.tr;
    options[l] = opts[l] || opts.tr;
  }
  return { lessonId, question, options, correctIndex, seed: seedTag };
}

const quizzes = lessons.map((l) =>
  quiz(
    l.id,
    { tr: `${l.title.tr} hangi konudur?` },
    { tr: ["Dil bilgisi", "Spor", "Coğrafya", "Tarih"] },
    0
  )
);

/* =======================
   RUN
======================= */

async function run() {
  if (process.env.SEED_CONFIRM !== "YES") {
    console.log("SEED_CONFIRM=YES gerekli");
    process.exit(1);
  }

  const lb = db.batch();
  lessons.forEach((l) => {
    lb.set(
      db.collection("lessons").doc(l.id),
      { ...l, seed: seedTag, updatedAt: now() },
      { merge: true }
    );
  });
  await lb.commit();

  const qb = db.batch();
  quizzes.forEach((q, i) => {
    qb.set(
      db.collection("quizzes").doc(`${seedTag}_${i + 1}`),
      { ...q, updatedAt: now() },
      { merge: true }
    );
  });
  await qb.commit();

  console.log("✅ A1→A2 ders + quiz eklendi");
}

run();