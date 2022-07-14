import produce from "immer";
import { WritableDraft } from "immer/dist/internal";
import create from "zustand";
import { IOrderedProduct } from "../interface/IOrderedProduct";

interface IOrder {
  orders: Array<IOrderedProduct>;
  setOrders: (orders: Array<IOrderedProduct>) => void;
  addOrder: (order: IOrderedProduct) => void;
  removeOrder: (index: number) => void;
  qtyChanging: (index: number, qty: number) => void;
  calculateBunchPrice: (index: number) => void;
}

export const useOrderStore = create<IOrder>((set, get) => ({
  orders: [],
  setOrders: (orders) => set((state) => ({ orders: orders })),
  addOrder: (order) =>
    set(produce<IOrder>((state) => addOrderFn(state, order))),
  removeOrder: (index) =>
    set((state) => ({
      orders: state.orders.filter((_, i) => i !== index),
    })),
  qtyChanging: (index, qty) =>
    set(
      produce<IOrder>((state) => {
        state.orders[index].quantity = qty;
      })
    ),
  calculateBunchPrice: (index) =>
    set(produce((state) => calculateBunchPriceFn(state, index))),
}));

const addOrderFn = (state: WritableDraft<IOrder>, order: IOrderedProduct) => {
  let idx = state.orders.findIndex(
    (punchedProduct) =>
      punchedProduct.productBarcode == order.productBarcode &&
      punchedProduct.productId == order.productId
  );
  if (idx > -1) state.orders[idx].quantity += 1;
  else {
    state.orders.push(order);
  }
};

const calculateBunchPriceFn = (state: WritableDraft<IOrder>, idx: number) => {
  let price = state.orders[idx].productUnitPrice;
  let qty = state.orders[idx].quantity;

  let qtyPrice = Math.round(price * qty * 100) / 100;
  
  state.orders[idx].bunchTotal = qtyPrice;
};
