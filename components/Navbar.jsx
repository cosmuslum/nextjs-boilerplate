"use client";

import { useEffect, useRef, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const LANGS = [
  { code: "tr", label: "Türkçe" },
  { code: "en", label: "English" },
  { code: "ar", label: "العربية" },
  { code: "nl", label: "Nederlands" },
  { code: "es", label: "Español" }
];

export default function Navbar() {
  const { data: session, status } = useSession();
  const role = session?.user?.role;
  const isAuthed = status === "authenticated";

  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState(LANGS[0]);

  const menuRef = useRef(null);

  useEffect(() => {
    function onDoc(e) {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target)) setLangOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-4 pt-6">
      <div className="rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
        <div className="flex items-center justify-between px-5 py-3">
          <a href="/" className="flex items-center gap-2">
            <span className="text-lg">🇳🇱</span>
            <span className="font-semibold tracking-wide">NederLearn</span>
          </a>

          <div className="flex items-center gap-2">
            {/* Dil */}
            <div className="relative" ref={menuRef}>
              <button
                type="button"
                onClick={() => setLangOpen((v) => !v)}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
              >
                <span className="opacity-90 uppercase">{lang.code}</span>
                <span className="opacity-60">▼</span>
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-2xl border border-white/10 bg-[#0b1020]/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                  {LANGS.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l);
                        setLangOpen(false);
                      }}
                      className="flex w-full items-center justify-between px-4 py-3 text-sm hover:bg-white/10"
                    >
                      <span>{l.label}</span>
                      <span className="opacity-60 uppercase">{l.code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Linkler */}
            <a className="navpill" href="/dersler">
              Dersler
            </a>

            {/* Giriş / Profil / Admin */}
            {!isAuthed && (
              <a className="navpill" href="/giris">
                Giriş
              </a>
            )}

            {isAuthed && (
              <>
                <a className="navpill" href="/profil">
                  Profil
                </a>

                {role === "admin" && (
                  <a className="navpill" href="/admin">
                    Admin
                  </a>
                )}

                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="navpill"
                  type="button"
                >
                  Çıkış
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .navpill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        }
        .navpill:hover {
          background: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
}
