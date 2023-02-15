// Libs
import React, { useState } from "react";

// Types
import { TestimonyDTO } from "@/fragments/testimony";
import { ListProductsDTO, ProductDTO } from "@/fragments/products";

interface ProductContextType {
  product: ProductDTO;
  products: ListProductsDTO[];
  testimonies: TestimonyDTO[];

  handleProduct: (value: ProductDTO) => void;
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
  const [product, setProduct] = useState<ProductDTO>();
  const [products, setProducts] = useState<ListProductsDTO[]>([]);
  const [testimonies, setTestimonies] = useState([]);

  const handleProduct = (item: ProductDTO) => {
    setProduct(item);
  };

  const handleProducts = (todo: ListProductsDTO[]) => {
    setProducts(todo);
  };

  const handleTestimonies = (value: any) => {
    setTestimonies(value);
  };

  return (
    <ProductContext.Provider
      value={{
        product,
        products,
        testimonies,
        handleProduct,
        handleProducts,
        handleTestimonies,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
