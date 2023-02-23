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

  const { boards, mirrors } = useContext(ProductContext);

  const handleCurrentTab = (currentTab: number) => {
    setTab(currentTab);
  };

  const openMenu = (link: string) => {
    setIsOpen(true);
    setUrlVideo(link);
  };

  const handleMessage = (name: string, id: string) => {
    const text = `Ol%C3%A1,%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20seguinte%20produto:%0A%0A*Name*:%20${name}%0A*ID*:%20${id}`;

    window.open(`https://wa.me/5521999999999?text=${text}`);
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
                id={product?.id}
                video={product?.productVideo}
                title={product?.name}
                onClick={() => openMenu(product.productVideo.link)}
                onButtonClick={() => handleMessage(product?.name, product.id)}
              />
            ))}

          {tab === 1 &&
            mirrors?.map((product) => (
              <CardProduct
                key={product?.id}
                id={product?.id}
                video={product?.productVideo}
                title={product?.name}
                onClick={() => openMenu(product.productVideo.link)}
                onButtonClick={() => handleMessage(product?.name, product.id)}
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
