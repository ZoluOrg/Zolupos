import { ISearchResponse } from "./ISearchResponse";

export interface ISearchContext {
  toSearch: string;
  selected: number;
  searchResult: Array<ISearchResponse>;
  setSelected: (toBeSelected: number) => void;
  find: (query: string) => void;
}
