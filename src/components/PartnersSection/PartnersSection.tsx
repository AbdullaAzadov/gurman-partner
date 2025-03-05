"use client";
import { Typography } from "@/shared/ui/components";
import s from "./PartnersSection.module.scss";
import PartnerCard from "./PartnerCard";
import restaurant_1_img from "../../../public/assets/images/partners-restaurant-1.png";
import restaurant_2_img from "../../../public/assets/images/partners-restaurant-2.png";
import useScreenType from "@/shared/hooks/useScreenType";
import { Container } from "../Container/Container";
import { useTranslation } from "react-i18next";

function PartnersSection() {
  const st = useScreenType();
  const sectionTextSize =
    st === "mobile" ? "20" : st === "tablet" ? "24" : "30";
  const { t } = useTranslation();

  return (
    <section className={s.wrapper} id="partners">
      <Container className={s.container}>
        <Typography
          size={sectionTextSize}
          weight="bold"
          align="center"
          color="primary"
          asChild
        >
          <h2>{t("our-partners")}</h2>
        </Typography>
        <div className={s.cards}>
          <PartnerCard title="name-restaurant" imgSrc={restaurant_1_img} />
          <PartnerCard title="name-restaurant" imgSrc={restaurant_2_img} />
          <PartnerCard title="name-restaurant" imgSrc={restaurant_1_img} />
          <PartnerCard title="name-restaurant" imgSrc={restaurant_2_img} />
        </div>
      </Container>
    </section>
  );
}

export default PartnersSection;
