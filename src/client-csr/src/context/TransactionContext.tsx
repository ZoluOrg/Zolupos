import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
  useTransition,
} from "react";
import { IOrderedProduct } from "../interface/IOrderedProduct";
import { IProduct } from "../interface/IProduct";
import { ISearchResponse } from "../interface/ISearchResponse";
import { ITransaction } from "../interface/ITransaction";
import { ITransactionContext } from "../interface/ITransactionContext";
import { OrderList } from "../modules/app/POS/OrderList";

const defaultValues: ITransactionContext = {
  punched: [],
  total: 0,
  quantity: 0,
  addProduct: (productToAdd: ISearchResponse) => {},
  removeProduct: (productIndex: number) => {},
  pushTransaction: () => {},
  qtyChanging: (idx: number, qty: number) => {},
  discChanging: (idx: number, perc: number) => {},
};

const transactionContext = createContext(defaultValues);

export const TransactionContext: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [punched, setPunched] = useState<Array<IOrderedProduct>>([]);
  const [total, setTotal] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    calculateInfo();
  }, [punched]);

  const addProduct = (productToAdd: ISearchResponse) => {
    console.log("add func");
    var idx = punched.findIndex(
      (punchedProduct) =>
        punchedProduct.productBarcode == productToAdd.productBarcode
    );
    if (idx > -1) {
      qtyChanging(idx, punched[idx].quantity + 1);
    } else {
      var newOrderedProduct: IOrderedProduct = {
        ...productToAdd,
        quantity: 1,
        discount: 0,
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

  const qtyChanging = (idx: number, qty: number) => {
    var newArr = [...punched];
    newArr[idx].quantity = qty;
    setPunched(newArr);

    recalculateBunchPrice(idx);
  };

  const discChanging = (idx: number, perc: number) => {
    var newArr = [...punched];
    newArr[idx].discount = perc;
    setPunched(newArr);

    recalculateBunchPrice(idx);
  };

  const recalculateBunchPrice = (idx: number) => {
    var toUpdateArray = [...punched];
    var price = toUpdateArray[idx].productPrice;
    var bunchPrice = toUpdateArray[idx].bunchPrice;
    var qty = toUpdateArray[idx].quantity;
    var discount = toUpdateArray[idx].discount;

    var qtyPrice = Math.round(price * qty * 100) / 100;
    var discountedPrice = qtyPrice - (qtyPrice * discount) / 100;

    console.log(discountedPrice);

    toUpdateArray[idx].bunchPrice = Math.round(discountedPrice * 100) / 100;
    setPunched(toUpdateArray);
  };

  const calculateInfo = () => {
    var newTotal = 0;
    var newQuantity = 0;
    startTransition(() => {
      for (var i = 0; i != punched.length; i++) {
        newTotal = newTotal + punched[i].bunchPrice;
        newQuantity = newQuantity + punched[i].quantity;
      }
    });
    setTotal(Math.round(newTotal * 100) / 100);
    setQuantity(newQuantity);
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
        total,
        quantity,
        addProduct,
        removeProduct,
        pushTransaction,
        qtyChanging,
        discChanging,
      }}
    >
      {children}
    </transactionContext.Provider>
  );
};

export const useTransactionContext = () => {
  return useContext(transactionContext);
};
