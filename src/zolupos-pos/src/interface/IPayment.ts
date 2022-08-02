import { PaymentTypes } from "../enums/PaymentTypes";

export interface IPayment {
  paymentType: number;
  tendered: number;
  change: number;
  amount: number;
}