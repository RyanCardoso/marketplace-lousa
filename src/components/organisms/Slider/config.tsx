// Mock
import { productData } from "@/Mock/producData";

// Styes
import * as S from "./styles";

const handleSrc = (product_id: string, index: number) => {
  const find = productData.find((p) => p.id === product_id);

  const imgObj = find?.photoswipe[index];
  const validateSrc = imgObj?.type === "img" ? imgObj?.src : imgObj?.thumbnail;

  return <img src={validateSrc} alt={find?.photoswipe[index].alt} />;
};

export const settings = (product_id: string | undefined) => {
  return {
    primary: {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <></>,
      prevArrow: <></>,
      appendDots: (dots: React.ReactNode) => (
        <S.Dots>
          <ul>{dots}</ul>
        </S.Dots>
      ),
      customPaging: (i: number) => <div>{i + 1}</div>,
    },
    secondary: {
      appendDots: (dots: React.ReactNode) => (
        <S.AppendDots>
          <ul>{dots}</ul>
        </S.AppendDots>
      ),
      customPaging: (i: any) => (
        <S.DotsImg>{product_id && handleSrc(product_id, i)}</S.DotsImg>
      ),
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    },
    tertiary: {
      dots: false,
      infinite: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      nextArrow: (
        <S.SampleNextArrow>
          <img src="/images/arrow.svg" alt="icon_arrow" />
        </S.SampleNextArrow>
      ),
      prevArrow: (
        <S.SamplePrevArrow>
          <img src="/images/arrow.svg" alt="icon_arrow" />
        </S.SamplePrevArrow>
      ),
    },
  };
};
