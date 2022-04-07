import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import React, { createRef, useEffect } from "react";
import { useSearchContext } from "../../../context/pos/SearchContext";
import { AutoCompleteButton } from "./AutoCompleteButton";
import { NoProduct } from "./NoProduct";

export const AutoComplete = () => {
  const searchContexxt = useSearchContext();
  return (
    <AnimatePresence>
      {searchContexxt.isSearching && (
        <motion.ul
          className="autocomplete w-full border-2 border-slate-300 rounded-b absolute bg-bg-light-base p-1 max-h-96 overflow-y-scroll"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 0, opacity: 0 }}
        >
          {
            searchContexxt.searched.length != 0 ? searchContexxt.searched.map((pr, idx) => (
              <AutoCompleteButton
                productName={pr.productName}
                productQuantity={pr.productQuantity}
                productManufacturer={pr.productManufacturer}
                barCode={pr.barCode}
                productType={pr.productType}
                productRetailCost={pr.productRetailCost}
                productWholeSaleCost={pr.productWholeSaleCost}
                idx={idx}
              />
            )) : <NoProduct/>
          }
        </motion.ul>
      )}
    </AnimatePresence>
  );
};
