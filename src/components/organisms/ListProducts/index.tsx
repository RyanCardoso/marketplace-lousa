// Libs
import React, { useState } from "react";

// Molecules
import { CardProduct } from "@/components/molecules";

// Mock
import { productData } from "@/Mock/producData";

// Styles
import * as S from "./styles";
import { Modal } from "../Modal";

export const ListProducts = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [urlVideo, setUrlVideo] = useState<string>(
    "https://drive.google.com/file/d/1NQlhO7-8--k4T74cjE5OYVMNAXIIuylI/preview"
  );

  const openMenu = () => {
    setIsOpen(true);
  };

  return (
    <S.Container>
      <S.Wrapper>
        {productData.map((p, index) => (
          <CardProduct
            key={index}
            img=""
            title="Lousa de video"
            onClick={() => openMenu()}
          />
        ))}
      </S.Wrapper>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <S.Iframe
          src={`${urlVideo}`}
          allowFullScreen
          allow="autoplay"
        ></S.Iframe>
      </Modal>
    </S.Container>
  );
};
