import { IOrderedProduct } from "./IOrderedProduct";

export interface ITransaction {
  customerId: number;
  orderedProduct: Array<IOrderedProduct>;
}