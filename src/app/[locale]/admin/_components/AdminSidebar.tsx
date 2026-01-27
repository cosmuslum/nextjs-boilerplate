"use client";

import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { useTranslations } from "next-intl";

type Item = { href: string; icon: string; labelKey: string };

function cx(...xs: (string | false | undefined)[]) {
  return xs.filter(Boolean).join(" ");
}

export default function AdminSidebar() {
  const t = useTranslations();
  const pathname = usePathname();
  const params = useParams() as { locale?: string };
  const locale = params?.locale || "tr";

  const base = `/${locale}/admin`;

  const items: Item[] = [
    { href: `${base}`, icon: "✏️", labelKey: "admin.sidebar.dashboard" },
    { href: `${base}/lessons`, icon: "📚", labelKey: "admin.sidebar.lessons" },
    { href: `${base}/quizzes`, icon: "🧠", labelKey: "admin.sidebar.quizzes" },
    { href: `${base}/seed`, icon: "🌱", labelKey: "admin.sidebar.seed" },
    { href: `${base}/privacy`, icon: "🔒", labelKey: "admin.sidebar.privacy" },
    { href: `${base}/site`, icon: "🧩", labelKey: "admin.sidebar.site" },
  ];

  return (
    <aside className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl p-6 h-fit">
      {/* Üst bilgi: tekrar Admin yazmıyoruz, sadece rol */}
      <div className="text-sm text-white/70 mb-4">
        {t("admin.sidebar.roleLabel")}:{" "}
        <span className="text-white font-semibold">admin</span>
      </div>

      <nav className="space-y-3">
        {items.map((it) => {
          const active =
            pathname === it.href || (it.href !== base && pathname?.startsWith(it.href));

          return (
            <Link
              key={it.href}
              href={it.href}
              className={cx(
                "flex items-center gap-3 rounded-2xl px-4 py-3 border transition",
                active
                  ? "bg-white/12 border-white/20"
                  : "bg-black/20 border-white/10 hover:bg-white/10 hover:border-white/20"
              )}
            >
              <span className="text-lg">{it.icon}</span>
              <span className={cx("font-semibold", active ? "text-white" : "text-white/90")}>
                {t(it.labelKey)}
              </span>
            </Link>
          );
        })}
      </nav>

      <p className="mt-5 text-xs text-white/50">{t("admin.sidebar.hint")}</p>
    </aside>
  );
}