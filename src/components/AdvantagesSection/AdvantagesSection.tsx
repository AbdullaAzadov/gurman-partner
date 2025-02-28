"use client";
import * as React from "react";
import { Typography } from "@/shared/ui/components";
import s from "./Advantages.module.scss";
import {
  CheckIcon,
  EyeIcon,
  FavoriteIcon,
  NoteIcon,
  SettingIcon,
  StatisticIcon,
} from "@/shared/ui/assets/icons/outline";
import useScreenType from "@/shared/hooks/useScreenType";
import { Container } from "@/components/Container/Container";
import { useTranslation } from "react-i18next";

export const AdvantagesSection = () => {
  const st = useScreenType();
  const sectionTitleSize =
    st === "mobile" ? "20" : st === "tablet" ? "24" : "48";
  const cardTitleSize = st === "mobile" ? "16" : st === "tablet" ? "18" : "24";
  const cardDescSize = st === "desktop" ? "16" : "12";
  const { t } = useTranslation();

  return (
    <section className={s.wrapper} id="advantages">
      <Container className={s.container}>
        <Typography
          asChild
          size={sectionTitleSize}
          weight={"bold"}
          align="center"
          color="primary"
        >
          <h2>{t("advantages-section.name")}</h2>
        </Typography>
        <div className={s.advantagesWrapper}>
          {data.map((item, idx) => (
            <div className={s.cardWrapper} key={idx}>
              <div className={s.iconWrapper}>{item.icon}</div>
              <div className={s.textWrapper}>
                <Typography
                  asChild
                  size={cardTitleSize}
                  weight={"bold"}
                  color={idx % 2 === 0 ? "white" : "primary"}
                >
                  <h3>{t(item.title)}</h3>
                </Typography>
                <Typography
                  size={cardDescSize}
                  weight={"regular"}
                  color={idx % 2 === 0 ? "white" : "primary"}
                  asChild
                >
                  <p>{t(item.desc)}</p>
                </Typography>
              </div>
            </div>
          ))}

          <div className={s.bonusWrapper}>
            <div className={s.textBonusWrapper}>
              <Typography
                asChild
                size={cardTitleSize}
                weight={"bold"}
                color={"white"}
              >
                <h3>{t("advantages-section.bonus-card-title")}</h3>
              </Typography>
              <Typography
                size={cardDescSize}
                weight={"regular"}
                color={"white"}
              >
                {t("advantages-section.bonus-card-desc")}
              </Typography>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

const data = [
  {
    title: "advantages-section.bonus-system-title",
    desc: "advantages-section.bonus-system-desc",
    icon: <CheckIcon />,
  },
  {
    title: "advantages-section.analytics-title",
    desc: "advantages-section.analytics-desc",
    icon: <StatisticIcon />,
  },
  {
    title: "advantages-section.views-title",
    desc: "advantages-section.views-desc",
    icon: <EyeIcon width={"80px"} height={"80px"} />,
  },
  {
    title: "advantages-section.booking-title",
    desc: "advantages-section.booking-desc",
    icon: <NoteIcon width={"80px"} height={"80px"} />,
  },
  {
    title: "advantages-section.crm-title",
    desc: "advantages-section.crm-desc",
    icon: <SettingIcon />,
  },
  {
    title: "advantages-section.reviews-title",
    desc: "advantages-section.reviews-desc",
    icon: <FavoriteIcon />,
  },
];
