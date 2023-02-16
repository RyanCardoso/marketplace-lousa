// Libs
import React, { useContext } from "react";
import { NextPage, NextPageContext } from "next";

// Contexts
import { ProductContext } from "@/context/Products";

// Templates
import { ScreenProduct } from "@/components/templates";

// Services
import hygraphClient from "@/services/hygraphClient";

// Types
import { ProductDTO, ProductGql } from "@/fragments/products";

interface PageProductDTO {
  data: ProductDTO;
}

const Product: NextPage<PageProductDTO> = ({ data }) => {
  const { handleProduct } = useContext(ProductContext);

  handleProduct?.(data);

  return <ScreenProduct />;
};

export const getServerSideProps = async (context: NextPageContext) => {
  const { uuid } = context.query;

  const data = await hygraphClient.request(ProductGql(uuid as string));

  return {
    props: { data: data.product },
  };
};

export default Product;
