import type { NextConfig } from "next";
import type { UserConfig } from "next-i18next";

const i18nConfig: UserConfig & NextConfig = {
  i18n: {
    defaultLocale: "ru",
    locales: ["ru", "kz", "en"],
  },
};

export default i18nConfig;
