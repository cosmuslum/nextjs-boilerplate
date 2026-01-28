import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "NederLearn",
  description: "Hollandaca öğren"
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="min-h-screen text-white">
        <div className="min-h-screen relative overflow-hidden">
          {/* arka plan glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-600/25 blur-3xl" />
            <div className="absolute top-28 right-10 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-72 w-[42rem] rounded-full bg-sky-500/10 blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60" />
          </div>

          <div className="relative">
            <Navbar />
            <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
