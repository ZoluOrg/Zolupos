import { ITransaction } from "./ITransaction";

export interface IDevice {
  deviceId: number;
  deviceName: string;
  registrationDate: Date;
  lastUsed: Date;
  transactions: Array<ITransaction>;
}