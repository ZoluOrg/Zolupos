import axios from "axios";
import Cookies from "js-cookie";
import { employee } from "../../hooks/useEmployeeCreds";
import { getTokenAsBearer } from "../../utils/TokenUtils";
import ResultWrapper from "../../wrappers/ResultWrapper";

export const getAllEmployee = async () => {
  let response = await axios.get<ResultWrapper<Array<employee>>>(
    "https://localhost:7116/api/Employee",
    { headers: getTokenAsBearer() }
  );
  return response.data;
};

export const getEmployeeById = async (ID: number) => {
  let response = await axios.get<ResultWrapper<employee>>(
    `https://localhost:7116/api/Employee/${ID}`,
    { headers: getTokenAsBearer() }
  );
  return response.data;
};

export const postNewEmployee = async (Employee: employee) => {
  let response = await axios.post<number>(
    "https://localhost:7116/api/Employee"
  );
};
