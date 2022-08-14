import produce from "immer";
import { WritableDraft } from "immer/dist/internal";
import { mountStoreDevtool } from "simple-zustand-devtools";
import create from "zustand";
import { devtools } from "zustand/middleware";
import { ISearchResponse } from "../interface/ISearchResponse";

interface ISearch {
  searchQuery: string;
  searchResult: Array<ISearchResponse>;
  selectedResult: number;
  setSearchQuery: (searchQuery: string) => void;
  setSearchResult: (searchResult: Array<ISearchResponse>) => void;
  setSelected: (selectedResult: number) => void;
}

export const useSearchStore = create<ISearch>()(
  devtools((set) => ({
    searchQuery: "",
    searchResult: [],
    selectedResult: 0,
    setSearchQuery: (searchQuery: string) =>
      set((state) => ({ searchQuery: searchQuery })),
    setSearchResult: (searchResult: Array<ISearchResponse>) =>
      set((state) => ({ searchResult: searchResult })),
    setSelected: (selectedResult: number) =>
      set((state) => ({ selectedResult: selectedResult })),
  }))
);

mountStoreDevtool("SearchStore", useSearchStore);