import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useQuery } from "react-query";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { ResultButton } from "./ResultButton";
import { ISearchResponse } from "../../../../interface/ISearchResponse";
import { searchProduct } from "../../../../services/ProductService";
import { useSearchStore } from "../../../../stores/SearchStore";
import { useTransactionStore } from "../../../../stores/TransactionStore";
import { IOrderedProduct } from "../OrderedProduct";
import { Modal } from "../../../../components/Modal";
import { CustomSpinner } from "../../../../components/CustomSpinner";
import { debounce } from "lodash";

export const ProductSearch = () => {
  const [shouldShow, setShouldShow] = React.useState<boolean>(false);
  const searchStore = useSearchStore();
  const transactionStore = useTransactionStore();
  const inputRef = useRef<HTMLInputElement>(null);

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

  useLayoutEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.altKey && event.key == "a") setShouldShow(true);
      else if (event.key == "Escape") {
        setShouldShow(false);
        reset();
      }
    });
  }, []);

  useEffect(() => {
    if (searchStore.searchQuery != "") refetch();
  }, [searchStore.searchQuery]);

  const changeQuery = (ev: string) => {
    const deb = debounce(() => searchStore.setSearchQuery(ev), 150);
    deb();
  };

  
  const addProduct = () => {
    let toSave: IOrderedProduct = {
      ...searchStore.searchResult[searchStore.selectedResult],
      quantity: 1,
      bunchTotal:
        searchStore.searchResult[searchStore.selectedResult].productUnitPrice,
    };
    transactionStore.addOrder(toSave);
  };

  const onSelectionDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
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
  };

  const reset = () => {
    searchStore.setSearchQuery("");
    searchStore.setSearchResult([]);
    searchStore.setSelected(0);
    setShouldShow(false);
  };

  return (
    <div className="search-thing z-10">
      <Modal
        className="p-[25px] w-2/4 bg-mallow-1 shadow rounded-lg z-50 flex flex-col gap-2"
        isOpen={shouldShow}
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
            onChange={(e) => changeQuery(e.currentTarget.value)}
            onKeyDown={onSelectionDown}
            autoFocus={true}
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
                <div className="flex gap-2 items-center font-bold">
                  <CustomSpinner dark />
                  <span>Fetching from server</span>
                </div>
              ) : (
                <div>
                  {searchStore.searchResult.length > 0 ? (
                    <div className="flex flex-col gap-3">
                      {searchStore.searchResult.map((pr, index) => (
                        <ResultButton index={index} product={pr} key={index} />
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
      </Modal>
    </div>
  );
};
