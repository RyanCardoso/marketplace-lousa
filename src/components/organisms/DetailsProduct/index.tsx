// Libs
import React, { useEffect, useState } from "react";

// Atoms
import { Button } from "@/components/atoms";

// Molecules
import { Showcase } from "@/components/molecules";

// Utils
import { sendProductWhatsapp } from "@/utils/send-product-whatsapp";

// Types
import { ProductDTO } from "@/fragments/products";

// Helpers
import { msgMirrors, msgSlates } from "@/utils/Products/msg-products";

// Styles
import * as S from "./styles";

interface DetailsProductType {
  data: ProductDTO;
}

export const DetailsProduct = ({ data }: DetailsProductType) => {
  const [isEmptyContent, setIsEmptyContent] = useState<boolean>(false);

  const { productShowcase, description, categorie } = data ?? {};

  const handleValidationContent = () => {
    if (!description) {
      setIsEmptyContent(true);
      return;
    }

    const element: HTMLDivElement = document.createElement("div");
    element.innerHTML = description?.html;

    const validate = element.textContent?.trim().length === 0;
    setIsEmptyContent(validate);
  };

  const renderMessages = () => (
    <p>{categorie === "Lousas" ? msgSlates : msgMirrors}</p>
  );

  useEffect(() => {
    handleValidationContent();
  });

  return (
    <S.Container>
      <S.Gallery data-aos="fade-up-right">
        <Showcase productShowcase={productShowcase} />
      </S.Gallery>

      <S.AboutProduct data-aos="fade-up-left">
        {isEmptyContent ? (
          renderMessages()
        ) : (
          <S.Description
            dangerouslySetInnerHTML={{ __html: description?.html }}
          />
        )}

        <Button
          label="Solicitar orçamento pelo Whatsapp"
          width="284px"
          height="52px"
          backgroundColor="#25D366"
          onClick={() => sendProductWhatsapp(data?.name, data?.id)}
        />
      </S.AboutProduct>
    </S.Container>
  );
};
