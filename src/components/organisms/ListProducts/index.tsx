// Libs
import React, { useState, useContext } from "react";

// Contexts
import { ProductContext } from "@/context/Products";

// Organisms
import { Modal } from "@/components/organisms";

// Molecules
import { CardProduct, Tabs } from "@/components/molecules";

// Utils
import { sendProductWhatsapp } from "@/utils/send-product-whatsapp";

// Styles
import * as S from "./styles";

export const ListProducts = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [urlVideo, setUrlVideo] = useState<string>("");
  const [tab, setTab] = useState<number>(0);

  const { boards, mirrors } = useContext(ProductContext);

  const handleCurrentTab = (currentTab: number) => {
    setTab(currentTab);
  };

  const openModal = (link: string) => {
    setIsOpen(true);
    setUrlVideo(link);
  };

  return (
    <S.Container>
      <S.Wrapper>
        <Tabs
          items={["Lousa de vidro", "Espelhos"]}
          onChangeTab={handleCurrentTab}
        />

        <S.List>
          {tab === 0 &&
            boards?.map((product) => (
              <CardProduct
                key={product?.id}
                id={product?.slug}
                video={product?.productVideo}
                title={product?.name}
                onClick={() => openModal(product.productVideo.link)}
                onButtonClick={() =>
                  sendProductWhatsapp(product?.name, product.id)
                }
              />
            ))}

          {tab === 1 &&
            mirrors?.map((product) => (
              <CardProduct
                key={product?.id}
                id={product?.slug}
                video={product?.productVideo}
                title={product?.name}
                onClick={() => openModal(product.productVideo.link)}
                onButtonClick={() =>
                  sendProductWhatsapp(product?.name, product.id)
                }
              />
            ))}
        </S.List>
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
