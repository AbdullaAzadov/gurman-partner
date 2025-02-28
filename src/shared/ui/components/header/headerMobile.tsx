"use client";

import s from "./headerMobile.module.scss";
import logo_mobile from "./logo_mobile.png";
import logo_mobile_burger from "./logo_mobile_burger.png";
import { Typography } from "../typography";
import {
  BurgerCloseIcon,
  BurgerIcon,
  PhoneIcon,
} from "../../assets/icons/outline";
import { useState } from "react";
import { Button } from "@/shared/ui/components";
import Image from "next/image";
import clsx from "clsx";
import LanguageSelectorMobile from "@/components/LanguageSelector/LanguageSelectorMobile";
import { useTranslation } from "react-i18next";

type Props = {
  transparentBg?: boolean;
};

export const HeaderMobile = ({ transparentBg }: Props) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={clsx(
        isMenuOpen ? s.headerBurgerMenu : s.header,
        transparentBg && s.transparent
      )}
    >
      <div className={s.logo}>
        <button
          className={s.burgerButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <BurgerCloseIcon /> : <BurgerIcon />}
        </button>
        <Image src={isMenuOpen ? logo_mobile_burger : logo_mobile} alt="logo" />
      </div>
      {!isMenuOpen && (
        <Button size={"smallIcon"} variant={"accent"} asChild={true}>
          <a href={"#contacts"} style={{ display: "flex", gap: "4px" }}>
            <PhoneIcon width={"12px"} />
            <Typography
              color={"white"}
              weight={"bold"}
              size={"14"}
              style={{ textTransform: "uppercase" }}
            >
              {t("contact")}
            </Typography>
          </a>
        </Button>
      )}

      {isMenuOpen && (
        <>
          <nav className={s.menuListContainer}>
            <ul className={s.menuList}>
              <Typography
                asChild
                size={"14"}
                color={"primary"}
                weight={"semi-bold"}
              >
                <li>
                  <a href="#main" onClick={() => setIsMenuOpen(false)}>
                    {t("main")}
                  </a>
                </li>
              </Typography>
              <Typography
                asChild
                size={"14"}
                color={"primary"}
                weight={"semi-bold"}
              >
                <li>
                  <a href="#advantages" onClick={() => setIsMenuOpen(false)}>
                    {t("advantages")}
                  </a>
                </li>
              </Typography>
              <Typography
                asChild
                size={"14"}
                color={"primary"}
                weight={"semi-bold"}
              >
                <li>
                  <a href="#partners" onClick={() => setIsMenuOpen(false)}>
                    {t("partners")}
                  </a>
                </li>
              </Typography>
              <Typography
                asChild
                size={"14"}
                color={"primary"}
                weight={"semi-bold"}
              >
                <li>
                  <a href="#contacts" onClick={() => setIsMenuOpen(false)}>
                    {t("contacts")}
                  </a>
                </li>
              </Typography>
            </ul>
          </nav>
          <LanguageSelectorMobile />
        </>
      )}
    </header>
  );
};
