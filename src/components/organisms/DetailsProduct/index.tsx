// Libs
import React from "react";

// Atoms
import { Button } from "@/components/atoms";

// Molecules
import { Showcase } from "@/components/molecules";

// Utils
import { formatMoney } from "@/utils/consts";

// Types
import { ProductDTO } from "@/fragments/products";

// Styles
import * as S from "./styles";

const handlePrice = (price: number, promotion: number) => {
  const formatPrice = formatMoney(price);
  const formatPromotion = formatMoney(promotion);

  if (promotion)
    return (
      <>
        <span>{formatPrice}</span> {formatPromotion}
      </>
    );

  return formatPrice;
};

interface DetailsProductType {
  data: ProductDTO;
}

export const DetailsProduct = ({ data }: DetailsProductType) => {
  const { productShowcase, price, promotion, description } = data ?? {};

  return (
    <S.Container>
      <S.Gallery data-aos="fade-up-right">
        <Showcase productShowcase={productShowcase} />
      </S.Gallery>

      <S.AboutProduct data-aos="fade-up-left">
        <S.Price>{handlePrice(price, promotion)}</S.Price>
        <S.Description
          dangerouslySetInnerHTML={{ __html: description?.html }}
        ></S.Description>

        <Button
          label="Solicitar orçamento pelo Whatsapp"
          width="284px"
          height="52px"
          backgroundColor="#25D366"
        />
      </S.AboutProduct>
    </S.Container>
  );
};
