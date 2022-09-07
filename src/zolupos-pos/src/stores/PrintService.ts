import { MutableRefObject } from "react";
import create from "zustand";

interface IPrintService {
  toPrint: MutableRefObject<any> | null
  setToPrint: (newPrint: MutableRefObject<any>) => void
}

export const usePrintService = create<IPrintService>((set) => ({
  toPrint: null,
  setToPrint: (newPrint: MutableRefObject<any>) => set((state) => ({toPrint: newPrint})),
}))