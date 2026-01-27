"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations();

  const items = [
    { href: `/${locale}/admin`, key: "admin.sidebar.dashboard", icon: "✏️" },
    { href: `/${locale}/admin/lessons`, key: "admin.sidebar.lessons", icon: "📚" },
    { href: `/${locale}/admin/quizzes`, key: "admin.sidebar.quizzes", icon: "🧠" },
    { href: `/${locale}/admin/seed`, key: "admin.sidebar.seed", icon: "🌱" },
    { href: `/${locale}/admin/privacy`, key: "admin.sidebar.privacy", icon: "🔒" },
    { href: `/${locale}/admin/site`, key: "admin.sidebar.site", icon: "🧩" },
  ];

  return (
    <div className="min-h-[calc(100vh-70px)] w-full">
      <div className="max-w-[1400px] mx-auto px-6 py-10">
        <div className="flex gap-8">
          {/* ✅ SOL MENÜ (tek yerde) */}
          <aside className="w-[280px] shrink-0">
            <div className="sticky top-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-4 shadow-xl">
              {/* Admin yazısını kaldırdık, sadece yetki göstergesi */}
              <div className="text-white/60 text-sm px-2 pb-3">
                {t("admin.sidebar.roleLabel")}:{" "}
                <span className="text-white/80 font-semibold">admin</span>
              </div>

              <nav className="space-y-3">
                {items.map((it) => {
                  const active = pathname === it.href;
                  return (
                    <Link
                      key={it.href}
                      href={it.href}
                      className={cx(
                        "flex items-center gap-3 rounded-2xl px-4 py-3 border transition",
                        active
                          ? "bg-white/10 border-white/20 text-white"
                          : "bg-black/20 border-white/10 text-white/80 hover:bg-white/10 hover:border-white/20"
                      )}
                    >
                      <span className="text-lg">{it.icon}</span>
                      <span className="font-semibold">{t(it.key)}</span>
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-6 text-white/40 text-xs px-2">
                {t("admin.sidebar.hint")}
              </div>
            </div>
          </aside>

          {/* ✅ SAĞ İÇERİK (sayfalar buraya gelir) */}
          <main className="flex-1">
            <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl p-8 min-h-[520px]">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}