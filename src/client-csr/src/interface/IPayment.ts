import { PaymentTypes } from "../enums/PaymentTypes";

export interface IPayment {
  paymentType: PaymentTypes;
  tendered: number;
  change: number;
  amount: number;
}