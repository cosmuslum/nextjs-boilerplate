"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { getUserRole } from "@/lib/userService";
import LanguageDropdown from "@/components/LanguageDropdown";
import { useTranslations } from "next-intl";

export default function TopBar() {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("topbar");

  const [user, setUser] = useState<any>(null);
  const [role, setRole] = useState<string>("user");

  const locale = pathname.split("/")[1] || "tr";

  useEffect(() => {
    return onAuthStateChanged(auth, async (u) => {
      setUser(u);
      if (u) {
        const r = await getUserRole(u.uid);
        setRole(r || "user");
      } else {
        setRole("user");
      }
    });
  }, []);

  const logout = async () => {
    await signOut(auth);
    router.push(`/${locale}`);
  };

  return (
    <header className="w-full border-b border-white/10 bg-black/70 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2 font-bold text-lg"
        >
          🇳🇱 <span className="tracking-wide">DutchLearn</span>
        </Link>

        {/* RIGHT MENU */}
        <div className="flex items-center gap-4">
          <LanguageDropdown />

          {user ? (
            <>
              {(role === "admin" || role === "teacher") && (
                <Link
                  href={`/${locale}/admin`}
                  className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition text-sm font-medium"
                >
                  {t("admin")}
                </Link>
              )}

              <Link
                href={`/${locale}/profile`}
                className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition text-sm font-medium"
              >
                {t("profile")}
              </Link>

              <Link
                href={`/${locale}/lessons`}
                className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition text-sm font-medium"
              >
                {t("lessons")}
              </Link>

              <button
                onClick={logout}
                className="px-3 py-2 rounded-xl bg-red-600 hover:bg-red-700 transition text-sm font-medium"
              >
                {t("logout")}
              </button>
            </>
          ) : (
            <Link
              href={`/${locale}/login`}
              className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition text-sm font-medium"
            >
              {t("login")}
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}