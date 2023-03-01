// Libs
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Molecules
import { CardProduct } from "@/components/molecules";

// Styles
import * as S from "./styles";
import { ListProductsDTO } from "@/fragments/products";

interface RelatedProductsType {
  data: ListProductsDTO[];
}

export const RelatedProducts = ({ data }: RelatedProductsType) => {
  return (
    <S.Container>
      <S.Title>Produtos relacionados</S.Title>
      <S.BoxProducts>
        {data?.map((item, index) => (
          <CardProduct
            key={item.id}
            id={item.id}
            video={item.productVideo}
            title={item?.name}
          />
        ))}
      </S.BoxProducts>
    </S.Container>
  );
};
