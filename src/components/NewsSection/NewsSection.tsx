"use client";
import { Typography } from "@/shared/ui/components";
import s from "./NewsSection.module.scss";
import NewsCard, { NewsCardProps } from "./NewsCard";
import news_section_img from "../../../public/assets/images/news-section.png";
import useScreenType from "@/shared/hooks/useScreenType";
import { Container } from "../Container/Container";
import { useTranslation } from "react-i18next";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@/shared/ui/assets/icons/outline";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function NewsSection() {
  const st = useScreenType();
  const { t } = useTranslation();
  const iconWidth = st === "desktop" ? "13" : "7";
  const headSize = st === "mobile" ? "20" : st === "tablet" ? "24" : "30";
  const iconHeight = st === "desktop" ? "21" : "10";

  return (
    <section className={s.wrapper}>
      <Typography asChild size={headSize} weight={"bold"} color="primary">
        <h2>{t("news")}</h2>
      </Typography>

      <Container className={s.reviewWrapper}>
        <Swiper
          navigation={{
            nextEl: ".customNext",
            prevEl: ".customPrev",
          }}
          slidesPerView={1}
          modules={[Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            540: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 12,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {data.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className={s.cardWrapper}>
                <NewsCard {...item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
      <div className={s.arrowWrapper}>
        <div className={`customPrev ${s.customPrev}`}>
          <button>
            <ArrowLeftIcon width={iconWidth} height={iconHeight} />
          </button>
        </div>
        <div className={`customNext ${s.customNext}`}>
          <button>
            <ArrowRightIcon width={iconWidth} height={iconHeight} />
          </button>
        </div>
      </div>
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
