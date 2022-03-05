import axios from "axios";
import Cookies from "js-cookie";
import { IEmployee } from "../../interfaces/IEmployee";
import { IResultWrapper } from "../../wrapper/ResultWrapper";

export const getEmployeeById = async (id: number, token: string) => {
  let response = await axios
    .get<IResultWrapper<IEmployee>>(`https://localhost:7116/api/Employee/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((error) => {
      return null;
    });
  return response?.data;
};
