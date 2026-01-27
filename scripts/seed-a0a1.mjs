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
const seedTag = "a0a1_v1";
const now = () => Date.now();

const lessons = [
  {
    id: "1",
    level: "BEGINNER",
    title: {
      tr: "Selamlaşma (Hoi / Hallo)",
      nl: "Groeten (Hoi / Hallo)",
      en: "Greetings (Hoi / Hallo)",
      ar: "التحية (Hoi / Hallo)",
      ku: "Silavkirin (Hoi / Hallo)",
    },
    description: {
      tr: "Temel selamlaşma ve vedalaşma kalıpları.",
      nl: "Basisgroeten en afscheid nemen.",
      en: "Basic greetings and saying goodbye.",
      ar: "أساسيات التحية والوداع.",
      ku: "Bingehên silavkirin û bi xatirê te.",
    },
    content: {
      tr: "✅ Kelimeler:\n- Hoi / Hallo = Merhaba\n- Goedemorgen = Günaydın\n- Goedenavond = İyi akşamlar\n- Tot ziens = Görüşürüz\n\n✅ Örnek:\nA: Hoi! Hoe gaat het?\nB: Goed, dank je. En met jou?\n",
      nl: "✅ Woorden:\n- Hoi / Hallo = Hallo\n- Goedemorgen = Goedemorgen\n- Goedenavond = Goedenavond\n- Tot ziens = Tot ziens\n\n✅ Voorbeeld:\nA: Hoi! Hoe gaat het?\nB: Goed, dank je. En met jou?\n",
      en: "✅ Words:\n- Hoi / Hallo = Hi / Hello\n- Goedemorgen = Good morning\n- Goedenavond = Good evening\n- Tot ziens = See you\n\n✅ Example:\nA: Hoi! Hoe gaat het?\nB: Goed, dank je. En met jou?\n",
      ar: "✅ كلمات:\n- Hoi / Hallo = مرحبًا\n- Goedemorgen = صباح الخير\n- Goedenavond = مساء الخير\n- Tot ziens = أراك لاحقًا\n\n✅ مثال:\nA: Hoi! Hoe gaat het?\nB: Goed, dank je. En met jou?\n",
      ku: "✅ Peyv:\n- Hoi / Hallo = Silav\n- Goedemorgen = Sibehbaş\n- Goedenavond = Êvarbaş\n- Tot ziens = Bi xatirê te\n\n✅ Mînak:\nA: Hoi! Hoe gaat het?\nB: Goed, dank je. En met jou?\n",
    },
  },
  {
    id: "2",
    level: "BEGINNER",
    title: { tr: "Kendini Tanıtma", nl: "Jezelf voorstellen", en: "Introducing yourself", ar: "التعريف بالنفس", ku: "Xwe nasandin" },
    description: { tr: "İsim, ülke, yaş gibi temel bilgiler.", nl: "Naam, land, leeftijd.", en: "Name, country, age basics.", ar: "الاسم والبلد والعمر.", ku: "Nav, welat, temen." },
    content: {
      tr: "✅ Kalıplar:\n- Ik heet ... = Benim adım ...\n- Ik kom uit ... = ...'dan geliyorum\n- Ik ben ... jaar = ... yaşındayım\n\n✅ Örnek:\nIk heet Murat. Ik kom uit Turkije. Ik ben 30 jaar.\n",
      nl: "✅ Zinnen:\n- Ik heet ...\n- Ik kom uit ...\n- Ik ben ... jaar\n\n✅ Voorbeeld:\nIk heet Murat. Ik kom uit Turkije. Ik ben 30 jaar.\n",
      en: "✅ Phrases:\n- Ik heet ... = My name is ...\n- Ik kom uit ... = I am from ...\n- Ik ben ... jaar = I am ... years old\n",
      ar: "✅ عبارات:\n- Ik heet ... = اسمي ...\n- Ik kom uit ... = أنا من ...\n- Ik ben ... jaar = عمري ... سنة\n",
      ku: "✅ Rêz:\n- Ik heet ... = Navê min ... e\n- Ik kom uit ... = Ez ji ... me\n- Ik ben ... jaar = Temenê min ... e\n",
    },
  },
  {
    id: "3",
    level: "BEGINNER",
    title: { tr: "Sayılar 0–20", nl: "Getallen 0–20", en: "Numbers 0–20", ar: "الأرقام 0–20", ku: "Hejmar 0–20" },
    description: { tr: "Günlük hayatta sayılar.", nl: "Getallen in het dagelijks leven.", en: "Everyday numbers.", ar: "أرقام للاستخدام اليومي.", ku: "Hejmarên rojane." },
    content: {
      tr: "0 nul, 1 één, 2 twee, 3 drie, 4 vier, 5 vijf, 6 zes, 7 zeven, 8 acht, 9 negen, 10 tien, 11 elf, 12 twaalf, 13 dertien, 14 veertien, 15 vijftien, 16 zestien, 17 zeventien, 18 achttien, 19 negentien, 20 twintig\n",
      nl: "0 nul, 1 één, 2 twee, 3 drie, 4 vier, 5 vijf, 6 zes, 7 zeven, 8 acht, 9 negen, 10 tien, 11 elf, 12 twaalf, 13 dertien, 14 veertien, 15 vijftien, 16 zestien, 17 zeventien, 18 achttien, 19 negentien, 20 twintig\n",
      en: "Dutch 0–20: 0 nul, 1 één, 2 twee, ... 20 twintig\n",
      ar: "الأرقام الهولندية 0–20: 0 nul, 1 één, ... 20 twintig\n",
      ku: "Hejmarên Holandî 0–20: 0 nul, 1 één, ... 20 twintig\n",
    },
  },
  {
    id: "4",
    level: "BEGINNER",
    title: { tr: "Ben/Sen (Ik/Jij)", nl: "Ik/Jij", en: "I/You", ar: "أنا/أنت", ku: "Ez/Tu" },
    description: { tr: "Basit cümle kurma.", nl: "Eenvoudige zinnen.", en: "Building simple sentences.", ar: "جُمل بسيطة.", ku: "Hevokên hêsan." },
    content: {
      tr: "✅ Zamirler:\n- Ik = Ben\n- Jij/Je = Sen\n\n✅ Örnek:\nIk ben Murat.\nJij bent mijn vriend.\n",
      nl: "✅ Voornaamwoorden:\n- Ik\n- Jij/Je\n\n✅ Voorbeeld:\nIk ben Murat.\nJij bent mijn vriend.\n",
      en: "✅ Pronouns:\n- Ik = I\n- Jij/Je = You\n\n✅ Example:\nIk ben Murat.\nJij bent mijn vriend.\n",
      ar: "✅ الضمائر:\n- Ik = أنا\n- Jij/Je = أنت\n\n✅ مثال:\nIk ben Murat.\nJij bent mijn vriend.\n",
      ku: "✅ Zamîr:\n- Ik = Ez\n- Jij/Je = Tu\n\n✅ Mînak:\nIk ben Murat.\nJij bent hevalê min.\n",
    },
  },
  {
    id: "5",
    level: "BEGINNER",
    title: { tr: "Var/Yok (Er is / Er zijn)", nl: "Er is / Er zijn", en: "There is / There are", ar: "هناك / يوجد", ku: "Heye / Hene" },
    description: { tr: "Nesne/yer anlatma.", nl: "Iets beschrijven.", en: "Describing existence.", ar: "وصف وجود الأشياء.", ku: "Ravekirina hebûnê." },
    content: {
      tr: "✅ Kullanım:\n- Er is ... (tekil)\n- Er zijn ... (çoğul)\n\nÖrnek:\nEr is een boek.\nEr zijn twee stoelen.\n",
      nl: "✅ Gebruik:\n- Er is ... (enkelvoud)\n- Er zijn ... (meervoud)\n\nVoorbeeld:\nEr is een boek.\nEr zijn twee stoelen.\n",
      en: "✅ Usage:\n- Er is ... (singular)\n- Er zijn ... (plural)\n\nExample:\nEr is een boek.\nEr zijn twee stoelen.\n",
      ar: "✅ الاستخدام:\n- Er is ... (مفرد)\n- Er zijn ... (جمع)\n\nمثال:\nEr is een boek.\nEr zijn twee stoelen.\n",
      ku: "✅ Bikaranîn:\n- Er is ... (yekane)\n- Er zijn ... (pirjimar)\n\nMînak:\nEr is een boek.\nEr zijn دو kursî.\n",
    },
  },
  { id: "6", level: "BEGINNER",
    title: { tr: "Günler", nl: "Dagen", en: "Days", ar: "أيام الأسبوع", ku: "Rojên hefteyê" },
    description: { tr: "Haftanın günleri.", nl: "Dagen van de week.", en: "Days of the week.", ar: "أيام الأسبوع.", ku: "Rojên hefteyê." },
    content: { tr: "maandag, dinsdag, woensdag, donderdag, vrijdag, zaterdag, zondag\n",
      nl: "maandag, dinsdag, woensdag, donderdag, vrijdag, zaterdag, zondag\n",
      en: "Dutch days: maandag, dinsdag, woensdag, donderdag, vrijdag, zaterdag, zondag\n",
      ar: "أيام الأسبوع بالهولندية: maandag, dinsdag, ... zondag\n",
      ku: "Rojên hefteyê bi Holandî: maandag, dinsdag, ... zondag\n",
    }
  },
  { id: "7", level: "BEGINNER",
    title: { tr: "Saat sorma", nl: "Tijd vragen", en: "Asking the time", ar: "سؤال الوقت", ku: "Dem pirsîn" },
    description: { tr: "Saat kaç? gibi.", nl: "Hoe laat is het?", en: "What time is it?", ar: "كم الساعة؟", ku: "Saet çend e?" },
    content: {
      tr: "✅ Kalıp:\n- Hoe laat is het? = Saat kaç?\n- Het is ... uur. = Saat ...\n",
      nl: "✅ Zin:\n- Hoe laat is het?\n- Het is ... uur.\n",
      en: "✅ Phrases:\n- Hoe laat is het? = What time is it?\n- Het is ... uur. = It's ... o'clock.\n",
      ar: "✅ عبارات:\n- Hoe laat is het? = كم الساعة؟\n- Het is ... uur. = الساعة ...\n",
      ku: "✅ Rêz:\n- Hoe laat is het? = Saet çend e?\n- Het is ... uur. = Saet ... e.\n",
    }
  },
  { id: "8", level: "BEGINNER",
    title: { tr: "Market / alışveriş", nl: "Boodschappen", en: "Shopping", ar: "التسوق", ku: "Bazirganî" },
    description: { tr: "Fiyat sorma, ürün isteme.", nl: "Prijs vragen, iets bestellen.", en: "Asking price, buying.", ar: "السعر والشراء.", ku: "Bihayê pirsîn, kirîn." },
    content: {
      tr: "✅ Kalıplar:\n- Hoeveel kost dit? = Bu ne kadar?\n- Ik wil ... = ... istiyorum\n",
      nl: "✅ Zinnen:\n- Hoeveel kost dit?\n- Ik wil ...\n",
      en: "✅ Phrases:\n- Hoeveel kost dit? = How much is this?\n- Ik wil ... = I want ...\n",
      ar: "✅ عبارات:\n- Hoeveel kost dit? = كم سعر هذا؟\n- Ik wil ... = أريد ...\n",
      ku: "✅ Rêz:\n- Hoeveel kost dit? = Ev çend e?\n- Ik wil ... = Ez ... dixwazim\n",
    }
  },
  { id: "9", level: "BEGINNER",
    title: { tr: "Yön tarifleri", nl: "Richting", en: "Directions", ar: "الاتجاهات", ku: "Araste" },
    description: { tr: "Sağ/sol/düz.", nl: "Links/rechts/rechtdoor.", en: "Left/right/straight.", ar: "يمين/يسار/مباشر.", ku: "Rast/çep/rastber." },
    content: {
      tr: "rechts = sağ\nlinks = sol\nrechtdoor = düz\n",
      nl: "rechts, links, rechtdoor\n",
      en: "rechts = right, links = left, rechtdoor = straight\n",
      ar: "rechts = يمين، links = يسار، rechtdoor = مباشر\n",
      ku: "rechts = rast, links = çep, rechtdoor = rastber\n",
    }
  },
  { id: "10", level: "BEGINNER",
    title: { tr: "Kafede sipariş", nl: "Bestellen in café", en: "Ordering in a café", ar: "الطلب في المقهى", ku: "Di kafeyê de ferman" },
    description: { tr: "Bir şey isteme.", nl: "Iets bestellen.", en: "Ordering.", ar: "طلب شيء.", ku: "Ferman kirin." },
    content: {
      tr: "✅ Kalıp:\n- Mag ik een koffie, alstublieft? = Bir kahve alabilir miyim?\n- Dank je wel = Teşekkürler\n",
      nl: "✅ Zin:\n- Mag ik een koffie, alstublieft?\n- Dank je wel\n",
      en: "✅ Phrases:\n- Mag ik een koffie, alstublieft? = May I have a coffee, please?\n- Dank je wel = Thank you\n",
      ar: "✅ عبارات:\n- Mag ik een koffie, alstublieft؟ = هل يمكنني قهوة من فضلك؟\n- Dank je wel = شكرًا\n",
      ku: "✅ Rêz:\n- Mag ik een koffie, alstublieft? = Ma dikarim qehweya yekê bistînim?\n- Dank je wel = Spas\n",
    }
  },
];

function quiz(lessonId, q, opts, correctIndex) {
  const langs = ["tr", "nl", "en", "ar", "ku"];
  const question = {};
  const options = {};
  for (const l of langs) {
    question[l] = q[l] || q.tr;
    options[l] = (opts[l] && opts[l].length === 4 ? opts[l] : opts.tr);
  }
  return { lessonId, question, options, correctIndex, seed: seedTag };
}

const quizzes = [
  quiz("1",
    { tr: "“Goedemorgen” ne demektir?", nl: "Wat betekent “Goedemorgen”?", en: "What does “Goedemorgen” mean?", ar: "ماذا تعني “Goedemorgen”؟", ku: "“Goedemorgen” wate çi ye?" },
    { tr: ["Günaydın", "İyi geceler", "Görüşürüz", "Merhaba"] },
    0
  ),
  quiz("2",
    { tr: "“Ik heet …” hangi anlamdadır?", nl: "Wat betekent “Ik heet …”?", en: "What does “Ik heet …” mean?", ar: "ما معنى “Ik heet …”؟", ku: "“Ik heet …” wate çi ye?" },
    { tr: ["Benim adım …", "Ben geldim", "Ben istiyorum", "Ben varım"] },
    0
  ),
  quiz("3",
    { tr: "Dutch’ta 12 nasıl yazılır?", nl: "Hoe schrijf je 12 in het Nederlands?", en: "How do you say 12 in Dutch?", ar: "كيف نقول 12 بالهولندية؟", ku: "12 bi Holandî çawa tê gotin?" },
    { tr: ["twaalf", "dertien", "elf", "tien"] },
    0
  ),
  quiz("4",
    { tr: "“Jij” hangi zamirdir?", nl: "Wat is “Jij”?", en: "What is “Jij”?", ar: "ما هو “Jij”؟", ku: "“Jij” çi ye?" },
    { tr: ["Sen", "Ben", "O", "Biz"] },
    0
  ),
  quiz("5",
    { tr: "Çoğul için hangisi kullanılır?", nl: "Wat gebruik je voor meervoud?", en: "Which is used for plural?", ar: "ما المستخدم للجمع؟", ku: "Ji bo pirjimar kîjan tê bikaranîn?" },
    { tr: ["Er zijn", "Er is", "Ik ben", "Jij bent"] },
    0
  ),
  quiz("6",
    { tr: "“zondag” hangi gündür?", nl: "Welke dag is “zondag”?", en: "Which day is “zondag”?", ar: "أي يوم هو “zondag”؟", ku: "“zondag” kîjan roj e?" },
    { tr: ["Pazar", "Pazartesi", "Cuma", "Cumartesi"] },
    0
  ),
  quiz("7",
    { tr: "Saat sormak için doğru cümle?", nl: "Welke zin is correct om de tijd te vragen?", en: "Correct sentence to ask the time?", ar: "الجملة الصحيحة لسؤال الوقت؟", ku: "Hevoka rast ji bo pirsîna demê?" },
    { tr: ["Hoe laat is het?", "Hoe kost het?", "Wie ben jij?", "Waar woon je?"] },
    0
  ),
  quiz("8",
    { tr: "“Hoeveel kost dit?” ne demektir?", nl: "Wat betekent “Hoeveel kost dit?”?", en: "What does “Hoeveel kost dit?” mean?", ar: "ماذا تعني “Hoeveel kost dit?”؟", ku: "“Hoeveel kost dit?” wate çi ye?" },
    { tr: ["Bu ne kadar?", "Nerede oturuyorsun?", "Ne zaman?", "Benim adım"] },
    0
  ),
  quiz("9",
    { tr: "“links” ne demektir?", nl: "Wat betekent “links”?", en: "What does “links” mean?", ar: "ماذا تعني “links”؟", ku: "“links” wate çi ye?" },
    { tr: ["Sol", "Sağ", "Düz", "Geri"] },
    0
  ),
  quiz("10",
    { tr: "Kahve istemek için doğru ifade?", nl: "Welke zin is correct om koffie te bestellen?", en: "Correct phrase to order coffee?", ar: "الجملة الصحيحة لطلب قهوة؟", ku: "Hevoka rast ji bo ferman kirina qehwê?" },
    { tr: ["Mag ik een koffie, alstublieft?", "Hoe laat is het?", "Ik kom uit ...", "Er zijn twee stoelen"] },
    0
  ),
];

async function run() {
  if (process.env.SEED_CONFIRM !== "YES") {
    console.log("❌ Güvenlik: Çalıştırmak için SEED_CONFIRM=YES gerekli.");
    console.log("Komut:\nSEED_CONFIRM=YES node scripts/seed-a0a1.mjs");
    process.exit(1);
  }

  console.log("🚀 Seeding lessons...");
  const lb = db.batch();
  lessons.forEach((l) => {
    const ref = db.collection("lessons").doc(l.id); // id=1..10
    lb.set(ref, { ...l, seed: seedTag, updatedAt: now() }, { merge: true });
  });
  await lb.commit();
  console.log("✅ Lessons seeded:", lessons.length);

  console.log("🚀 Seeding quizzes...");
  const qb = db.batch();
  quizzes.forEach((q, i) => {
    const ref = db.collection("quizzes").doc(`${seedTag}_l${q.lessonId}_q${i + 1}`);
    qb.set(ref, { ...q, updatedAt: now() }, { merge: true });
  });
  await qb.commit();
  console.log("✅ Quizzes seeded:", quizzes.length);

  console.log("\n🎉 Bitti! /tr/lessons içinde 1..10 görünmeli.");
}

run().catch((e) => {
  console.error("SEED ERROR:", e);
  process.exit(1);
});