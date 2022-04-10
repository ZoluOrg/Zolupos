import React, { createContext, Suspense, useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ScreenLoader } from "../../components/UI/ScreenLoader";
import { IProductContext } from "../../interfaces/contexts/IProductContext";
import { IProduct } from "../../interfaces/inventory/IProduct";
import { getProducts } from "../../services/products/ProductServices";

const defaultProductContextValue: IProductContext = {
  products: [],
};

const ProductContext = createContext(defaultProductContextValue);

export const ProductProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Array<IProduct>>([]);
  const {isLoading, data, error} = useQuery("allProducts",getProducts);

  useEffect(() => {
    setProducts(data!);
  }, [data])

  if (isLoading) {
    return <ScreenLoader/>
  } 
  if (error) {
    return <p>Something went wrong</p>
  }
  return (
      <ProductContext.Provider value={{products }}>
        {children}
      </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
