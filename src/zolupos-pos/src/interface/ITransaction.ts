import { PaymentTypes } from "../enums/PaymentTypes";
import { IOrderedProduct } from "../modules/app/POS/OrderedProduct";
import { ICustomer } from "./ICustomer";
import { IPayment } from "./IPayment";

export interface ITransaction {
  transactionId: number;
  reference: string;
  customerId: number | null;
  transactedAt: Date;
  discount: number;
  vat: number;
  total: number;
  subTotal: number;
  orderedProducts: Array<IOrderedProduct>;
  payments: Array<IPayment>;
}