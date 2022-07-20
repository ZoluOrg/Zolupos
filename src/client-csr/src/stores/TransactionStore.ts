import produce from "immer";
import { WritableDraft } from "immer/dist/internal";
import { mountStoreDevtool } from "simple-zustand-devtools";
import create from "zustand";
import { PaymentTypes } from "../enums/PaymentTypes";
import { IOrderedProduct } from "../interface/IOrderedProduct";
import { IPayment } from "../interface/IPayment";

interface ITransaction {
  //#region TransactionStuffs
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
  //#endregion TransactionStuffs

  //#region PaymentStuffs
  overAllPayment: number;
  balance: number;
  change: number;
  setOverAllPayment: (overAllPayment: number) => void;
  setBalance: (balance: number) => void;
  setChange: (change: number) => void;
  updatePaymentInfos: () => void;
  payments: Array<IPayment>;
  showPaymentModal: boolean;
  setShowPaymentModal: (showPaymentModal: boolean) => void;
  setPayments: (payments: Array<IPayment>) => void;
  removePayment: (index: number) => void;
  addPayment: (payment: IPayment) => void;
  setPaymentMethod: (index: number, paymentMethod: number) => void;
  setAmount: (index: number, amount: number) => void;
  setTender: (index: number, tender: number) => void;
  updateChange: (index: number) => void;
  paymentReset: () => void;
  //#endregion PaymentStuffs

  //#region OrderStuffs
  orders: Array<IOrderedProduct>;
  setOrders: (orders: Array<IOrderedProduct>) => void;
  addOrder: (order: IOrderedProduct) => void;
  removeOrder: (index: number) => void;
  qtyChanging: (index: number, qty: number) => void;
  calculateBunchPrice: (index: number) => void;
  //#endregion OrderStuffs
}

export const useTransactionStore = create<ITransaction>()((set) => ({
  //#region TransactionStuffs
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
  //#endregion TransactionStuffs

  //#region PaymentStuffsStore
  overAllPayment: 0,
  balance: 0,
  change: 0,

  updatePaymentInfos: () => set(produce((state) => updatePaymentInfos(state))),

  setOverAllPayment: (overAllPayment) =>
    set((state) => ({ overAllPayment: overAllPayment })),
  setBalance: (balance) => set((state) => ({ balance: balance })),
  setChange: (change) => set((state) => ({ change: change })),

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
  updateChange: (index) => {
    set(
      produce((state: ITransaction) => {
        if (state.payments[index].paymentType === PaymentTypes.Cash) {
          let change =
            state.payments[index].tendered - state.payments[index].amount;
          if (change > 0) state.payments[index].change = change;
        }
      })
    );
  },
  paymentReset: () =>
    set(
      produce((state) => {
        state.payments = [];
        state.overAllPayment = 0;
        state.balance = 0;
        state.change = 0;
      })
    ),
  //#endregion PaymentStuffsStore

  //#region OrderStuffsStore
  orders: [],
  setOrders: (orders) => set((state) => ({ orders: orders })),
  addOrder: (order) =>
    set(produce<ITransaction>((state) => addOrderFn(state, order))),
  removeOrder: (index) =>
    set((state) => ({
      orders: state.orders.filter((_, i) => i !== index),
    })),
  qtyChanging: (index, qty) =>
    set(
      produce<ITransaction>((state) => {
        state.orders[index].quantity = qty;
      })
    ),
  calculateBunchPrice: (index) =>
    set(produce((state) => calculateBunchPriceFn(state, index))),
  //#endregion OrderStuffsStore
}));

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

const updatePaymentInfos = (state: WritableDraft<ITransaction>) => {
  state.overAllPayment = 0;
  state.balance = 0;
  state.change = 0;
  let newChange = 0;
  for (let i = 0; i != state.payments.length; i++) {
    state.overAllPayment += state.payments[i].amount;
    newChange += state.payments[i].change;
  }
  state.balance = state.overAllPayment - state.total;
  state.change = newChange;
};

const addOrderFn = (
  state: WritableDraft<ITransaction>,
  order: IOrderedProduct
) => {
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

const calculateBunchPriceFn = (
  state: WritableDraft<ITransaction>,
  idx: number
) => {
  let price = state.orders[idx].productUnitPrice;
  let qty = state.orders[idx].quantity;

  let qtyPrice = Math.round(price * qty * 100) / 100;

  state.orders[idx].bunchTotal = qtyPrice;
};
