// Libs
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Mock
import { productData } from "@/Mock/producData";

// Styles
import * as S from "./styles";
import { CardProduct } from "@/components/molecules";

export const RelatedProducts = () => {
  const randomProducts = productData
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  return (
    <S.Container>
      <S.Title>Produtos relacionados</S.Title>
      <S.BoxProducts>
        {randomProducts.map((item, index) => (
          <CardProduct key={index} img="" title={item.name} />
        ))}
      </S.BoxProducts>
    </S.Container>
  );
};
