import { IProductBase } from "./IProductBase";

export interface IProduct extends IProductBase{
  productId: number;
  lastEdit: Date;
	lastRestock: Date;
}
