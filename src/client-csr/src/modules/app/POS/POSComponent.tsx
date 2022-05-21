import React from "react";
import { ProductsContext } from "../../../context/ProductsContext";
import { SearchContext } from "../../../context/SearchContext/SearchContext";
import { TransactionContext } from "../../../context/TransactionContext";
import { Navbar } from "../Navbar/Navbar";
import { POSContainer } from "./POSContainer";

export const POSComponent = () => (
  <>
    <ProductsContext>
      <TransactionContext>
        <SearchContext>
          <POSContainer />
        </SearchContext>
      </TransactionContext>
    </ProductsContext>
  </>
);
