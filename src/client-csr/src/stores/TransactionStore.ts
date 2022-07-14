import produce from "immer";
import { WritableDraft } from "immer/dist/internal";
import { mountStoreDevtool } from "simple-zustand-devtools";
import create from "zustand";
import { IOrderedProduct } from "../interface/IOrderedProduct";

interface ITransaction {
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
}

export const useTransactionStore = create<ITransaction>((set) => ({
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
  calculateInfo: (orders) => set(produce((state) => calculateInfoFn(state, orders))),
}));

mountStoreDevtool("transactionStore", useTransactionStore);

const calculateInfoFn = (state: WritableDraft<ITransaction>, orders: IOrderedProduct[]) => {
  let newSubtotal = 0;
  let newTotal = 0;
  let newVat = 0;
  let newQuantity = 0;
  let vatDecimal = 12/100;
  let discountDecimal = state.discount/100;
  let subTotalWithoutVat = 0;

  for (let i = 0; i != orders.length; i++) {
    newQuantity = newQuantity + orders[i].quantity;
    newSubtotal += orders[i].bunchTotal;

    let off = orders[i].bunchTotal * discountDecimal;
    newTotal = newSubtotal - off;

    if (orders[i].withVat){
      subTotalWithoutVat += orders[i].bunchTotal;
      newVat = subTotalWithoutVat * vatDecimal;
    }
  }
  state.subTotal = newSubtotal;
  state.total = newTotal;
  state.vat = newVat;
  state.quantity = newQuantity;
}
