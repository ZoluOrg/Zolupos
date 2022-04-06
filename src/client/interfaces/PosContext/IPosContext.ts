import { IProduct } from "../IProduct";
import { IPunched } from "../transaction/IPunched";

export interface IPosContext {
  products: Array<IProduct>;
  punched: Array<IPunched>;
  searched: Array<IProduct>;
  selected: number;
  searchedInput: string;
  isSearching: boolean;
  addToPunched: (barCode: string) => void;
  removeToPunched: (product: number) => void;
  searchProduct: (query: string) => void;
  setSelected: (idx:number) => void;
  setSearchedInput: (s: string) => void;
  resetSearch: () => void;
  setIsSearching: (val: boolean) => void;
  setPunchedQuantity: (qty: number, id: number) => void;
  setDiscount: (qty: number, id: number) => void;
}
walter