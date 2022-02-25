import axios, { Axios, AxiosError } from "axios";
import { error } from "console";
import { IAuthenticationRequest } from "../../interfaces/authentication/IAuthenticationRequest";
import { ILoginForm } from "../../interfaces/FormValues";
import { IResultWrapper } from "../../wrapper/ResultWrapper";

export const Login = async (request: IAuthenticationRequest) => {
  axios
    .post<IResultWrapper<string>>(
      "https://localhost:7116/api/Authentication",
      request
    )
    .then((response) => {
      return response.data.data;
    }).catch((error) => {
			console.log("error");
			return null;
		});
};
