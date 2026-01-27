"use client";

import { ReactNode } from "react";
import AdminSidebar from "./AdminSidebar";

export default function AdminShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-[calc(100vh-70px)] text-white relative overflow-hidden">
      <section className="relative z-10 max-w-[1400px] mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
          {/* Sol Sidebar */}
          <AdminSidebar />

          {/* Sağ içerik */}
          <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl p-8 min-h-[600px]">
            {children}
          </div>
        </div>
      </section>
    </main>
  );
}