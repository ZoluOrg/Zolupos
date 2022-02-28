import React, { useEffect, useState } from "react";
import { ICredentialContext } from "../interfaces/CredentialContext/ICredentialContext";
import { IEmployee } from "../interfaces/IEmployee";
import Cookies from "js-cookie";
import { parseJwt } from "../utils/JWT";
import { getEmployeeById } from "../modules/employee/services";

const defaultValues: ICredentialContext = {
  creds: null,
  updateCreds: (employee: IEmployee) => null,
};

export const CredentialContext: React.FC = ({ children }) => {
  const [creds, setCreds] = useState<IEmployee | null>(null);
  useEffect(() => {
    let zoluken = Cookies.get("zoluken");
    const getEmployee = async () => {
      if (zoluken != null) {
        const id = parseJwt(zoluken)["unique_name"];
        const userCredential = await getEmployeeById(id, zoluken);
        if (userCredential != null) {
          let toSet = JSON.stringify(userCredential.data);
          console.log(toSet);
          Cookies.set("zolucreds", toSet);
        }
      }
    };
    getEmployee();
  });

  return <div>{children}</div>;
};
