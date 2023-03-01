// Libs
import React from "react";
import Head from "next/head";

// Atoms
import { Line } from "@/components/atoms";

// Organisms
import { About, Banner, FormContact } from "@/components/organisms";

export const ScreenAboutUs = () => {
  return (
    <>
      <Head>
        <title>Quem somos</title>
        <meta
          name="description"
          content="Conheça a CompanyBoard, especializada em comunicações visuais com produtos de alta qualidade. Com atenção e dedicação aos nossos clientes, estamos comprometidos em fornecer soluções eficientes e satisfatórias, sempre dentro do prazo estipulado. Escolha a CompanyBoard para ter a melhor experiência e garantia do melhor negócio."
        />
      </Head>

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
