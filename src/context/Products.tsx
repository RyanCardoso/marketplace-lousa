// Libs
import React, { useState } from "react";

// Types
import { TestimonyDTO } from "@/fragments/testimony";
import { ListProductsDTO, ProductDTO } from "@/fragments/products";

interface ProductContextType {
  product: ProductDTO;
  boards: ListProductsDTO[];
  mirrors: ListProductsDTO[];
  testimonies: TestimonyDTO[];
  handleProduct: (value: ProductDTO) => void;
  handleBoards: (value: ListProductsDTO[]) => void;
  handleMirrors: (value: ListProductsDTO[]) => void;
  handleTestimonies: (value: TestimonyDTO[]) => void;
}

interface ProductProviderType {
  children: React.ReactNode;
}

export const ProductContext = React.createContext<Partial<ProductContextType>>(
  {}
);

const ProductProvider = ({ children }: ProductProviderType) => {
  const [product, setProduct] = useState<ProductDTO>();
  const [boards, setBoards] = useState<ListProductsDTO[]>([]);
  const [mirrors, setMirrors] = useState<ListProductsDTO[]>([]);

  const [testimonies, setTestimonies] = useState([]);

  const handleProduct = (item: ProductDTO) => {
    setProduct(item);
  };

  const handleBoards = (todo: ListProductsDTO[]) => {
    setBoards(todo);
  };

  const handleMirrors = (todo: ListProductsDTO[]) => {
    setMirrors(todo);
  };

  const handleTestimonies = (value: any) => {
    setTestimonies(value);
  };

  return (
    <ProductContext.Provider
      value={{
        product,
        boards,
        mirrors,
        testimonies,
        handleProduct,
        handleBoards,
        handleMirrors,
        handleTestimonies,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
