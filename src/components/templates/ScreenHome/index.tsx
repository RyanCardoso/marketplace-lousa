// Libs
import React from "react";
import Head from "next/head";

// Organisms
import { Banner, Depositions, ListProducts } from "@/components/organisms";

export const ScreenHome = () => {
  return (
    <>
      <Head>
        <title>Company Board</title>
        <meta
          name="description"
          content="A CompanyBoard é uma empresa especializada em comunicações visuais, oferecendo produtos com matéria de primeira linha, buscando atender as necessidades de seus clientes com atenção, dedicação e qualidade que cada um de nossos clientes merece.
          Queremos proporcionar a vocês a sensação e a certeza que fará o melhor negocio escolhendo a CompanyBoard.
          Nossa missão consiste em apreender para nossos clientes soluções rápidas e eficientes, satisfazer as expectativas fornecendo produtos e serviços de qualidade dentro do prazo estipulado.
          Com Visão de ser reconhecida com a melhor empresa no segmento, tanto para os nossos clientes como para nossos colaboradores e fornecedores. Proporcionando produtos e serviços de qualidade, com um atendimento respeitoso e honesto, ou seja, um experiência prazerosa para nós e nossos clientes e fornecedores."
        />
      </Head>

      <Banner variant="slide" />
      <ListProducts />
      <Depositions />
    </>
  );
};
