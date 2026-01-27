"use client";

import { useTranslations } from "next-intl";

export default function AdminSitePage() {
  const t = useTranslations();
  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-extrabold">{t("admin.sidebar.site")}</h2>
      <p className="text-white/60">Site ayarları (footer/topbar metinleri) burada.</p>
    </div>
  );
}