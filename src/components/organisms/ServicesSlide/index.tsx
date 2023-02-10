// Libs
import React from "react";

// Organisms
import { BoxSlider } from "@/components/organisms/Slider";

// Mock
import { bannerData } from "@/Mock/bannerData";

// Styles
import * as S from "./styles";

export const ServicesSlide = () => {
  return (
    <S.Container>
      <h3>Alguns dos nossos serviços</h3>

      <BoxSlider variant="tertiary">
        {bannerData.map((item) => (
          <S.Figure key={item.name}>
            <img src={item.img} alt={item.name} />
          </S.Figure>
        ))}
      </BoxSlider>
    </S.Container>
  );
};
