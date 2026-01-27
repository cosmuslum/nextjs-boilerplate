import "./globals.css";

export const metadata = {
  title: "DutchLearn",
  description: "Hollandaca Öğrenme Platformu"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
