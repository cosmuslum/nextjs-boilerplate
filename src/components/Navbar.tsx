"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

const ADMIN_EMAILS = [
  "mcosmuslu@gmail.com", // ✅ sen
  "teacher1@gmail.com",  // ✅ öğretmenler
  "teacher2@gmail.com",
];

export default function Navbar({ locale }: { locale: string }) {
  const pathname = usePathname();
  const router = useRouter();

  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUserEmail(u?.email || null);
      setChecking(false);
    });
    return () => unsub();
  }, []);

  const isLoggedIn = !checking && !!userEmail;
  const canAccessAdmin = userEmail ? ADMIN_EMAILS.includes(userEmail) : false;

  async function handleLogout() {
    await signOut(auth);
    router.push(`/${locale}`); // ✅ çıkıştan sonra home'a dön
  }

  // ✅ Menü linkleri
  const links = [
    { href: `/${locale}/lessons`, label: "Dersler" },
    ...(isLoggedIn ? [{ href: `/${locale}/profile`, label: "Profil" }] : []),
  ];

  return (
    <header className="w-full flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40 backdrop-blur-md">
      {/* Sol: Logo */}
      <Link href={`/${locale}`} className="text-white font-bold text-lg">
        DutchLearn
      </Link>

      {/* Sağ: Menü */}
      <nav className="flex items-center gap-5 text-white/80 text-sm">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={`hover:text-white transition ${
              pathname === l.href ? "text-white font-semibold" : ""
            }`}
          >
            {l.label}
          </Link>
        ))}

        {/* ✅ Admin Panel sadece admin/teacher */}
        {canAccessAdmin && (
          <Link
            href={`/${locale}/admin`}
            className="px-4 py-2 rounded-xl bg-green-500/80 hover:bg-green-500 text-black font-semibold transition"
          >
            Admin
          </Link>
        )}

        {/* ✅ Login / Logout */}
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-xl bg-red-500/80 hover:bg-red-500 text-white font-semibold transition"
          >
            Çıkış Yap
          </button>
        ) : (
          <Link
            href={`/${locale}/login`}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold transition"
          >
            Giriş Yap
          </Link>
        )}
      </nav>
    </header>
  );
}