"use client";
import { TScreenTypes } from "@/shared/types/screenType";
import React, { useEffect, useState } from "react";
import { HeaderMobile } from "@/shared/ui/components/header/headerMobile";
import { HeaderPC } from "@/shared/ui/components/header/headerPC";
import { HeaderTablet } from "@/shared/ui/components/header/headerTablet";

export type HeaderProps = {
  variant: TScreenTypes;
};

export const Header = ({ variant }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  switch (variant) {
    case "mobile":
      return <HeaderMobile transparentBg={!isScrolled} />;
    case "desktop":
      return <HeaderPC transparentBg={!isScrolled} />;
    case "tablet":
      return <HeaderTablet transparentBg={!isScrolled} />;
    default:
  }
};
