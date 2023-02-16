// Libs
import React, { useState, useContext } from "react";

// Contexts
import { ProductContext } from "@/context/Products";

// Molecules
import { CardProduct } from "@/components/molecules";

// Styles
import * as S from "./styles";
import { Modal } from "../Modal";

export const ListProducts = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [urlVideo, setUrlVideo] = useState<string>(
    "https://drive.google.com/file/d/1NQlhO7-8--k4T74cjE5OYVMNAXIIuylI/preview"
  );

  const { products } = useContext(ProductContext);

  const openMenu = () => {
    setIsOpen(true);
  };

  return (
    <S.Container>
      <S.Wrapper>
        {products?.map((product) => (
          <CardProduct
            key={product?.id}
            id={product?.id}
            video={product?.productVideo}
            title={product?.name}
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
