import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-zinc-200">
      <div className="container py-4 flex items-center justify-between">
        <Link href="/" className="font-bold tracking-tight">
          web-sitesi
        </Link>

        <nav className="flex items-center gap-3">
          <Link className="btn-ghost" href="/">Landing</Link>
          <Link className="btn-primary" href="/dersler">Dersler</Link>
        </nav>
      </div>
    </header>
  );
}
