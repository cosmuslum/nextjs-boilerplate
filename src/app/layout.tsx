import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DutchLearn",
  description: "Hollandaca öğrenme platformu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="min-h-screen w-full bg-black">{children}</body>
    </html>
  );
}