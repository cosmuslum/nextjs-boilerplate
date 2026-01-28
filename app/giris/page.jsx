"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    setErr("");

    // Basit demo login:
    // admin yapmak için: admin@nederlearn.nl / 123456
    // normal kullanıcı: user@nederlearn.nl / 123456
    const ok = pass === "123456" && (email === "admin@nederlearn.nl" || email === "user@nederlearn.nl");
    if (!ok) {
      setErr("E-posta veya şifre hatalı. (Demo: admin@nederlearn.nl / 123456)");
      return;
    }

    const role = email === "admin@nederlearn.nl" ? "admin" : "user";

    localStorage.setItem("nl_logged_in", "1");
    localStorage.setItem("nl_role", role);
    localStorage.setItem("nl_email", email);

    window.location.href = "/";
  }

  return (
    <div className="min-h-screen">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[#05060a]" />
        <div className="absolute -left-32 top-[-120px] h-[480px] w-[480px] rounded-full bg-blue-600/25 blur-[90px]" />
        <div className="absolute right-[-160px] top-[40px] h-[520px] w-[520px] rounded-full bg-violet-600/25 blur-[100px]" />
        <div className="absolute left-[30%] top-[55%] h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      </div>

      <div className="mx-auto max-w-md px-4 pt-24">
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-8">
          <div className="text-sm text-white/60">NederLearn</div>
          <h1 className="mt-2 text-2xl font-semibold text-white">Giriş</h1>
          <p className="mt-1 text-sm text-white/60">
            Demo hesaplar: <span className="text-white/80">admin@nederlearn.nl</span> / 123456 veya{" "}
            <span className="text-white/80">user@nederlearn.nl</span> / 123456
          </p>

          <form className="mt-6 space-y-4" onSubmit={onSubmit}>
            <div>
              <label className="text-xs text-white/60">E-posta</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@nederlearn.nl"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
              />
            </div>

            <div>
              <label className="text-xs text-white/60">Şifre</label>
              <input
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="123456"
                type="password"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
              />
            </div>

            {err && (
              <div className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                {err}
              </div>
            )}

            <button
              type="submit"
              className="w-full rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
            >
              Giriş Yap
            </button>

            <a
              href="/"
              className="block text-center text-sm text-white/60 hover:text-white/75"
            >
              Ana sayfaya dön
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}
