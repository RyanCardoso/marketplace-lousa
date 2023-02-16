// Libs
import React, { ReactNode } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Styles
import * as S from "./styles";
import { settings } from "./config";

interface BoxSliderProps {
  product_id?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
}

export const BoxSlider = ({
  children,
  variant = "primary",
}: BoxSliderProps) => {
  return (
    <S.Container>
      <Slider {...settings[variant]}>{children}</Slider>
    </S.Container>
  );
};
