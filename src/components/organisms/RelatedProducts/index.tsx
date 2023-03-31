// Libs
import React, { useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Molecules
import { CardProduct } from "@/components/molecules";

// Organisms
import { Modal } from "@/components/organisms";

// Utils
import { sendProductWhatsapp } from "@/utils/send-product-whatsapp";

// Styles
import * as S from "./styles";
import { ListProductsDTO } from "@/fragments/products";

interface RelatedProductsType {
  data: ListProductsDTO[];
}

export const RelatedProducts = ({ data }: RelatedProductsType) => {
  const [isOpen, setIsOpen] = useState(false);
  const [urlVideo, setUrlVideo] = useState("");

  const openModal = (link: string) => {
    setIsOpen(true);
    setUrlVideo(link);
  };

  return (
    <S.Container>
      <S.Title>Produtos relacionados</S.Title>
      <S.BoxProducts>
        {data?.map((item) => (
          <CardProduct
            key={item.id}
            id={item.slug}
            video={item.productVideo}
            title={item?.name}
            onClick={() => openModal(item.productVideo.link)}
            onButtonClick={() => {
              sendProductWhatsapp(item?.name, item.id);
              alert(item.slug);
            }}
          />
        ))}
      </S.BoxProducts>

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
