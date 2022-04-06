import { IProductBase } from "./IProductBase";

export interface IAddProductRequest extends IProductBase {
	lastEdit: Date;
	lastRestock: Date;
}