import axios from "axios";
import Cookies from "js-cookie";
import { IAddProductRequest } from "../interfaces/inventory/IAddProductRequest";
import { IProduct } from "../interfaces/inventory/IProduct";
import {
  IRestockRequest,
} from "../interfaces/inventory/IRestockRequest";
import { IResultWrapper } from "../wrapper/ResultWrapper";

const token = Cookies.get("zoluken");

export const getProducts = async () => {
  let request = await axios
    .get<IResultWrapper<Array<IProduct>>>(
      "https://localhost:7116/api/Inventory",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .catch((error) => {
      return null;
    });
  return request?.data;
};

export const getProductsById = async (id: number) => {
  let request = await axios
    .get<IResultWrapper<IProduct>>(
      `https://localhost:7116/api/Inventory/${id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .catch((error) => {
      return null;
    });
  return request?.data;
};

export const addProduct = async (productToAdd: IAddProductRequest) => {
  let request = await axios
    .post<IResultWrapper<number>>("https://localhost:7116/api/Inventory/", {
      productToAdd,
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch((error) => {
      return null;
    });
  return request?.data;
};

export const editProduct = async (editedProduct: IProduct) => {
  let request = await axios
    .patch<IResultWrapper<IProduct>>(
      "https://localhost:7116/api/Inventory/edit",
      {
        editedProduct,
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .catch((error) => {
      return null;
    });
  return request?.data;
};

export const restockProduct = async (restockRequest: IRestockRequest) => {
  let request = await axios
    .patch<IResultWrapper<number>>(
      "https://localhost:7116/api/Inventory/restock",
      {
        restockRequest,
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .catch((error) => {
      return null;
    });
  return request?.data;
};
