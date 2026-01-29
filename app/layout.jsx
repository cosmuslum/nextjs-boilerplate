import "./globals.css";
import Providers from "./providers";

// 🔥 DİKKAT: ../components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
