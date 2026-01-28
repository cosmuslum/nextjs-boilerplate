import "./globals.css";
import Providers from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "NederLearn",
  description: "Hollandaca öğren"
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="text-white">
        <Providers>
          <Navbar />
          <main className="mx-auto max-w-6xl px-4">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
