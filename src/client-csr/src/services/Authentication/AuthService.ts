import axios from "axios";
import { IEmployeeLogin } from "../../interface/IEmployeeLogin";
import ResultWrapper from "../../wrappers/ResultWrapper";

export const authenticateEmployee = async (
  employeeCredentials: IEmployeeLogin
) => {
  let response = await axios.post<ResultWrapper<string>>(
    "https://localhost:7116/api/Authentication",
    employeeCredentials
  );
  return response.data;
};
