// Libs
import React, { useContext } from "react";

// Contexts
import { ProductContext } from "@/context/Products";

// Molecules
import { CardProduct } from "@/components/molecules";

// Styles
import * as S from "./styles";

export const ListProducts = () => {
  const { products } = useContext(ProductContext);

  return (
    <S.Container>
      <S.Wrapper>
        {products?.map((product) => (
          <CardProduct
            key={product?.id}
            id={product?.id}
            video={product?.productVideo}
            title={product?.name}
          />
        ))}
      </S.Wrapper>
    </S.Container>
  );
};
