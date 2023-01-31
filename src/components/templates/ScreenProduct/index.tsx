// Libs
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

// Mock
import { productData } from "@/Mock/producData";
import { Breadcrumb } from "@/components/molecules";

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
    <>
      <h1>{product?.name}</h1>
      <Breadcrumb
        options={[
          { label: "Produtos", path: "/produtos" },
          { label: product.name, path: "" },
        ]}
      />
    </>
  );
};
