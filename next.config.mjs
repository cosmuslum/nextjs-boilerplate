import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // BURADA output: "export" OLMAYACAK
};

export default withNextIntl(nextConfig);