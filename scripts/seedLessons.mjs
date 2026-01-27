import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, serverTimestamp } from "firebase/firestore";
import "dotenv/config";

// ✅ .env.local yerine .env de kullanabilirsin
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
  console.log("❌ Firebase env eksik!");
  console.log("Lütfen .env.local içindeki NEXT_PUBLIC_FIREBASE_... değerlerini kontrol et.");
  process.exit(1);
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ✅ 3 ders + her derste quiz
const lessons = [
  {
    id: "1",
    title: {
      tr: "Selamlaşma",
      nl: "Begroeten",
      ar: "التحية",
      ku: "Silavkirin"
    },
    description: {
      tr: "Merhaba, nasılsın gibi temel selamlaşmalar.",
      nl: "Basisbegroetingen zoals hallo en hoe gaat het.",
      ar: "تحيات أساسية مثل مرحبا وكيف حالك.",
      ku: "Silavên bingehîn wekî silav û çawa yî."
    },
    content: {
      tr: "Hallo = Merhaba\nHoe gaat het? = Nasılsın?\nGoed = İyi\nDank je = Teşekkürler",
      nl: "Hallo = Merhaba\nHoe gaat het? = Nasılsın?\nGoed = İyi\nDank je = Teşekkürler",
      ar: "Hallo = Merhaba\nHoe gaat het? = Nasılsın?\nGoed = İyi\nDank je = Teşekkürler",
      ku: "Hallo = Merhaba\nHoe gaat het? = Nasılsın?\nGoed = İyi\nDank je = Teşekkürler"
    },
    quiz: [
      {
        q: { tr: "Merhaba hollandacada nasıl?", nl: "Hoe zeg je merhaba?", ar: "كيف تقول مرحبا؟", ku: "Tu çawa dibêjî merhaba?" },
        options: [
          { tr: "Hallo", nl: "Hallo", ar: "Hallo", ku: "Hallo" },
          { tr: "Dank je", nl: "Dank je", ar: "Dank je", ku: "Dank je" },
          { tr: "Tot ziens", nl: "Tot ziens", ar: "Tot ziens", ku: "Tot ziens" }
        ],
        answerIndex: 0
      },
      {
        q: { tr: "Nasılsın? hollandacada nasıl?", nl: "Hoe zeg je nasılsın?", ar: "كيف تقول كيف حالك؟", ku: "Tu çawa dibêjî nasılsın?" },
        options: [
          { tr: "Hoe gaat het?", nl: "Hoe gaat het?", ar: "Hoe gaat het?", ku: "Hoe gaat het?" },
          { tr: "Goed", nl: "Goed", ar: "Goed", ku: "Goed" },
          { tr: "Alstublieft", nl: "Alstublieft", ar: "Alstublieft", ku: "Alstublieft" }
        ],
        answerIndex: 0
      },
      {
        q: { tr: "Teşekkürler hollandacada nasıl?", nl: "Hoe zeg je teşekkürler?", ar: "كيف تقول شكراً؟", ku: "Tu çawa dibêjî teşekkürler?" },
        options: [
          { tr: "Dank je", nl: "Dank je", ar: "Dank je", ku: "Dank je" },
          { tr: "Hallo", nl: "Hallo", ar: "Hallo", ku: "Hallo" },
          { tr: "Goed", nl: "Goed", ar: "Goed", ku: "Goed" }
        ],
        answerIndex: 0
      }
    ]
  },

  {
    id: "2",
    title: { tr: "Sayilar 1-10", nl: "Cijfers 1-10", ar: "الأرقام 1-10", ku: "Hejmar 1-10" },
    description: { tr: "Temel sayılar", nl: "Basisgetallen", ar: "الأرقام الأساسية", ku: "Hejmarên bingehîn" },
    content: {
      tr: "1 één\n2 twee\n3 drie\n4 vier\n5 vijf\n6 zes\n7 zeven\n8 acht\n9 negen\n10 tien",
      nl: "1 één\n2 twee\n3 drie\n4 vier\n5 vijf\n6 zes\n7 zeven\n8 acht\n9 negen\n10 tien",
      ar: "1 één\n2 twee\n3 drie\n4 vier\n5 vijf\n6 zes\n7 zeven\n8 acht\n9 negen\n10 tien",
      ku: "1 één\n2 twee\n3 drie\n4 vier\n5 vijf\n6 zes\n7 zeven\n8 acht\n9 negen\n10 tien"
    },
    quiz: [
      {
        q: { tr: "2 hollandacada?", nl: "2 in het Nederlands?", ar: "٢ بالهولندية؟", ku: "2 bi holendî?" },
        options: [
          { tr: "twee", nl: "twee", ar: "twee", ku: "twee" },
          { tr: "drie", nl: "drie", ar: "drie", ku: "drie" },
          { tr: "vier", nl: "vier", ar: "vier", ku: "vier" }
        ],
        answerIndex: 0
      },
      {
        q: { tr: "10 hollandacada?", nl: "10 in het Nederlands?", ar: "١٠ بالهولندية؟", ku: "10 bi holendî?" },
        options: [
          { tr: "tien", nl: "tien", ar: "tien", ku: "tien" },
          { tr: "zes", nl: "zes", ar: "zes", ku: "zes" },
          { tr: "negen", nl: "negen", ar: "negen", ku: "negen" }
        ],
        answerIndex: 0
      },
      {
        q: { tr: "1 hollandacada?", nl: "1 in het Nederlands?", ar: "١ بالهولندية؟", ku: "1 bi holendî?" },
        options: [
          { tr: "één", nl: "één", ar: "één", ku: "één" },
          { tr: "acht", nl: "acht", ar: "acht", ku: "acht" },
          { tr: "vijf", nl: "vijf", ar: "vijf", ku: "vijf" }
        ],
        answerIndex: 0
      }
    ]
  },

  {
    id: "3",
    title: { tr: "Günler", nl: "Dagen", ar: "أيام الأسبوع", ku: "Rojên hefteyê" },
    description: { tr: "Pazartesi - Pazar", nl: "Maandag - zondag", ar: "من الاثنين إلى الأحد", ku: "Ji duşemê heta yekşemê" },
    content: {
      tr: "maandag = Pazartesi\ndinsdag = Salı\nwoensdag = Çarşamba\ndonderdag = Perşembe\nvrijdag = Cuma\nzaterdag = Cumartesi\nzondag = Pazar",
      nl: "maandag = Pazartesi\ndinsdag = Salı\nwoensdag = Çarşamba\ndonderdag = Perşembe\nvrijdag = Cuma\nzaterdag = Cumartesi\nzondag = Pazar",
      ar: "maandag = Pazartesi\ndinsdag = Salı\nwoensdag = Çarşamba\ndonderdag = Perşembe\nvrijdag = Cuma\nzaterdag = Cumartesi\nzondag = Pazar",
      ku: "maandag = Pazartesi\ndinsdag = Salı\nwoensdag = Çarşamba\ndonderdag = Perşembe\nvrijdag = Cuma\nzaterdag = Cumartesi\nzondag = Pazar"
    },
    quiz: [
      {
        q: { tr: "Cuma hollandacada?", nl: "Cuma in het Nederlands?", ar: "الجمعة بالهولندية؟", ku: "Cuma bi holendî?" },
        options: [
          { tr: "vrijdag", nl: "vrijdag", ar: "vrijdag", ku: "vrijdag" },
          { tr: "zondag", nl: "zondag", ar: "zondag", ku: "zondag" },
          { tr: "maandag", nl: "maandag", ar: "maandag", ku: "maandag" }
        ],
        answerIndex: 0
      },
      {
        q: { tr: "Pazar hollandacada?", nl: "Pazar in het Nederlands?", ar: "الأحد بالهولندية؟", ku: "Pazar bi holendî?" },
        options: [
          { tr: "zondag", nl: "zondag", ar: "zondag", ku: "zondag" },
          { tr: "dinsdag", nl: "dinsdag", ar: "dinsdag", ku: "dinsdag" },
          { tr: "vrijdag", nl: "vrijdag", ar: "vrijdag", ku: "vrijdag" }
        ],
        answerIndex: 0
      },
      {
        q: { tr: "Salı hollandacada?", nl: "Salı in het Nederlands?", ar: "الثلاثاء بالهولندية؟", ku: "Salı bi holendî?" },
        options: [
          { tr: "dinsdag", nl: "dinsdag", ar: "dinsdag", ku: "dinsdag" },
          { tr: "woensdag", nl: "woensdag", ar: "woensdag", ku: "woensdag" },
          { tr: "zaterdag", nl: "zaterdag", ar: "zaterdag", ku: "zaterdag" }
        ],
        answerIndex: 0
      }
    ]
  }
];

async function run() {
  console.log("🚀 Seeding başladı...");

  for (const lesson of lessons) {
    const ref = doc(db, "lessons", lesson.id);

    await setDoc(ref, {
      title: lesson.title,
      description: lesson.description,
      content: lesson.content,
      quiz: lesson.quiz,
      updatedAt: serverTimestamp(),
      createdAt: serverTimestamp()
    });

    console.log(`✅ Lesson ${lesson.id} eklendi`);
  }

  console.log("🎉 Seed tamamlandı! Firestore -> lessons koleksiyonunu kontrol et.");
  process.exit(0);
}

run().catch((e) => {
  console.error("❌ Seed hata:", e);
  process.exit(1);
});