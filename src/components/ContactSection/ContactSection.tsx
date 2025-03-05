"use client";
import { Button, Input, PhoneInput, Typography } from "@/shared/ui/components";
import s from "./ContactSection.module.scss";
import useScreenType from "@/shared/hooks/useScreenType";
import { useTranslation } from "react-i18next";

function ContactSection() {
  const st = useScreenType();
  const titleSize = st === "mobile" ? "16" : st === "tablet" ? "24" : "30";
  const { t } = useTranslation();

  return (
    <section className={s.wrapper} id="contacts">
      <div className={s.bg} />
      <div className={s.content}>
        <Typography size={titleSize} weight="bold" color="primary" asChild>
          <h2>{t("join-to-us")}</h2>
        </Typography>
        <form className={s.form}>
          <Input placeholder={t("placeholder.name")} />
          <Input placeholder={t("placeholder.company")} />
          <PhoneInput placeholder={t("placeholder.number")} />
          <Button type="submit" variant="primary" className={s.button}>
            {t("leave-request")}
          </Button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
