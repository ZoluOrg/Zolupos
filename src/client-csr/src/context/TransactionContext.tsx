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
  vat: 0,
  quantity: 0,
  discount: 0,
  addProduct: (productToAdd: ISearchResponse) => {},
  removeProduct: (productIndex: number) => {},
  pushTransaction: () => {},
  qtyChanging: (idx: number, qty: number) => {},
  discountChanging: (discount: number) => {},
};

const transactionContext = createContext(defaultValues);

export const TransactionContext: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [punched, setPunched] = useState<Array<IOrderedProduct>>([]);
  const [total, setTotal] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);
  const [subTotal, setSubTotal] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [vat, setVat] = useState<number>(0);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    calculateInfo();
  }, [punched, discount]);

  const addProduct = (productToAdd: ISearchResponse) => {
    var idx = punched.findIndex(
      (punchedProduct) =>
        punchedProduct.productBarcode == productToAdd.productBarcode &&
        punchedProduct.productId == productToAdd.productId
    );
    if (idx > -1) {
      qtyChanging(idx, punched[idx].quantity + 1);
    } else {
      var newOrderedProduct: IOrderedProduct = {
        ...productToAdd,
        quantity: 1,
        bunchTotal: productToAdd.productUnitPrice,
      };
      setPunched((stale) => [...stale, newOrderedProduct]);
    }
  };

  const removeProduct = (productIndex: number) => {
    const copyArr = punched.filter((_, index) => index != productIndex);
    setPunched(copyArr);
  };

  const qtyChanging = (idx: number, qty: number) => {
    var newArr = [...punched];
    newArr[idx].quantity = qty;
    setPunched(newArr);

    recalculateBunchPrice(idx);
  };

  const discountChanging = (discount: number) => {
    setDiscount(discount);
  };

  const recalculateBunchPrice = (idx: number) => {
    var toUpdateArray = [...punched];
    var price = toUpdateArray[idx].productUnitPrice;
    var bunchPrice = toUpdateArray[idx].bunchTotal;
    var qty = toUpdateArray[idx].quantity;

    var qtyPrice = Math.round(price * qty * 100) / 100;

    toUpdateArray[idx].bunchTotal = Math.round(qtyPrice * 100) / 100;
    setPunched(toUpdateArray);
  };

  //SubTotal With vat
  //Total With Deduc
  const calculateInfo = () => {
    var newSubTotal = 0;
    var newTotal = 0;
    var newQuantity = 0;
    var newVatPrice = 0;
    var vatDecimal = 12 / 100;
    var discountDecimal = discount / 100;

    startTransition(() => {
      for (var i = 0; i < punched.length; i++) {
        newQuantity = newQuantity + punched[i].quantity;
        newSubTotal += punched[i].bunchTotal;

        var toRemove = newSubTotal * discountDecimal;
        newTotal = newSubTotal - toRemove;

        newVatPrice = newTotal * vatDecimal;
      }
      setSubTotal(Math.round(newSubTotal * 100) / 100);
      setTotal(Math.round(newTotal * 100) / 100);
      setQuantity(newQuantity);
      setVat(newVatPrice);
    });
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
  };

  return (
    <transactionContext.Provider
      value={{
        punched,
        total: total,
        subTotal,
        vat,
        quantity,
        discount,
        addProduct,
        removeProduct,
        pushTransaction,
        qtyChanging,
        discountChanging,
      }}
    >
      {children}
    </transactionContext.Provider>
  );
};

export const useTransactionContext = () => {
  return useContext(transactionContext);
};
