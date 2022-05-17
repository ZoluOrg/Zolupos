import { IProduct } from "./IProduct";

export interface ITransactionContext {
  punched: Array<IProduct>;
  addProduct: (productToAdd: IProduct) => void;
  removeProduct: (productIndex: number) => void;
  pushTransaction: () => void;
}
