import React from "react"
import { ProductProvider } from "../../context/pos/ProductContext";
import { PunchedProvider } from "../../context/pos/PunchedContext";
import { SearchProvider } from "../../context/pos/SearchContext";
import { PageTransition } from "../animations/PageTransition";
import { Bill } from "./Bill";
import { Punched } from "./Punched";

export const Pos = () => {
  return (
    <PageTransition>
        <ProductProvider>
          <PunchedProvider>
            <SearchProvider>
              <div className="PosWrapper h-screen flex">
                <Punched />
                <Bill />
              </div>
            </SearchProvider>
          </PunchedProvider>
        </ProductProvider>
    </PageTransition>
  );
};
