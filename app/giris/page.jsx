"use client";

import { useMemo, useState } from "react";
import { signIn } from "next-auth/react";

export default function GirisPage() {
  const [tab, setTab] = useState("giris"); // giris | kayit | sifre
  const [showPass, setShowPass] = useState(false);

  const title = useMemo(() => {
    if (tab === "giris") return "Giriş Yap";
    if (tab === "kayit") return "Kayıt Ol";
    return "Şifre Sıfırla";
  }, [tab]);

  const subtitle = useMemo(() => {
    if (tab === "giris") return "Hollandaca öğrenmeye başlamak için hesabına giriş yap.";
    if (tab === "kayit") return "Yeni hesap oluştur ve öğrenmeye hemen başla.";
    return "E-postanı gir, şifre sıfırlama bağlantısı gönderelim.";
  }, [tab]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_30px_100px_rgba(0,0,0,0.5)] overflow-hidden">
        <div className="p-6 md:p-8">
          <div className="flex items-center justify-between">
            <a
              href="/"
              className="text-sm text-white/70 hover:text-white inline-flex items-center gap-2"
            >
              ← Ana Sayfaya Dön
            </a>
            <span className="text-xs text-white/50">NederLearn</span>
          </div>

          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-center">
            {title}
          </h1>
          <p className="mt-2 text-center text-white/60 text-sm">{subtitle}</p>

          {/* Tabs */}
          <div className="mt-6 grid grid-cols-3 gap-2 rounded-2xl border border-white/10 bg-white/5 p-1">
            <TabBtn active={tab === "giris"} onClick={() => setTab("giris")}>
              Giriş
            </TabBtn>
            <TabBtn active={tab === "kayit"} onClick={() => setTab("kayit")}>
              Kayıt
            </TabBtn>
            <TabBtn active={tab === "sifre"} onClick={() => setTab("sifre")}>
              Şifre
            </TabBtn>
          </div>

          <div className="mt-6 space-y-4">
            <Field label="Email" placeholder="ornek@mail.com" type="email" />

            {tab !== "sifre" && (
              <div className="space-y-2">
                <div className="text-sm text-white/70">Şifre</div>
                <div className="relative">
                  <input
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-white/20"
                    placeholder="En az 6 karakter"
                    type={showPass ? "text" : "password"}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/60 hover:text-white"
                  >
                    {showPass ? "Gizle" : "Göster"}
                  </button>
                </div>

                {tab === "giris" && (
                  <button
                    type="button"
                    onClick={() => setTab("sifre")}
                    className="text-xs text-white/60 hover:text-white underline underline-offset-4"
                  >
                    Şifremi unuttum?
                  </button>
                )}
              </div>
            )}

            {/* Primary button (Email/Pass sadece UI) */}
            <button
              type="button"
              className="w-full rounded-2xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-black hover:opacity-90"
              onClick={() => {
                if (tab === "giris") alert("Bu buton sadece UI. Google ile giriş kullan.");
                if (tab === "kayit") alert("Kayıt (email/şifre) için DB gerekir. Google ile giriş kullan.");
                if (tab === "sifre") alert("Şifre sıfırlama (email) için mail servisi gerekir. Google ile giriş kullan.");
              }}
            >
              {tab === "giris" ? "Giriş Yap ✓" : tab === "kayit" ? "Kayıt Ol ✓" : "Sıfırlama Linki Gönder"}
            </button>

            <div className="flex items-center gap-3 py-2">
              <div className="h-px flex-1 bg-white/10" />
              <div className="text-xs text-white/50">veya</div>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Google */}
            <button
              type="button"
              onClick={() => signIn("google", { callbackUrl: "/" })}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold hover:bg-white/10"
            >
              <span className="inline-flex items-center justify-center gap-2">
                <span className="text-base">G</span>
                Google ile Giriş Yap
              </span>
            </button>

            <p className="text-xs text-white/45 text-center leading-relaxed">
              Mail onayı zorunlu değildir. Google ile giriş yaparak kullanım koşullarını kabul etmiş olursun.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TabBtn({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-xl px-3 py-2 text-sm",
        active ? "bg-white text-black font-semibold" : "text-white/70 hover:bg-white/10"
      ].join(" ")}
    >
      {children}
    </button>
  );
}

function Field({ label, placeholder, type = "text" }) {
  return (
    <div className="space-y-2">
      <div className="text-sm text-white/70">{label}</div>
      <input
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-white/20"
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}
