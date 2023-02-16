// Libs
import React, { useContext } from "react";
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
  const { products, testimonies } = data.home;
  const { handleProducts, handleTestimonies } = useContext(ProductContext);

  handleProducts?.(products);
  handleTestimonies?.(testimonies);

  return <ScreenHome />;
};

export const getServerSideProps: GetStaticProps = async () => {
  const data = await hygraphClient.request(homeFragment);

  return {
    props: { data },
  };
};

export default Home;
