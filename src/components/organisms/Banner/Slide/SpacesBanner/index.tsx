// Libs
import React from "react";

// Images
import { ImgBlackboard } from "./ImgBlackboard";
import { ImgMirror } from "./ImgMirror";

// Styles
import * as S from "./styles";

export const SpacesBanner = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>
          <span>Mais sofisticação</span>
          para o seu espaço
        </S.Title>

        <S.Figure>
          <ImgBlackboard />
          <ImgMirror />
        </S.Figure>
      </S.Wrapper>
    </S.Container>
  );
};
