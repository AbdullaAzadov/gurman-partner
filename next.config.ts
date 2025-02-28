import type { NextConfig } from "next";
import i18nConfig from "./next-i18next.config";

const nextConfig: NextConfig = {
  ...i18nConfig,
  output: "export",
};

export default nextConfig;
