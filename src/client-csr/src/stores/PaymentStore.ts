import produce from "immer";
import { WritableDraft } from "immer/dist/internal";
import { object } from "zod";
import create from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { PaymentTypes } from "../enums/PaymentTypes";
import { IPayment } from "../interface/IPayment";

interface IPaymentStore {
  payments: Array<IPayment>;
  showPaymentModal: boolean;
  setShowPaymentModal: (showPaymentModal: boolean) => void;
  setPayments: (payments: Array<IPayment>) => void;
  removePayment: (index: number) => void;
  addPayment: (payment: IPayment) => void;

  setPaymentMethod: (index: number, paymentMethod: number) => void;
}

export const usePaymentStore = create<IPaymentStore>()((set) => ({
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
}));

const setPaymentMethodFn = (
  state: WritableDraft<IPaymentStore>,
  index: number,
  paymentMethod: number
) => {
  state.payments[index].paymentType =
    Object.values(PaymentTypes)[paymentMethod];
};
