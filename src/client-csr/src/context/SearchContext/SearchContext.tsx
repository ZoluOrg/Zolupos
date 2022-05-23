import React, {
  createContext,
  createRef,
  FC,
  FormEvent,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { IProduct } from "../../interface/IProduct";
import { ISearchContext } from "../../interface/ISearchContext";
import styles from "../../styles/SearchContext/SearchContext.module.scss";
import { Button } from "../../components/Button";
import { X } from "phosphor-react";
import { Input } from "../../components/Input";
import { AnimatePresence, motion } from "framer-motion";
import { useProductContext } from "../ProductsContext";
import { ResultButton } from "./ResultButton";

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
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const productContext = useProductContext();
  const searchRef = createRef<HTMLInputElement>();

  const searchProduct = (query: string) => {
    const filtered = productContext.products.filter(
      (prod) =>
        prod.barCode.toLowerCase().includes(query) == true ||
        prod.productName.toLowerCase().includes(query) == true
    );
    setSearchResult(filtered);
    console.log("client search event");
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
    return () => {
      console.log("unmount");
      document.removeEventListener("keydown", checkKeyDown);
    };
  }, []);

  const useIsSearching = (event: FormEvent<HTMLInputElement>) => {
    searchProduct(event.currentTarget.value);
    setToSearch(event.currentTarget.value);
    setSelected(0);
  };

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
                <Button buttonColor="coal">Add</Button>
              </div>
              <div className={styles.result}>
                {searchResult.length > 0 ? (
                  <ul>
                    {searchResult.map((product, idx) => (
                      <ResultButton index={idx} product={product} />
                    ))}
                  </ul>
                ) : (
                  <div className="font-bold">
                    {toSearch == "" ? (
                      <span>Type the barcode or product name</span>
                    ) : (
                      <span>Item doesn't exist</span>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <searchContext.Provider
        value={{ toSearch, selected, searchResult, setSelected, searchProduct }}
      >
        {children}
      </searchContext.Provider>
    </div>
  );
};

export const useSearchContext = () => {
  return useContext(searchContext);
};
