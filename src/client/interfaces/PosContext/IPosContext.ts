import { IProduct } from "../IProduct";

export interface IPosContext {
	products: Array<IProduct> | null;
	punched: Array<IProduct> | null;
	addToPunched: (product: IProduct) => void
	removeToPunched: (product: number) => void
}