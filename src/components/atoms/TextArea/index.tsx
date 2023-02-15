// Libs
import React, { TextareaHTMLAttributes } from "react";

// Styles
import * as S from "./styles";

export const TextArea = ({
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return <S.TextArea {...props}  />;
};
