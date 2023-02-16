// Libs
import React, { ButtonHTMLAttributes } from "react";

// Styles
import * as S from "./styles";

export const ButtonPlay = ({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <S.Container {...props}>
      <S.Play />
    </S.Container>
  );
};
