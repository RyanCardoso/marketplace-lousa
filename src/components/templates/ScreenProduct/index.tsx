// Libs
import React, { useEffect, useState } from "react";

// Data
import { useRouter } from "next/router";
import { productData } from "@/Mock/producData";

export const ScreenProduct = () => {
  const router = useRouter();
  const { uuid } = router.query;

  const [product, setProduct] = useState<any>({});

  const handleGetProduct = () => {
    const filter = productData.find((i) => i.id === uuid);
    console.log(uuid);
    setProduct(filter);
  };

  useEffect(() => {
    handleGetProduct();
  }, []);

  return (
    <>
      <h1>{product?.name}</h1>
    </>
  );
};
