import axios from "axios";
import { Result } from "postcss";
import { IProduct } from "../../interface/IProduct";
import { ISearchResponse } from "../../interface/ISearchResponse";
import { getTokenAsBearer } from "../../utils/TokenUtils";
import ResultWrapper from "../../wrappers/ResultWrapper";

export const getAllProducts = async () => {
  let products = await axios.get<ResultWrapper<Array<IProduct>>>(
    "https://localhost:7073/api/Product/",
    { headers: getTokenAsBearer() }
  );
  return products.data.receive;
};

export const getProductById = async (id: number) => {
  let product = await axios.get<ResultWrapper<IProduct>>(
    `https://localhost:7073/api/Product/${id}`,
    { headers: getTokenAsBearer() }
  );
  return product.data.receive;
};

export const addProduct = async (product: IProduct) => {
  let response = await axios.post<ResultWrapper<number>>(
    "https://localhost:7073/api/Product/",
    product,
    { headers: getTokenAsBearer() }
  );

  return response.data.receive;
};

export const searchProduct = async (query: string) => {
  let response = await axios.get<ResultWrapper<Array<ISearchResponse>>>(
    `https://localhost:7073/api/Product/Search?Query=${query}`,
    { headers: getTokenAsBearer() }
  );
  return response.data.receive;
}