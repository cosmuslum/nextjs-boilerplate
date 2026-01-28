"use client";

import { useEffect, useRef, useState } from "react";

const LANGS = [
  { code: "TR", label: "Türkçe" },
  { code: "EN", label: "English" },
  { code: "AR", label: "العربية" },
  { code: "NL", label: "Nederlands" },
  { code: "ES", label: "Español" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("TR");

  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState("user");

  const btnRef = useRef(null);
  const menuRef = useRef(null);
  const [pos, setPos] = useState({ top: 0, right: 0 });

  useEffect(() => {
    const li =
      typeof window !== "undefined" && localStorage.getItem("nl_logged_in");
    const r =
      typeof window !== "undefined" && localStorage.getItem("nl_role");

    setLoggedIn(li === "1");
    setRole(r || "user");
  }, []);

  function updatePosition() {
    const el = btnRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos({
      top: Math.round(r.bottom + 8),
      right: Math.round(window.innerWidth - r.right)
    });
  }

  useEffect(() => {
    function onResize() {
      if (open) updatePosition();
    }
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onResize, true);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onResize, true);
    };
  }, [open]);

  useEffect(() => {
    function onDocClick(e) {
      if (menuRef.current && menuRef.current.contains(e.target)) return;
      if (btnRef.current && btnRef.current.contains(e.target)) return;
      setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <header className="relative">
      <div className="mx-auto max-w-6xl px-4 pt-5">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl">
          <div className="flex items-center gap-2 font-semibold text-white">
            <span className="text-white/80">🇳🇱</span>
            NederLearn
          </div>

          <nav className="hidden items-center gap-2 md:flex">
            {/* Dil dropdown */}
            <button
              ref={btnRef}
              type="button"
              onClick={() => {
                if (!open) {
                  updatePosition();
                  setOpen(true);
                } else {
                  setOpen(false);
                }
              }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 hover:bg-white/10 transition"
            >
              <span>{lang}</span>
              <span className="text-white/50">▾</span>
            </button>

            {/* Yetkiler */}
            {loggedIn && role === "admin" && <Pill href="/admin">Admin</Pill>}
            {loggedIn && <Pill href="/profil">Profil</Pill>}

            <Pill href="/dersler">Dersler</Pill>

            {!loggedIn ? (
              <Pill href="/giris">Giriş</Pill>
            ) : (
              <Pill
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  localStorage.removeItem("nl_logged_in");
                  localStorage.removeItem("nl_role");
                  localStorage.removeItem("nl_email");
                  window.location.href = "/";
                }}
              >
                Çıkış
              </Pill>
            )}
          </nav>

          <div className="md:hidden text-white/70">☰</div>
        </div>
      </div>

      {open && (
        <div
          ref={menuRef}
          className="fixed z-[9999] w-48 overflow-hidden rounded-2xl border border-white/10 bg-[#0b0d14]/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
          style={{ top: pos.top, right: pos.right }}
        >
          {LANGS.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => {
                setLang(l.code);
                setOpen(false);
              }}
              className="flex w-full items-center justify-between px-4 py-3 text-left text-sm text-white/85 hover:bg-white/10 transition"
            >
              <span>{l.label}</span>
              <span className="text-white/50">{l.code}</span>
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

function Pill({ children, href = "/", onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 hover:bg-white/10 transition"
    >
      {children}
    </a>
  );
}
