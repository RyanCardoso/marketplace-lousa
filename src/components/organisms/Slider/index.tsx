// Libs
import React, { ReactNode } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Utils
import { formatNumberTwoLength } from "@/utils/consts";

// Styles
import * as S from "./styles";
import { bannerData } from "@/Mock/bannerData";

interface BoxSliderProps {
  children: ReactNode;
  type?: "primary" | "secondary";
}

export const BoxSlider = ({ children, type = "primary" }: BoxSliderProps) => {
  const settings = {
    primary: {
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
    },
    secondary: {
      appendDots: (dots: ReactNode) => (
        <S.AppendDots>
          <ul>{dots}</ul>
        </S.AppendDots>
      ),
      customPaging: (i: any) => (
        <S.DotsImg>
          <img src={bannerData[i]?.img} />
        </S.DotsImg>
      ),
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  };

  return (
    <S.Container>
      <Slider {...settings[type]}>{children}</Slider>
    </S.Container>
  );
};
