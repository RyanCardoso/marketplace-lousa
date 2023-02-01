// Libs
import React from "react";

// Organisms
import { BoxSlider } from "@/components/organisms";

// Types
import { PhotoswipeDTO } from "@/types/product";

// Styles
import * as S from "./styles";

interface PhotoswipeProps {
  product_id: string;
  imagens: PhotoswipeDTO[];
}

export const Photoswipe = ({ imagens, product_id }: PhotoswipeProps) => {
  return (
    <BoxSlider type="secondary" product_id={product_id}>
      {imagens?.map((item) => (
        <S.Card key={item.src}>
          {item.type === "img" ? (
            <img src={item.src} alt={item.alt} />
          ) : (
            <video controls style={{ width: "500px", height: "500px" }}>
              <source src={item.src} />
            </video>
          )}
        </S.Card>
      ))}
    </BoxSlider>
  );
};
