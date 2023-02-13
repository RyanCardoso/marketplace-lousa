// Libs
import React from "react";

// Styles
import * as S from "./styles";

export interface LineType extends S.LineStylesTypes {}

export const Line = ({ width, maxWidth, margin }: LineType) => (
  <S.Container width={width} maxWidth={maxWidth} margin={margin} />
);
