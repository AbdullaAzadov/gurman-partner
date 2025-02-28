"use client";
import Image from "next/image";
import s from "./HeroSection.module.scss";

import hero_img from "../../../public/assets/images/hero-section.png";
import { Button, Typography } from "@/shared/ui/components";
import useScreenType from "@/shared/hooks/useScreenType";
import { Container } from "@/components/Container/Container";
import { useTranslation } from "react-i18next";

export function HeroSection() {
  const st = useScreenType();
  const titleSize = st === "mobile" ? "20" : st === "tablet" ? "24" : "48";
  const descSize = st === "desktop" ? "24" : "12";
  const buttonSize = st === "desktop" ? "default" : "tablet";
  const { t } = useTranslation();

  return (
    <section className={s.wrapper} id="main">
      <Container className={s.container}>
        <Image
          className={s.background}
          src={hero_img}
          alt="restaurant"
          priority
        />
        <div className={s.gradientOverlay} />
        <div className={s.content}>
          <Typography
            className={s.title}
            size={titleSize}
            weight="bold"
            color="white"
            asChild
          >
            <h2>{t("hero-section.title")}</h2>
          </Typography>
          <Typography
            className={s.paragraph}
            size={descSize}
            color="white"
            asChild
          >
            <p>{t("hero-section.desc")}</p>
          </Typography>
          <Button variant="accent" className={s.button} size={buttonSize}>
            <a href="#contacts" style={{ textTransform: "uppercase" }}>
              {t("leave-request")}
            </a>
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
