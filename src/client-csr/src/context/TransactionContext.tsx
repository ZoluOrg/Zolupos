import React, { createContext, FC, ReactNode, useContext, useState } from "react";
import { IProduct } from "../interface/IProduct";
import { ITransactionContext } from "../interface/ITransactionContext";

const defaultValues: ITransactionContext = {
  punched: [],
  addProduct: (productToAdd: IProduct) => {},
  removeProduct: (productIndex: number) => {},
  pushTransaction: () => {},
};

const transactionContext = createContext(defaultValues);

export const TransactionContext: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [punched, setPunched] = useState<Array<IProduct>>([]);

  const addProduct = (productToAdd: IProduct) => {
    setPunched((stale) => [...stale, productToAdd]);
  };

  const removeProduct = (productIndex: number) => {
    const updated = punched.splice(productIndex, 1);
  };

  const pushTransaction = () => {};

  return (
    <transactionContext.Provider
      value={{ punched, addProduct, removeProduct, pushTransaction }}
    >
      {children}
    </transactionContext.Provider>
  );
};

export const useTransactionContext = () => {
  return useContext(transactionContext);
}
