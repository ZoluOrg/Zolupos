import { PaymentTypes } from "../enums/PaymentTypes";
import { IOrderedProduct } from "../modules/app/POS/OrderedProduct";
import { ICustomer } from "./ICustomer";
import { IPayment } from "./IPayment";

export interface ITransaction {
  transactionId: number;
  reference: string;
  customerId: number | null;
  deviceId: number;
  transactedAt: Date;
  discount: number;
  vat: number;
  total: number;
  subTotal: number;
  status: number;
  orderedProducts: Array<IOrderedProduct>;
  payments: Array<IPayment>;
}

export interface IAddTransaction {
  customerId: number | null;
  vat: number;
  total: number;
  subTotal: number;
  discount: number;
  deviceId: number;
  status: number;
  orderedProducts: Array<IOrderedProduct>;
  payments: Array<IPayment>;
}