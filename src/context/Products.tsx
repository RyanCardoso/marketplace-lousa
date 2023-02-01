// Libs
import React from "react";

// Types
import { ProductDTO } from "@/types/product";

interface ProductContextType {
  products: ProductDTO[];
  handleProduct: (value: ProductDTO[]) => void;
}

interface ProductProviderType {
  children: React.ReactNode;
}

export const ProductContext = React.createContext<Partial<ProductContextType>>(
  {}
);

const ProductProvider = ({ children }: ProductProviderType) => {
  const [products, setProducts] = React.useState<ProductDTO[]>([]);

  const handleProduct = (todo: ProductDTO[]) => {
    setProducts(todo);
  };

  return (
    <ProductContext.Provider value={{ products, handleProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
