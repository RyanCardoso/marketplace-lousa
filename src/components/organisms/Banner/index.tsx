// Libs
import React from "react";

// Banners
import { BannerDefault, BannerDefaultType } from "./Default";
import { BannerSlide } from "./Slide";

interface BannerType extends BannerDefaultType {
  variant?: "default" | "slide";
}

export const Banner = ({ variant = "default", img, imgMobile }: BannerType) => {
  const variants = {
    default: <BannerDefault img={img} imgMobile={imgMobile} />,
    slide: <BannerSlide />,
  };

  return variants[variant];
};
