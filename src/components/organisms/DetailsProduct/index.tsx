// Libs
import React from "react";

// Atoms
import { Button } from "@/components/atoms";

// Molecules
import { Showcase } from "@/components/molecules";

// Utils
import { sendProductWhatsapp } from "@/utils/send-product-whatsapp";

// Types
import { ProductDTO } from "@/fragments/products";

// Styles
import * as S from "./styles";

interface DetailsProductType {
  data: ProductDTO;
}

export const DetailsProduct = ({ data }: DetailsProductType) => {
  const { productShowcase, description } = data ?? {};

  return (
    <S.Container>
      <S.Gallery data-aos="fade-up-right">
        <Showcase productShowcase={productShowcase} />
      </S.Gallery>

      <S.AboutProduct data-aos="fade-up-left">
        <S.Description
          dangerouslySetInnerHTML={{ __html: description?.html }}
        ></S.Description>

        <Button
          label="Solicitar orçamento pelo Whatsapp"
          width="284px"
          height="52px"
          backgroundColor="#25D366"
          onClick={() => sendProductWhatsapp(data?.name, data?.id)}
        />
      </S.AboutProduct>
    </S.Container>
  );
};
