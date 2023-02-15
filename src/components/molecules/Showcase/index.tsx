// Libs
import React, { useState, useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Atoms
import { ImageZoom } from "@/components/atoms";

// Organisms
/* import { BoxSlider } from "@/components/organisms"; */

// Types
import { ProductShowCaseDTO } from "@/fragments/products";

// Styles
import * as S from "./styles";

interface PhotoswipeProps {
  /* product_id: string; */
  productShowcase: ProductShowCaseDTO;
}

export const Showcase = ({
  productShowcase /* product_id */,
}: PhotoswipeProps) => {
  const [nav1, setNav1] = useState<any>(null);
  const [nav2, setNav2] = useState<any>(null);

  const vidRef = useRef<any>(null);

  const { images, productVideos } = productShowcase ?? {};

  const pauseVideo = () => {
    if (vidRef.current) {
      /* vidRef.current.pause(); */
    }
  };

  return (
    <>
      <S.BoxCard>
        <Slider
          asNavFor={nav2}
          infinite={false}
          ref={(slider1) => setNav1(slider1)}
          afterChange={() => pauseVideo()}
        >
          {images?.map((image) => (
            <S.Card key={image.id}>
              <ImageZoom img={{ src: image.url, alt: image.fileName }} />
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

      {/* <BoxSlider type="secondary" product_id={product_id}>
      {imagens?.map((item) => (
        <S.Card key={item.src}>
          {item.type === "img" ? (
            <img src={item.src} alt={item.alt} />
          ) : (
            <video controls style={{ width: "500px", height: "500px" }}>
              <source src={item.src} />
            </video>
          )}
        </S.Card>
      ))}
    </BoxSlider> */}

      {/* <div>
        {imagens?.slice(0, 1).map((item) => (
          <S.Figure></S.Figure>
        ))}
      </div> */}
    </>
  );
};
