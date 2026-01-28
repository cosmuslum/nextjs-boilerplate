"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useMemo, useState } from "react";

const LANGS = [
  { code: "tr", label: "Türkçe", flag: "🇹🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
  { code: "nl", label: "Nederlands", flag: "🇳🇱" },
  { code: "es", label: "Español", flag: "🇪🇸" },
];

export default function Navbar() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState(LANGS[0]);

  const isAuthed = !!session?.user;
  const role = session?.user?.role || "user";
  const isAdmin = role === "admin";

  const langLabel = useMemo(() => `${lang.flag} ${lang.label}`, [lang]);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        background:
          "linear-gradient(90deg, rgba(8,10,16,0.7), rgba(10,12,18,0.7))",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "14px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        {/* LEFT */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
            color: "white",
            fontWeight: 700,
            letterSpacing: 0.2,
          }}
        >
          <span style={{ fontSize: 18 }}>🇳🇱</span>
          <span>NederLearn</span>
        </Link>

        {/* DESKTOP */}
        <nav
          style={{
            display: "none",
            alignItems: "center",
            gap: 10,
          }}
          className="nl-nav-desktop"
        >
          {/* Language dropdown */}
          <div style={{ position: "relative" }}>
            <button
              onClick={() => setLangOpen((v) => !v)}
              style={pillBtn()}
              aria-haspopup="menu"
              aria-expanded={langOpen}
              type="button"
            >
              <span style={{ opacity: 0.95 }}>{lang.code.toUpperCase()}</span>
              <span style={{ opacity: 0.65, marginLeft: 6 }}>▾</span>
            </button>

            {langOpen && (
              <div style={dropdown()}>
                {LANGS.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l);
                      setLangOpen(false);
                    }}
                    style={dropItem(l.code === lang.code)}
                    type="button"
                  >
                    <span style={{ width: 26, textAlign: "center" }}>
                      {l.flag}
                    </span>
                    <span>{l.label}</span>
                    <span style={{ marginLeft: "auto", opacity: 0.7 }}>
                      {l.code.toUpperCase()}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link href="/dersler" style={pillLink()}>
            Dersler
          </Link>

          {/* Only when logged in */}
          {isAuthed && (
            <>
              {isAdmin && (
                <Link href="/admin" style={pillLink()}>
                  Admin
                </Link>
              )}
              <Link href="/profil" style={pillLink()}>
                Profil
              </Link>
            </>
          )}

          {/* Auth button */}
          {!isAuthed ? (
            <Link href="/giris" style={{ ...pillLink(), fontWeight: 800 }}>
              Giriş
            </Link>
          ) : (
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              style={{ ...pillBtn(), fontWeight: 800 }}
              type="button"
              disabled={loading}
            >
              Çıkış
            </button>
          )}
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          style={{
            ...pillBtn(),
            width: 44,
            height: 40,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          type="button"
          aria-label="Menü"
          className="nl-nav-mobilebtn"
        >
          ☰
        </button>
      </div>

      {/* MOBILE PANEL */}
      {mobileOpen && (
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 16px 14px 16px",
          }}
        >
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 16,
              background: "rgba(18,20,28,0.65)",
              backdropFilter: "blur(16px)",
              overflow: "hidden",
            }}
          >
            <div style={{ padding: 12, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ fontSize: 12, opacity: 0.7, marginBottom: 8 }}>
                Dil
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {LANGS.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l)}
                    style={{
                      ...pillBtn(),
                      opacity: l.code === lang.code ? 1 : 0.85,
                      borderColor:
                        l.code === lang.code
                          ? "rgba(255,255,255,0.22)"
                          : "rgba(255,255,255,0.10)",
                    }}
                    type="button"
                  >
                    {l.flag} {l.code.toUpperCase()}
                  </button>
                ))}
              </div>
              <div style={{ marginTop: 8, fontSize: 12, opacity: 0.7 }}>
                Seçili: {langLabel}
              </div>
            </div>

            <div style={{ padding: 12, display: "grid", gap: 10 }}>
              <Link href="/dersler" style={mobileLink()} onClick={() => setMobileOpen(false)}>
                Dersler
              </Link>

              {isAuthed && isAdmin && (
                <Link href="/admin" style={mobileLink()} onClick={() => setMobileOpen(false)}>
                  Admin
                </Link>
              )}

              {isAuthed && (
                <Link href="/profil" style={mobileLink()} onClick={() => setMobileOpen(false)}>
                  Profil
                </Link>
              )}

              {!isAuthed ? (
                <Link href="/giris" style={mobileCta()} onClick={() => setMobileOpen(false)}>
                  Giriş
                </Link>
              ) : (
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  style={mobileCtaBtn()}
                  type="button"
                  disabled={loading}
                >
                  Çıkış
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Simple responsive CSS without touching globals */}
      <style jsx global>{`
        @media (min-width: 860px) {
          .nl-nav-desktop {
            display: flex !important;
          }
          .nl-nav-mobilebtn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}

function pillBtn() {
  return {
    borderRadius: 999,
    padding: "10px 14px",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.06)",
    color: "white",
    cursor: "pointer",
    fontSize: 14,
    lineHeight: 1,
    display: "inline-flex",
    gap: 8,
    alignItems: "center",
  };
}

function pillLink() {
  return {
    ...pillBtn(),
    textDecoration: "none",
  };
}

function dropdown() {
  return {
    position: "absolute",
    right: 0,
    top: "calc(100% + 10px)",
    width: 260,
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(18,20,28,0.92)",
    backdropFilter: "blur(14px)",
    overflow: "hidden",
    boxShadow: "0 16px 44px rgba(0,0,0,0.45)",
    padding: 6,
  };
}

function dropItem(active) {
  return {
    width: "100%",
    borderRadius: 10,
    padding: "10px 10px",
    border: active ? "1px solid rgba(255,255,255,0.18)" : "1px solid transparent",
    background: active ? "rgba(255,255,255,0.08)" : "transparent",
    color: "white",
    cursor: "pointer",
    display: "flex",
    gap: 10,
    alignItems: "center",
    fontSize: 14,
    textAlign: "left",
  };
}

function mobileLink() {
  return {
    textDecoration: "none",
    color: "white",
    borderRadius: 12,
    padding: "12px 12px",
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.04)",
  };
}

function mobileCta() {
  return {
    ...mobileLink(),
    fontWeight: 800,
    textAlign: "center",
    background: "rgba(255,255,255,0.10)",
  };
}

function mobileCtaBtn() {
  return {
    width: "100%",
    borderRadius: 12,
    padding: "12px 12px",
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.10)",
    color: "white",
    cursor: "pointer",
    fontWeight: 800,
  };
}
