import {
  createContext,
  FC,
  FormEvent,
  ReactNode,
  useContext,
  useEffect,
  useState,
  useTransition,
  KeyboardEvent,
} from "react";
import { IProduct } from "../../interface/IProduct";
import { ISearchContext } from "../../interface/ISearchContext";
import styles from "../../styles/SearchContext/SearchContext.module.scss";
import { Button } from "../../components/Button";
import { X } from "phosphor-react";
import { Input } from "../../components/Input";
import { AnimatePresence, motion } from "framer-motion";
import { ResultButton } from "./ResultButton";
import { searchProduct } from "../../services/Product/ProductService";
import { CustomSpinner } from "../../components/CustomSpinner";
import { useTransactionContext } from "../TransactionContext";
import { ISearchResponse } from "../../interface/ISearchResponse";

const defaultValue: ISearchContext = {
  toSearch: "",
  selected: 0,
  searchResult: [],
  setSelected: (toBeSelected: number) => {},
  find: (query: string) => {},
  addProduct: (index: number) => {},
};

const searchContext = createContext(defaultValue);

export const SearchContext: FC<{ children: ReactNode }> = ({ children }) => {
  const [toSearch, setToSearch] = useState<string>("");
  const [selected, setSelected] = useState<number>(0);
  const [searchResult, setSearchResult] = useState<Array<ISearchResponse>>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const transactionContext = useTransactionContext();

  const find = async (query: string) => {
    const result = await searchProduct(query);
    setSearchResult(result);
    setIsLoading(false);
  };

  const onShortcutDown = (event: KeyboardEvent) => {
    if (event.altKey && event.key == "a") {
      setIsSearching(!isSearching);
    } else if (event.key == "Escape") escapeSearch();
  };

  const onSelectionDown = (event: KeyboardEvent<HTMLInputElement>) => {
    console.log(event.key);
    if (event.key == "ArrowUp") {
      if (selected == 0) return;
      setSelected(selected - 1);
    }
    if (event.key == "ArrowDown") {
      if (selected == searchResult.length - 1) return;
      setSelected(selected + 1);
    }
    if (event.key == "Enter") {
      addProduct(selected);
    }
    console.log(selected);
  };

  useEffect(() => {
    document.addEventListener("keydown", onShortcutDown);
  }, []);

  const escapeSearch = () => {
    setToSearch("");
    setSearchResult([]);
    setIsLoading(false);
    setIsSearching(false);
  };

  const useIsSearching = async (event: FormEvent<HTMLInputElement>) => {
    setIsLoading(true);
    setToSearch(event.currentTarget.value);
    setSelected(0);
    startTransition(() => {
      find(event.currentTarget.value);
    });
  };

  const addProduct = (index: number) => {
    transactionContext.addProduct(searchResult[index]);
  };

  return (
    <div className="relative">
      <searchContext.Provider
        value={{
          toSearch,
          selected,
          searchResult,
          setSelected,
          find,
          addProduct,
        }}
      >
        <AnimatePresence>
          {isSearching && (
            <motion.div
              className="absolute w-full h-full flex items-center justify-center z-10 bg-mallow-1 bg-opacity-5"
              initial={{ backdropFilter: "blur(0px)" }}
              animate={{ backdropFilter: "blur(3px)" }}
              exit={{ backdropFilter: "blur(0px)" }}
            >
              <motion.div
                className="p-[25px] w-2/4 bg-mallow-1 shadow border-2 border-mallow-3 rounded-lg"
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -60, opacity: 0 }}
              >
                <div className="w-full flex items-center justify-between">
                  <span className="text-2xl font-bold">Add Product</span>
                  <div>
                    <Button onClick={() => escapeSearch()}>Close</Button>
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <div className="w-full">
                    <Input
                      className="w-full"
                      value={toSearch}
                      onChange={useIsSearching}
                      onKeyDown={onSelectionDown}
                    />
                  </div>
                  <Button
                    buttonColor="coal"
                    onClick={() => addProduct(selected)}
                  >
                    Add
                  </Button>
                </div>
                <div className="mt-3">
                  {searchResult.length > 0 ? (
                    <ul className="w-full flex flex-col gap-2">
                      {searchResult.map((product, idx) => (
                        <ResultButton key={idx} index={idx} product={product} />
                      ))}
                    </ul>
                  ) : (
                    <div className="font-bold w-full">
                      {isLoading ? (
                        <div className="w-full flex items-center justify-center gap-4">
                          <div className="Spinner">
                            <CustomSpinner dark />
                          </div>
                          <div>Loading Results</div>
                        </div>
                      ) : (
                        <div>
                          {toSearch == "" ? (
                            <div>Type the product's barcode or name</div>
                          ) : (
                            <div>Unkown product</div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        {children}
      </searchContext.Provider>
    </div>
  );
};

export const useSearchContext = () => {
  return useContext(searchContext);
};
