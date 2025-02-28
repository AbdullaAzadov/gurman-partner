"use client";
import "../../i18n";
import { Footer, Header } from "@/shared/ui/components";
import s from "./page.module.scss";
import { HeroSection } from "@/components/HeroSection";
import useScreenType from "@/shared/hooks/useScreenType";
import StatisticsSection from "@/components/StatisticsSection/StatisticsSection";
import { AdvantagesSection } from "@/components/AdvantagesSection/AdvantagesSection";
import NewsSection from "@/components/NewsSection/NewsSection";
import PartnersSection from "@/components/PartnersSection/PartnersSection";
import CertificatesSection from "@/components/CertificatesSection/CertificatesSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import PhoneWidget from "@/shared/ui/components/PhoneWidget/PhoneWidget";
import { ReviewsSection } from "@/components/ReviewsSection/ReviewsSection";

export default function Home() {
  const st = useScreenType();

  return (
    <div className={s.wrapper}>
      <Header variant={st} />
      <div className={s.content}>
        <HeroSection />
        <AdvantagesSection />
        <StatisticsSection />
        <NewsSection />
        <PartnersSection />
        <ReviewsSection />
        <CertificatesSection />
        <ContactSection />
      </div>
      <Footer variant={st} />
      <PhoneWidget />
    </div>
  );
}
