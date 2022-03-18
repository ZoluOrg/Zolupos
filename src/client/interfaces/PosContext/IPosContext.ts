import { IProduct } from "../IProduct";

export interface IPosContext {
  products: Array<IProduct>;
  punched: Array<IProduct>;
  searched: Array<IProduct>;
  selected: number;
  addToPunched: (product: IProduct) => void;
  removeToPunched: (product: number) => void;
  searchProduct: (barCode: string) => void;
  setSelected: (idx:number) => void;
  resetSearched: () => void;
}
