import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { IProduct } from "../interface/IProduct";
import { IProductContext } from "../interface/IProductContext";
import { getAllProducts } from "../services/Inventory/InventoryService";

const defaultValue: IProductContext = {
  products: [],
  refreshProductList: async () => {},
};

const productsContext = createContext(defaultValue);

export const ProductsContext: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<Array<IProduct>>([]);
  const refreshProductList = async () => {
    const newListOfProducts = await getAllProducts();
    setProducts(newListOfProducts);
  };
  useEffect(() => {
    refreshProductList();
  }, []);
  return (
    <productsContext.Provider value={{ products, refreshProductList }}>
      {children}
    </productsContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(productsContext);
};
