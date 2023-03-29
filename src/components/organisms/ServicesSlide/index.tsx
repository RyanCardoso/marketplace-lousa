// Libs
import React, { useContext } from "react";

// Contexts
import { ServicesContext } from "@/context/Services";

// Fragments
import { ServicesDTO } from "@/fragments/services";

// Organisms
import { BoxSlider } from "@/components/organisms/Slider";

// Styles
import * as S from "./styles";

export const ServicesSlide = () => {
  const { services } = useContext(ServicesContext);

  const renderFile = (item: ServicesDTO) => {
    const { fileName, url } = item.image ?? {};

    return (
      <S.Figure key={item.id}>
        {item.video === null ? (
          <img src={url} alt={fileName} />
        ) : (
          <iframe
            key={item.id}
            src={item.video}
            allow="autoplay"
            allowFullScreen
          />
        )}
      </S.Figure>
    );
  };

  return (
    <S.Container>
      <h3>Alguns dos nossos serviços</h3>

      <BoxSlider variant="tertiary">
        {services?.map((item) => renderFile(item))}
      </BoxSlider>
    </S.Container>
  );
};
