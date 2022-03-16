import React, { createContext, useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { IProduct } from "../interfaces/IProduct";
import { IPosContext } from "../interfaces/PosContext/IPosContext";
import { getProducts } from "../modules/inventory/Helper";
import "react-toastify/dist/ReactToastify.css";

const defaultValues: IPosContext = {
  products: [],
  punched: [],
  searched: [],
  isSearching: false,
  addToPunched: (product: IProduct) => null,
  removeToPunched: (product: number) => null,
  searchProduct: (barCode: string) => null
};

let posContext = createContext(defaultValues);

export const PosContext: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Array<IProduct>>([]);
  const [punched, setPunched] = useState<Array<IProduct>>([]);
  const [searched, setSearch] = useState<Array<IProduct>>([]);
  const [isSearching, setSearching] = useState<boolean>(true);

  useEffect(() => {
    const doEffect = async () => {
      let response = await getProducts();
      setProducts(response?.value!);
    };
    doEffect();
  }, []);
  const addPunched = async (product: IProduct) => {
    setPunched((old) => [...old!, product]);
    console.log("🤛");
  };
  const removeToPunched = async (product: number) => {
    setPunched(
      punched?.filter((prPunched) => prPunched.productId !== product)!
    );
    console.log("🤛 out");
  };
  const search = (barCode: string) => {
    const similar = products?.filter(pr => pr.barCode == barCode);
    setSearch(similar);
    console.log("searched 🔍");
  }
  return (
    <posContext.Provider
      value={{
        products: products,
        punched: punched,
        searched: searched,
        isSearching: isSearching,
        addToPunched: addPunched,
        removeToPunched: removeToPunched,
        searchProduct: search
      }}
    >
      {children}
      <div className="absolute">
        <ToastContainer />
      </div>
    </posContext.Provider>
  );
};

export const usePosContext = () => {
  return useContext(posContext);
};
