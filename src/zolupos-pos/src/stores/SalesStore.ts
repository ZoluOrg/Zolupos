import produce from "immer";
import create from "zustand";
import { devtools } from "zustand/middleware";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { IPagination } from "../interface/IPagination";
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


  currentPage: number;
  setCurrentPage: (currentPage: number) => void;

  totalPages: number;
  setTotalPages: (totalPages: number) => void;

  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;

  selectedPage: number;
  setSelectedPage: (selectedPage: number) => void;

  sort: string;
  setSort: (sort: string) => void;

  isDescending: boolean;
  setIsDescending: (isDescending: boolean) => void;

  selected: number;
  setSelected: (selected: number) => void;

  shouldShowModal: boolean;
  setShouldShowModal: (shouldShowModal: boolean) => void;
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
    isLoading: true,
    setIsLoading: (isLoading: boolean) =>
      set(
        produce((state) => {
          state.isLoading = isLoading;
        })
      ),
    selectedPage: 0,
    setSelectedPage: (selectedPage: number) =>
      set(
        produce((state) => {
          state.selectedPage = selectedPage;
        }
      )
    ),
    sort: "by_id",
    setSort: (sort: string) =>
      set(
        produce((state) => {
          state.sort = sort;
        }
      )
    ),

    isDescending: true,
    setIsDescending: (isDescending: boolean) =>
      set(
        produce((state) => {
          state.isDescending = isDescending;
        }
      )
    ),

    selected: 0,
    setSelected: (selected: number) =>
      set(
        produce((state) => {
          state.selected = selected;
        }
      )
    ),

    shouldShowModal: false,
    setShouldShowModal: (shouldShowModal: boolean) =>
      set(
        produce((state) => {
          state.shouldShowModal = shouldShowModal;
        }
      )
    ),
  }))
);


mountStoreDevtool("Store", useSaleStore);
