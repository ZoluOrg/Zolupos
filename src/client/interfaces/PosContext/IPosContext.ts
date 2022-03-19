import { IProduct } from "../IProduct";

export interface IPosContext {
  products: Array<IProduct>;
  punched: Array<IProduct>;
  searched: Array<IProduct>;
  selected: number;
  searchedInput: string;
  isSearching: boolean;
  addToPunched: (product: IProduct) => void;
  removeToPunched: (product: number) => void;
  searchProduct: (barCode: string) => void;
  setSelected: (idx:number) => void;
  setSearchedInput: (s: string) => void;
  resetSearch: () => void;
  setIsSearching: (val: boolean) => void;
}
