import { PaymentTypes } from "../enums/PaymentTypes";
import { IOrderedProduct } from "../modules/app/POS/OrderedProduct";
import { ICustomer } from "./ICustomer";
import { IPayment } from "./IPayment";

export interface ITransaction {
  customerId: number | null;
  vat: number;
  total: number;
  subTotal: number;
  discount: number;
  orderedProducts: Array<IOrderedProduct>;
  payments: Array<IPayment>;
}