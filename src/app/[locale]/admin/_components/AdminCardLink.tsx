"use client";

import Link from "next/link";

export default function AdminCardLink({
  href,
  icon,
  title,
  desc,
}: {
  href: string;
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-3xl bg-black/25 border border-white/10 hover:bg-white/10 hover:border-white/20 transition p-6 flex items-start justify-between gap-4"
    >
      <div className="flex items-start gap-4">
        <div className="text-3xl">{icon}</div>
        <div>
          <h3 className="text-white font-extrabold text-lg">{title}</h3>
          <p className="text-white/60 text-sm mt-1">{desc}</p>
          <div className="mt-4 text-white/70 text-sm font-semibold group-hover:text-white transition">
            Aç →
          </div>
        </div>
      </div>

      <div className="text-white/40 text-xl group-hover:text-white/70 transition">→</div>
    </Link>
  );
}