"use client";
import { useState, useEffect } from "react";
import { TScreenTypes } from "../types/screenType";

const getScreenType: (width: number) => TScreenTypes = (width: number) => {
  if (width <= 390) return "mobile";
  if (width <= 768) return "mobile";
  if (width <= 1280) return "tablet";
  return "desktop";
};

const useScreenType = () => {
  const [screenType, setScreenType] = useState<TScreenTypes>(
    getScreenType(1920)
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenType(getScreenType(window.innerWidth));
    };

    setScreenType(getScreenType(window.innerWidth));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenType;
};

export default useScreenType;
