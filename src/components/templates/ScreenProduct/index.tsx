// Libs
import React, { useContext } from "react";
import Head from "next/head";

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
import { msgMirrors, msgSlates } from "@/utils/Products/msg-products";

// Types
import { ListProductsDTO, ProductDTO } from "@/fragments/products";

// Styles
import * as S from "./styles";

export const ScreenProduct = () => {
  const { product } = useContext(ProductContext);

  const handleMsgContent = () => {
    const isSlates = product?.categorie === "Lousas";
    return isSlates ? msgSlates : msgMirrors;
  };

  return (
    <S.Container>
      <Head>
        <title>{product?.name}</title>
        <meta name="description" content={handleMsgContent()} />
      </Head>

      <Breadcrumb options={[{ label: String(product?.name), path: "" }]} />
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
