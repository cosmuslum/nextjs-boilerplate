import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "NederLearn",
  description: "Hollandaca öğrenmenin en kolay yolu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
