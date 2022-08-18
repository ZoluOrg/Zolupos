import create from "zustand";

interface ISessionStore {
  askedForFunds: boolean;
  setAskedForFunds: (asked: boolean)  => void;
  shouldShowSessionModal: boolean;
  setShouldShowSessionModal: (shouldShowSessionModal: boolean) => void;
  funds: number;
  setFunds: (funds: number) => void;
}

export const useSessionStore = create<ISessionStore>((set) => ({
  askedForFunds: false,
  setAskedForFunds: (asked: boolean) => set((state) => ({
    askedForFunds: asked
  })),
  shouldShowSessionModal: false,
  setShouldShowSessionModal: (shouldShowSessionModal) =>
    set((state) => ({ shouldShowSessionModal })),
  funds: 0,
  setFunds: (funds: number) => set((state) => ({ funds })),
}));
