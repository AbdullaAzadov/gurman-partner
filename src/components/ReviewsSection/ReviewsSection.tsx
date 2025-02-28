import { Typography } from "@/shared/ui/components";
import s from "./reviews.module.scss";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  StarIcon,
} from "@/shared/ui/assets/icons/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import useScreenType from "@/shared/hooks/useScreenType";
import { Container } from "../Container/Container";
import { useTranslation } from "react-i18next";

export const ReviewsSection = () => {
  const st = useScreenType();
  const sizeText = st === "desktop" ? "16" : st === "mobile" ? "12" : "12";
  const sizeHead = st === "desktop" ? "48" : st === "mobile" ? "20" : "24";
  const iconWidth = st === "desktop" ? "13" : "7";
  const iconHeight = st === "desktop" ? "21" : "10";
  const { t } = useTranslation();

  return (
    <section className={s.wrapper}>
      <Typography asChild size={sizeHead} weight={"bold"} color="primary">
        <h2>Отзывы</h2>
      </Typography>

      <Container className={s.reviewWrapper}>
        <Swiper
          navigation={{
            nextEl: ".customNext",
            prevEl: ".customPrev",
          }}
          slidesPerView={"auto"}
          modules={[Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 1, // На мобильных - 1 слайд
              spaceBetween: 10,
            },
            540: {
              slidesPerView: 2, // На планшетах - 2 слайда
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3, // На небольших экранах - 3 слайда
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4, // На десктопе - 4 слайда
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <div className={s.cardWrapper}>
              <div className={s.starWrapper}>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
              <div className={s.textWrapper}>
                <Typography
                  asChild
                  size={sizeText}
                  weight={"regular"}
                  color={"primary"}
                >
                  <p>{t("reviews-section.1")}</p>
                </Typography>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.cardWrapper}>
              <div className={s.starWrapper}>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
              <div className={s.textWrapper}>
                <Typography
                  asChild
                  size={sizeText}
                  weight={"regular"}
                  color={"primary"}
                >
                  <p>{t("reviews-section.2")}</p>
                </Typography>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.cardWrapper}>
              <div className={s.starWrapper}>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
              <div className={s.textWrapper}>
                <Typography
                  asChild
                  size={sizeText}
                  weight={"regular"}
                  color={"primary"}
                >
                  <p>{t("reviews-section.3")}</p>
                </Typography>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.cardWrapper}>
              <div className={s.starWrapper}>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
              <div className={s.textWrapper}>
                <Typography
                  asChild
                  size={sizeText}
                  weight={"regular"}
                  color={"primary"}
                >
                  <p>{t("reviews-section.4")}</p>
                </Typography>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.cardWrapper}>
              <div className={s.starWrapper}>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
              <div className={s.textWrapper}>
                <Typography
                  asChild
                  size={sizeText}
                  weight={"regular"}
                  color={"primary"}
                >
                  <p>{t("reviews-section.5")}</p>
                </Typography>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.cardWrapper}>
              <div className={s.starWrapper}>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
              <div className={s.textWrapper}>
                <Typography
                  asChild
                  size={sizeText}
                  weight={"regular"}
                  color={"primary"}
                >
                  <p>{t("reviews-section.6")}</p>
                </Typography>
              </div>
            </div>
          </SwiperSlide>
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
};
