import axios from "axios";
import { IAuthenticationRequest } from "../../interfaces/authentication/IAuthenticationRequest";
import { ILoginForm } from "../../interfaces/FormValues";
import { IResultWrapper } from "../../wrapper/ResultWrapper";

export const Login = async (request: IAuthenticationRequest) => {
	let response = await axios.post<IResultWrapper<string>>("https://localhost:7116/api/Authentication",request);
	if (response.status == 404) return null;
	return response.data.data;
}
