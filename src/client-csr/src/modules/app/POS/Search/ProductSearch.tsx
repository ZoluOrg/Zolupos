import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { ResultButton } from "./ResultButton";
import { IOrderedProduct } from "../../../../interface/IOrderedProduct";
import { ISearchResponse } from "../../../../interface/ISearchResponse";
import { searchProduct } from "../../../../services/Product/ProductService";
import { useOrderStore } from "../../../../stores/OrderStore";
import { useSearchStore } from "../../../../stores/SearchStore";

export const ProductSearch = () => {
  const [shoudShow, setShouldShow] = React.useState<boolean>(false);
  const searchStore = useSearchStore();
  const orderStore = useOrderStore();

  const { data, isLoading, refetch } = useQuery(
    ["product-search-result"],
    () => searchProduct(searchStore.searchQuery),
    {
      enabled: false,
      retry: false,
      onSuccess: (data: Array<ISearchResponse>) => {
        searchStore.setSearchResult(data);
      },
    }
  );

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.altKey && event.key == "a") setShouldShow(true);
      if (event.key == "Escape") setShouldShow(false);
    });
  }, []);

  useEffect(() => {
    refetch();
  }, [searchStore.searchQuery]);

  const addProduct = () => {
    let toSave: IOrderedProduct = {
      ...searchStore.searchResult[searchStore.selectedResult],
      quantity: 1,
      bunchTotal:
        searchStore.searchResult[searchStore.selectedResult].productUnitPrice,
    };
    orderStore.addOrder(toSave);
  };

  const onSelectionDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(event.key);
    if (event.key == "ArrowUp") {
      if (searchStore.selectedResult == 0) return;
      searchStore.setSelected(searchStore.selectedResult - 1);
    }
    if (event.key == "ArrowDown") {
      if (searchStore.selectedResult == searchStore.searchResult.length - 1)
        return;
      searchStore.setSelected(searchStore.selectedResult + 1);
    }
    if (event.key == "Enter") {
      addProduct();
    }
    console.log(searchStore.selectedResult);
  };

  const reset = () => {
    searchStore.setSearchQuery("");
    searchStore.setSearchResult([]);
    searchStore.setSelected(0);
    setShouldShow(false);
  };

  return (
    <div className="search-thing z-10">
      <AnimatePresence>
        {shoudShow && (
          <motion.div
            className="absolute h-full w-full flex justify-center items-center bg-mallow-1 bg-opacity-5"
            initial={{ backdropFilter: "blur(0px)" }}
            animate={{ backdropFilter: "blur(3px)" }}
            exit={{ backdropFilter: "blur(0px)" }}
          >
            <motion.div
              className="p-[25px] w-2/4 bg-mallow-1 shadow border-2 border-mallow-3 rounded-lg z-50 flex flex-col gap-2"
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
            >
              <div className="w-full flex items-center justify-between">
                <span className="text-2xl font-bold">Add Product</span>
                <div>
                  <Button onClick={reset}>Close</Button>
                </div>
              </div>
              <div className="w-full flex gap-2">
                <Input
                  className="w-full"
                  value={searchStore.searchQuery}
                  onChange={(ev) => {
                    searchStore.setSearchQuery(ev.currentTarget.value);
                  }}
                  onKeyDown={onSelectionDown}
                />
                <Button buttonColor="coal" onClick={() => addProduct()}>
                  Add
                </Button>
              </div>
              <div className="w-full flex flex-col gap-2">
                {searchStore.searchQuery.length <= 0 ? (
                  <span>Type product's barcode or name to search</span>
                ) : (
                  <div>
                    {isLoading ? (
                      <span>Loading</span>
                    ) : (
                      <div>
                        {searchStore.searchResult.length > 0 ? (
                          <div className="flex flex-col gap-1">
                            {searchStore.searchResult.map((pr, index) => (
                              <ResultButton index={index} product={pr} />
                            ))}
                          </div>
                        ) : (
                          <span>Product not found</span>
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
    </div>
  );
};
