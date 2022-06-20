import { IEmployee } from "./IEmployee";

export interface IEmployeeCredentialsContext {
  creds: IEmployee | null
  token: string;
  isLoggedIn: boolean;
  save: (TokenToSave: string, EmployeeCredsToSave: IEmployee) => Promise<void>
}