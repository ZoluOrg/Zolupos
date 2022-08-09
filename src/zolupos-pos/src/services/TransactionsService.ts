import axios from "axios";
import { IPagination } from "../interface/IPagination";
import { ITransaction } from "../interface/ITransaction";
import { getTokenAsBearer } from "../utils/TokenUtils";
import ResultWrapper from "../wrappers/ResultWrapper";

export const getAllTransactions = async () => {
  let transactions = await axios.get<ResultWrapper<Array<ITransaction>>>(
    "https://localhost:7073/api/Transaction/",
    { headers: getTokenAsBearer() }
  );
  return transactions.data.receive;
}

export const getTransactionById = async (id: number) => {
  let transaction = await axios.get<ResultWrapper<ITransaction>>(
    `https://localhost:7073/api/Transaction/${id}`,
    { headers: getTokenAsBearer() }
  );
  return transaction.data.receive;
}

export const getTransactionsPaginated = async (page: number, length: number, sortby: string, isDescending: boolean) => {
  let transactions = await axios.get<IPagination<Array<ITransaction>>>(
    `https://localhost:7073/api/Transaction/paginated?page=${page}&length=${length}&sortby=${sortby}&isDescending=${isDescending}`,
    { headers: getTokenAsBearer() }
  );
  return transactions.data;
}

export const searchTransactions = async (page: number, length: number, sortby: string, isDescending: boolean, query: string) => {
  let transactions = await axios.get<IPagination<Array<ITransaction>>>(
    `https://localhost:7073/api/Transaction/search?page=${page}&length=${length}&sortby=${sortby}&isDescending=${isDescending}&query=${query}`,
    { headers: getTokenAsBearer() }
  );
  return transactions.data;
}

export const addNewTransaction = async (transaction: ITransaction) => {
  let response = await axios.post<ResultWrapper<number>>(
    "https://localhost:7073/api/Transaction/",
    transaction,
    { headers: getTokenAsBearer() }
  );

  return response.data.receive;
}

export const deleteTransaction = async (id: number) => {
  let response = await axios.delete<ResultWrapper<number>>(
    `https://localhost:7073/api/Transaction/${id}`,
    { headers: getTokenAsBearer() }
  );

  return response.data.receive;
}