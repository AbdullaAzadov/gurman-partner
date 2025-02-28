import { Typography } from "@/shared/ui/components";
import s from "./CertificatesSection.module.scss";
import chechil_img from "../../../public/assets/images/restaurants/chechil.png";
import turandot_img from "../../../public/assets/images/restaurants/turandot.png";
import sumosan_img from "../../../public/assets/images/restaurants/sumosan.png";
import navat_img from "../../../public/assets/images/restaurants/navat.png";
import Image from "next/image";
import useScreenType from "@/shared/hooks/useScreenType";
import { useTranslation } from "react-i18next";

function CertificatesSection() {
  const st = useScreenType();
  const sectionTextSize =
    st === "mobile" ? "20" : st === "tablet" ? "24" : "48";
  const { t } = useTranslation();

  return (
    <section className={s.wrapper}>
      <div className={s.content}>
        <Typography
          size={sectionTextSize}
          weight="bold"
          color="white"
          align="center"
          asChild
        >
          <h2>{t("certificate-owners")}</h2>
        </Typography>
        <div className={s.items}>
          <div className={s.item}>
            <Image alt="Chechil" src={chechil_img} />
          </div>
          <div className={s.item}>
            <Image alt="Navat" src={navat_img} />
          </div>
          <div className={s.item}>
            <Image alt="Turandot" src={turandot_img} />
          </div>
          <div className={s.item}>
            <Image alt="Sumosan" src={sumosan_img} />
          </div>
          <div className={s.item}>
            <Image alt="Turandot" src={turandot_img} />
          </div>
          <div className={s.item}>
            <Image alt="Sumosan" src={sumosan_img} />
          </div>
          <div className={s.item}>
            <Image alt="Navat" src={navat_img} />
          </div>
          <div className={s.item}>
            <Image alt="Chechil" src={chechil_img} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CertificatesSection;
