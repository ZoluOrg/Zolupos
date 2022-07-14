import React from "react";
import { SearchContext } from "../../../context/SearchContext/SearchContext";
import { Navbar } from "../Navbar/Navbar";
import { POSContainer } from "./POSContainer";

export const POSComponent = () => (
  <>
    <SearchContext>
      <POSContainer />
    </SearchContext>
  </>
);
