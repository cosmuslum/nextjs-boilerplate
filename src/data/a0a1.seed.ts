import { Lesson } from "@/lib/lessonService";

export const lessons: Lesson[] = [
  {
    id: "a0-1",
    level: "BEGINNER",
    orderIndex: 1,
    title: {
      tr: "Tanışma",
      en: "Introduction",
      nl: "Introductie",
      ar: "التعارف",
      ku: "Nasname",
    },
    description: {
      tr: "Basit tanışma cümleleri",
      en: "Basic introduction sentences",
      nl: "Eenvoudige introductiezinnen",
      ar: "جمل تعريف بسيطة",
      ku: "Hevpeyvîna bingehîn",
    },
    content: {
      tr: "Merhaba, ben Murat.",
      en: "Hello, I am Murat.",
      nl: "Hallo, ik ben Murat.",
      ar: "مرحباً، أنا مراد.",
      ku: "Silav, ez Murat im.",
    },
  },
];

export const quizzes = [];
