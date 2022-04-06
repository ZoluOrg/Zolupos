import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useCredentialContext } from "../../context/CredentialContext";
import { ProductProvider } from "../../context/pos/ProductContext";
import { PosContext } from "../../context/PosContext";
import { PageTransition } from "../animations/PageTransition";
import { Bill } from "./Bill";
import { Punched } from "./Punched";

export const Pos = () => {
  const crds = useCredentialContext();
  return (
    <PageTransition>
      <PosContext>
        <ProductProvider>
          <div className="PosWrapper h-screen flex">
            <Punched />
            <Bill />
          </div>
        </ProductProvider>
      </PosContext>
    </PageTransition>
  );
};
