import axios from "axios";
import { ICustomer } from "../interface/ICustomer";
import { getTokenAsBearer } from "../utils/TokenUtils";
import ResultWrapper from "../wrappers/ResultWrapper";

export const getAllCustomer = async () => {
  let response = await axios.get<ResultWrapper<Array<ICustomer>>>(
    "https://localhost:7073/api/Customer"
  );
  return response.data;
};

export const getCustomerById = async (ID: number) => {
  let response = await axios.get<ResultWrapper<ICustomer>>(
    `https://localhost:7073/api/Customer/${ID}`
  );
  return response.data;
};

export const postNewCustomer = async (Customer: ICustomer) => {
  let response = await axios.post<number>(
    "https://localhost:7073/api/Customer"
  );
  return response.data;
};

export const deleteCustomer = async (ID: number) => {
  let response = await axios.delete<number>(
    `https://localhost:7073/api/Customer/${ID}`
  );
  return response.data;
};

export const getCustomerByName = async (name: string) => {
  let response = await axios.get<ICustomer>(
    `https://localhost:7073/api/Customer/name?name=${name}`,
    { headers: getTokenAsBearer() }
  );
  return response.data;
};
