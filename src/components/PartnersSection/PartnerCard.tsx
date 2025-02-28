"use client";
import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";
import s from "./PartnerCard.module.scss";
import { Typography } from "@/shared/ui/components";
import useScreenType from "@/shared/hooks/useScreenType";
import { Size } from "@/shared/ui/components/typography/types";
import { useTranslation } from "react-i18next";

export type PartnerCardProps = {
  imgSrc: string | StaticImageData;
  title: string;
};

export const PartnerCard: FC<PartnerCardProps> = ({ imgSrc, title }) => {
  const st = useScreenType();
  let textSize: Size = "30"; // по дефолту десктоп - 30
  if (st === "tablet") textSize = "14";
  if (st === "mobile") textSize = "12";
  const { t } = useTranslation();

  return (
    <article className={s.card}>
      <div className={s.imageWrapper}>
        <Image src={imgSrc} alt={title} />
      </div>
      <div className={s.gradient} />
      <Typography
        className={s.title}
        size={textSize}
        weight="bold"
        color="white"
        align="center"
        asChild
      >
        <h2>{t(title)}</h2>
      </Typography>
    </article>
  );
};

export default PartnerCard;
