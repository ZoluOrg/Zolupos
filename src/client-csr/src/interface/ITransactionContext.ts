import { IOrderedProduct } from "./IOrderedProduct";
import { IProduct } from "./IProduct";
import { ISearchResponse } from "./ISearchResponse";

export interface ITransactionContext {
  punched: Array<IOrderedProduct>;
  total: number;
  subTotal: number;
  vat: number;
  quantity: number;
  discount: number;
  addProduct: (productToAdd: ISearchResponse) => void;
  removeProduct: (productIndex: number) => void;
  pushTransaction: () => void;
  qtyChanging: (idx: number, qty: number) => void;
  discountChanging: (discount: number) => void;
}
