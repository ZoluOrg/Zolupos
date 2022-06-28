import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
} from "react";
import { IOrderedProduct } from "../interface/IOrderedProduct";
import { IProduct } from "../interface/IProduct";
import { ISearchResponse } from "../interface/ISearchResponse";
import { ITransaction } from "../interface/ITransaction";
import { ITransactionContext } from "../interface/ITransactionContext";
import { OrderList } from "../modules/app/POS/OrderList";

const defaultValues: ITransactionContext = {
  punched: [],
  addProduct: (productToAdd: ISearchResponse) => {},
  removeProduct: (productIndex: number) => {},
  pushTransaction: () => {},
  qtyChanging: (idx: number, qty: number) => {},
};

const transactionContext = createContext(defaultValues);

export const TransactionContext: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [punched, setPunched] = useState<Array<IOrderedProduct>>([]);

  const addProduct = (productToAdd: ISearchResponse) => {
    var idx = punched.findIndex(
      (punchedProduct) =>
        punchedProduct.productBarcode == productToAdd.productBarcode
    );
    if (idx > -1) {
      console.log("found somethin");
      changeQty(idx, punched[idx].bunchPrice + 1);
    } else {
      var newOrderedProduct: IOrderedProduct = {
        ...productToAdd,
        quantity: 1,
        bunchPrice: productToAdd.productPrice,
      };
      setPunched((stale) => [...stale, newOrderedProduct]);
    }
  };

  const removeProduct = (productIndex: number) => {
    console.log(productIndex);
    const copyArr = punched.filter((_, index) => index != productIndex);
    setPunched(copyArr);
  };

  const changeQty = (idx: number, qty: number) => {
    var newArr = [...punched];
    var price = newArr[idx].productPrice;
    newArr[idx].quantity = qty;
    newArr[idx].bunchPrice = parseFloat((qty * price).toFixed(2));
    console.log(Math.round((10 * (qty * price)) / 10));
    setPunched(newArr);
  };

  const pushTransaction = () => {
    // To be continued
    const newTransaction: ITransaction = {
      customerId: 0,
      orderedProduct: punched,
    };
    console.log(newTransaction);
  };

  return (
    <transactionContext.Provider
      value={{
        punched,
        addProduct,
        removeProduct,
        pushTransaction,
        qtyChanging: changeQty,
      }}
    >
      {children}
    </transactionContext.Provider>
  );
};

export const useTransactionContext = () => {
  return useContext(transactionContext);
};
