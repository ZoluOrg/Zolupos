import { IEmployee } from "./IEmployee";

export interface IEmployeeCredentialsContext {
  Creds: IEmployee | null
  Token: string;
  SetToken: (TokenToSav: string) => Promise<void>
}