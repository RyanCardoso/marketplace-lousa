// Libs
import React from "react";

// Organisms
import { BoxSlider } from "@/components/organisms/Slider";

// Banners
import { LousasBanner } from "./LousasBanner";
import { StepsBanner } from "./StepsBanner";

// Styles
import * as S from "./styles";

export const BannerSlide = () => (
  <BoxSlider>
    <S.Slides>
      <LousasBanner />
    </S.Slides>
    <S.Slides>
      <StepsBanner />
    </S.Slides>
  </BoxSlider>
);
