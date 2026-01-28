import "./globals.css";
import Providers from "./providers";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "NederLearn",
  description: "Hollandaca öğren",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
