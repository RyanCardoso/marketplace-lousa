// Libs
import React, { useState } from "react";

// Types
import { TestimonyDTO } from "@/fragments/testimony";
import { ListProductsDTO } from "@/fragments/products";

interface ProductContextType {
  products: ListProductsDTO[];
  testimonies: TestimonyDTO[];

  handleProducts: (value: ListProductsDTO[]) => void;
  handleTestimonies: (value: TestimonyDTO[]) => void;
}

interface ProductProviderType {
  children: React.ReactNode;
}

export const ProductContext = React.createContext<Partial<ProductContextType>>(
  {}
);

const ProductProvider = ({ children }: ProductProviderType) => {
  const [products, setProducts] = React.useState<ListProductsDTO[]>([]);
  const [testimonies, setTestimonies] = useState([]);

  const handleProducts = (todo: ListProductsDTO[]) => {
    setProducts(todo);
  };

  const handleTestimonies = (value: any) => {
    setTestimonies(value);
  };

  return (
    <ProductContext.Provider
      value={{ products, testimonies, handleProducts, handleTestimonies }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
