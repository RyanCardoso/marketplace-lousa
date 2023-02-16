// Libs
import React, { InputHTMLAttributes } from "react";

// Styles
import * as S from "./styles";

interface InputType extends InputHTMLAttributes<HTMLInputElement> {
  width?: string;
}

export const Input = ({ width, ...props }: InputType) => {
  return <S.Input {...props} />;
};
