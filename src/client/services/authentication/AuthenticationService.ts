import axios, { Axios, AxiosError } from "axios";
import { error } from "console";
import Cookies from "js-cookie";
import { IAuthenticationRequest } from "../../interfaces/authentication/IAuthenticationRequest";
import { ILoginForm } from "../../interfaces/FormValues";
import { IResultWrapper } from "../../wrapper/ResultWrapper";

export const Login = async (request: IAuthenticationRequest): Promise<string> => {
  let response = await axios.post<IResultWrapper<string>>(
    "https://localhost:7116/api/Authentication",
    request
  );
  return response.data.value;
};