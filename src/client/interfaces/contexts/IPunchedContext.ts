import { IPunched } from "../transaction/IPunched";

export interface IPunchedContext {
	punched: Array<IPunched>;
	addToPunched: (barCode: string) => void;
	removeToPunched: (barCode: string) => void;
	increasePunchedItemQuantity: (barCode: string) => void;
}