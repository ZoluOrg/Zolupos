import React, { createContext, useContext, useEffect, useState } from "react";
import { ICredentialContext } from "../interfaces/CredentialContext/ICredentialContext";
import { IEmployee } from "../interfaces/IEmployee";
import Cookies from "js-cookie";
import { parseJwt } from "../utils/JWT";
import { getEmployeeById } from "../modules/employee/services";

const defaultValues: ICredentialContext = {
  creds: null,
  updateCreds: (employee: IEmployee) => null,
};

const credCtx = createContext(defaultValues);

export const CredentialContext: React.FC = ({ children }) => {
  const [creds, setCreds] = useState<IEmployee | null>(null);

  useEffect(() => {
    const getEmployee = async () => {
      let zoluken = Cookies.get("zoluken");
      if (zoluken != null) {
        const id = parseJwt(zoluken)["unique_name"];
        const userCredential = await getEmployeeById(id, zoluken);
        if (userCredential != null) {
          console.log(userCredential.data.firstName);
          setCreds(userCredential.data);
          console.log(creds);
        }
      }
    };
    getEmployee();
  },[creds]);

  const updateCreds = (employee: IEmployee) => {
    setCreds(employee);
  }

  return <credCtx.Provider value={{creds, updateCreds}}>{children}</credCtx.Provider>;
};

export const useCredentialContext = () => {
  return useContext(credCtx);
}