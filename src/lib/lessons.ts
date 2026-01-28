export type Lesson = {
  slug: string;
  title: string;
  summary: string;
  level: "Başlangıç" | "Orta" | "İleri";
  content: string[];
};

export const lessons: Lesson[] = [
  {
    slug: "html-temelleri",
    title: "HTML Temelleri",
    summary: "Sayfa iskeleti, etiketler ve semantik yapı.",
    level: "Başlangıç",
    content: [
      "HTML bir sayfanın iskeletidir. Başlık, paragraf, liste gibi içerikleri tanımlar.",
      "Semantik etiketler (header, main, footer) sayfanın yapısını daha anlaşılır kılar.",
      "Bir sonraki adım: formlar ve temel erişilebilirlik."
    ]
  },
  {
    slug: "css-temelleri",
    title: "CSS Temelleri",
    summary: "Seçiciler, kutu modeli, responsive mantığı.",
    level: "Başlangıç",
    content: [
      "CSS görsel düzeni sağlar: spacing, renkler, hizalama.",
      "Kutu modeli (margin, border, padding, content) tasarımın temelidir.",
      "Responsive için medya sorguları veya modern yaklaşım: flex/grid."
    ]
  },
  {
    slug: "javascript-giris",
    title: "JavaScript Giriş",
    summary: "Değişkenler, fonksiyonlar, DOM mantığı.",
    level: "Orta",
    content: [
      "JavaScript sayfayı interaktif yapar.",
      "DOM ile HTML elemanlarını seçer ve güncellersin.",
      "Temel pratik: click event + metin değiştirme."
    ]
  }
];

export function getLessonBySlug(slug: string) {
  return lessons.find((l) => l.slug === slug);
}
