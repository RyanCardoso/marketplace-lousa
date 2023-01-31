// Libs
import React, { ReactNode } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Utils
import { formatNumberTwoLength } from "@/utils/consts";

// Styles
import * as S from "./styles";

interface BoxSliderProps {
  children: ReactNode;
}

export const BoxSlider = ({ children }: BoxSliderProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: ReactNode) => (
      <S.Dots>
        <ul>{dots}</ul>
      </S.Dots>
    ),
    customPaging: (i: number) => <div>{formatNumberTwoLength(i + 1)}</div>,
  };

  return (
    <S.Container>
      <Slider {...settings}>{children}</Slider>
    </S.Container>
  );
};
