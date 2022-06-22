import { IOrderedProduct } from "./IOrderedProduct";
import { IProduct } from "./IProduct";
import { ISearchResponse } from "./ISearchResponse";

export interface ITransactionContext {
  punched: Array<IOrderedProduct>;
  addProduct: (productToAdd: ISearchResponse) => void;
  removeProduct: (productIndex: number) => void;
  pushTransaction: () => void;
}
