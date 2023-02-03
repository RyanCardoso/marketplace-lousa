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
  type?: "primary" | "secondary" | "tertiary";
}

export const BoxSlider = ({
  children,
  type = "primary",
  product_id,
}: BoxSliderProps) => {
  return (
    <S.Container>
      <Slider {...settings(product_id)[type]}>{children}</Slider>
    </S.Container>
  );
};
