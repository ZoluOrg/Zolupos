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
  searchedInput: "",
  isSearching: false,
  addToPunched: (product: IProduct) => null,
  removeToPunched: (product: number) => null,
  searchProduct: (querry: string) => null,
  setSelected: (idx: number) => null,
  setSearchedInput: (s: string) => null,
  resetSearch: () => null,
  setIsSearching: (val:boolean) => null
};

let posContext = createContext(defaultValues);

export const PosContext: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Array<IProduct>>([]);
  const [punched, setPunched] = useState<Array<IProduct>>([]);
  const [searched, setSearched] = useState<Array<IProduct>>([]);
  const [selected, setSelected] = useState<number>(0);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchedInput, setSearchedInput] = useState<string>("");

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

  const search = (querry: string) => {
    const similar = products?.filter(
      (pr) =>
        pr.barCode.toLowerCase().includes(barCode.toLowerCase()) == true ||
        pr.productName.toLowerCase().includes(barCode.toLowerCase()) == true
    );
    setSearched(similar);
    console.log("searched 🔍");
  };

  const resetSearch = () => setSearched([]);

  return (
    <posContext.Provider
      value={{
        products: products,
        punched: punched,
        searched: searched,
        selected: selected,
        searchedInput: searchedInput,
        isSearching: isSearching,
        addToPunched: addPunched,
        removeToPunched: removeToPunched,
        searchProduct: search,
        setSelected: setSelected,
        setSearchedInput: setSearchedInput,
        resetSearch: resetSearch,
        setIsSearching: setIsSearching
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
