import { IEmployee } from "./IEmployee";

export interface IEmployeeCredentialsContext {
  Creds: IEmployee | null
  Token: string;
  IsAuthenticated: boolean;
  GetCreds: () => Promise<void>;
}