import axios from "axios";
import { IAuthetnicateEmployee } from "../../interface/services/IAuthService";
import { IEmployeeLogin } from "../../modules/Login/Form";
import ResultWrapper from "../../wrappers/ResultWrapper";

export const authenticateEmployee = async (
  employeeCredentials: IEmployeeLogin
) => {
  let response = await axios.post<ResultWrapper<IAuthetnicateEmployee>>(
    "https://localhost:7073/api/Authentication",
    employeeCredentials
  );
  return response.data;
};
