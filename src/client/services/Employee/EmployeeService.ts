import axios from "axios";
import Cookies from "js-cookie";
import { IEmployee } from "../../interface/IEmployee";
import { getTokenAsBearer } from "../../utils/TokenUtils";
import ResultWrapper from "../../wrappers/ResultWrapper";

export const getAllEmployee = async () => {
  let response = await axios.get<ResultWrapper<Array<IEmployee>>>(
    "https://localhost:7116/api/Employee",
    { headers: getTokenAsBearer() }
  );
  return response.data;
};

export const getAllEmployeeId = async (ID: number) => {
  let response = await axios.get<ResultWrapper<IEmployee>>(
    `https://localhost:7116/api/Employee/${ID}`,
    { headers: getTokenAsBearer() }
  );
  return response.data;
};

export const postNewEmployee = async (Employee: IEmployee) => {
  let response = await axios.post<number>(
    "https://localhost:7116/api/Employee"
  );
};
