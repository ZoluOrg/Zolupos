import { IEmployee } from "../IEmployee";

export interface ICredentialContext {
	creds: IEmployee | null;
	updateCreds: (employee: IEmployee) => void; 
}