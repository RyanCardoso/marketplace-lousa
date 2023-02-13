// Libs
import React from "react";

// Organisms
import { About, Banner } from "@/components/organisms";
import { Line } from "@/components/atoms";

export const ScreenAboutUs = () => {
  return (
    <>
      <Banner
        variant="default"
        img="/images/banner_about_dk.png"
        imgMobile="/images/banner_about_mb.png"
      />
      <About />
      <Line maxWidth="1440px" />
    </>
  );
};
