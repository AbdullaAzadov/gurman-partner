import { TScreenTypes } from "@/shared/types/screenType";
import React from "react";
import Footer_Mobile from "./footer_mobile";
import Footer_PC from "./footer_pc";
import Footer_Tablet from "./footer_tablet";

export type FooterProps = {
  variant: TScreenTypes;
};

export const Footer = ({ variant }: FooterProps) => {
  switch (variant) {
    case "mobile":
      return <Footer_Mobile />;

    case "desktop":
      return <Footer_PC />;
    case "tablet":
      return <Footer_Tablet />;
    default:
  }
};
