// Libs
import React from "react";
import Link from "next/link";

// Atoms
import { Button, ButtonPlay } from "@/components/atoms";

// Types
import { ProductVideoDTO } from "@/fragments/products";

// Syles
import * as S from "./styles";

interface CardProductType {
  id: string;
  video: ProductVideoDTO;
  title: string;
  onClick?: () => void;
  onButtonClick?: () => void;
}

export const CardProduct = ({
  id,
  video,
  title,
  onClick,
  onButtonClick,
}: CardProductType) => {
  const renderMessage = () => {
    const validate = title.length > 27;
    return validate ? `${title?.substring(0, 27)}...` : title;
  };

  return (
    <S.Container id={id} data-aos="zoom-in">
      <S.Figure>
        <img src={video?.thumbnail.url} alt={video?.thumbnail.fileName} />
        <ButtonPlay onClick={onClick} />
        <Button label="Solicitar orçamento" onClick={onButtonClick} />
      </S.Figure>

      <S.Title>{renderMessage()}</S.Title>
      <Link href={`/produto/${id}`}>mais detalhes</Link>
    </S.Container>
  );
};
