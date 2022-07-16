import create from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

interface IPayment {
  payments: Array<IPayment>;
  showPaymentModal: boolean;
  setShowPaymentModal: (showPaymentModal: boolean) => void;
  setPayments: (payments: Array<IPayment>) => void;
  removePayment: (index: number) => void;
  addPayment: (payment: IPayment) => void;
}

export const usePaymentStore = create<IPayment>()((set) => ({
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
}));
