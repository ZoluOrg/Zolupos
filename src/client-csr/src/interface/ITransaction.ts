import { PaymentTypes } from "../enums/PaymentTypes";
import { IOrderedProduct } from "./IOrderedProduct";

export interface ITransaction {
  customerId: number;
  vat: number;
  total: number;
  subTotal: number;
  paymentType: PaymentTypes;
  orderedProducts: Array<IOrderedProduct>;
}