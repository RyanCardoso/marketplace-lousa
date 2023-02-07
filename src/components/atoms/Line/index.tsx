// Libs
import React from "react";

// Styles
import * as S from "./styles";

interface LineType {
  width?: string;
  margin?: string;
}

export const Line = ({ width, margin }: LineType) => (
  <S.Container width={width} margin={margin} />
);
