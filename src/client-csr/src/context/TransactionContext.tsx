import React, { createContext, FC, ReactNode, useContext, useState } from "react";
import { IOrderedProduct } from "../interface/IOrderedProduct";
import { IProduct } from "../interface/IProduct";
import { ISearchResponse } from "../interface/ISearchResponse";
import { ITransaction } from "../interface/ITransaction";
import { ITransactionContext } from "../interface/ITransactionContext";

const defaultValues: ITransactionContext = {
  punched: [],
  addProduct: (productToAdd: ISearchResponse) => {},
  removeProduct: (productIndex: number) => {},
  pushTransaction: () => {},
};

const transactionContext = createContext(defaultValues);

export const TransactionContext: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [punched, setPunched] = useState<Array<IOrderedProduct>>([]);

  const addProduct = (productToAdd: ISearchResponse) => {
    var newOrderedProduct: IOrderedProduct = {
      ...productToAdd,
      quantity: 1,
      bunchPrice: productToAdd.productPrice
    }
    setPunched((stale) => [...stale, newOrderedProduct]);
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
