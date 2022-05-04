import axios from "axios";
import Cookies from "js-cookie";
import { IEmployee } from "../../interface/IEmployee";
import { GetCookieAuthBearer } from "../../utils/GetCookieAuthBearer";
import ResultWrapper from "../../wrappers/ResultWrapper";

export const GetAllEmployees = async () => {
  let response = await axios.get<ResultWrapper<Array<IEmployee>>>(
    "https://localhost:7116/api/Employee",
    { headers: GetCookieAuthBearer() }
  );
  return response.data;
};

export const GetEmployeesById = async (ID: number) => {
  let response = await axios.get<ResultWrapper<IEmployee>>(
    `https://localhost:7116/api/Employee/${ID}`,
    { headers: GetCookieAuthBearer() }
  );
  return response.data;
};

export const PostNewEmployee = async (Employee: IEmployee) => {
  let response = await axios.post<number>(
    "https://localhost:7116/api/Employee"
  );
};
