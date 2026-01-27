"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "@/lib/firebase";

function getPasswordStrength(pw: string) {
  let score = 0;
  if (pw.length >= 6) score++;
  if (pw.length >= 10) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;

  if (!pw) return { label: "", value: 0 };
  if (score <= 2) return { label: "Zayıf", value: 33 };
  if (score <= 4) return { label: "Orta", value: 66 };
  return { label: "Güçlü", value: 100 };
}

function GoogleLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 48 48" className="shrink-0">
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303C33.641 32.657 29.173 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.957 3.043l5.657-5.657C34.908 6.053 29.732 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
      />
      <path
        fill="#FF3D00"
        d="M6.306 14.691l6.571 4.819C14.655 16.108 19.01 12 24 12c3.059 0 5.842 1.154 7.957 3.043l5.657-5.657C34.908 6.053 29.732 4 24 4c-7.682 0-14.41 4.327-17.694 10.691z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.063 0 9.871-1.943 13.409-5.101l-6.188-5.238C29.174 35.091 26.715 36 24 36c-5.152 0-9.606-3.317-11.18-7.946l-6.534 5.033C9.517 39.556 16.227 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303a11.97 11.97 0 0 1-4.082 5.661l6.188 5.238C36.97 40.205 44 35 44 24c0-1.341-.138-2.65-.389-3.917z"
      />
    </svg>
  );
}

export default function LoginPage() {
  const router = useRouter();
  const params = useParams() as { locale: string };
  const locale = params?.locale || "tr";

  const [mode, setMode] = useState<"login" | "register">("login");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ Register için tekrar şifre
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

  const strength = useMemo(() => getPasswordStrength(password), [password]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      // ✅ Kullanıcı zaten login ise derslere gönder
      if (u) router.push(`/${locale}/lessons`);
      setLoading(false);
    });
    return () => unsub();
  }, [router, locale]);

  function resetMessages() {
    setMsg("");
    setErr("");
  }

  async function handleGoogleLogin() {
    setSubmitting(true);
    resetMessages();

    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push(`/${locale}/lessons`); // ✅ derslere git
    } catch (e: any) {
      setErr(e?.message || "Google giriş başarısız.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleEmailAuth() {
    setSubmitting(true);
    resetMessages();

    try {
      if (!email.trim()) throw new Error("Email boş olamaz.");
      if (!password.trim()) throw new Error("Şifre boş olamaz.");
      if (password.length < 6) throw new Error("Şifre en az 6 karakter olmalı.");

      // ✅ Register ise şifre tekrarı kontrolü
      if (mode === "register") {
        if (!confirmPassword.trim()) throw new Error("Şifre tekrarı boş olamaz.");
        if (password !== confirmPassword) throw new Error("Şifreler uyuşmuyor.");
      }

      if (mode === "register") {
        await createUserWithEmailAndPassword(auth, email, password);
        setMsg("✅ Kayıt başarılı! Derslere yönlendiriliyorsun...");
        router.push(`/${locale}/lessons`); // ✅ derslere git
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        setMsg("✅ Giriş başarılı! Derslere yönlendiriliyorsun...");
        router.push(`/${locale}/lessons`); // ✅ derslere git
      }
    } catch (e: any) {
      const code = e?.code || "";
      if (code === "auth/email-already-in-use") setErr("Bu email zaten kayıtlı.");
      else if (code === "auth/invalid-email") setErr("Email formatı geçersiz.");
      else if (code === "auth/wrong-password") setErr("Şifre yanlış.");
      else if (code === "auth/user-not-found") setErr("Bu email ile kullanıcı bulunamadı.");
      else setErr(e?.message || "Bir hata oluştu.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleForgotPassword() {
    resetMessages();

    try {
      if (!email.trim()) {
        setErr("Şifre sıfırlamak için önce email yazmalısın.");
        return;
      }
      setSubmitting(true);
      await sendPasswordResetEmail(auth, email);
      setMsg("✅ Şifre sıfırlama maili gönderildi! (Spam klasörünü kontrol et)");
    } catch (e: any) {
      const code = e?.code || "";
      if (code === "auth/invalid-email") setErr("Email formatı geçersiz.");
      else if (code === "auth/user-not-found") setErr("Bu email ile kullanıcı bulunamadı.");
      else setErr(e?.message || "Şifre sıfırlama maili gönderilemedi.");
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center text-white/70">
        Yükleniyor...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0b0f19] text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full" />

      <section className="relative z-10 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl shadow-2xl">
          
          {/* ✅ Top bar: Home link */}
          <div className="flex items-center justify-between mb-6">
            <Link
              href={`/${locale}`}
              className="text-white/70 hover:text-white transition text-sm underline"
            >
              ⬅ Ana Sayfaya Dön
            </Link>

            <span className="text-white/40 text-xs">
              {mode === "login" ? "Giriş" : "Kayıt"}
            </span>
          </div>

          {/* Head */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold">
              {mode === "login" ? "Giriş Yap" : "Kayıt Ol"}
            </h1>
            <p className="text-white/60 mt-2">
              Hollandaca öğrenmeye başlamak için hesabına giriş yap.
            </p>
          </div>

          {/* Tabs */}
          <div className="grid grid-cols-2 bg-black/30 border border-white/10 rounded-2xl p-1 mb-6">
            <button
              onClick={() => {
                setMode("login");
                setConfirmPassword("");
                resetMessages();
              }}
              className={`py-2 rounded-xl font-semibold transition ${
                mode === "login"
                  ? "bg-white/10 text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Giriş
            </button>
            <button
              onClick={() => {
                setMode("register");
                resetMessages();
              }}
              className={`py-2 rounded-xl font-semibold transition ${
                mode === "register"
                  ? "bg-white/10 text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Kayıt
            </button>
          </div>

          {/* Messages */}
          {msg && (
            <div className="mb-4 p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-200 text-sm">
              {msg}
            </div>
          )}
          {err && (
            <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-200 text-sm">
              {err}
            </div>
          )}

          {/* Form */}
          <div className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-white/60 text-sm mb-2">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="ornek@mail.com"
                className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white outline-none focus:border-white/30 transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-white/60 text-sm mb-2">Şifre</label>
              <div className="relative">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  placeholder="En az 6 karakter"
                  className="w-full px-4 py-3 pr-12 rounded-xl bg-black/30 border border-white/10 text-white outline-none focus:border-white/30 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((p) => !p)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>

              {/* Strength */}
              {password && (
                <div className="mt-3">
                  <div className="flex items-center justify-between text-xs text-white/60 mb-2">
                    <span>Şifre Gücü</span>
                    <span className="text-white/80 font-semibold">
                      {strength.label}
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                    <div
                      className={`h-full transition-all ${
                        strength.value <= 33
                          ? "bg-red-500/80"
                          : strength.value <= 66
                          ? "bg-yellow-500/80"
                          : "bg-green-500/80"
                      }`}
                      style={{ width: `${strength.value}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* ✅ Confirm password (Register only) */}
            {mode === "register" && (
              <div>
                <label className="block text-white/60 text-sm mb-2">
                  Şifre Tekrar
                </label>
                <div className="relative">
                  <input
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type={showConfirm ? "text" : "password"}
                    placeholder="Şifreyi tekrar yaz"
                    className="w-full px-4 py-3 pr-12 rounded-xl bg-black/30 border border-white/10 text-white outline-none focus:border-white/30 transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm((p) => !p)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition"
                  >
                    {showConfirm ? "🙈" : "👁️"}
                  </button>
                </div>

                {/* mini uyuşma uyarısı */}
                {confirmPassword && password !== confirmPassword && (
                  <p className="text-xs text-red-300 mt-2">
                    ❌ Şifreler uyuşmuyor
                  </p>
                )}
                {confirmPassword && password === confirmPassword && (
                  <p className="text-xs text-green-300 mt-2">
                    ✅ Şifreler uyuşuyor
                  </p>
                )}
              </div>
            )}

            {/* Forgot password (Login only) */}
            {mode === "login" && (
              <button
                type="button"
                onClick={handleForgotPassword}
                disabled={submitting}
                className="text-sm text-white/60 hover:text-white transition underline text-left"
              >
                Şifremi unuttum?
              </button>
            )}

            {/* Submit */}
            <button
              onClick={handleEmailAuth}
              disabled={submitting}
              className="w-full py-3 rounded-2xl bg-green-500/90 hover:bg-green-500 text-black font-bold transition disabled:opacity-50"
            >
              {submitting
                ? "İşleniyor..."
                : mode === "login"
                ? "Giriş Yap ✅"
                : "Kayıt Ol ✅"}
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-white/40 text-sm">veya</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Google */}
          <button
            onClick={handleGoogleLogin}
            disabled={submitting}
            className="w-full py-3 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold transition disabled:opacity-50 flex items-center justify-center gap-3"
          >
            <GoogleLogo />
            <span>
              Google ile {mode === "login" ? "Giriş Yap" : "Kayıt Ol"}
            </span>
          </button>

          {/* Footer note */}
          <p className="text-white/40 text-xs mt-6 text-center leading-relaxed">
            Mail onayı zorunlu değildir.  
            Şifre sıfırlama maili Spam klasörüne düşebilir.
          </p>
        </div>
      </section>
    </main>
  );
}