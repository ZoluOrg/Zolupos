import { IEmployee } from "../IEmployee";

export interface IAuthetnicateEmployee {
    requestedToken: string;
    requestedBearerToken: string;
    employee: IEmployee
}