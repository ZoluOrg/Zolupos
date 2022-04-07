import React, { createContext, useContext, useState } from "react";
import { ISearchContext } from "../../interfaces/contexts/ISearchContext";
import { IProduct } from "../../interfaces/inventory/IProduct";
import { useProductContext } from "./ProductContext";

const defaultSearchContextValue: ISearchContext = {
  searched: [],
  searchedInput: "",
  selected: 0,
  isSearching: false,
  searchProduct: (filter: string) => {},
  setSearchedInput: (filter: string) => {},
  resetSearch: () => {},
  setIsSearching: (boo: boolean) => {},
  setSelected: (idx: number) => {}
};

const SearchContext = createContext(defaultSearchContextValue);

export const SearchProvider: React.FC = ({ children }) => {
  const [searched, setSearched] = useState<Array<IProduct>>([]);
  const [searchedInput, setSearchedInput] = useState("");
  const [selected, setSelected] = useState(0);
  const [isSearching, setIsSearching] = useState(false);
  const productContext = useProductContext();

  const searchProduct = (filter: string) => {
    const lowerCaseFilter = filter.toLowerCase();
    const filtered = productContext.products.filter(
      (pr) =>
        pr.barCode.toLowerCase().includes(lowerCaseFilter) == true ||
        pr.productName.toLowerCase().includes(lowerCaseFilter) == true
    );
    setSearched(filtered);
    console.log(`Searching ${lowerCaseFilter} result: ${filtered}`);
  };

  const resetSearch = () => setSearched([]);

  return (
    <SearchContext.Provider
      value={{
        searched,
        searchedInput,
        selected,
        isSearching,
        searchProduct,
        setSearchedInput,
        resetSearch,
        setIsSearching,
        setSelected
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  return useContext(SearchContext);
}