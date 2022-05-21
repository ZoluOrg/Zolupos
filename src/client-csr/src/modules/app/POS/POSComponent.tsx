import React from "react";
import { ProductsContext } from "../../../context/ProductsContext";
import { SearchContext } from "../../../context/SearchContext";
import { TransactionContext } from "../../../context/TransactionContext";
import { Navbar } from "../Navbar/Navbar";
import { POSContainer } from "./POSContainer";

export const POSComponent = () => (
  <>
    <ProductsContext>
      <TransactionContext>
        <SearchContext>
          <Navbar />
          <POSContainer />
        </SearchContext>
      </TransactionContext>
    </ProductsContext>
  </>
);
