// Libs
import React from "react";
import Head from "next/head";

// Molecules
import { Ads } from "@/components/molecules";

// Organisms
import { Banner, OurServices, ServicesSlide } from "@/components/organisms";

export const ScreenRenovationServices = () => {
  return (
    <>
      <Head>
        <title>Serviços de reforma</title>
        <meta
          name="description"
          content="Alguns dos nossos serviços: Pintura, Revestimento, Grafiato, Jardinagem, Carpinagem, Reforma predial, Restaurações, Construções"
        />
      </Head>

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
