import { ISearchResponse } from "./ISearchResponse";

export interface IOrderedProduct extends ISearchResponse {
  quantity: number;
  discount: number;
  bunchPrice: number;
}