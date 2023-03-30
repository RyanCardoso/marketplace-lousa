// Libs
import React, { useState, useContext } from "react";

// Contexts
import { ProductContext } from "@/context/Products";

// Fragments
import { ListProductsDTO } from "@/fragments/products";

// Hooks
import useDeviceType from "@/hooks/useDeviceType";

// Organisms
import { Modal } from "@/components/organisms";

// Molecules
import { CardProduct, Tabs } from "@/components/molecules";

// Utils
import { sendProductWhatsapp } from "@/utils/send-product-whatsapp";

// Styles
import * as S from "./styles";
import { Button } from "@/components/atoms";

export const ListProducts = () => {
  const [quantities, setQuantities] = useState(4);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [urlVideo, setUrlVideo] = useState<string>("");
  const [tab, setTab] = useState<number>(0);

  const { boards, mirrors } = useContext(ProductContext);
  const isMobile = useDeviceType();

  const handleCurrentTab = (currentTab: number) => {
    setTab(currentTab);
  };

  const openModal = (link: string) => {
    setIsOpen(true);
    setUrlVideo(link);
  };

  const handleSliceMap = (item: ListProductsDTO[] | undefined) => {
    if (!isMobile) return item;
    return item?.slice(0, quantities);
  };

  const handleLoadMoreProducts = (item: ListProductsDTO[]) => {
    let sum: number = quantities;
    let subtraction: number = item?.length - quantities;

    if (subtraction < 4) {
      setQuantities(sum + subtraction);
      return;
    }

    sum = quantities + 4;
    subtraction = item?.length - sum;

    setQuantities(sum);
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
            handleSliceMap(boards)?.map((product) => (
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
            handleSliceMap(mirrors)?.map((product) => (
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

          {isMobile && tab === 0 && quantities !== boards?.length && (
            <Button
              className="load-more-products"
              label="Carregar mais lousas"
              onClick={() =>
                handleLoadMoreProducts(boards as ListProductsDTO[])
              }
            />
          )}

          {tab === 0 && (
            <S.Description>
              <h2>Sobre a Lousa de vidro</h2>
              <p>
                Atraente e com a garantia de 10 anos, o Lousa em Vidro permite
                uma gama completa de possibilidades estéticas e funcionais.
                Usando nossa experiência em fabricação para atender a todas as
                especificações técnicas, incluindo tipo, tamanho e estilo, a
                CompanyBoard visa consistentemente fornecer a melhor qualidade,
                valor e custo para nossos clientes em cada pedido de Lousa.
              </p>
              <p>
                Com os recursos das nossas impressoras digitais, podemos
                imprimir logotipos e padrões personalizados para incorporar
                marcas, calendários, grades de produtos, logotipos de equipes e
                muito mais em nossas lousas de vidro. As nossas Lousas de vidro
                também podem ser centros de mesa de apresentação, duplicando
                como telas de projeção quando necessário.
              </p>
            </S.Description>
          )}
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
