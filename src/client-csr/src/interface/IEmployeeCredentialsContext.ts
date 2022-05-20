import { IEmployee } from "./IEmployee";

export interface IEmployeeCredentialsContext {
  creds: IEmployee | null
  token: string;
  isLoggedIn: boolean;
  authenticate: (TokenToSave: string) => Promise<void>
}