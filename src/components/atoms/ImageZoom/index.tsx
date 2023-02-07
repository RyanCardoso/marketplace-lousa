// Libs
import React, { useState } from "react";

// Styles
import * as S from "./styles";

interface ImageZoomTypes {
  img: {
    src: string;
    alt: string;
  };
}

export const ImageZoom = ({ img }: ImageZoomTypes) => {
  const [style, setStyle] = useState({
    backgroundPosition: "50% 50%",
    backgroundImage: "",
  });

  const handleMouseMove = (e: any, img: string) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();

    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;

    setStyle({
      backgroundPosition: `${x}% ${y}%`,
      backgroundImage: `url(${img})`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      backgroundPosition: "50% 50%",
      backgroundImage: "",
    });
  };

  return (
    <S.Figure
      onMouseMove={(e) => handleMouseMove(e, img.src)}
      onMouseLeave={() => handleMouseLeave()}
      style={style}
    >
      <img src={img.src} alt={img.alt} />
    </S.Figure>
  );
};
