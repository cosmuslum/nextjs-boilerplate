"use client";

import React, { useEffect, useMemo, useState } from "react";

type NavItem = { label: string; href: string };

const NAV: NavItem[] = [
  { label: "Seviyeler", href: "#seviyeler" },
  { label: "Nasıl çalışır?", href: "#nasil" },
  { label: "SSS", href: "#sss" },
];

export default function HeaderTR() {
  const [open, setOpen] = useState(false);

  // Sayfa büyüyünce menüyü kapat (mobil->desktop geçişinde)
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 900) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <header className="nl-header">
        <div className="nl-header__inner">
          {/* Sol: Logo */}
          <a className="nl-brand" href="/tr">
            <span className="nl-brand__logo">N</span>
            <span className="nl-brand__name">NederLearn</span>
          </a>

          {/* Orta: Desktop Menü */}
          <nav className="nl-nav">
            {NAV.map((x) => (
              <a key={x.href} className="nl-nav__link" href={x.href}>
                {x.label}
              </a>
            ))}
          </nav>

          {/* Sağ: Dil + Giriş */}
          <div className="nl-actions">
            <button className="nl-lang" type="button" aria-label="Dil">
              🌐 <span>TR</span> <span className="nl-caret">▾</span>
            </button>

            <a className="nl-login" href="/tr/login">
              Giriş
            </a>

            {/* Mobil hamburger (SADECE mobil) */}
            <button
              className="nl-burger"
              type="button"
              aria-label="Menü"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* Mobil menü panel */}
        <div className={`nl-mobile ${open ? "is-open" : ""}`}>
          <div className="nl-mobile__panel">
            {NAV.map((x) => (
              <a
                key={x.href}
                className="nl-mobile__link"
                href={x.href}
                onClick={() => setOpen(false)}
              >
                {x.label}
              </a>
            ))}
            <a className="nl-mobile__link" href="/tr/a0" onClick={() => setOpen(false)}>
              A0
            </a>
            <a className="nl-mobile__cta" href="/tr/login" onClick={() => setOpen(false)}>
              Giriş
            </a>
          </div>
        </div>
      </header>

      {/* Header CSS (global) */}
      <style jsx global>{`
        .nl-header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(7, 10, 18, 0.78);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .nl-header__inner {
          max-width: 1120px;
          margin: 0 auto;
          padding: 14px 16px;
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 14px;
          align-items: center;
        }

        .nl-brand {
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .nl-brand__logo {
          width: 36px;
          height: 36px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          font-weight: 900;
          background: rgba(120, 140, 255, 0.95);
          color: #0b1020;
        }
        .nl-brand__name {
          font-weight: 900;
          letter-spacing: 0.2px;
        }

        .nl-nav {
          display: flex;
          justify-content: center;
          gap: 18px;
        }
        .nl-nav__link {
          font-weight: 800;
          opacity: 0.85;
          padding: 8px 10px;
          border-radius: 12px;
          border: 1px solid transparent;
        }
        .nl-nav__link:hover {
          opacity: 1;
          border-color: rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.04);
        }

        .nl-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .nl-lang {
          display: inline-flex;
          gap: 8px;
          align-items: center;
          padding: 10px 12px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.04);
          color: rgba(255, 255, 255, 0.92);
          font-weight: 900;
        }
        .nl-caret {
          opacity: 0.7;
        }
        .nl-login {
          padding: 10px 14px;
          border-radius: 14px;
          background: rgba(120, 140, 255, 0.95);
          color: #0b1020;
          font-weight: 900;
          border: 1px solid rgba(120, 140, 255, 0.4);
        }

        /* Burger sadece mobilde görünsün */
        .nl-burger {
          display: none;
          width: 44px;
          height: 44px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.04);
          padding: 10px;
          gap: 6px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .nl-burger span {
          display: block;
          width: 18px;
          height: 2px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 2px;
        }

        .nl-mobile {
          display: none;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        .nl-mobile__panel {
          max-width: 1120px;
          margin: 0 auto;
          padding: 12px 16px 16px;
          display: grid;
          gap: 10px;
        }
        .nl-mobile__link {
          padding: 12px 12px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.04);
          font-weight: 900;
          color: rgba(255, 255, 255, 0.92);
        }
        .nl-mobile__cta {
          padding: 12px 12px;
          border-radius: 14px;
          background: rgba(120, 140, 255, 0.95);
          color: #0b1020;
          font-weight: 900;
          border: 1px solid rgba(120, 140, 255, 0.4);
          text-align: center;
        }

        @media (max-width: 900px) {
          .nl-header__inner {
            grid-template-columns: auto 1fr auto;
          }
          .nl-nav {
            display: none; /* mobilde menü sakla */
          }
          .nl-burger {
            display: inline-flex; /* sadece mobilde göster */
          }
          .nl-mobile.is-open {
            display: block;
          }
        }
      `}</style>
    </>
  );
}
