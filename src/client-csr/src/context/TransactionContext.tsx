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
  subTotal: 0,
  vat: 12,
  quantity: 0,
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
  const [total, setTotal] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);
  const [subTotal, setSubTotal] = useState<number>(0);
  const [vat, setVat] = useState<number>(12);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    console.log(total);
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
        bunchTotal: productToAdd.productPrice,
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


  const recalculateBunchPrice = (idx: number) => {
    var toUpdateArray = [...punched];
    var price = toUpdateArray[idx].productPrice;
    var bunchPrice = toUpdateArray[idx].bunchTotal;
    var qty = toUpdateArray[idx].quantity;

    var qtyPrice = Math.round(price * qty * 100) / 100;

    toUpdateArray[idx].bunchTotal = Math.round(qtyPrice * 100) / 100;
    setPunched(toUpdateArray);
  };

  const calculateInfo = () => {
    var newSubTotal = 0;
    var newTotal = 0;
    var newQuantity = 0;

    startTransition(() => {
      for (var i = 0; i != punched.length; i++) {
        console.log("test");
        newSubTotal = newTotal + punched[i].bunchTotal;
        newQuantity = newQuantity + punched[i].quantity;

        var taxDec = vat / 100 + 1;
        newTotal = taxDec * newSubTotal;
      }
    });
    setQuantity(newQuantity);
    setSubTotal(Math.round(newSubTotal * 100) / 100);
    setTotal(Math.round(newTotal * 100) / 100);
  };

  const pushTransaction = () => {
    // To be continued
    const newTransaction: ITransaction = {
      customerId: 0,
      orderedProduct: punched,
      vat: 12,
      total: total,
      subTotal: subTotal,
    };
    console.log(newTransaction);
  };

  return (
    <transactionContext.Provider
      value={{
        punched,
        total: total,
        subTotal,
        vat,
        quantity,
        addProduct,
        removeProduct,
        pushTransaction,
        qtyChanging,
      }}
    >
      {children}
    </transactionContext.Provider>
  );
};

export const useTransactionContext = () => {
  return useContext(transactionContext);
};
