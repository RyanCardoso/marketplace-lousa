// Libs
import React, { ButtonHTMLAttributes } from "react";

// Styles
import * as S from "./styles";

interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  width?: string;
  isIcon?: boolean;
  onClick?: () => void;
}

export const Button = ({
  label,
  width,
  isIcon = false,
  ...props
}: ButtonType) => {
  return (
    <S.Container width={width} {...props}>
      {label}
      {isIcon && <img src="./images/whatsapp.svg" alt="icon-whatsapp" />}
    </S.Container>
  );
};
