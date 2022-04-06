import React, { createContext, useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { IProduct } from "../interfaces/IProduct";
import { IPosContext } from "../interfaces/PosContext/IPosContext";
import { getProducts } from "../modules/inventory/Helper";
import "react-toastify/dist/ReactToastify.css";
import { IPunched } from "../interfaces/transaction/IPunched";

const defaultValues: IPosContext = {
  products: [],
  punched: [],
  searched: [],
  selected: 0,
  searchedInput: "",
  isSearching: false,
  addToPunched: (barCode: string) => null,
  removeToPunched: (product: number) => null,
  searchProduct: (querry: string) => null,
  setSelected: (idx: number) => null,
  setSearchedInput: (s: string) => null,
  resetSearch: () => null,
  setIsSearching: (val: boolean) => null,
  setPunchedQuantity: (qty: number, id: number) => null,
  setDiscount: (qty: number, id: number) => null,
};

let posContext = createContext(defaultValues);

export const PosContext: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Array<IProduct>>([]);
  const [punched, setPunched] = useState<Array<IPunched>>([]);
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

  const addPunched = async (barCode: string) => {
    const product = products.filter((prds) => prds.barCode == barCode);
    if (product.length == 1) {
      const punch: IPunched = { Product: product[0], Quantity: 0 };
      setPunched((old) => [...old, punch]);
      console.log(punched);
    }
    if (product.length > 1) {
      toast.error(`Error. "${barCode}" is being used by multiple products`);
    }
  };

  const removeToPunched = async (product: number) => {
    setPunched(
      punched?.filter((prPunched) => prPunched.Product.productId !== product)!
    ); 
    console.log("🤛 out");
  };

  const search = (query: string) => {
    const similar = products?.filter(
      (pr) =>
        pr.barCode.toLowerCase().includes(query.toLowerCase()) == true ||
        pr.productName.toLowerCase().includes(query.toLowerCase()) == true
    );
    setSearched(similar);
    console.log("searched 🔍");
  };

  const resetSearch = () => setSearched([]);

  const setPunchedQuantity = (qty: number, id:number ) => {

  }

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
        setIsSearching: setIsSearching,
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
