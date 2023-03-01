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

// Utils
import { sendProductWhatsapp } from "@/utils/send-product-whatsapp";

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
      <S.BoxBtnMobile>
        <Button
          label="Solicitar orçamento pelo Whatsapp"
          width="none"
          height="52px"
          backgroundColor="#25D366"
          onClick={() =>
            sendProductWhatsapp(String(product?.name), String(product?.id))
          }
        />
      </S.BoxBtnMobile>

      <DetailsProduct data={product as ProductDTO} />

      <Line />

      <RelatedProducts data={product?.relatedproducts as ListProductsDTO[]} />
    </S.Container>
  );
};
