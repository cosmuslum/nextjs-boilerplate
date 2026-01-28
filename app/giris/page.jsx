"use client";

import { useState } from "react";

export default function LoginPage() {
  const [tab, setTab] = useState("login"); // login | signup
  const [resetMode, setResetMode] = useState(false);

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");

  const [showPass, setShowPass] = useState(false);
  const [showPass2, setShowPass2] = useState(false);

  const [err, setErr] = useState("");
  const [ok, setOk] = useState("");

  function clearMsgs() {
    setErr("");
    setOk("");
  }

  function handleLogin(e) {
    e.preventDefault();
    clearMsgs();

    // Demo hesaplar:
    // admin@nederlearn.nl / 123456
    // user@nederlearn.nl  / 123456
    const okLogin =
      pass === "123456" &&
      (email === "admin@nederlearn.nl" || email === "user@nederlearn.nl");

    if (!okLogin) {
      setErr("E-posta veya şifre hatalı. (Demo: admin@nederlearn.nl / 123456)");
      return;
    }

    const role = email === "admin@nederlearn.nl" ? "admin" : "user";
    localStorage.setItem("nl_logged_in", "1");
    localStorage.setItem("nl_role", role);
    localStorage.setItem("nl_email", email);

    window.location.href = "/";
  }

  function handleSignup(e) {
    e.preventDefault();
    clearMsgs();

    if (!email.includes("@")) {
      setErr("Lütfen geçerli bir e-posta gir.");
      return;
    }
    if (pass.length < 6) {
      setErr("Şifre en az 6 karakter olmalı.");
      return;
    }
    if (pass !== pass2) {
      setErr("Şifreler aynı değil.");
      return;
    }

    // Demo: gerçek kayıt yok
    setOk("Kayıt oluşturuldu (demo). Şimdi giriş yapabilirsin.");
    setTimeout(() => {
      setTab("login");
      setPass("");
      setPass2("");
    }, 700);
  }

  function handleReset(e) {
    e.preventDefault();
    clearMsgs();

    if (!email.includes("@")) {
      setErr("Lütfen geçerli bir e-posta gir.");
      return;
    }

    setOk("Şifre sıfırlama bağlantısı gönderildi (demo).");
  }

  return (
    <div className="min-h-screen">
      <BackgroundFX />

      <div className="mx-auto max-w-md px-4 py-10 md:py-14">
        <div className="rounded-[26px] border border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_30px_90px_rgba(0,0,0,0.55)] backdrop-blur-xl overflow-hidden">
          {/* top bar */}
          <div className="flex items-center justify-between px-5 py-4">
            <a
              href="/"
              className="text-sm text-white/70 hover:text-white/85 transition inline-flex items-center gap-2"
            >
              <span className="opacity-80">⬅</span>
              Ana Sayfaya Dön
            </a>

            <div className="text-sm text-white/50">Giriş</div>
          </div>

          <div className="px-6 pb-6 md:px-8 md:pb-8">
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-white">Giriş Yap</h1>
              <p className="mt-2 text-sm text-white/60">
                Hollandaca öğrenmeye başlamak için hesabına giriş yap.
              </p>
            </div>

            {/* tabs */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-1">
              <div className="grid grid-cols-2 gap-1">
                <button
                  type="button"
                  onClick={() => {
                    clearMsgs();
                    setResetMode(false);
                    setTab("login");
                  }}
                  className={
                    "rounded-xl px-4 py-2 text-sm font-semibold transition " +
                    (tab === "login" && !resetMode
                      ? "bg-white/10 text-white"
                      : "text-white/65 hover:text-white/85")
                  }
                >
                  Giriş
                </button>
                <button
                  type="button"
                  onClick={() => {
                    clearMsgs();
                    setResetMode(false);
                    setTab("signup");
                  }}
                  className={
                    "rounded-xl px-4 py-2 text-sm font-semibold transition " +
                    (tab === "signup" && !resetMode
                      ? "bg-white/10 text-white"
                      : "text-white/65 hover:text-white/85")
                  }
                >
                  Kayıt
                </button>
              </div>
            </div>

            {/* messages */}
            {err && (
              <div className="mt-4 rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                {err}
              </div>
            )}
            {ok && (
              <div className="mt-4 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100">
                {ok}
              </div>
            )}

            {/* form */}
            {!resetMode ? (
              <form
                className="mt-6 space-y-4"
                onSubmit={tab === "login" ? handleLogin : handleSignup}
              >
                <Field label="Email">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ornek@mail.com"
                    className={inputCls}
                    autoComplete="email"
                  />
                </Field>

                <Field label="Şifre">
                  <div className="relative">
                    <input
                      value={pass}
                      onChange={(e) => setPass(e.target.value)}
                      placeholder={tab === "login" ? "123456" : "En az 6 karakter"}
                      type={showPass ? "text" : "password"}
                      className={inputCls + " pr-12"}
                      autoComplete={tab === "login" ? "current-password" : "new-password"}
                    />
                    <IconBtn
                      onClick={() => setShowPass((v) => !v)}
                      label={showPass ? "Şifreyi gizle" : "Şifreyi göster"}
                    >
                      {showPass ? <EyeOff /> : <Eye />}
                    </IconBtn>
                  </div>
                </Field>

                {tab === "signup" && (
                  <Field label="Şifre (tekrar)">
                    <div className="relative">
                      <input
                        value={pass2}
                        onChange={(e) => setPass2(e.target.value)}
                        placeholder="Şifreyi tekrar yaz"
                        type={showPass2 ? "text" : "password"}
                        className={inputCls + " pr-12"}
                        autoComplete="new-password"
                      />
                      <IconBtn
                        onClick={() => setShowPass2((v) => !v)}
                        label={showPass2 ? "Şifreyi gizle" : "Şifreyi göster"}
                      >
                        {showPass2 ? <EyeOff /> : <Eye />}
                      </IconBtn>
                    </div>
                  </Field>
                )}

                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => {
                      clearMsgs();
                      setResetMode(true);
                    }}
                    className="text-sm text-white/60 hover:text-white/80 transition underline underline-offset-4"
                  >
                    Şifremi unuttum?
                  </button>

                  <div className="text-xs text-white/40">
                    {/* küçük ipucu */}
                    Demo: admin@nederlearn.nl / 123456
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-1 w-full rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-black shadow hover:bg-emerald-400 transition"
                >
                  {tab === "login" ? "Giriş Yap ✅" : "Kayıt Ol ✅"}
                </button>

                {/* divider */}
                <Divider />

                {/* Google button (demo) */}
                <button
                  type="button"
                  onClick={() =>
                    setErr("Google girişi demo. İstersen gerçek bağlarız.")
                  }
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 hover:bg-white/10 transition flex items-center justify-center gap-2"
                >
                  <GoogleIcon />
                  Google ile Giriş Yap
                </button>

                <p className="pt-4 text-center text-xs text-white/40">
                  Mail onayı zorunlu değildir. Şifre sıfırlama maili Spam klasörüne
                  düşebilir.
                </p>
              </form>
            ) : (
              <form className="mt-6 space-y-4" onSubmit={handleReset}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-semibold text-white">
                    Şifre Sıfırlama
                  </div>
                  <div className="mt-1 text-sm text-white/60">
                    E-postanı yaz, sıfırlama bağlantısı gönderelim.
                  </div>
                </div>

                <Field label="Email">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ornek@mail.com"
                    className={inputCls}
                    autoComplete="email"
                  />
                </Field>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-black shadow hover:bg-emerald-400 transition"
                >
                  Sıfırlama Linki Gönder ✅
                </button>

                <button
                  type="button"
                  onClick={() => {
                    clearMsgs();
                    setResetMode(false);
                  }}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/80 hover:bg-white/10 transition"
                >
                  Giriş ekranına dön
                </button>

                <p className="pt-3 text-center text-xs text-white/40">
                  Demo: sadece mesaj gösterir. Gerçek e-posta sistemi istersen bağlarız.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- helpers / ui ---------- */

const inputCls =
  "mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25";

function Field({ label, children }) {
  return (
    <div>
      <label className="text-xs text-white/60">{label}</label>
      {children}
    </div>
  );
}

function Divider() {
  return (
    <div className="my-4 flex items-center gap-3">
      <div className="h-px flex-1 bg-white/10" />
      <div className="text-xs text-white/40">veya</div>
      <div className="h-px flex-1 bg-white/10" />
    </div>
  );
}

function IconBtn({ onClick, label, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="absolute right-2 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 transition"
    >
      {children}
    </button>
  );
}

function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#05060a]" />
      <div className="absolute -left-32 top-[-120px] h-[520px] w-[520px] rounded-full bg-blue-600/25 blur-[110px]" />
      <div className="absolute right-[-180px] top-[40px] h-[560px] w-[560px] rounded-full bg-violet-600/25 blur-[120px]" />
      <div className="absolute left-[30%] top-[55%] h-[560px] w-[560px] rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/45" />
    </div>
  );
}

/* ---------- icons (no library) ---------- */

function Eye() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function EyeOff() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 3l18 18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M10.6 10.6a3 3 0 0 0 4.24 4.24"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M6.3 6.8C4 8.6 2.5 12 2.5 12s3.5 7 9.5 7c1.7 0 3.2-.5 4.5-1.2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M9.2 5.4A9.6 9.6 0 0 1 12 5c6 0 9.5 7 9.5 7s-1 2-2.8 3.9"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48">
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.7 15.4 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4c-7.7 0-14.4 4.3-17.7 10.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.2 0 10-2 13.6-5.1l-6.3-5.3C29.3 35.7 26.8 36 24 36c-5.3 0-9.7-3.3-11.3-8H6.2v5.2C9.5 39.7 16.2 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-1 2.7-2.9 4.9-5.3 6.3l.1.1 6.3 5.3C39.7 36.7 44 31.7 44 24c0-1.3-.1-2.7-.4-3.5z"
      />
    </svg>
  );
}
