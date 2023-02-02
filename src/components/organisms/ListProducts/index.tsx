// Libs
import React from "react";

// Molecules
import { CardProduct } from "@/components/molecules";

// Mock
import { productData } from "@/Mock/producData";

// Styles
import * as S from "./styles";

export const ListProducts = () => {
  return (
    <S.Container>
      <S.Wrapper>
        {productData.map((p, index) => (
          <CardProduct key={index} img="" title="Lousa de video" />
        ))}
      </S.Wrapper>
    </S.Container>
  );
};
