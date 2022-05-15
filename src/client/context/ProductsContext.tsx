import React, { FC, ReactNode, useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { IProduct } from "../interface/IProduct";
import { IProductContext } from "../interface/IProductContext";
import { getAllProducts } from "../services/Inventory/InventoryService";

const defaultValue: IProductContext = {
  products: [],
  refreshProductList: async () => {},
};

const productContext = createContext(defaultValue);

export const ProductsContext: FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Array<IProduct>>([]);
  const refreshProductList = async () => {
    let productsNew = await getAllProducts();
    setProducts(productsNew);
  };
  useEffect(() => {
    refreshProductList();
  }, [])
  return (
    <productContext.Provider value={{ products, refreshProductList }}>
      {children}
    </productContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(productContext);
};
