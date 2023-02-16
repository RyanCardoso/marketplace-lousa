// Libs
import React, { useContext } from "react";

// Contexts
import { ProductContext } from "@/context/Products";

// Atoms
import { Button, Line } from "@/components/atoms";

// Molecules
import { Breadcrumb } from "@/components/molecules";

// Organisms
import { DetailsProduct, RelatedProducts } from "@/components/organisms";

// Types
import { ListProductsDTO, ProductDTO } from "@/fragments/products";

// Styles
import * as S from "./styles";

export const ScreenProduct = () => {
  const { product } = useContext(ProductContext);

  return (
    <S.Container>
      <Breadcrumb
        options={[
          { label: "Produtos", path: "" },
          { label: String(product?.name), path: "" },
        ]}
      />
      <DetailsProduct data={product as ProductDTO} />

      <S.BoxBtnMobile>
        <Button
          label="Solicitar orçamento pelo Whatsapp"
          width="none"
          height="52px"
          backgroundColor="#25D366"
        />
      </S.BoxBtnMobile>

      <Line />

      <RelatedProducts data={product?.relatedproducts as ListProductsDTO[]} />
    </S.Container>
  );
};
