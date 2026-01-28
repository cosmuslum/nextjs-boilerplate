export default function Footer() {
  return (
    <footer className="border-t border-zinc-200">
      <div className="container py-6 text-sm text-zinc-600">
        © {new Date().getFullYear()} web-sitesi — Firebase yok, Vercel hazır.
      </div>
    </footer>
  );
}
