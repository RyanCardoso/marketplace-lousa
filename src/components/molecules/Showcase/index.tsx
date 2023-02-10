// Libs
import React, { useState, useRef } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Types
import { PhotoswipeDTO } from "@/types/product";

// Styles
import * as S from "./styles";
import Slider from "react-slick";
import { ImageZoom } from "@/components/atoms";

interface PhotoswipeProps {
  imagens: PhotoswipeDTO[];
}

export const Showcase = ({ imagens }: PhotoswipeProps) => {
  const [nav1, setNav1] = useState<any>(null);
  const [nav2, setNav2] = useState<any>(null);

  const vidRef = useRef<any>(null);

  const pauseVideo = () => {
    if (vidRef.current) {
      vidRef.current.pause();
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
          {imagens?.map((item) => (
            <S.Card key={item.src}>
              {item.type === "img" && <ImageZoom img={item} />}
              {item.type === "video" && (
                <video
                  ref={vidRef}
                  controls
                  style={{ width: "500px", height: "500px" }}
                >
                  <source src={item.src} />
                </video>
              )}
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
          {imagens?.map((item, index) => (
            <S.Thumbnail key={index}>
              <img
                src={item.type === "img" ? item.src : item.thumbnail}
                alt={item.alt}
              />
            </S.Thumbnail>
          ))}
        </Slider>
      </S.BoxThumbnail>
    </>
  );
};
