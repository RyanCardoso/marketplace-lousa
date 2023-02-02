// Libs
import React from "react";
import Link from "next/link";

// Atoms
import { Button } from "@/components/atoms";

// Syles
import * as S from "./styles";

interface CardProductType {
  img: string;
  title: string;
}

export const CardProduct = ({ img, title }: CardProductType) => {
  return (
    <S.Container>
      <S.Figure>
        <img src={img} alt="teste" />
        <Button label="Solicitar orçamento" />
      </S.Figure>

      <S.Title>{title}</S.Title>
      <Link href="#">mais detalhes</Link>
    </S.Container>
  );
};
