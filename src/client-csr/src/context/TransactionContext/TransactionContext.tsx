import { Axios } from "axios";
import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
  useTransition,
} from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { z } from "zod";
import { PaymentTypes } from "../../enums/PaymentTypes";
import { IOrderedProduct } from "../../interface/IOrderedProduct";
import { IProduct } from "../../interface/IProduct";
import { ISearchResponse } from "../../interface/ISearchResponse";
import { ITransaction } from "../../interface/ITransaction";
import { ITransactionContext } from "../../interface/ITransactionContext";
import { OrderList } from "../../modules/app/POS/OrderList";
import { addNewTransaction } from "../../services/Transactions/TransactionsService";
import { PushModal } from "./PushModal";

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

  const { mutate, isLoading, error } = useMutation(addNewTransaction, {
    onSuccess: (data: number) => {
      toast.success("Transaction added successfully. Transaction ID: " + data);
      setPunched([]);
    },
  });

  useEffect(() => reset(), [punched]);

  useEffect(() => {
    calculateInfo();
  }, [punched, discount]);

  const addProduct = (productToAdd: ISearchResponse) => {
    let idx = punched.findIndex(
      (punchedProduct) =>
        punchedProduct.productBarcode == productToAdd.productBarcode &&
        punchedProduct.productId == productToAdd.productId
    );
    if (idx > -1) {
      qtyChanging(idx, punched[idx].quantity + 1);
    } else {
      let newOrderedProduct: IOrderedProduct = {
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
    let newArr = [...punched];
    newArr[idx].quantity = qty;
    setPunched(newArr);

    recalculateBunchPrice(idx);
  };

  const discountChanging = (discount: number) => {
    setDiscount(discount);
  };

  const recalculateBunchPrice = (idx: number) => {
    let toUpdateArray = [...punched];
    let price = toUpdateArray[idx].productUnitPrice;
    let bunchPrice = toUpdateArray[idx].bunchTotal;
    let qty = toUpdateArray[idx].quantity;

    let qtyPrice = Math.round(price * qty * 100) / 100;

    toUpdateArray[idx].bunchTotal = Math.round(qtyPrice * 100) / 100;
    setPunched(toUpdateArray);
  };

  //SubTotal with vat
  //Total is subtotal with deduction
  const calculateInfo = () => {
    let newSubTotal = 0;
    let newTotal = 0;
    let newQuantity = 0;
    let newVatPrice = 0;
    let vatDecimal = 12 / 100;
    let discountDecimal = discount / 100;
    let subTotalWithoutVatExlusiveProduct = 0;

    startTransition(() => {
      for (let i = 0; i < punched.length; i++) {
        newQuantity = newQuantity + punched[i].quantity;
        newSubTotal += punched[i].bunchTotal;

        let toRemove = newSubTotal * discountDecimal;
        newTotal = newSubTotal - toRemove;

        if (punched[i].withVat) {
          subTotalWithoutVatExlusiveProduct =
            subTotalWithoutVatExlusiveProduct + punched[i].bunchTotal;
          console.log(subTotalWithoutVatExlusiveProduct);
          newVatPrice = subTotalWithoutVatExlusiveProduct * vatDecimal;
        }
        setSubTotal(Math.round(newSubTotal * 1000) / 1000);
        setTotal(Math.round(newTotal * 1000) / 1000);
        setQuantity(newQuantity);
        setVat(Math.round(newVatPrice * 1000) / 1000);
      }
    });
  };

  const reset = () => {
    if (punched.length <= 0) {
      console.log("reset");
      setTotal(0);
      setQuantity(0);
      setSubTotal(0);
      setDiscount(0);
      setVat(0);
    }
  };

  const pushTransaction = () => {
    const newTransaction: ITransaction = {
      customerId: 1,
      orderedProducts: punched,
      vat: 12,
      total: total,
      paymentType: PaymentTypes.Cash,
      subTotal: subTotal,
    };

    if (newTransaction.orderedProducts.length > 0) mutate(newTransaction);
    else toast.error("Add products to transaction");
  };

  return (
    <div className="transaction-context relative">
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
        <PushModal />
        {children}
      </transactionContext.Provider>
    </div>
  );
};

export const useTransactionContext = () => {
  return useContext(transactionContext);
};
