import { Typography } from "../typography";
import s from "./footer.module.scss";
import logo_img from "../../assets/images/logo/logo_l.png";
import inst_img from "../../assets/images/socials/instagram.png";
import whatsapp_img from "../../assets/images/socials/whatsapp.png";
import tg_img from "../../assets/images/socials/telegram.png";
import app_store_img from "../../assets/images/download-on-app-store.png";
import google_play_img from "../../assets/images/download-on-google-play.png";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export const Footer_PC = () => {
  const { t } = useTranslation();
  return (
    <div className={s.footerWrapper}>
      <footer className={s.footer}>
        <nav className={s.footerNav}>
          <div className={s.navItemLogoSection}>
            <Image src={logo_img} alt="Gurman" className={s.logo} />
            <Typography size="24" weight="bold" asChild>
              <h2>{t("grow-with-us")}</h2>
            </Typography>
          </div>
          <div className={s.navItem}>
            <Typography size="24" weight="bold" asChild>
              <nav>{t("navigation")}</nav>
            </Typography>
            <div className={s.links}>
              <a href="#main">
                <Typography size="20">{t("main")}</Typography>
              </a>
              <a href="#partners">
                <Typography size="20">{t("partners")}</Typography>
              </a>
              <a href="#contacts">
                <Typography size="20">{t("contact")}</Typography>
              </a>
              <a href="#advantages">
                <Typography size="20">{t("advantages")}</Typography>
              </a>
              <a href="#contacts">
                <Typography size="20">{t("contacts")}</Typography>
              </a>
            </div>
          </div>
          <div className={s.navItem}>
            <Typography size="24" weight="bold">
              {t("socials")}
            </Typography>
            <div className={s.socials}>
              <a href="#">
                <Image
                  className={s.socialIcon}
                  src={inst_img}
                  alt="Instagram"
                  height={60}
                />
              </a>
              <a href="#">
                <Image
                  className={s.socialIcon}
                  src={whatsapp_img}
                  alt="Whatsapp"
                  height={60}
                />
              </a>
              <a href="#">
                <Image
                  className={s.socialIcon}
                  src={tg_img}
                  alt="Telegram"
                  height={60}
                />
              </a>
            </div>
          </div>
          <div className={s.navItem}>
            <Typography size="24" weight="bold" asChild>
              <p>{t("download-our-app")}</p>
            </Typography>
            <div className={s.downloadLinks}>
              <a href="#">
                <Image
                  src={app_store_img}
                  alt="Download on App Store"
                  height={68}
                />
              </a>
              <a href="#">
                <Image
                  src={google_play_img}
                  alt="Download on Google"
                  height={68}
                />
              </a>
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer_PC;
