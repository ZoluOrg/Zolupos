import { IEmployee } from "./IEmployee";

export interface IEmployeeCredentialsContext {
  creds: IEmployee | null
  token: string;
  isLoggedIn: boolean;
  setToken: (TokenToSav: string) => Promise<void>
}