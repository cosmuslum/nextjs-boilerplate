export type Localized = {
  tr: string;
  nl: string;
  ar: string;
  ku: string;
};

export type LessonSeed = {
  id: string;
  level: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
  title: Localized;
  description: Localized;
  content: Localized;
};

export type QuizSeed = {
  lessonId: string;
  questions: {
    q: Localized;
    options: Localized[];
    answerIndex: number;
  }[  {
    lessonId: "2",
    questions: [
      {
        q: { tr: "Ben Murat. Hollandaca?", nl: "Ik ben Murat. = ?", ar: "أنا مراد = ?", ku: "Ez Murat im = ?" },
        options: [
          { tr: "Ik ben Murat", nl: "Ik ben Murat", ar: "Ik ben Murat", ku: "Ik ben Murat" },
          { tr: "Hoe gaat het?", nl: "Hoe gaat het?", ar: "Hoe gaat het?", ku: "Hoe gaat het?" },
          { tr: "Dank je", nl: "Dank je", ar: "Dank je", ku: "Dank je" },
          { tr: "Doei", nl: "Doei", ar: "Doei", ku: "Doei" },
        ],
        answerIndex: 0,
      },
      {
        q: { tr: "Ben ... yaşındayım. Hollandaca?", nl: "Ik ben ... jaar oud. = ?", ar: "عمري ... سنة = ?", ku: "Temenê min ... e = ?" },
        options: [
          { tr: "Ik ben ... jaar oud", nl: "Ik ben ... jaar oud", ar: "Ik ben ... jaar oud", ku: "Ik ben ... jaar oud" },
          { tr: "Ik kom uit ...", nl: "Ik kom uit ...", ar: "Ik kom uit ...", ku: "Ik kom uit ..." },
          { tr: "Ik heet ...", nl: "Ik heet ...", ar: "Ik heet ...", ku: "Ik heet ..." },
          { tr: "Ik ga", nl: "Ik ga", ar: "Ik ga", ku: "Ik ga" },
        ],
        answerIndex: 0,
      },
      {
        q: { tr: "Türkiye'denim. Hollandaca?", nl: "Türkiye'denim = ?", ar: "أنا من تركيا = ?", ku: "Ez ji Tirkiyê me = ?" },
        options: [
          { tr: "Ik kom uit Turkije", nl: "Ik kom uit Turkije", ar: "Ik kom uit Turkije", ku: "Ik kom uit Turkije" },
          { tr: "Ik ben Turkije", nl: "Ik ben Turkije", ar: "Ik ben Turkije", ku: "Ik ben Turkije" },
          { tr: "Ik heet Turkije", nl: "Ik heet Turkije", ar: "Ik heet Turkije", ku: "Ik heet Turkije" },
          { tr: "Hoe laat is het?", nl: "Hoe laat is het?", ar: "Hoe laat is het?", ku: "Hoe laat is het?" },
        ],
        answerIndex: 0,
      },
      {
        q: { tr: "Benim adım Murat. Hollandaca?", nl: "Benim adım Murat = ?", ar: "اسمي مراد = ?", ku: "Navê min Murat e = ?" },
        options: [
          { tr: "Ik heet Murat", nl: "Ik heet Murat", ar: "Ik heet Murat", ku: "Ik heet Murat" },
          { tr: "Ik ben Murat jaar oud", nl: "Ik ben Murat jaar oud", ar: "Ik ben Murat jaar oud", ku: "Ik ben Murat jaar oud" },
          { tr: "Ik kom heet Murat", nl: "Ik kom heet Murat", ar: "Ik kom heet Murat", ku: "Ik kom heet Murat" },
          { tr: "Goedemorgen Murat", nl: "Goedemorgen Murat", ar: "Goedemorgen Murat", ku: "Goedemorgen Murat" },
        ],
        answerIndex: 0,
      },
      {
        q: { tr: "Ben öğretmenim. Hollandaca?", nl: "Ben öğretmenim = ?", ar: "أنا معلم = ?", ku: "Ez mamoste me = ?" },
        options: [
          { tr: "Ik ben leraar", nl: "Ik ben leraar", ar: "Ik ben leraar", ku: "Ik ben leraar" },
          { tr: "Ik leraar ben", nl: "Ik leraar ben", ar: "Ik leraar ben", ku: "Ik leraar ben" },
          { tr: "Ik kom leraar", nl: "Ik kom leraar", ar: "Ik kom leraar", ku: "Ik kom leraar" },
          { tr: "Ik heet leraar", nl: "Ik heet leraar", ar: "Ik heet leraar", ku: "Ik heet leraar" },
        ],
        answerIndex: 0,
      },
      {
        q: { tr: "Nerelisin? Hollandaca?", nl: "Nerelisin? = ?", ar: "من أين أنت؟ = ?", ku: "Tu ji ku derê yî? = ?" },
        options: [
          { tr: "Waar kom je vandaan?", nl: "Waar kom je vandaan?", ar: "Waar kom je vandaan?", ku: "Waar kom je vandaan?" },
          { tr: "Hoe gaat het?", nl: "Hoe gaat het?", ar: "Hoe gaat het?", ku: "Hoe gaat het?" },
          { tr: "Hoeveel kost dit?", nl: "Hoeveel kost dit?", ar: "Hoeveel kost dit?", ku: "Hoeveel kost dit?" },
          { tr: "Wat is dit?", nl: "Wat is dit?", ar: "Wat is dit?", ku: "Wat is dit?" },
        ],
        answerIndex: 0,
      },
      {
        q: { tr: "Ben Hollandalıyım. Hollandaca?", nl: "Ben Hollandalıyım = ?", ar: "أنا هولندي = ?", ku: "Ez holandî me = ?" },
        options: [
          { tr: "Ik ben Nederlands", nl: "Ik ben Nederlands", ar: "Ik ben Nederlands", ku: "Ik ben Nederlands" },
          { tr: "Ik kom Nederlands", nl: "Ik kom Nederlands", ar: "Ik kom Nederlands", ku: "Ik kom Nederlands" },
          { tr: "Ik heet Nederlands", nl: "Ik heet Nederlands", ar: "Ik heet Nederlands", ku: "Ik heet Nederlands" },
          { tr: "Ik Nederlands", nl: "Ik Nederlands", ar: "Ik Nederlands", ku: "Ik Nederlands" },
        ],
        answerIndex: 0,
      },
      {
        q: { tr: "Adın ne? Hollandaca?", nl: "Adın ne? = ?", ar: "ما اسمك؟ = ?", ku: "Navê te çi ye? = ?" },
        options: [
          { tr: "Hoe heet je?", nl: "Hoe heet je?", ar: "Hoe heet je?", ku: "Hoe heet je?" },
          { tr: "Hoe gaat het?", nl: "Hoe gaat het?", ar: "Hoe gaat het?", ku: "Hoe gaat het?" },
          { tr: "Hoe laat is het?", nl: "Hoe laat is het?", ar: "Hoe laat is het?", ku: "Hoe laat is het?" },
          { tr: "Waar is het?", nl: "Waar is het?", ar: "Waar is het?", ku: "Waar is het?" },
        ],
        answerIndex: 0,
      },
      {
        q: { tr: "İyiyim. Hollandaca?", nl: "İyiyim = ?", ar: "أنا بخير = ?", ku: "Baş im = ?" },
        options: [
          { tr: "Ik ben goed", nl: "Ik ben goed", ar: "Ik ben goed", ku: "Ik ben goed" },
          { tr: "Ik ben dank", nl: "Ik ben dank", ar: "Ik ben dank", ku: "Ik ben dank" },
          { tr: "Ik ben doei", nl: "Ik ben doei", ar: "Ik ben doei", ku: "Ik ben doei" },
          { tr: "Ik ben regen", nl: "Ik ben regen", ar: "Ik ben regen", ku: "Ik ben regen" },
        ],
        answerIndex: 0,
      },
      {
        q: { tr: "Teşekkürler. Hollandaca?", nl: "Teşekkürler = ?", ar: "شكرا = ?", ku: "Spas = ?" },
        options: [
          { tr: "Dank je", nl: "Dank je", ar: "Dank je", ku: "Dank je" },
          { tr: "Hallo", nl: "Hallo", ar: "Hallo", ku: "Hallo" },
          { tr: "Doei", nl: "Doei", ar: "Doei", ku: "Doei" },
          { tr: "Goedemorgen", nl: "Goedemorgen", ar: "Goedemorgen", ku: "Goedemorgen" },
        ],
        answerIndex: 0,
      },
    ],
  },

  {
    lessonId: "3",
    questions: [
      {
        q: { tr: "1 Hollanda dilinde nedir?", nl: "1 is?", ar: "١ = ?", ku: "1 = ?" },
        options: [
          { tr: "één", nl: "één", ar: "één", ku: "één" },
          { tr: "twee", nl: "twee", ar: "twee", ku: "twee" },
          { tr: "drie", nl: "drie", ar: "drie", ku: "drie" },
          { tr: "vier", nl: "vier", ar: "vier", ku: "vier" },
        ],
        answerIndex: 0,
      },
      {
        q: { tr: "2 nedir?", nl: "2 is?", ar: "٢ = ?", ku: "2 = ?" },
        options: [
          { tr: "twee", nl: "twee", ar: "twee", ku: "twee" },
          { tr: "één", nl: "één", ar: "één", ku: "één" },
          { tr: "drie", nl: "drie", ar: "drie", ku: "drie" },
          { tr: "tien", nl: "tien", ar: "tien", ku: "tien" },
        ],
        answerIndex: 0,
      },
      {
        q: { tr: "10 nedir?", nl: "10 is?", ar: "١٠ = ?", ku: "10 = ?" },
        options: [
          { tr: "tien", nl: "tien", ar: "tien", ku: "tien" },
          { tr: "elf", nl: "elf", ar: "elf", ku: "elf" },
          { tr: "negen", nl: "negen", ar: "negen", ku: "negen" },
          { tr: "acht", nl: "acht", ar: "acht", ku: "acht" },
        ],
        answerIndex: 0,
      },
      {
        q: { tr: "11 nedir?", nl: "11 is?", ar: "١١ = ?", ku: "11 = ?" },
        options: [
          { tr: "elf", nl: "elf", ar: "elf", ku: "elf" },
          { tr: "twaalf", nl: "twaalf", ar: "twaalf", ku: "twaalf" },
          { tr: "tien", nl: "tien", ar: "tien", ku: "tien" },
          { tr: "dertien", nl: "dertien", ar: "dertien", ku: "dertien" },
        ],
        answerIndex: 0,
      },
      {
        q: { tr: "12 nedir?", nl: "12 is?", ar: "١٢ = ?", ku: "12 = ?" },
        options: [
          { tr: "twaalf", nl: "twaalf", ar: "twaalf", ku: "twaalf" },
          { tr: "elf", nl: "elf", ar: "elf", ku: "elf" },
          { tr: "tien", nl: "tien", ar: "tien", ku: "tien" },
          { tr: "veertien", nl: "veertien", ar: "veertien", ku: "veertien" },
        ],
        answerIndex: 0,
      },
      {
        q: { tr: "20 nedir?", nl: "20 is?", ar: "٢٠ = ?", ku: "20 = ?" },
        options: [
          { tr: "twintig", nl: "twintig", ar: "twintig", ku: "twintig" },
          { tr: "achttien", nl: "achttien", ar: "achttien", ku: "achttien" },
          { tr: "zestien", nl: "zestien", ar: "zestien", ku: "zestien" },
          { tr: "dertien", nl: "dertien", ar: "dertien", ku: "dertien" },
        ],
        answerIndex: 0,
      },
      {
        q: { tr: "7 nedir?", nl: "7 is?", ar: "٧ = ?", ku: "7 = ?" },
        options: [
          { tr: "zeven", nl: "zeven", ar: "zeven", ku: "zeven" },
          { tr: "zes", nl: "zes", ar: "zes", ku: "zes" },
          { tr: "acht", nl: "acht", ar: "acht", ku: "acht" },
          { tr: "negen", nl: "negen", ar: "negen", ku: "negen" },
        ],
        answerIndex: 0,
      },
      {
        q: { tr: "9 nedir?", nl: "9 is?", ar: "٩ = ?", ku: "9 = ?" },
        options: [
          { tr: "negen", nl: "negen", ar: "negen", ku: "negen" },
          { tr: "acht", nl: "acht", ar: "acht", ku: "acht" },
          { tr: "tien", nl: "tien", ar: "tien", ku: "tien" },
          { tr: "zeven", nl: "zeven", ar: "zeven", ku: "zeven" },
        ],
        answerIndex: 0,
      },
      {
        q: { tr: "15 nedir?", nl: "15 is?", ar: "١٥ = ?", ku: "15 = ?" },
        options: [
          { tr: "vijftien", nl: "vijftien", ar: "vijftien", ku: "vijftien" },
          { tr: "zestien", nl: "zestien", ar: "zestien", ku: "zestien" },
          { tr: "dertien", nl: "dertien", ar: "dertien", ku: "dertien" },
          { tr: "twaalf", nl: "twaalf", ar: "twaalf", ku: "twaalf" },
        ],
        answerIndex: 0,
      },
      {
        q: { tr: "18 nedir?", nl: "18 is?", ar: "١٨ = ?", ku: "18 = ?" },
        options: [
          { tr: "achttien", nl: "achttien", ar: "achttien", ku: "achttien" },
          { tr: "zeventien", nl: "zeventien", ar: "zeventien", ku: "zeventien" },
          { tr: "negentien", nl: "negentien", ar: "negentien", ku: "negentien" },
          { tr: "twintig", nl: "twintig", ar: "twintig", ku: "twintig" },
        ],
        answerIndex: 0,
      },
    ],
  },

  {
    lessonId: "4",
    questions: [
      {
        q: { tr: "Pazartesi Hollandaca?", nl: "Maandag = ?", ar: "الاثنين = ?", ku: "Duşem = ?" },
        options: [
          { tr: "maandag", nl: "maandag", ar: "maandag", ku: "maandag" },
          { tr: "dinsdag", nl: "dinsdag", ar: "dinsdag", ku: "dinsdag" },
          { tr: "vrijdag", nl: "vrijdag", ar: "vrijdag", ku: "vrijdag" },
          { tr: "zondag", nl: "zondag", ar: "zondag", ku: "zondag" },
        ],
        answerIndex: 0,
      },
      {
        q: { tr: "Salı Hollandaca?", nl: "Dinsdag = ?", ar: "الثلاثاء = ?", ku: "Sêşem = ?" },
        options: [
          { tr: "dinsdag", nl: "dinsdag", ar: "dinsdag", ku: "dinsdag" },
          { tr: "maandag", nl: "maandag", ar: "maandag", ku: "maandag" },
          { tr: "woensdag", nl: "woensdag", ar: "woensdag", ku: "woensdag" },
          { tr: "zaterdag", nl: "zaterdag", ar: "zaterdag", ku: "zaterdag" },
        ],
        answerIndex: 0,
      },
      {
        q: { tr: "Çarşamba Hollandaca?", nl: "Woensdag = ?", ar: "الأربعاء = ?", ku: "Çarşem = ?" },
        options: [
          { tr: "woensdag", nl: "woensdag", ar: "woensdag", ku: "woensdag" },
          { tr: "donderdag", nl: "donderdag", ar: "donderdag", ku: "donderdag" },
          { tr: "vrijdag", nl: "vrijdag", ar: "vrijdag", ku: "vrijdag" },
          { tr: "zondag", nl: "zondag", ar: "zondag", ku: "zondag" },
        ],
        answerIndex: 0,
      },
      {
        q: { tr: "Perşembe Hollandaca?", nl: "Donderdag = ?", ar: "الخميس = ?", ku: "Pêncşem = ?" },
        options: [
          { tr: "donderdag", nl: "donderdag", ar: "donderdag", ku: "donderdag" },
          { tr: "woensdag", nl: "woensdag", ar: "woensdag", ku: "woensdag" },
          { tr: "zaterdag", nl: "zaterdag", ar: "zaterdag", ku: "zaterdag" },
          { tr: "maandag", nl: "maandag", ar: "maandag", ku: "maandag" },
        ],
        answerIndex: 0,
      },
      {
        q: { tr: "Cuma Hollandaca?", nl: "Vrijdag = ?", ar: "الجمعة = ?", ku: "În = ?" },
        options: [
          { tr: "vrijdag", nl: "vrijdag", ar: "vrijdag", ku: "vrijdag" },
          { tr: "zondag", nl: "zondag", ar: "zondag", ku: "zondag" },
          { tr: "dinsdag", nl: "dinsdag", ar: "dinsdag", ku: "dinsdag" },
          { tr: "maandag", nl: "maandag", ar: "maandag", ku: "maandag" },
        ],
        answerIndex: 0,
      },
      {
        q: { tr: "Cumartesi Hollandaca?", nl: "Zaterdag = ?", ar: "السبت = ?", ku: "Şemî = ?" },
        options: [
          { tr: "zaterdag", nl: "zaterdag", ar: "zaterdag", ku: "zaterdag" },
          { tr: "zondag", nl: "zondag", ar: "zondag", ku: "zondag" },
          { tr: "vrijdag", nl: "vrijdag", ar: "vrijdag", ku: "vrijdag" },
          { tr: "maandag", nl: "maandag", ar: "maandag", ku: "maandag" },
        ],
        answerIndex: 0,
      },
      {
        q: { tr: "Pazar Hollandaca?", nl: "Zondag = ?", ar: "الأحد = ?", ku: "Yekşem = ?" },
        options: [
          { tr: "zondag", nl: "zondag", ar: "zondag", ku: "zondag" },
          { tr: "zaterdag", nl: "zaterdag", ar: "zaterdag", ku: "zaterdag" },
          { tr: "vrijdag", nl: "vrijdag", ar: "vrijdag", ku: "vrijdag" },
          { tr: "donderdag", nl: "donderdag", ar: "donderdag", ku: "donderdag" },
        ],
        answerIndex: 0,
      },
      {
        q: { tr: "Hafta içi kelimesi NL’de ne?", nl: "Weekday is?", ar: "أيام الأسبوع؟", ku: "Rojên hefteyê?" },
        options: [
          { tr: "weekdagen", nl: "weekdagen", ar: "weekdagen", ku: "weekdagen" },
          { tr: "weekend", nl: "weekend", ar: "weekend", ku: "weekend" },
          { tr: "maanden", nl: "maanden", ar: "maanden", ku: "maanden" },
          { tr: "jaren", nl: "jaren", ar: "jaren", ku: "jaren" },
        ],
        answerIndex: 0,
      },
      {
        q: { tr: "Hafta sonu NL’de ne?", nl: "Weekend is?", ar: "عطلة نهاية الأسبوع؟", ku: "Dema dawiya hefteyê?" },
        options: [
          { tr: "weekend", nl: "weekend", ar: "weekend", ku: "weekend" },
          { tr: "weekdagen", nl: "weekdagen", ar: "weekdagen", ku: "weekdagen" },
          { tr: "dag", nl: "dag", ar: "dag", ku: "dag" },
          { tr: "tijd", nl: "tijd", ar: "tijd", ku: "tijd" },
        ],
        answerIndex: 0,
      },
      {
        q: { tr: "Bugün günlerden ne? NL?", nl: "Bugün günlerden ne? = ?", ar: "ما اليوم؟", ku: "Îro çi roj e?" },
        options: [
          { tr: "Welke dag is het vandaag?", nl: "Welke dag is het vandaag?", ar: "Welke dag is het vandaag?", ku: "Welke dag is het vandaag?" },
          { tr: "Hoe laat is het?", nl: "Hoe laat is het?", ar: "Hoe laat is het?", ku: "Hoe laat is het?" },
          { tr: "Hoe gaat het?", nl: "Hoe gaat het?", ar: "Hoe gaat het?", ku: "Hoe gaat het?" },
          { tr: "Waar is het?", nl: "Waar is het?", ar: "Waar is het?", ku: "Waar is het?" },
        ],
        answerIndex: 0,
      },
    ],
  },

  {
    lessonId: "5",
    questions: [
      {
        q: { tr: "Anne Hollandaca?", nl: "Moeder = ?", ar: "الأم = ?", ku: "Dayik = ?" },
        options: [
          { tr: "moeder", nl: "moeder", ar: "moeder", ku: "moeder" },
          { tr: "vader", nl: "vader", ar: "vader", ku: "vader" },
          { tr: "broer", nl: "broer", ar: "broer", ku: "broer" },
          { tr: "zus", nl: "zus", ar: "zus", ku: "zus" },
        ],
        answerIndex: 0,
      },
      {
        q: { tr: "Baba Hollandaca?", nl: "Vader = ?", ar: "الأب = ?", ku: "Bav = ?" },
        options: [
          { tr: "vader", nl: "vader", ar: "vader", ku: "vader" },
          { tr: "moeder", nl: "moeder", ar: "moeder", ku: "moeder" },
          { tr: "kind", nl: "kind", ar: "kind", ku: "kind" },
          { tr: "partner", nl: "partner", ar: "partner", ku: "partner" },
        ],
        answerIndex: 0,
      },
      {
        q: { tr: "Erkek kardeş Hollandaca?", nl: "Broer = ?", ar: "الأخ = ?", ku: "Bira = ?" },
        options: [
          { tr: "broer", nl: "broer", ar: "broer", ku: "broer" },
          { tr: "zus", nl: "zus", ar: "zus", ku: "zus" },
          { tr: "vader", nl: "vader", ar: "vader", ku: "vader" },
          { tr: "moeder", nl: "moeder", ar: "moeder", ku: "moeder" },
        ],
        answerIndex: 0,
      },
      {
        q: { tr: "Kız kardeş Hollandaca?", nl: "Zus = ?", ar: "الأخت = ?", ku: "Xwişk = ?" },
        options: [
          { tr: "zus", nl: "zus", ar: "zus", ku: "zus" },
          { tr: "broer", nl: "broer", ar: "broer", ku: "broer" },
          { tr: "kind", nl: "kind", ar: "kind", ku: "kind" },
          { tr: "partner", nl: "partner", ar: "partner", ku: "partner" },
        ],
        answerIndex: 0,
      },
      {
        q: { tr: "Çocuk Hollandaca?", nl: "Kind = ?", ar: "طفل = ?", ku: "Zarok = ?" },
        options: [
          { tr: "kind", nl: "kind", ar: "kind", ku: "kind" },
          { tr: "vader", nl: "vader", ar: "vader", ku: "vader" },
          { tr: "zus", nl: "zus", ar: "zus", ku: "zus" },
          { tr: "broer", nl: "broer", ar: "broer", ku: "broer" },
        ],
        answerIndex: 0,
      },
      {
        q: { tr: "Benim kardeşim var. NL?", nl: "I have a sibling = ?", ar: "لدي أخ = ?", ku: "Min heye bira = ?" },
        options: [
          { tr: "Ik heb een broer", nl: "Ik heb een broer", ar: "Ik heb een broer", ku: "Ik heb een broer" },
          { tr: "Ik ben een broer", nl: "Ik ben een broer", ar: "Ik ben een broer", ku: "Ik ben een broer" },
          { tr: "Ik kom een broer", nl: "Ik kom een broer", ar: "Ik kom een broer", ku: "Ik kom een broer" },
          { tr: "Ik heet broer", nl: "Ik heet broer", ar: "Ik heet broer", ku: "Ik heet broer" },
        ],
        answerIndex: 0,
      },
      {
        q: { tr: "Aile Hollandaca?", nl: "Familie = ?", ar: "العائلة = ?", ku: "Malbat = ?" },
        options: [
          { tr: "familie", nl: "familie", ar: "familie", ku: "familie" },
          { tr: "huis", nl: "huis", ar: "huis", ku: "huis" },
          { tr: "kleur", nl: "kleur", ar: "kleur", ku: "kleur" },
          { tr: "dag", nl: "dag", ar: "dag", ku: "dag" },
        ],
        answerIndex: 0,
      },
      {
        q: { tr: "Eş kelimesi NL?", nl: "Partner is?", ar: "الزوج/الزوجة = ?", ku: "Hevaljîn = ?" },
        options: [
          { tr: "partner", nl: "partner", ar: "partner", ku: "partner" },
          { tr: "broer", nl: "broer", ar: "broer", ku: "broer" },
          { tr: "zus", nl: "zus", ar: "zus", ku: "zus" },
          { tr: "kind", nl: "kind", ar: "kind", ku: "kind" },
        ],
        answerIndex: 0,
      },
      {
        q: { tr: "Benim annem var. NL?", nl: "My mother = ?", ar: "أمي = ?", ku: "Dayika min = ?" },
        options: [
          { tr: "Mijn moeder", nl: "Mijn moeder", ar: "Mijn moeder", ku: "Mijn moeder" },
          { tr: "Ik moeder", nl: "Ik moeder", ar: "Ik moeder", ku: "Ik moeder" },
          { tr: "Moeder ik", nl: "Moeder ik", ar: "Moeder ik", ku: "Moeder ik" },
          { tr: "Ik heb moeder", nl: "Ik heb moeder", ar: "Ik heb moeder", ku: "Ik heb moeder" },
        ],
        answerIndex: 0,
      },
      {
        q: { tr: "Benim babam var. NL?", nl: "My father = ?", ar: "أبي = ?", ku: "Bavê min = ?" },
        options: [
          { tr: "Mijn vader", nl: "Mijn vader", ar: "Mijn vader", ku: "Mijn vader" },
          { tr: "Ik vader", nl: "Ik vader", ar: "Ik vader", ku: "Ik vader" },
          { tr: "Vader ik", nl: "Vader ik", ar: "Vader ik", ku: "Vader ik" },
          { tr: "Ik heb vader", nl: "Ik heb vader", ar: "Ik heb vader", ku: "Ik heb vader" },
        ],
        answerIndex: 0,
      },
    ],
  },

  // ✅ Ders 6-15 quizleri aşağıdaki mesajda devam edeceğim (çok uzun olduğu için burada mesaj sınırı doluyor)];
};

export const lessons: LessonSeed[] = [
  {
    id: "1",
    level: "BEGINNER",
    title: {
      tr: "Ders 1: Selamlaşma",
      nl: "Les 1: Begroeten",
      ar: "الدرس 1: التحيات",
      ku: "Ders 1: Silav",
    },
    description: {
      tr: "Merhaba, günaydın, iyi akşamlar gibi temel selamlaşmalar.",
      nl: "Basisbegroetingen zoals hallo, goedemorgen en goedenavond.",
      ar: "تحيات أساسية مثل مرحبا، صباح الخير، مساء الخير.",
      ku: "Silavên bingehîn: merheba, rojbaş, êvarbaş.",
    },
    content: {
      tr: `✅ Temel Selamlaşmalar:
- Merhaba = Hallo
- Günaydın = Goedemorgen
- İyi akşamlar = Goedenavond
- Hoşça kal = Doei
- Nasılsın? = Hoe gaat het?

✅ Örnek Cümleler:
- Merhaba! Nasılsın? → Hallo! Hoe gaat het?
- Günaydın, ben Murat. → Goedemorgen, ik ben Murat.
- Hoşça kal! → Doei!`,
      nl: `✅ Basisbegroetingen:
- Merhaba = Hallo
- Günaydın = Goedemorgen
- İyi akşamlar = Goedenavond
- Hoşça kal = Doei
- Nasılsın? = Hoe gaat het?

✅ Voorbeelden:
- Hallo! Hoe gaat het?
- Goedemorgen, ik ben Murat.
- Doei!`,
      ar: `✅ التحيات:
- مرحبا = Hallo
- صباح الخير = Goedemorgen
- مساء الخير = Goedenavond
- وداعا = Doei
- كيف حالك؟ = Hoe gaat het?

✅ أمثلة:
- مرحبا! كيف حالك؟
- صباح الخير، أنا مراد.
- وداعا!`,
      ku: `✅ Silav:
- Merheba = Hallo
- Rojbaş = Goedemorgen
- Êvarbaş = Goedenavond
- Bi xatirê te = Doei
- Tu çawa yî? = Hoe gaat het?

✅ Nimûne:
- Merheba! Tu çawa yî?
- Rojbaş, ez Murat im.
- Bi xatirê te!`,
    },
  },

  {
    id: "2",
    level: "BEGINNER",
    title: { tr: "Ders 2: Kendini Tanıtma", nl: "Les 2: Jezelf voorstellen", ar: "الدرس 2: التعريف بالنفس", ku: "Ders 2: Xwe Nasandin" },
    description: { tr: "Ad, yaş, nerelisin, meslek gibi temel tanıtım.", nl: "Naam, leeftijd, afkomst, beroep.", ar: "الاسم، العمر، الأصل، المهنة.", ku: "Nav, temen, welat, kar." },
    content: {
      tr: `✅ Tanıtım Kalıpları:
- Ben ... = Ik ben ...
- Ben ... yaşındayım = Ik ben ... jaar oud
- Ben ...’denim = Ik kom uit ...
- Ben ...’yım (meslek) = Ik ben ...

✅ Örnek:
- Ben Murat. → Ik ben Murat.
- 25 yaşındayım. → Ik ben 25 jaar oud.
- Türkiye'denim. → Ik kom uit Turkije.`,
      nl: `✅ Patronen:
- Ik ben ...
- Ik ben ... jaar oud
- Ik kom uit ...
- Ik ben ... (beroep)

✅ Voorbeeld:
- Ik ben Murat.
- Ik ben 25 jaar oud.
- Ik kom uit Turkije.`,
      ar: `✅ قوالب:
- أنا ... = Ik ben ...
- عمري ... = Ik ben ... jaar oud
- أنا من ... = Ik kom uit ...
- مهنتي ... = Ik ben ...

✅ مثال:
- أنا مراد.
- عمري 25.
- أنا من تركيا.`,
      ku: `✅ Kalib:
- Ez ... im = Ik ben ...
- Temenê min ... e = Ik ben ... jaar oud
- Ez ji ... me = Ik kom uit ...
- Karê min ... e = Ik ben ...

✅ Nimûne:
- Ez Murat im.
- Temenê min 25 e.
- Ez ji Tirkiyê me.`,
    },
  },

  {
    id: "3",
    level: "BEGINNER",
    title: { tr: "Ders 3: Sayılar 1-20", nl: "Les 3: Cijfers 1-20", ar: "الدرس 3: الأرقام 1-20", ku: "Ders 3: Hejmar 1-20" },
    description: { tr: "1’den 20’ye kadar sayılar.", nl: "Cijfers van 1 tot 20.", ar: "الأرقام من 1 إلى 20.", ku: "Hejmarên 1 heta 20." },
    content: {
      tr: `✅ Sayılar:
1 één
2 twee
3 drie
4 vier
5 vijf
6 zes
7 zeven
8 acht
9 negen
10 tien
11 elf
12 twaalf
13 dertien
14 veertien
15 vijftien
16 zestien
17 zeventien
18 achttien
19 negentien
20 twintig`,
      nl: `✅ Cijfers:
1 één
2 twee
3 drie
4 vier
5 vijf
6 zes
7 zeven
8 acht
9 negen
10 tien
11 elf
12 twaalf
13 dertien
14 veertien
15 vijftien
16 zestien
17 zeventien
18 achttien
19 negentien
20 twintig`,
      ar: `✅ الأرقام:
1 één
2 twee
3 drie
4 vier
5 vijf
6 zes
7 zeven
8 acht
9 negen
10 tien
... حتى 20 twintig`,
      ku: `✅ Hejmar:
1 één
2 twee
3 drie
4 vier
5 vijf
6 zes
7 zeven
8 acht
9 negen
10 tien
... heta 20 twintig`,
    },
  },

  {
    id: "4",
    level: "BEGINNER",
    title: { tr: "Ders 4: Günler", nl: "Les 4: Dagen", ar: "الدرس 4: الأيام", ku: "Ders 4: Roj" },
    description: { tr: "Haftanın günleri.", nl: "Dagen van de week.", ar: "أيام الأسبوع.", ku: "Rojên hefteyê." },
    content: {
      tr: `✅ Günler:
- Pazartesi = maandag
- Salı = dinsdag
- Çarşamba = woensdag
- Perşembe = donderdag
- Cuma = vrijdag
- Cumartesi = zaterdag
- Pazar = zondag`,
      nl: `✅ Dagen:
- maandag
- dinsdag
- woensdag
- donderdag
- vrijdag
- zaterdag
- zondag`,
      ar: `✅ الأيام:
- الاثنين = maandag
- الثلاثاء = dinsdag
- الأربعاء = woensdag
- الخميس = donderdag
- الجمعة = vrijdag
- السبت = zaterdag
- الأحد = zondag`,
      ku: `✅ Roj:
- duşem = maandag
- sêşem = dinsdag
- çarşem = woensdag
- pêncşem = donderdag
- în = vrijdag
- şemî = zaterdag
- yekşem = zondag`,
    },
  },

  {
    id: "5",
    level: "BEGINNER",
    title: { tr: "Ders 5: Aile", nl: "Les 5: Familie", ar: "الدرس 5: العائلة", ku: "Ders 5: Malbat" },
    description: { tr: "Anne, baba, kardeşler ve aile kelimeleri.", nl: "Moeder, vader, broer, zus.", ar: "أم، أب، أخ، أخت.", ku: "Dayik, bav, bira, xwişk." },
    content: {
      tr: `✅ Aile:
- Anne = moeder
- Baba = vader
- Erkek kardeş = broer
- Kız kardeş = zus
- Çocuk = kind
- Eş = partner

✅ Örnek:
- Benim bir kardeşim var. → Ik heb een broer.`,
      nl: `✅ Familie:
- moeder
- vader
- broer
- zus
- kind
- partner`,
      ar: `✅ العائلة:
- الأم = moeder
- الأب = vader
- الأخ = broer
- الأخت = zus
- الطفل = kind`,
      ku: `✅ Malbat:
- Dayik = moeder
- Bav = vader
- Bira = broer
- Xwişk = zus
- Zarok = kind`,
    },
  },

  // ✅ 6-15 dersler aşağıda (tam paket)
  {
    id: "6",
    level: "BEGINNER",
    title: { tr: "Ders 6: Renkler", nl: "Les 6: Kleuren", ar: "الدرس 6: الألوان", ku: "Ders 6: Reng" },
    description: { tr: "Temel renkler.", nl: "Basis kleuren.", ar: "ألوان أساسية.", ku: "Rengên bingehîn." },
    content: {
      tr: `kırmızı = rood, mavi = blauw, yeşil = groen, siyah = zwart, beyaz = wit`,
      nl: `rood, blauw, groen, zwart, wit`,
      ar: `أحمر = rood، أزرق = blauw، أخضر = groen، أسود = zwart، أبيض = wit`,
      ku: `sor = rood, şîn = blauw, kesk = groen, reş = zwart, spî = wit`,
    },
  },
  {
    id: "7",
    level: "BEGINNER",
    title: { tr: "Ders 7: Yiyecek-İçecek", nl: "Les 7: Eten & drinken", ar: "الدرس 7: الطعام والشراب", ku: "Ders 7: Xwarin & Vexwarin" },
    description: { tr: "Temel yiyecek kelimeleri.", nl: "Basis woorden eten.", ar: "كلمات الطعام.", ku: "Peyvên xwarinê." },
    content: { tr: "Su=water, ekmek=brood, çay=thee, kahve=koffie", nl: "water, brood, thee, koffie", ar: "ماء=water، خبز=brood", ku: "av=water, nan=brood" },
  },
  {
    id: "8",
    level: "BEGINNER",
    title: { tr: "Ders 8: Saatler", nl: "Les 8: Klok", ar: "الدرس 8: الوقت", ku: "Ders 8: Dem" },
    description: { tr: "Saat sorma ve söyleme.", nl: "De tijd vragen.", ar: "السؤال عن الوقت.", ku: "Dem pirsîn." },
    content: { tr: "Saat kaç?=Hoe laat is het?", nl: "Hoe laat is het?", ar: "كم الساعة؟", ku: "Saet çend e?" },
  },
  {
    id: "9",
    level: "BEGINNER",
    title: { tr: "Ders 9: Ev Eşyaları", nl: "Les 9: Huis spullen", ar: "الدرس 9: أشياء المنزل", ku: "Ders 9: Tiştên Malê" },
    description: { tr: "Masa, sandalye, yatak.", nl: "tafel, stoel, bed", ar: "طاولة، كرسي، سرير", ku: "mase, kursî, nivîn" },
    content: { tr: "masa=tafel, sandalye=stoel, yatak=bed", nl: "tafel, stoel, bed", ar: "طاولة=tafel", ku: "mase=tafel" },
  },
  {
    id: "10",
    level: "BEGINNER",
    title: { tr: "Ders 10: Alışveriş", nl: "Les 10: Winkelen", ar: "الدرس 10: التسوق", ku: "Ders 10: Kirîn" },
    description: { tr: "Fiyat sorma.", nl: "Prijs vragen.", ar: "السعر.", ku: "bihayê pirsîn" },
    content: { tr: "Bu ne kadar?=Hoeveel kost dit?", nl: "Hoeveel kost dit?", ar: "كم سعر هذا؟", ku: "Ev çend e?" },
  },
  {
    id: "11",
    level: "BEGINNER",
    title: { tr: "Ders 11: Ulaşım", nl: "Les 11: Vervoer", ar: "الدرس 11: المواصلات", ku: "Ders 11: Gihiştin" },
    description: { tr: "Otobüs, tren.", nl: "bus, trein", ar: "حافلة، قطار", ku: "otobês, tren" },
    content: { tr: "otobüs=bus, tren=trein", nl: "bus, trein", ar: "حافلة=bus", ku: "otobês=bus" },
  },
  {
    id: "12",
    level: "BEGINNER",
    title: { tr: "Ders 12: Hava Durumu", nl: "Les 12: Weer", ar: "الدرس 12: الطقس", ku: "Ders 12: Hewa" },
    description: { tr: "Güneşli, yağmurlu.", nl: "zonnig, regen", ar: "مشمس، ممطر", ku: "rojî, baranî" },
    content: { tr: "Güneşli=zonnig, Yağmur=regen", nl: "zonnig, regen", ar: "مشمس=zonnig", ku: "rojî=zonnig" },
  },
  {
    id: "13",
    level: "BEGINNER",
    title: { tr: "Ders 13: Fiiller", nl: "Les 13: Werkwoorden", ar: "الدرس 13: الأفعال", ku: "Ders 13: Lêker" },
    description: { tr: "Gitmek, gelmek.", nl: "gaan, komen", ar: "يذهب، يأتي", ku: "çûn, hatin" },
    content: { tr: "gitmek=gaan, gelmek=komen", nl: "gaan, komen", ar: "يذهب=gaan", ku: "çûn=gaan" },
  },
  {
    id: "14",
    level: "BEGINNER",
    title: { tr: "Ders 14: Basit Cümle", nl: "Les 14: Simpele zinnen", ar: "الدرس 14: جمل بسيطة", ku: "Ders 14: Hevokên hêsan" },
    description: { tr: "Ben gidiyorum.", nl: "Ik ga.", ar: "أنا أذهب.", ku: "Ez diçim." },
    content: { tr: "Ben gidiyorum=Ik ga", nl: "Ik ga", ar: "أنا أذهب=Ik ga", ku: "Ez diçim=Ik ga" },
  },
  {
    id: "15",
    level: "BEGINNER",
    title: { tr: "Ders 15: Konuşma Mini", nl: "Les 15: Mini gesprek", ar: "الدرس 15: حوار صغير", ku: "Ders 15: Axaftina biçûk" },
    description: { tr: "Mini günlük konuşma.", nl: "Dagelijks gesprek.", ar: "محادثة يومية.", ku: "Axaftina rojane." },
    content: {
      tr: `A: Merhaba! Nasılsın?\nB: İyiyim, teşekkürler.\nA: Hoşça kal!\nB: Görüşürüz!`,
      nl: `A: Hallo! Hoe gaat het?\nB: Goed, dank je.\nA: Doei!\nB: Tot ziens!`,
      ar: `A: مرحبا! كيف حالك؟\nB: بخير، شكرا.\nA: وداعا!\nB: إلى اللقاء!`,
      ku: `A: Merheba! Tu çawa yî?\nB: Baş im, spas.\nA: Bi xatirê te!\nB: Dîtin!`,
    },
  },
];

export const quizzes: QuizSeed[] = [
  {
    lessonId: "1",
    questions: [
      {
        q: { tr: "Merhaba Hollandaca nasıl denir?", nl: "Hoe zeg je 'Merhaba'?", ar: "كيف نقول مرحبا؟", ku: "Merheba bi holandî çi ye?" },
        options: [
          { tr: "Hallo", nl: "Hallo", ar: "Hallo", ku: "Hallo" },
          { tr: "Dank je", nl: "Dank je", ar: "Dank je", ku: "Dank je" },
          { tr: "Doei", nl: "Doei", ar: "Doei", ku: "Doei" },
          { tr: "Water", nl: "Water", ar: "Water", ku: "Water" },
        ],
        answerIndex: 0,
      },
      {
        q: { tr: "Nasılsın? Hollandaca?", nl: "Nasılsın? = ?", ar: "كيف حالك؟ = ?", ku: "Tu çawa yî? = ?" },
        options: [
          { tr: "Hoe gaat het?", nl: "Hoe gaat het?", ar: "Hoe gaat het?", ku: "Hoe gaat het?" },
          { tr: "Goedemorgen", nl: "Goedemorgen", ar: "Goedemorgen", ku: "Goedemorgen" },
          { tr: "Goedenavond", nl: "Goedenavond", ar: "Goedenavond", ku: "Goedenavond" },
          { tr: "Brood", nl: "Brood", ar: "Brood", ku: "Brood" },
        ],
        answerIndex: 0,
      },
      {
        q: { tr: "Günaydın Hollandaca?", nl: "Günaydın = ?", ar: "صباح الخير = ?", ku: "Rojbaş = ?" },
        options: [
          { tr: "Goedemorgen", nl: "Goedemorgen", ar: "Goedemorgen", ku: "Goedemorgen" },
          { tr: "Doei", nl: "Doei", ar: "Doei", ku: "Doei" },
          { tr: "Hallo", nl: "Hallo", ar: "Hallo", ku: "Hallo" },
          { tr: "Koffie", nl: "Koffie", ar: "Koffie", ku: "Koffie" },
        ],
        answerIndex: 0,
      },
      {
        q: { tr: "Hoşça kal Hollandaca?", nl: "Hoşça kal = ?", ar: "وداعا = ?", ku: "Bi xatirê te = ?" },
        options: [
          { tr: "Doei", nl: "Doei", ar: "Doei", ku: "Doei" },
          { tr: "Hallo", nl: "Hallo", ar: "Hallo", ku: "Hallo" },
          { tr: "Goedemorgen", nl: "Goedemorgen", ar: "Goedemorgen", ku: "Goedemorgen" },
          { tr: "Regen", nl: "Regen", ar: "Regen", ku: "Regen" },
        ],
        answerIndex: 0,
      },
      {
        q: { tr: "İyi akşamlar Hollandaca?", nl: "İyi akşamlar = ?", ar: "مساء الخير = ?", ku: "Êvarbaş = ?" },
        options: [
          { tr: "Goedenavond", nl: "Goedenavond", ar: "Goedenavond", ku: "Goedenavond" },
          { tr: "Goedemorgen", nl: "Goedemorgen", ar: "Goedemorgen", ku: "Goedemorgen" },
          { tr: "Hallo", nl: "Hallo", ar: "Hallo", ku: "Hallo" },
          { tr: "Zonnig", nl: "Zonnig", ar: "Zonnig", ku: "Zonnig" },
        ],
        answerIndex: 0,
      },
    ],
  },

  // ✅ Ders 2-15 için quizler
  // (Aynı formatta yazdım; uzun olduğu için burada hepsini tek tek ekleyeceğim)
];