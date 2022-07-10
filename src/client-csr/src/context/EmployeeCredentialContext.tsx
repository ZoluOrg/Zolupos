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
import Cookies from "js-cookie";
import { parseJWT } from "../utils/ParseJWT";
import { getEmployeeById } from "../services/Employee/EmployeeService";
import { useQuery } from "react-query";

const defaultValue: IEmployeeCredentialsContext = {
  creds: null,
  token: "",
  isLoggedIn: false,
  save: async (TokenToSave: string, EmployeeCredsToSave: IEmployee) => {},
};

const employeeCredentialContext = createContext(defaultValue);

export const EmployeeCredentialContext: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [creds, setCreds] = useState<IEmployee | null>(null);
  const [token, setGlobalToken] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const empCreds = Cookies.get("zolupos-employee-creds");
    const empToken = Cookies.get("zolupos-employee-token");
    if (empToken && empCreds != null) {
      setCreds(JSON.parse(empCreds));
      setGlobalToken(empToken);
      setIsLoggedIn(true);
    } else console.warn("Employee is not authenticated");
  }, []);
  const save = async (TokenToSave: string, EmployeeCredsToSave: IEmployee) => {
    console.log(TokenToSave);
    Cookies.set("zolupos-employee-creds", JSON.stringify(EmployeeCredsToSave));
    Cookies.set("zolupos-employee-token", TokenToSave);

    setCreds(EmployeeCredsToSave);
    setGlobalToken(TokenToSave);
  };
  return (
    <employeeCredentialContext.Provider
      value={{ creds, token, isLoggedIn, save }}
    >
      {children}
    </employeeCredentialContext.Provider>
  );
};

export const useEmployeeCredential = () => {
  return useContext(employeeCredentialContext);
};

