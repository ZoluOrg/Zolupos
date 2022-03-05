import { IProduct } from "../IProduct";

export interface IPosContext {
	products: Array<IProduct>;
	punched: Array<IProduct>;
}