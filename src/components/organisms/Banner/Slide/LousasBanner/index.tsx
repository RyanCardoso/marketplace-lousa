// Libs
import React from "react";
import Image from "next/image";

// Styles
import * as S from "./styles";

export const LousasBanner = () => {
  const dataBenefits = [
    "Garantia de 10 anos",
    "Não mancha e não risca",
    "Muitas opções de cores",
    "Feita sob medida",
  ];

  return (
    <S.Container>
      <S.Wrapper>
        <S.Description data-aos="fade-up">
          <S.Title>Lousa em vidro</S.Title>
          <S.List>
            {dataBenefits.map((item, index) => (
              <li key={index}>
                <Image
                  src="/images/icon_verified.svg"
                  alt="ícone de verificado"
                  width="20"
                  height="20"
                />
                <p>{item}</p>
              </li>
            ))}
          </S.List>
        </S.Description>
        <S.Figure />
      </S.Wrapper>
    </S.Container>
  );
};
