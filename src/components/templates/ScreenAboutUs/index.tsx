// Libs
import React from "react";

// Atoms
import { Line } from "@/components/atoms";

// Organisms
import { About, Banner, FormContact } from "@/components/organisms";

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
      <FormContact />
    </>
  );
};
