import React, { createContext, useContext, useEffect, useState } from "react";
import { IProductContext } from "../../interfaces/contexts/IProductContext";
import { IProduct } from "../../interfaces/inventory/IProduct";
import { getProducts } from "../../services/ProductServices";

const defaultProductContextValue: IProductContext = {
  products: [],
};

const ProductContext = createContext(defaultProductContextValue);

export const ProductProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Array<IProduct>>([]);

  useEffect(() => {
    const getFromServer = async () => {
      let productsFromServer = await getProducts();
      setProducts(productsFromServer?.value!);
			console.log("products recived");
    };
		getFromServer();
  }, []);

  return <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>;
};

export const useProductContext = () => {
	return useContext(ProductContext);
}
