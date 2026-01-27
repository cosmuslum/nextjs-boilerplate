import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NederLearn",
  description: "Hollandaca öğrenme platformu (A0 → B1)",
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
