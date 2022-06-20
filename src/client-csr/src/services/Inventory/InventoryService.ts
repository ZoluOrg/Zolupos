import axios from "axios";
import { IProduct } from "../../interface/IProduct";
import { getTokenAsBearer } from "../../utils/TokenUtils";
import ResultWrapper from "../../wrappers/ResultWrapper";

export const getAllProducts = async () => {
  let products = await axios.get<ResultWrapper<Array<IProduct>>>(
    "https://localhost:7116/api/Inventory",
    { headers: getTokenAsBearer() }
  );
  return products.data.receive;
};

export const getProductById = async (id: number) => {
  let product = await axios.get<ResultWrapper<IProduct>>(
    `https://localhost:7116/api/Inventory/${id}`,
    { headers: getTokenAsBearer() }
  );
  return product.data.receive;
};

export const addProduct = async (product: IProduct) => {
  let response = await axios.post<ResultWrapper<number>>(
    "https://localhost:7116/api/Inventory",
    product,
    { headers: getTokenAsBearer() }
  );

  return response.data.receive;
};
