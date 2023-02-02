// Libs
import React from "react";

// Organisms
import { Banner, Depositions, ListProducts } from "@/components/organisms";

export const ScreenHome = () => {
  return (
    <>
      <Banner />
      <ListProducts />
      <Depositions />
    </>
  );
};
