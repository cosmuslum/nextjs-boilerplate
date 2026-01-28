"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session, status } = useSession();
  const user = session?.user;

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50
      flex items-center gap-2 px-4 py-2 rounded-full
      bg-black/40 backdrop-blur border border-white/10">

      <Link href="/" className="mr-4 font-semibold">
        🇳🇱 NederLearn
      </Link>

      <Link href="/dersler">Dersler</Link>

      {status === "authenticated" && user?.role === "admin" && (
        <Link href="/admin">Admin</Link>
      )}

      {status === "authenticated" && (
        <Link href="/profil">Profil</Link>
      )}

      {status === "authenticated" ? (
        <button onClick={() => signOut()}>Çıkış</button>
      ) : (
        <button onClick={() => signIn("google")}>Giriş</button>
      )}
    </nav>
  );
}
