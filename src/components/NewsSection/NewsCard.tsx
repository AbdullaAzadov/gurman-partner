"use client";
import Image, { StaticImageData } from "next/image";
import s from "./NewsCard.module.scss";
import { Typography } from "@/shared/ui/components";
import useScreenType from "@/shared/hooks/useScreenType";
import { useTranslation } from "react-i18next";

export type NewsCardProps = {
  imgSrc: string | StaticImageData;
  date: string;
  title: string;
  desc: string;
};

export const NewsCard: React.FC<NewsCardProps> = (props) => {
  const { imgSrc, date, title, desc } = props;
  const st = useScreenType();
  const titleSize = st === "mobile" ? "14" : st === "tablet" ? "16" : "30";
  const descSize = st === "mobile" ? "12" : st === "tablet" ? "16" : "20";
  const dateSize = st === "desktop" ? "16" : "12";
  const { t } = useTranslation();

  return (
    <article className={s.card}>
      <Image src={imgSrc} alt={title} />
      <div className={s.text}>
        <Typography size={titleSize} weight="bold" asChild>
          <h3>{t(title)}</h3>
        </Typography>
        <Typography size={descSize} className={s.desc} asChild>
          <p>{t(desc)}</p>
        </Typography>
      </div>
      <div className={s.date}>
        <Typography size={dateSize} weight="semi-bold" color="white" asChild>
          <p>{date}</p>
        </Typography>
      </div>
    </article>
  );
};

export default NewsCard;
