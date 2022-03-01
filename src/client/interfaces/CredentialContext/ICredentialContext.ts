import { IEmployee } from "../IEmployee";

export interface ICredentialContext {
	creds: IEmployee | null;
	updateCreds: () => void; 
}