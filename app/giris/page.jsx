"use client";

import { useMemo, useState } from "react";

export default function LoginPage() {
  const [mode, setMode] = useState("login"); // login | signup | reset
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const [err, setErr] = useState("");
  const [ok, setOk] = useState("");

  const title = useMemo(() => {
    if (mode === "signup") return "Üye Ol";
    if (mode === "reset") return "Şifre Sıfırla";
    return "Giriş";
  }, [mode]);

  const subtitle = useMemo(() => {
    if (mode === "signup")
      return "Hesabını oluştur, derslere hemen başla.";
    if (mode === "reset")
      return "E-postanı yaz, şifre sıfırlama bağlantısı gönderelim.";
    return "Hesabınla giriş yap.";
  }, [mode]);

  function resetMessages() {
    setErr("");
    setOk("");
  }

  function goMode(next) {
    resetMessages();
    setMode(next);
    setPass("");
    setPass2("");
    setShowPass(false);
    setShowPass2(false);
  }

  // DEMO login logic
  function doLogin(e) {
    e.preventDefault();
    resetMessages();

    // Demo hesaplar:
    // admin@nederlearn.nl / 123456
    // user@nederlearn.nl / 123456
    const okLogin =
      pass === "123456" &&
      (email === "admin@nederlearn.nl" || email === "user@nederlearn.nl");

    if (!okLogin) {
      setErr(
        "E-posta veya şifre hatalı. (Demo: admin@nederlearn.nl / 123456)"
      );
      return;
    }

    const role = email === "admin@nederlearn.nl" ? "admin" : "user";
    localStorage.setItem("nl_logged_in", "1");
    localStorage.setItem("nl_role", role);
    localStorage.setItem("nl_email", email);

    window.location.href = "/";
  }

  // DEMO signup
  function doSignup(e) {
    e.preventDefault();
    resetMessages();

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

    // Demo: gerçek kayıt yok — sadece başarı mesajı gösteriyoruz
    setOk("Üyelik oluşturuldu (demo). Şimdi giriş yapabilirsin.");
    // otomatik login yerine login ekranına alalım
    setTimeout(() => goMode("login"), 600);
  }

  // DEMO reset
  function doReset(e) {
    e.preventDefault();
    resetMessages();

    if (!email.includes("@")) {
      setErr("Lütfen geçerli bir e-posta gir.");
      return;
    }

    // Demo: sadece mesaj
    setOk("Şifre sıfırlama bağlantısı gönderildi (demo).");
  }

  return (
    <div className="min-h-screen">
      <BackgroundFX />

      <div className="mx-auto max-w-md px-4 pt-20 md:pt-24">
        {/* top brand */}
        <div className="mb-6 flex items-center justify-center gap-2 text-white/85">
          <span className="text-lg">🇳🇱</span>
          <span className="font-semibold">NederLearn</span>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-8">
          {/* header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold text-white">{title}</h1>
              <p className="mt-1 text-sm text-white/60">{subtitle}</p>
            </div>

            {/* mode chips */}
            <div className="flex gap-2">
              <Chip active={mode === "login"} onClick={() => goMode("login")}>
                Giriş
              </Chip>
              <Chip active={mode === "signup"} onClick={() => goMode("signup")}>
                Üye Ol
              </Chip>
            </div>
          </div>

          {/* messages */}
          {err && (
            <div className="mt-5 rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              {err}
            </div>
          )}
          {ok && (
            <div className="mt-5 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100">
              {ok}
            </div>
          )}

          {/* forms */}
          {mode === "login" && (
            <form className="mt-6 space-y-4" onSubmit={doLogin}>
              <Field label="E-posta">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="user@nederlearn.nl"
                  className={inputCls}
                  autoComplete="email"
                />
              </Field>

              <Field label="Şifre">
                <div className="relative">
                  <input
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    placeholder="123456"
                    type={showPass ? "text" : "password"}
                    className={inputCls + " pr-12"}
                    autoComplete="current-password"
                  />
                  <IconBtn
                    onClick={() => setShowPass((v) => !v)}
                    label={showPass ? "Şifreyi gizle" : "Şifreyi göster"}
                  >
                    {showPass ? <EyeOff /> : <Eye />}
                  </IconBtn>
                </div>
              </Field>

              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => goMode("reset")}
                  className="text-sm text-white/60 hover:text-white/80 transition"
                >
                  Şifremi unuttum
                </button>
                <a
                  href="/"
                  className="text-sm text-white/60 hover:text-white/80 transition"
                >
                  Ana sayfa
                </a>
              </div>

              <button type="submit" className={primaryBtn}>
                Giriş Yap
              </button>

              <div className="pt-1 text-xs text-white/45">
                Demo: <span className="text-white/65">admin@nederlearn.nl</span>{" "}
                / 123456 veya{" "}
                <span className="text-white/65">user@nederlearn.nl</span> / 123456
              </div>
            </form>
          )}

          {mode === "signup" && (
            <form className="mt-6 space-y-4" onSubmit={doSignup}>
              <Field label="E-posta">
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
                    placeholder="En az 6 karakter"
                    type={showPass ? "text" : "password"}
                    className={inputCls + " pr-12"}
                    autoComplete="new-password"
                  />
                  <IconBtn
                    onClick={() => setShowPass((v) => !v)}
                    label={showPass ? "Şifreyi gizle" : "Şifreyi göster"}
                  >
                    {showPass ? <EyeOff /> : <Eye />}
                  </IconBtn>
                </div>
              </Field>

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

              <button type="submit" className={primaryBtn}>
                Hesap Oluştur
              </button>

              <div className="text-sm text-white/60">
                Zaten hesabın var mı?{" "}
                <button
                  type="button"
                  onClick={() => goMode("login")}
                  className="text-white/80 hover:text-white transition underline underline-offset-4"
                >
                  Giriş yap
                </button>
              </div>
            </form>
          )}

          {mode === "reset" && (
            <form className="mt-6 space-y-4" onSubmit={doReset}>
              <Field label="E-posta">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ornek@mail.com"
                  className={inputCls}
                  autoComplete="email"
                />
              </Field>

              <button type="submit" className={primaryBtn}>
                Sıfırlama Bağlantısı Gönder
              </button>

              <div className="text-sm text-white/60">
                <button
                  type="button"
                  onClick={() => goMode("login")}
                  className="text-white/80 hover:text-white transition underline underline-offset-4"
                >
                  Giriş ekranına dön
                </button>
              </div>
            </form>
          )}

          {/* bottom help */}
          <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4">
            <div className="text-xs text-white/45">
              Güvenli giriş • Şifreler maskelenir
            </div>
            <div className="flex items-center gap-2">
              <Dot />
              <span className="text-xs text-white/45">NederLearn v1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- UI bits ---------- */

const inputCls =
  "mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25";

const primaryBtn =
  "w-full rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90 transition";

function Field({ label, children }) {
  return (
    <div>
      <label className="text-xs text-white/60">{label}</label>
      {children}
    </div>
  );
}

function Chip({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "rounded-full px-3 py-1 text-xs font-semibold transition " +
        (active
          ? "bg-white text-black"
          : "border border-white/10 bg-white/5 text-white/75 hover:bg-white/10")
      }
    >
      {children}
    </button>
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
      <div className="absolute -left-32 top-[-120px] h-[480px] w-[480px] rounded-full bg-blue-600/25 blur-[90px]" />
      <div className="absolute right-[-160px] top-[40px] h-[520px] w-[520px] rounded-full bg-violet-600/25 blur-[100px]" />
      <div className="absolute left-[30%] top-[55%] h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
    </div>
  );
}

function Dot() {
  return <span className="h-2 w-2 rounded-full bg-emerald-400/80" />;
}

/* ---------- tiny icons (no library) ---------- */

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
