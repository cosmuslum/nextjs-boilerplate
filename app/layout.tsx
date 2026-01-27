import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NederLearn",
  description: "Hollandacayı sıfırdan, sesli ve adım adım öğren",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
