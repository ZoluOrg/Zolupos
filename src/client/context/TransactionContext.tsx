import React, {
  FC,
  ReactNode,
  useContext,
  createContext,
  useState,
} from "react";
import { IProduct } from "../interface/IProduct";
import { ITransactionContext } from "../interface/ITransactionContext";

const defaultValue: ITransactionContext = {
  punched: [],
  addProduct: (productToAdd: IProduct) => {},
  removeProduct: (productIndex: number) => {},
  pushTransaction: () => {},
};

const transactionContext = createContext(defaultValue);

export const TransactionContext: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [punched, setPunched] = useState<Array<IProduct>>([]);
  const addProduct = (productToAdd: IProduct) => {
    setPunched((stale) => [...stale, productToAdd]);
    console.log("Product Added To Transaction");
  };
  const removeProduct = (productIndex: number) => {
    setPunched(punched.filter((products, idx) => idx == productIndex));
    console.log("Product Removed From Transaction");
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
};
