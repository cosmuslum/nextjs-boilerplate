type LocalizedText = {
  tr: string;
  en?: string;
  nl?: string;
  ar?: string;
};

type Question = {
  q: LocalizedText;
  options: LocalizedText[];
  answerIndex: number;
};

type Lesson = {
  lessonId: number;
  questions: Question[];
};

export const a0a1Lessons: Lesson[] = [
  {
    lessonId: 2,
    questions: [
      {
        q: {
          tr: "Ben Murat. Hollandaca?",
          nl: "Ik ben Murat. ?",
          en: "I am Murat. ?",
          ar: "أنا مراد. ؟",
        },
        options: [
          {
            tr: "Ik ben Murat.",
            nl: "Ik ben Murat.",
            en: "I am Murat.",
            ar: "أنا مراد.",
          },
          {
            tr: "Jij bent Murat.",
            nl: "Jij bent Murat.",
            en: "You are Murat.",
            ar: "أنت مراد.",
          },
        ],
        answerIndex: 0,
      },
    ],
  },
];
