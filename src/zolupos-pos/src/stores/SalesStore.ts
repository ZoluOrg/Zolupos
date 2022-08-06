import produce from "immer";
import create from "zustand";
import { devtools } from "zustand/middleware";
import { IPaginationInfo } from "../interface/IPaginationInfo";
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

  salePaginationInfo: IPaginationInfo | null;
  setSalePaginationInfo: (salePaginationInfo: IPaginationInfo) => void;

  currentPage: number;
  setCurrentPage: (currentPage: number) => void;

  totalPages: number;
  setTotalPages: (totalPages: number) => void;

  isLoading: boolean;
  setIsLoading: (isFetching: boolean) => void;
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

    salePaginationInfo: null,
    setSalePaginationInfo: (salePaginationInfo: IPaginationInfo) =>
      set(
        produce((state) => {
          state.salePaginationInfo = salePaginationInfo;
        })
      ),
    currentPage: 1,
    setCurrentPage: (currentPage: number) =>
      set(
        produce((state) => {
          state.currentPage = currentPage;
        })
      ),
    totalPages: 1,
    setTotalPages: (totalPages: number) =>
      set(
        produce((state) => {
          state.totalPages = totalPages;
        })
      ),
    isLoading: false,
    setIsLoading: (isFetching: boolean) =>
      set(
        produce((state) => {
          state.isFetching = isFetching;
        })
      ),
  }))
);
