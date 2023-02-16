// Libs
import React, { useState, useContext } from "react";

// Contexts
import { ProductContext } from "@/context/Products";

// Organisms
import { Modal } from "@/components/organisms";

// Molecules
import { CardProduct, Tabs } from "@/components/molecules";

// Styles
import * as S from "./styles";

export const ListProducts = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [urlVideo, setUrlVideo] = useState<string>("");
  const [tab, setTab] = useState<number>(0);

  const { products } = useContext(ProductContext);

  const handleCurrentTab = (currentTab: number) => {
    setTab(currentTab);
  };

  const openMenu = (link: string) => {
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
            products?.map((product) => (
              <CardProduct
                key={product?.id}
                id={product?.id}
                video={product?.productVideo}
                title={product?.name}
                onClick={() => openMenu(product.productVideo.link)}
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
