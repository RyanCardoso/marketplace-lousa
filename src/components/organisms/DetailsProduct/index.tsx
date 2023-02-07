// Libs
import React from "react";

// Molecules
import { Showcase } from "@/components/molecules";

// Utils
import { formatMoney } from "@/utils/consts";

// Styles
import * as S from "./styles";
import { Button } from "@/components/atoms";

const handlePrice = (data: any) => {
  const formatPrice = formatMoney(data.price);
  const formatPromotion = formatMoney(data.promotion);

  if (data?.promotion)
    return (
      <>
        <span>{formatPrice}</span> {formatPromotion}
      </>
    );

  return formatPrice;
};

export const DetailsProduct = ({ data }: any) => {
  return (
    <S.Container>
      <S.Gallery>
        <Showcase imagens={data.photoswipe} /* product_id={data.id} */ />
      </S.Gallery>

      <S.AboutProduct>
        <S.Price>{handlePrice(data)}</S.Price>
        <S.Descriptions>{data.description}</S.Descriptions>
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
