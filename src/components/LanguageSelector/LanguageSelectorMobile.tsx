"use client";
import { Typography } from "@/shared/ui/components";
import styles from "./LanguageSelectorMobile.module.scss";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

const Languages = {
  ru: "Русский",
  kz: "Қазақша",
  en: "English",
};

export default function LanguageSelectorMobile() {
  const { i18n } = useTranslation();

  return (
    <ul className={styles.wrapper}>
      {Object.keys(Languages).map((lng) => {
        const isActive = i18n.language === lng;
        return (
          <li
            key={lng}
            className={clsx(styles.item, isActive && styles.active)}
            onClick={() => {
              i18n.changeLanguage(lng);
            }}
          >
            <Typography
              color="primary"
              size="14"
              weight={isActive ? "bold" : "regular"}
              className={isActive ? styles.active : ""}
            >
              {Languages[lng as keyof typeof Languages]}
            </Typography>
          </li>
        );
      })}
    </ul>
  );
}
