import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { IPunchedContext } from "../../interfaces/contexts/IPunchedContext";
import { IPunched } from "../../interfaces/transaction/IPunched";
import { useProductContext } from "./ProductContext";

const defaultValue: IPunchedContext = {
  punched: [],
  addToPunched: (barCode: string) => {},
  removeToPunched: (barCode: string) => {},
  increasePunchedItemQuantity: (barCode: string) => {},
};

const PunchedContext = createContext(defaultValue);

export const PunchedProvider: React.FC = ({ children }) => {
  const [punched, setPunched] = useState<Array<IPunched>>([]);
  const productCtx = useProductContext();

  const addToPunched = (barCode: string) => {
    const toAdd = productCtx.products.find((prds) => prds.barCode == barCode);
    if (toAdd) {
      const punch: IPunched = { Product: toAdd, Quantity: 0 };
      setPunched((stale) => [...stale, punch]);
      console.log(`Punched ${punch.Product.productName}`);
    } else {
      toast.error("Product not found!");
    }
  };

  const removeToPunched = (barCode: string) => {
    const copy = punched;
    const productToDelete = copy.findIndex(
      (pr) => pr.Product.barCode == barCode
    );

    copy.splice(productToDelete, 1);
    setPunched(copy);
  };

  const increasePunchedItemQuantity = (barCode: string) => {
    const copy = punched;
    const productToIncrease = copy.find((pr) => pr.Product.barCode == barCode);
    productToIncrease?.Quantity! + 1;
    setPunched(copy);
  };

  return (
    <PunchedContext.Provider
      value={{
        punched,
        addToPunched,
        removeToPunched,
        increasePunchedItemQuantity,
      }}
    >
      {children}
    </PunchedContext.Provider>
  );
};

export const usePunchedContext = () => {
	return useContext(PunchedContext);
} 
