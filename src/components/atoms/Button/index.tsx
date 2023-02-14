// Libs
import React, { ButtonHTMLAttributes } from "react";
import { Loader } from "../Loader";

// Styles
import * as S from "./styles";

interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  width?: string;
  height?: string;
  color?: string;
  borderColor?: string;
  backgroundColor?: string;
  isIcon?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
}

export const Button = ({
  label,
  width,
  height,
  color,
  borderColor,
  backgroundColor,
  isIcon = false,
  isLoading = false,
  ...props
}: ButtonType) => {
  return (
    <S.Container
      width={width}
      height={height}
      color={color}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      {...props}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {label}
          {isIcon && <img src="/images/whatsapp.svg" alt="icon-whatsapp" />}
        </>
      )}
    </S.Container>
  );
};
