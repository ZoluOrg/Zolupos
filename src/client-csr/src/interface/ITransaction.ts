import { PaymentTypes } from "../enums/PaymentTypes";
import { IOrderedProduct } from "./IOrderedProduct";
import { IPayment } from "./IPayment";

export interface ITransaction {
  customerId: number;
  vat: number;
  total: number;
  subTotal: number;
  orderedProducts: Array<IOrderedProduct>;
  payments: Array<IPayment>;
}