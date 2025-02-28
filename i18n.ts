"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import kz from "./src/locales/kz/common.json";
import ru from "./src/locales/ru/common.json";
import en from "./src/locales/en/common.json";

i18n.use(initReactI18next).init({
  resources: {
    ru: { common: ru },
    kz: { common: kz },
    en: { common: en },
  },
  lng: "ru",
  fallbackLng: "ru",
  defaultNS: "common",
  interpolation: { escapeValue: false },
});

export default i18n;
