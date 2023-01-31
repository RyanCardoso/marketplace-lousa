// Libs
import React from "react";

// Organisms
import { BoxSlider } from "@/components/organisms";

// Styles
import * as S from "./styles";

interface PhotoswipeProps {
  imagens: {
    id: string;
    name: string;
    img: string;
  }[];
}

export const Photoswipe = ({ imagens }: PhotoswipeProps) => {
  return (
    <BoxSlider type="secondary">
      {imagens.map((item) => (
        <S.Card key={item.id} className="teste">
          <img src={item.img} alt={item.name} />
        </S.Card>
      ))}
    </BoxSlider>
  );
};
