import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
} from "react";
import { IProduct } from "../interface/IProduct";
import { ISearchContext } from "../interface/ISearchContext";
import { useProductsContext } from "./ProductsContext";

const defaultValue: ISearchContext = {
  toSearch: "",
  selected: 0,
  searchResult: [],
  setSelected: (toBeSelected: number) => {},
  searchProduct: (query: string) => {},
};

const searchContext = createContext(defaultValue);

export const SearchContext: FC<{ children: ReactNode }> = ({ children }) => {
  const [toSearch, setToSearch] = useState<string>("");
  const [selected, setSelected] = useState<number>(0);
  const [searchResult, setSearchResult] = useState<Array<IProduct>>([]);
  const productContext = useProductsContext();

  const searchProduct = (query: string) => {
    const filtered = productContext.products.filter(
      (prod) =>
        prod.barCode.toLowerCase().includes(query) == true ||
        prod.productName.toLowerCase().includes(query) == true
    );
    setSearchResult(filtered);
    console.log("client search event");
  };

  return (
    <searchContext.Provider
      value={{ toSearch, selected, searchResult, setSelected, searchProduct }}
    >
      {children}
    </searchContext.Provider>
  );
};

export const useSearchContext = () => {
  return useContext(searchContext);
};
