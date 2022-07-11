import { IOrderedProduct } from "./IOrderedProduct";

export interface ITransaction {
  customerId: number;
  vat: number;
  total: number;
  subTotal: number;
  orderedProducts: Array<IOrderedProduct>;
}