import produce from "immer";
import { WritableDraft } from "immer/dist/internal";
import { mountStoreDevtool } from "simple-zustand-devtools";
import create from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { PaymentTypes } from "../enums/PaymentTypes";
import { IOrderedProduct } from "../interface/IOrderedProduct";
import { IPayment } from "../interface/IPayment";

interface ITransaction {
  //Transaction Stuffs
  total: number;
  subTotal: number;
  vat: number;
  quantity: number;
  discount: number;
  setTotal: (total: number) => void;
  setSubTotal: (subTotal: number) => void;
  setVat: (vat: number) => void;
  setQuantity: (quantity: number) => void;
  setDiscount: (discount: number) => void;
  calculateInfo: (orders: IOrderedProduct[]) => void;

  //Payment Stuffs
  payments: Array<IPayment>;
  showPaymentModal: boolean;
  setShowPaymentModal: (showPaymentModal: boolean) => void;
  setPayments: (payments: Array<IPayment>) => void;
  removePayment: (index: number) => void;
  addPayment: (payment: IPayment) => void;

  setPaymentMethod: (index: number, paymentMethod: number) => void;
  setAmount: (index: number, amount: number) => void;
  setTender: (index: number, tender: number) => void;
}

export const useTransactionStore = create<ITransaction>()(
  subscribeWithSelector((set) => ({
    total: 0,
    subTotal: 0,
    vat: 0,
    quantity: 0,
    discount: 0,
    setTotal: (total) => set((state) => ({ total: total })),
    setSubTotal: (subTotal) => set((state) => ({ subTotal: subTotal })),
    setVat: (vat) => set((state) => ({ vat: vat })),
    setQuantity: (quantity) => set((state) => ({ quantity: quantity })),
    setDiscount: (discount) => set((state) => ({ discount: discount })),
    calculateInfo: (orders) =>
      set(produce((state) => calculateInfoFn(state, orders))),
    payments: [],
    showPaymentModal: false,
    setShowPaymentModal: (showPaymentModal) =>
      set((state) => ({ showPaymentModal })),
    setPayments: (payments) => set((state) => ({ payments: payments })),
    removePayment: (index) =>
      set((state) => ({
        payments: state.payments.filter((_, i) => i !== index),
      })),
    addPayment: (payment) =>
      set((state) => ({
        payments: [...state.payments, payment],
      })),
    setPaymentMethod: (index, paymentMethod) =>
      set(produce((state) => setPaymentMethodFn(state, index, paymentMethod))),
    setAmount: (index, amount) =>
      set(
        produce((state) => {
          state.payments[index].amount = amount;
        })
      ),
    setTender: (index, tender) =>
      set(
        produce((state) => {
          state.payments[index].tendered = tender;
        })
      ),
  }))
);

mountStoreDevtool("transactionStore", useTransactionStore);

const calculateInfoFn = (
  state: WritableDraft<ITransaction>,
  orders: IOrderedProduct[]
) => {
  let newSubtotal = 0;
  let newTotal = 0;
  let newVat = 0;
  let newQuantity = 0;
  let vatDecimal = 12 / 100;
  let discountDecimal = state.discount / 100;
  let subTotalWithoutVat = 0;

  for (let i = 0; i != orders.length; i++) {
    newQuantity = newQuantity + orders[i].quantity;
    newSubtotal += orders[i].bunchTotal;

    let off = orders[i].bunchTotal * discountDecimal;
    newTotal = newSubtotal - off;

    if (orders[i].withVat) {
      subTotalWithoutVat += orders[i].bunchTotal;
      newVat = subTotalWithoutVat * vatDecimal;
    }
  }
  state.subTotal = newSubtotal;
  state.total = newTotal;
  state.vat = newVat;
  state.quantity = newQuantity;
};

const setPaymentMethodFn = (
  state: WritableDraft<ITransaction>,
  index: number,
  paymentMethod: number
) => {
  state.payments[index].paymentType =
    Object.values(PaymentTypes)[paymentMethod];
};
