import { IOrderedProduct } from "./IOrderedProduct";

export interface ITransaction {
  customerId: number;
  vat: number;
  total: number;
  subTotal: number;
  orderedProduct: Array<IOrderedProduct>;
}