import axios from "axios";
import { IEmployeeLogin } from "../../interface/IEmployeeLogin";
import ResultWrapper from "../../wrappers/ResultWrapper";

export const AuthenticateEmployee = async (
  EmployeeCredentials: IEmployeeLogin
) => {
  let response = await axios.post<ResultWrapper<string>>(
    "https://localhost:3001/api/Authentication",
    EmployeeCredentials
  );
  return response.data;
};
