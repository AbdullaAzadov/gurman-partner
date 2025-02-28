"use client";
import { Typography } from "@/shared/ui/components";
import styles from "./LanguageSelector.module.scss";
import { ArrowDownIcon, ArrowUpIcon } from "@/shared/ui/assets/icons/outline/";
import { RefObject, useState } from "react";
import { useTranslation } from "react-i18next";
import { useClickOutside } from "@/shared/hooks/useClickOutside";

const Languages = {
  ru: "Русский",
  kz: "Қазақша",
  en: "English",
};

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const selectRef = useClickOutside(() => setIsOpen(false));
  const { i18n } = useTranslation();
  const currentLng = Languages[i18n.language as keyof typeof Languages];

  return (
    <div
      className={styles.select}
      onClick={() => setIsOpen(!isOpen)}
      ref={selectRef as RefObject<HTMLDivElement>}
    >
      <Typography color="white">{currentLng}</Typography>
      <div className={styles.icon}>
        {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </div>

      {isOpen && (
        <ul className={styles.options} onClick={(e) => e.stopPropagation()}>
          {Object.keys(Languages).map((lng) => (
            <li
              key={lng}
              className={styles.item}
              onClick={() => {
                i18n.changeLanguage(lng);
                setIsOpen(false);
              }}
            >
              <Typography color="white">
                {Languages[lng as keyof typeof Languages]}
              </Typography>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
