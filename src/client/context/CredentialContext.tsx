import React, { createContext, useContext, useEffect, useState } from "react";
import { ICredentialContext } from "../interfaces/CredentialContext/ICredentialContext";
import { IEmployee } from "../interfaces/IEmployee";
import Cookies from "js-cookie";
import { parseJwt } from "../utils/JWT";
import { getEmployeeById } from "../modules/employee/employeeService";

const defaultValues: ICredentialContext = {
  creds: null,
  updateCreds: () => null,
};

const credCtx = createContext(defaultValues);

export const CredentialContext: React.FC = ({ children }) => {
  const [creds, setCreds] = useState<IEmployee | null>(null);

  useEffect(() => {
    const getEmployee = async () => {
      let employee  = Cookies.get("zolucreds");
      if (employee) {
        let parsedEmployee: IEmployee = JSON.parse(employee);
        setCreds(parsedEmployee);
      }
    };
    getEmployee();
  },[]);

  // pass cookie if cookie.set is slow
  const updateCreds = async () => {
    const token = Cookies.get("zoluken");
    const parsedToken = parseJwt(token!);
    const employee = await getEmployeeById(parsedToken["unique_name"], token!);
    setCreds(employee?.data!);
    Cookies.set("zolucreds",JSON.stringify(employee?.data!));
  }

  return <credCtx.Provider value={{creds, updateCreds}}>{children}</credCtx.Provider>;
};

export const useCredentialContext = () => {
  return useContext(credCtx);
}