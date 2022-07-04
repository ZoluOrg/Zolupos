import { ISearchResponse } from "./ISearchResponse";

export interface IOrderedProduct extends ISearchResponse {
  quantity: number;
  bunchTotal: number;
}