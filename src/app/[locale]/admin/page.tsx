"use client";

import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import AdminCardLink from "./_components/AdminCardLink";

export default function AdminDashboardPage() {
  const t = useTranslations();
  const params = useParams() as { locale?: string };
  const locale = params?.locale || "tr";
  const base = `/${locale}/admin`;

  return (
    <div className="space-y-8">
      <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8">
        <h1 className="text-3xl md:text-4xl font-extrabold">
          {t("admin.dashboard.title")}
        </h1>
        <p className="text-white/60 mt-2">{t("admin.dashboard.subtitle")}</p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
        <AdminCardLink
          href={`${base}/lessons`}
          icon="📚"
          title={t("admin.dashboard.cards.lessonsTitle")}
          desc={t("admin.dashboard.cards.lessonsDesc")}
        />
        <AdminCardLink
          href={`${base}/quizzes`}
          icon="🧠"
          title={t("admin.dashboard.cards.quizzesTitle")}
          desc={t("admin.dashboard.cards.quizzesDesc")}
        />
        <AdminCardLink
          href={`${base}/seed`}
          icon="🌱"
          title={t("admin.dashboard.cards.seedTitle")}
          desc={t("admin.dashboard.cards.seedDesc")}
        />
        <AdminCardLink
          href={`${base}/privacy`}
          icon="🔒"
          title={t("admin.dashboard.cards.privacyTitle")}
          desc={t("admin.dashboard.cards.privacyDesc")}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <AdminCardLink
          href={`${base}/site`}
          icon="🧩"
          title={t("admin.dashboard.cards.siteTitle")}
          desc={t("admin.dashboard.cards.siteDesc")}
        />
      </div>
    </div>
  );
}