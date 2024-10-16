import { IProduct } from "./IProduct";

export interface ISearchContext {
  toSearch: string;
  selected: number;
  searchResult: Array<IProduct>;
  setSelected: (toBeSelected: number) => void;
  searchProduct: (query: string) => void;
}
