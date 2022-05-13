import Cookies from "js-cookie";
import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { IEmployee } from "../interface/IEmployee";
import { IEmployeeCredentialsContext } from "../interface/IEmployeeCredentialsContext";
import { GetEmployeesById } from "../services/Employee/EmployeeService";
import { ParseJWT } from "../utils/ParseJWT";

const defaultValue: IEmployeeCredentialsContext = {
  creds: null,
  token: "",
  isLoggedIn: false,
  setToken: async (Token: string) => {},
};

const employeeCredentialsContext = createContext(defaultValue);

export const EmployeeCredentialsProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [token, setActToken] = useState<string>("");
  const [creds, setCreds] = useState<IEmployee | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const empToken = Cookies.get("zolupos-employee-token");
    const userCreds = Cookies.get("zolupos-employee-creds");
    if (empToken && userCreds) {
      setActToken(empToken);
      setCreds(JSON.parse(userCreds));
      setIsLoggedIn(true);
    } else console.log("Employee not authenticated!");
  }, []);

  const setToken = async (tokenToSave: string) => {
    // SetToken
    console.log("setting token");
    setActToken(tokenToSave);
    Cookies.set("zolupos-employee-token", tokenToSave);
    console.log("token set");

    // GetSet Creds
    const Parsed = ParseJWT(tokenToSave);
    let EmployeeCredentials = await GetEmployeesById(Parsed["unique_name"]);
    setCreds(EmployeeCredentials.value);
    console.log(EmployeeCredentials.value);
    Cookies.set(
      "zolupos-employee-creds",
      JSON.stringify(EmployeeCredentials.value)
    );
    setIsLoggedIn(true);
  };

  return (
    <employeeCredentialsContext.Provider
      value={{ token: token, creds: creds, setToken: setToken, isLoggedIn: isLoggedIn }}
    >
      {children}
    </employeeCredentialsContext.Provider>
  );
};

export const useEmployeeCredentialsContext = () => {
  return useContext(employeeCredentialsContext);
};
