"use client";

import { useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter, usePathname } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "tr";

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
      if (u) router.push(`/${locale}/profile`);
    });
    return () => unsub();
  }, [router, locale]);

  async function login() {
    setError("");
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (e: any) {
      setError(e?.message || "Login error");
    }
  }

  return (
    <section className="max-w-md mx-auto">
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
        <h1 className="text-3xl font-extrabold mb-2">Giriş</h1>
        <p className="text-white/60 mb-6">Google ile giriş yap.</p>

        {error && (
          <div className="mb-4 p-3 rounded-xl bg-red-500/20 border border-red-500/30 text-red-200 text-sm">
            {error}
          </div>
        )}

        <button
          onClick={login}
          disabled={loading}
          className="w-full px-5 py-3 rounded-xl bg-white text-black font-semibold hover:opacity-90 transition disabled:opacity-50"
        >
          {loading ? "Kontrol ediliyor..." : "Google ile Giriş"}
        </button>

        {user && (
          <p className="mt-4 text-white/60 text-sm">Giriş yapıldı: {user.email}</p>
        )}
      </div>
    </section>
  );
}
