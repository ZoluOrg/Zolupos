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
  selected: 0,
  addToPunched: (product: IProduct) => null,
  removeToPunched: (product: number) => null,
  searchProduct: (barCode: string) => null,
  setSelected: (idx: number) => null,
  resetSearched: () => null
};

let posContext = createContext(defaultValues);

export const PosContext: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Array<IProduct>>([]);
  const [punched, setPunched] = useState<Array<IProduct>>([]);
  const [searched, setSearched] = useState<Array<IProduct>>([]);
  const [isSearching, setSearching] = useState<boolean>(false);
  const [selected, setSel] = useState<number>(0);

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
    const similar = products?.filter(
      (pr) =>
        pr.barCode.includes(barCode) == true ||
        pr.productName.includes(barCode) == true
    );
    setSearched(similar);
    console.log("searched 🔍");
  };

  const setSelected = (idx: number) => {
    setSel(idx);
  }
  
  const resetSearched = () => {
    
  }
  return (
    <posContext.Provider
      value={{
        products: products,
        punched: punched,
        searched: searched,
        selected: selected,
        addToPunched: addPunched,
        removeToPunched: removeToPunched,
        searchProduct: search,
        setSelected: setSelected,
        resetSearched: resetSearched
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
