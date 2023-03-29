// Libs
import React, { useState } from "react";

// Types
import { ServicesDTO } from "@/fragments/services";

interface ServicesContextType {
  services: ServicesDTO[];
  handleServices: (value: ServicesDTO[]) => void;
}

interface ProductProviderType {
  children: React.ReactNode;
}

export const ServicesContext = React.createContext<
  Partial<ServicesContextType>
>({});

const ProductProvider = ({ children }: ProductProviderType) => {
  const [services, setServices] = useState<ServicesDTO[]>();

  const handleServices = (item: ServicesDTO[]) => {
    setServices(item);
  };

  return (
    <ServicesContext.Provider
      value={{
        services,
        handleServices,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
};

export default ProductProvider;
