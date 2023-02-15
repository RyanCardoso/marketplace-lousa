// Libs
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

// Atoms
import { Button, Line } from "@/components/atoms";

// Molecules
import { Breadcrumb } from "@/components/molecules";

// Organisms
import { DetailsProduct, RelatedProducts } from "@/components/organisms";

// Mock
import { productData } from "@/Mock/producData";

// Styles
import * as S from "./styles";

export const ScreenProduct = () => {
  const router = useRouter();
  const { uuid } = router.query;

  const [product, setProduct] = useState<any>({});

  useEffect(() => {
    if (uuid) {
      const filter = productData.find((i) => i.id === uuid);
      setProduct(filter);
    }
  }, [uuid]);

  return (
    <S.Container>
      <Breadcrumb
        options={[
          { label: "Produtos", path: "" },
          { label: product?.name, path: "" },
        ]}
      />
      <DetailsProduct data={product} />

      <S.BoxBtnMobile>
        <Button
          label="Solicitar orçamento pelo Whatsapp"
          width="none"
          height="52px"
          backgroundColor="#25D366"
        />
      </S.BoxBtnMobile>

      <Line />

      <RelatedProducts />
    </S.Container>
  );
};
