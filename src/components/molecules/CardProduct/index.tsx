// Libs
import React from "react";
import Link from "next/link";

// Atoms
import { Button, ButtonPlay } from "@/components/atoms";

// Syles
import * as S from "./styles";

interface CardProductType {
  img: string;
  title: string;
}

export const CardProduct = ({ img, title }: CardProductType) => {
  return (
    <S.Container data-aos="zoom-in">
      <S.Figure>
        <img src={img} alt="teste" />
        <ButtonPlay />
        <Button label="Solicitar orçamento" />
      </S.Figure>

      <S.Title>{title}</S.Title>
      <Link href="#">mais detalhes</Link>
    </S.Container>
  );
};
