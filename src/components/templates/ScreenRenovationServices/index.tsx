// Libs
import React from "react";

// Molecules
import { Ads } from "@/components/molecules";

// Organisms
import { Banner, OurServices, ServicesSlide } from "@/components/organisms";

export const ScreenRenovationServices = () => {
  return (
    <>
      <Banner
        img="/images/bannerDesktop.png"
        imgMobile="/images/bannerMobile.png"
      />
      <OurServices />
      <Ads />
      <ServicesSlide />
    </>
  );
};
