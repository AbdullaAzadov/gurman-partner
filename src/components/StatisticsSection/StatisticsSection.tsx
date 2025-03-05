"use client";
import { Typography } from "@/shared/ui/components";
import s from "./StatisticsSection.module.scss";
import { useTranslation } from "react-i18next";
import useScreenType from "@/shared/hooks/useScreenType";

function StatisticsSection() {
  const st = useScreenType();
  const titleSize = st === "mobile" ? "30" : st === "tablet" ? "48" : "72";
  const descSize = st === "mobile" ? "12" : st === "tablet" ? "14" : "24";
  const { t } = useTranslation();

  return (
    <section className={s.wrapper}>
      <div className={s.items}>
        {data.map((item, idx) => (
          <div className={s.item} key={idx}>
            <Typography color="white" size={titleSize} weight="bold" asChild>
              <h1>{t(item.title)}</h1>
            </Typography>
            <Typography color="white" size={descSize} asChild>
              <h3>{t(item.desc)}</h3>
            </Typography>
          </div>
        ))}
      </div>
    </section>
  );
}

const data = [
  {
    title: "statistics-section.partners-title",
    desc: "statistics-section.partners-desc",
  },
  {
    title: "statistics-section.clients-title",
    desc: "statistics-section.clients-desc",
  },
  {
    title: "statistics-section.incomes-title",
    desc: "statistics-section.incomes-desc",
  },
];

export default StatisticsSection;
