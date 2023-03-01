// Libs
import React, { useState, useRef } from "react";
import ImageZoom from "react-image-zooom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Types
import { ProductShowCaseDTO } from "@/fragments/products";

// Styles
import * as S from "./styles";

interface PhotoswipeProps {
  productShowcase: ProductShowCaseDTO;
}

export const Showcase = ({ productShowcase }: PhotoswipeProps) => {
  const [nav1, setNav1] = useState<any>(null);
  const [nav2, setNav2] = useState<any>(null);


  const { images, productVideos } = productShowcase ?? {};

  return (
    <>
      <S.BoxCard>
        <Slider
          asNavFor={nav2}
          infinite={false}
          ref={(slider1) => setNav1(slider1)}
        >
          {images?.map((image) => (
            <S.Card key={image.id}>
              <ImageZoom src={image.url} alt={image.fileName} />
            </S.Card>
          ))}

          {productVideos?.map((video) => (
            <S.Card key={video?.id}>
              <iframe
                /* ref={vidRef} */
                src={video?.link}
                title=""
                allow="autoplay"
                allowFullScreen
              ></iframe>
            </S.Card>
          ))}
        </Slider>
      </S.BoxCard>

      <S.BoxThumbnail>
        <Slider
          asNavFor={nav1}
          ref={(slider2) => setNav2(slider2)}
          slidesToShow={4}
          infinite={false}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          {images?.map((image) => (
            <S.Thumbnail key={image?.id}>
              <img src={image?.url} alt={image?.fileName} />
            </S.Thumbnail>
          ))}

          {productVideos?.map((video) => (
            <S.Thumbnail key={video?.id}>
              <img src={video?.thumbnail.url} alt={video?.thumbnail.fileName} />
            </S.Thumbnail>
          ))}
        </Slider>
      </S.BoxThumbnail>
    </>
  );
};
