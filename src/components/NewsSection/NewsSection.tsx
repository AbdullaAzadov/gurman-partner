"use client";
import { Typography } from "@/shared/ui/components";
import s from "./NewsSection.module.scss";
import NewsCard, { NewsCardProps } from "./NewsCard";
import news_section_img from "../../../public/assets/images/news-section.png";
import useScreenType from "@/shared/hooks/useScreenType";
import { Container } from "../Container/Container";

import dynamic from "next/dynamic";
const Swiper = dynamic(() => import("swiper/react").then((mod) => mod.Swiper), {
  ssr: false,
});
const SwiperSlide = dynamic(
  () => import("swiper/react").then((mod) => mod.SwiperSlide),
  { ssr: false }
);
import "swiper/css";
import { useTranslation } from "react-i18next";

function NewsSection() {
  const st = useScreenType();
  const sectionTextSize =
    st === "mobile" ? "20" : st === "tablet" ? "24" : "48";
  const { t } = useTranslation();
  return (
    <section className={s.wrapper}>
      <Container className={s.container}>
        <Typography
          size={sectionTextSize}
          weight="bold"
          align="center"
          color="primary"
          asChild
        >
          <h2>{t("news")}</h2>
        </Typography>

        {st === "mobile" ? (
          <Swiper
            slidesPerView={1}
            spaceBetween={16}
            loop={false}
            style={{ width: "100%" }}
            wrapperClass="swiper-wrapper"
            breakpoints={{
              520: {
                slidesPerView: 2,
              },
            }}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <NewsCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className={s.cards}>
            {data.map((item, index) => (
              <NewsCard key={index} {...item} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

const data: NewsCardProps[] = [
  {
    imgSrc: news_section_img,
    date: "10/02/2025",
    title: "news-section.integration-title",
    desc: "news-section.integration-desc",
  },
  {
    imgSrc: news_section_img,
    date: "10/02/2025",
    title: "news-section.integration-title",
    desc: "news-section.integration-desc",
  },
  {
    imgSrc: news_section_img,
    date: "10/02/2025",
    title: "news-section.integration-title",
    desc: "news-section.integration-desc",
  },
];

export default NewsSection;
