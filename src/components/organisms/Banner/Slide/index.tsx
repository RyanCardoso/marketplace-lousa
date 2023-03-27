// Libs
import React from "react";

// Organisms
import { BoxSlider } from "@/components/organisms/Slider";

// Banners
import { LousasBanner } from "./LousasBanner";
import { StepsBanner } from "./StepsBanner";
import { SpacesBanner } from "./SpacesBanner";

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
    <S.Slides>
      <SpacesBanner />
    </S.Slides>
  </BoxSlider>
);
