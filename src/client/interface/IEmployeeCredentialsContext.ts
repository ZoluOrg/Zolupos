import { IEmployee } from "./IEmployee";

export interface IEmployeeCredentialsContext {
  Creds: IEmployee | null
  Token: string;
  IsLoggedIn: boolean;
  SetToken: (TokenToSav: string) => Promise<void>
}