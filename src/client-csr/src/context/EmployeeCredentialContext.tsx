import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import Cookies from "js-cookie";
import { parseJWT } from "../utils/ParseJWT";
import { getEmployeeById } from "../services/Employee/EmployeeService";
import { useQuery } from "react-query";
import axios from "axios";
import { z } from "zod";
import { Router, useNavigate } from "react-router-dom";

export const employeeValidator = z.object({
  employeeId: z.number(),
  firstName: z.string(),
  surName: z.string(),
  fullName: z.string(),
  pin: z.number(),
  role: z.string(),
  phoneNumber: z.number(),
  lastLogin: z.string(),
});

export type employee = z.infer<typeof employeeValidator>;

export interface IEmployeeCredentialsContext {
  creds: employee | null;
  token: string;
  isLoggedIn: boolean;
  save: (TokenToSave: string, EmployeeCredsToSave: employee) => Promise<void>;
}

const defaultValue: IEmployeeCredentialsContext = {
  creds: null,
  token: "",
  isLoggedIn: false,
  save: async (TokenToSave: string, EmployeeCredsToSave: employee) => {},
};

const employeeCredentialContext = createContext(defaultValue);

export const EmployeeCredentialContext: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [creds, setCreds] = useState<employee | null>(null);
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
  const save = async (TokenToSave: string, EmployeeCredsToSave: employee) => {
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

export const useEmployeeCreds = () => {
  const navigate = useNavigate();

  return useQuery("employee-creds", () => {
    const empCreds = Cookies.get("zolupos-employee-creds");
    const empToken = Cookies.get("zolupos-employee-token");
    if ((empToken && empCreds != null) || (empCreds && empToken != undefined)) {
      var res = JSON.parse(empCreds);
      return employeeValidator.parse(res);
    } else {
      navigate("/login");
    }
  });
};
