import {
  createContext,
  FC,
  FormEvent,
  ReactNode,
  useContext,
  useEffect,
  useState,
  useTransition
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
  setSelected: (toBeSelected: number) => { },
  find: (query: string) => { },
};

const searchContext = createContext(defaultValue);

export const SearchContext: FC<{ children: ReactNode }> = ({ children }) => {
  const [toSearch, setToSearch] = useState<string>("");
  const [selected, setSelected] = useState<number>(0);
  const [searchResult, setSearchResult] = useState<Array<ISearchResponse>>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isPending, startTransition] = useTransition();
  const transactionContext = useTransactionContext();

  const find = async (query: string) => {
    const result = await searchProduct(query)
    setSearchResult(result);
    setIsLoading(false);
  };

  const checkKeyDown = (event: KeyboardEvent) => {
    if (event.altKey && event.key == "a") {
      setIsSearching(!isSearching);
    } else if (event.key == "Escape") escapeSearch();
  };

  const escapeSearch = () => {
    setToSearch("");
    setSearchResult([]);
    setIsSearching(false);
  };

  useEffect(() => {
    document.addEventListener("keydown", checkKeyDown);
  }, []);

  const useIsSearching = async (event: FormEvent<HTMLInputElement>) => {
    setIsLoading(true);
    setToSearch(event.currentTarget.value);
    setSelected(0);
    startTransition(() => { find(event.currentTarget.value); });
  };

  const addProduct = () => {
    // This is temporary
    console.log("adding");
    transactionContext.addProduct(searchResult[0]);
  }

  return (
    <div className={styles.searchContextContainer}>
      <AnimatePresence>
        {isSearching && (
          <motion.div
            className={styles.searchContainer}
            initial={{ backdropFilter: "blur(0px)" }}
            animate={{ backdropFilter: "blur(2px)" }}
            exit={{ backdropFilter: "blur(0px)" }}
          >
            <motion.div
              className={styles.search}
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
            >
              <div className={styles.top}>
                <span className="text-2xl font-bold">Add product</span>
                <Button onClick={escapeSearch}>
                  <div className={styles.escapeButtonContent}>
                    <X />
                    Escape
                  </div>
                </Button>
              </div>
              <div className={styles.searchField}>
                <Input
                  placeholder="Product ID, Name or Barcode"
                  value={toSearch}
                  onChange={useIsSearching}
                />
                <Button buttonColor="coal" onClick={addProduct}>Add</Button>
              </div>
              <div className={styles.result}>
                {searchResult.length > 0 ? (
                  <ul>
                    {searchResult.map((product, idx) => (
                      <ResultButton index={idx} product={product} />
                    ))}
                  </ul>
                ) : (
                  <div className="font-bold w-full">
                    {isLoading ?
                      <div className={styles.loader}>
                        <div className="Spinner"><CustomSpinner dark /></div>
                        <div>Loading Results</div>
                      </div> :
                      <div>
                        {toSearch == "" ? <div>Type the product's barcode or name</div> : <div>Unkown product</div>}
                      </div>}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <searchContext.Provider
        value={{ toSearch, selected, searchResult, setSelected, find }}
      >
        {children}
      </searchContext.Provider>
    </div>
  );
};

export const useSearchContext = () => {
  return useContext(searchContext);
};
