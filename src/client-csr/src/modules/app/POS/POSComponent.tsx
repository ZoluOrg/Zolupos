import React from "react";
import { SearchContext } from "../../../context/SearchContext/SearchContext";
import { TransactionContext } from "../../../context/TransactionContext/TransactionContext";
import { Navbar } from "../Navbar/Navbar";
import { POSContainer } from "./POSContainer";

export const POSComponent = () => (
  <>
    <TransactionContext>
      <SearchContext>
        <POSContainer />
      </SearchContext>
    </TransactionContext>
  </>
);
