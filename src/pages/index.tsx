// Libs
import React, { useContext, useEffect } from "react";
import { GetStaticProps, NextPage } from "next";

// Services
import hygraphClient from "@/services/hygraphClient";

// Contextx
import { ProductContext } from "@/context/Products";

// Templates
import { ScreenHome } from "@/components/templates";

// Fragment
import { HomeDTO, homeFragment } from "@/fragments/home";

const Home: NextPage<HomeDTO> = ({ data }) => {
  const { board, mirror, testimonies } = data ?? {};

  const { handleBoards, handleMirrors, handleTestimonies } =
    useContext(ProductContext);

  useEffect(() => {
    handleBoards?.(board?.products);
    handleMirrors?.(mirror?.products);
    handleTestimonies?.(testimonies);
  });

  return <ScreenHome />;
};

export const getServerSideProps: GetStaticProps = async () => {
  const data = await hygraphClient.request(homeFragment);

  return {
    props: { data },
  };
};

export default Home;
