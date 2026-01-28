
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <main style={{padding: 20}}>{children}</main>
      </body>
    </html>
  );
}
