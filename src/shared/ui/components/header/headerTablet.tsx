"use client";

import s from "./header.module.scss";
import logo_mobile from "./logo_mobile.png";
import { Typography } from "../typography";
import { PhoneIcon } from "../../assets/icons/outline";
import { Button } from "@/shared/ui/components";
import Image from "next/image";
import { FC } from "react";
import clsx from "clsx";
import HeaderSelectBar from "./HeaderSelectBar";
import { useTranslation } from "react-i18next";

type Props = {
  transparentBg?: boolean;
};

export const HeaderTablet: FC<Props> = ({ transparentBg }) => {
  const { t } = useTranslation();
  return (
    <header className={s.wrapper}>
      <HeaderSelectBar />
      <div className={clsx(s.header, transparentBg && s.transparent)}>
        <div className={s.logo}>
          <Image src={logo_mobile} alt="logo" />
        </div>
        <nav className={s.menuListContainer}>
          <ul className={s.menuList}>
            <Typography
              asChild
              size={"14"}
              color={"white"}
              weight={"semi-bold"}
            >
              <li>
                <a href="#main">{t("main")}</a>
              </li>
            </Typography>
            <Typography
              asChild
              size={"14"}
              color={"white"}
              weight={"semi-bold"}
            >
              <li>
                <a href="#advantages">{t("advantages")}</a>
              </li>
            </Typography>
            <Typography
              asChild
              size={"14"}
              color={"white"}
              weight={"semi-bold"}
            >
              <li>
                <a href="#partners">{t("partners")}</a>
              </li>
            </Typography>
            <Typography
              asChild
              size={"14"}
              color={"white"}
              weight={"semi-bold"}
            >
              <li>
                <a href="#contacts">{t("contacts")}</a>
              </li>
            </Typography>

            <li>
              <Button size={"smallIcon"} variant={"accent"} asChild={true}>
                <a
                  href={"#contacts"}
                  className={s.button}
                  style={{ textTransform: "uppercase" }}
                >
                  <PhoneIcon />
                  <Typography weight="bold" color="white" size="14">
                    {t("contact")}
                  </Typography>
                </a>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
