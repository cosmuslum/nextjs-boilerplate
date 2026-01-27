"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter, usePathname } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "tr";

  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
      if (!u) router.push(`/${locale}/login`);
    });
    return () => unsub();
  }, [router, locale]);

  async function logout() {
    await signOut(auth);
    router.push(`/${locale}`);
  }

  if (loading) return <div>Loading...</div>;
  if (!user) return null;

  return (
    <section className="max-w-md mx-auto">
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
        <h1 className="text-3xl font-extrabold mb-4">Profil</h1>
        <p className="text-white/70">Email: {user.email}</p>

        <button
          onClick={logout}
          className="mt-6 w-full px-5 py-3 rounded-xl bg-red-500/80 hover:bg-red-500 text-black font-semibold transition"
        >
          Çıkış Yap
        </button>
      </div>
    </section>
  );
}
