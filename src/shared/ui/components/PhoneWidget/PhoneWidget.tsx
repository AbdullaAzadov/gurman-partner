import s from "./PhoneWidget.module.scss";
import phone_widget_img from "../../../../../public/assets/images/phone-widget.png";
import Image from "next/image";

function PhoneWidget() {
  return (
    <div className={s.phoneWidget}>
      <a href="#contacts" className={s.link}>
        <Image
          src={phone_widget_img}
          alt="phone-widget"
          className={s.image}
          sizes="100%"
          fill
        />
      </a>
    </div>
  );
}

export default PhoneWidget;
