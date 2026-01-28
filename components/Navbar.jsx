"use client";

import { useMemo, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const langs = [
  { code: "TR", label: "Türkçe" },
  { code: "EN", label: "English" },
  { code: "AR", label: "العربية" },
  { code: "NL", label: "Nederlands" },
  { code: "ES", label: "Español" }
];

function Pill({ children, onClick, active }) {
  return (
    <button
      onClick={onClick}
      className={[
        "rounded-full px-4 py-2 text-sm transition",
        "border border-white/10 bg-white/5 hover:bg-white/10",
        active ? "bg-white/15" : ""
      ].join(" ")}
      type="button"
    >
      {children}
    </button>
  );
}

export default function Navbar() {
  const { data: session, status } = useSession();
  const [openLang, setOpenLang] = useState(false);
  const [lang, setLang] = useState("TR");

  const isAuthed = status === "authenticated";
  const role = session?.user?.role || "user";
  const isAdmin = isAuthed && role === "admin";

  const currentLang = useMemo(() => langs.find((l) => l.code === lang) || langs[0], [lang]);

  return (
    <div className="sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-6">
        <div className="rounded-full border border-white/10 bg-black/30 backdrop-blur-xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">🇳🇱</span>
            <span className="font-semibold">NederLearn</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Language */}
            <div className="relative">
              <Pill onClick={() => setOpenLang((v) => !v)} active={openLang}>
                {currentLang.code} <span className="opacity-60">▾</span>
              </Pill>

              {openLang && (
                <div className="absolute right-0 mt-2 w-52 rounded-2xl border border-white/10 bg-black/70 backdrop-blur-xl overflow-hidden">
                  {langs.map((l) => (
                    <button
                      key={l.code}
                      className="w-full text-left px-4 py-3 text-sm hover:bg-white/10 flex items-center justify-between"
                      onClick={() => {
                        setLang(l.code);
                        setOpenLang(false);
                      }}
                      type="button"
                    >
                      <span>{l.label}</span>
                      <span className="opacity-60">{l.code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Nav */}
            {isAdmin && <Pill onClick={() => (window.location.href = "/admin")}>Admin</Pill>}
            {isAuthed && <Pill onClick={() => (window.location.href = "/profil")}>Profil</Pill>}
            <Pill onClick={() => (window.location.href = "/dersler")}>Dersler</Pill>

            {!isAuthed ? (
              <Pill onClick={() => signIn("google")}>Giriş</Pill>
            ) : (
              <Pill onClick={() => signOut({ callbackUrl: "/" })}>Çıkış</Pill>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
