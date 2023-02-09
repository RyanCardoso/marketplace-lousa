// Libs
import React, { useState } from "react";

// Types
import { ProductDTO } from "@/types/product";

import { TestimonyDTO } from "@/fragments/testimony";

interface ProductContextType {
  products: ProductDTO[];
  testimonies: TestimonyDTO[];

  handleProduct: (value: ProductDTO[]) => void;
  handleTestimonies: (value: TestimonyDTO[]) => void;
}

interface ProductProviderType {
  children: React.ReactNode;
}

export const ProductContext = React.createContext<Partial<ProductContextType>>(
  {}
);

const ProductProvider = ({ children }: ProductProviderType) => {
  const [products, setProducts] = React.useState<ProductDTO[]>([]);
  const [testimonies, setTestimonies] = useState([]);

  const handleProduct = (todo: ProductDTO[]) => {
    setProducts(todo);
  };

  const handleTestimonies = (value: any) => {
    setTestimonies(value);
  };

  return (
    <ProductContext.Provider
      value={{ products, testimonies, handleProduct, handleTestimonies }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
