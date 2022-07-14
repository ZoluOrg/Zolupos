import create from 'zustand'

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
}

export const useTransaction = create<ITransaction>((set) => ({
  total: 0,
  subTotal: 0,
  vat: 0,
  quantity: 0,
  discount: 0,
  setTotal: (total) => set((state) => ({total: total})),
  setSubTotal: (subTotal) => set((state) => ({subTotal: subTotal})),
  setVat: (vat) => set((state) => ({vat: vat})),
  setQuantity: (quantity) => set((state) => ({quantity: quantity})),
  setDiscount: (discount) => set((state) => ({discount: discount})),
}));