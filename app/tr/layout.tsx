import type { Metadata } from "next";
import React from "react";
import HeaderTR from "../_shared/HeaderTR";
import FooterTR from "../_shared/FooterTR";

export const metadata: Metadata = {
  title: "NederLearn",
  description: "Sıfırdan, adım adım Hollandaca öğren. A0’dan başlayarak düzenli ders akışı + bol pratik.",
};

export default function TRLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body style={{ margin: 0, background: "#070A12", color: "white" }}>
        <HeaderTR />
        {children}
        <FooterTR />
      </body>
    </html>
  );
}
