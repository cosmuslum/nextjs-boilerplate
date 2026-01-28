"use client";

import { useState, useMemo } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

const languages = [
  { code: "TR", label: "Türkçe" },
  { code: "EN", label: "English" },
  { code: "AR", label: "العربية" },
  { code: "NL", label: "Nederlands" },
  { code: "ES", label: "Español" }
];

export default function Navbar() {
  const { data: session, status } = useSession();
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState(languages[0]);

  const isAuth = status === "authenticated";
  const role = session?.user?.role;

  const isAdmin = useMemo(() => role === "admin", [role]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span>🇳🇱</span>
          <span>NederLearn</span>
        </Link>

        {/* Right */}
        <div className="flex items-center gap-2">
          {/* Language dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
            >
              {lang.code} <span className="opacity-60">▼</span>
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-2 w-48 overflow-hidden rounded-2xl border border-white/10 bg-[#0c1220] shadow-xl">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l);
                      setLangOpen(false);
                    }}
                    className="flex w-full items-center justify-between px-4 py-3 text-sm hover:bg-white/10"
                  >
                    <span>{l.label}</span>
                    <span className="opacity-60">{l.code}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Links */}
          <Link
            href="/dersler"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
          >
            Dersler
          </Link>

          {isAdmin && (
            <Link
              href="/admin"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
            >
              Admin
            </Link>
          )}

          {isAuth && (
            <Link
              href="/profil"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
            >
              Profil
            </Link>
          )}

          {/* Giriş / Çıkış */}
          {!isAuth ? (
            // 🔴 ÖNEMLİ KISIM: ARTIK GOOGLE DEĞİL /giris
            <Link
              href="/giris"
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90"
            >
              Giriş
            </Link>
          ) : (
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
            >
              Çıkış
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
