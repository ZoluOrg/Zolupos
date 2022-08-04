import produce from "immer";
import create from "zustand";
import { devtools } from "zustand/middleware";
import { ITransaction } from "../interface/ITransaction";

interface ISaleStore {
  transactions: Array<ITransaction>;
  setTransactions: (transactions: Array<ITransaction>) => void;

  searchResult: Array<ITransaction>;
  setSearchResult: (searchResult: Array<ITransaction>) => void;

  limit: number;
  setLimit: (limit: number) => void;

  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
}

export const useSaleStore = create<ISaleStore>()(
  devtools((set) => ({
    transactions: [],
    setTransactions: (transactions: Array<ITransaction>) =>
      set(
        produce((state) => {
          state.transactions = transactions;
        })
      ),
    searchResult: [],
    setSearchResult: (searchResult: Array<ITransaction>) =>
      set(
        produce((state) => {
          state.searchResult = searchResult;
        })
      ),
    limit: 10,
    setLimit: (limit: number) =>
      set(
        produce((state) => {
          state.limit = limit;
        })
      ),
    searchQuery: "",
    setSearchQuery: (searchQuery: string) =>
      set(
        produce((state) => {
          state.searchQuery = searchQuery;
        })
      ),
  }))
);
