import { IProduct } from "../IProduct";

export interface IPosContext {
  products: Array<IProduct>;
  punched: Array<IProduct>;
  searched: Array<IProduct>;
  isSearching: boolean;
  addToPunched: (product: IProduct) => void;
  removeToPunched: (product: number) => void;
  searchProduct: (barCode: string) => void;
  setIsSearching: (setTo: boolean) => void;
}
