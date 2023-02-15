// Libs
import React from "react";
import Link from "next/link";

// Atoms
import { Button } from "@/components/atoms";

// Types
import { ProductVideoDTO } from "@/fragments/products";

// Syles
import * as S from "./styles";

interface CardProductType {
  id: string;
  video: ProductVideoDTO;
  title: string;
}

export const CardProduct = ({ id, video, title }: CardProductType) => {
  return (
    <S.Container id={id} data-aos="zoom-in">
      <S.Figure>
        <img src={video?.thumbnail.url} alt={video?.thumbnail.fileName} />
        <Button label="Solicitar orçamento" />
      </S.Figure>

      <S.Title>{title}</S.Title>
      <Link href={`/produto/${id}`}>mais detalhes</Link>
    </S.Container>
  );
};
