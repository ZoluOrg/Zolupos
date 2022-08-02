import { IProduct } from "./IProduct";

export interface IProductContext {
  products: Array<IProduct>;
  refreshProductList: () => Promise<void>;
}