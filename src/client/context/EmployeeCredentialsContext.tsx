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
import { GetEmployeesById } from "../modules/Employee/EmployeeService";
import { ParseJWT } from "../utils/ParseJWT";

const ContextDefaultValue: IEmployeeCredentialsContext = {
  Creds: null,
  Token: "",
  IsLoggedIn: false,
  SetToken: async (Token: string) => {},
};

const EmployeeCredentialsContext = createContext(ContextDefaultValue);

export const EmployeeCredentialsProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [Token, SetActToken] = useState<string>("");
  const [Creds, SetCreds] = useState<IEmployee | null>(null);
  const [IsLoggedIn, SetIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const EmpToken = Cookies.get("zolupos-employee-token");
    const UserCreds = Cookies.get("zolupos-employee-creds");
    if (EmpToken && UserCreds) {
      SetActToken(EmpToken);
      SetCreds(JSON.parse(UserCreds));
      SetIsLoggedIn(true);
    } else console.log("Employee not authenticated!");
  }, []);

  const SetToken = async (TokenToSave: string) => {
    // SetToken
    console.log("setting token");
    SetActToken(TokenToSave);
    Cookies.set("zolupos-employee-token", TokenToSave);
    console.log("token set");

    // GetSet Creds
    const Parsed = ParseJWT(TokenToSave);
    let EmployeeCredentials = await GetEmployeesById(Parsed["unique_name"]);
    SetCreds(EmployeeCredentials.value);
    console.log(EmployeeCredentials.value);
    Cookies.set(
      "zolupos-employee-creds",
      JSON.stringify(EmployeeCredentials.value)
    );
    SetIsLoggedIn(true);
  };

  return (
    <EmployeeCredentialsContext.Provider
      value={{ Token, Creds, SetToken, IsLoggedIn }}
    >
      {children}
    </EmployeeCredentialsContext.Provider>
  );
};

export const UseEmployeeCredentialsContext = () => {
  return useContext(EmployeeCredentialsContext);
};
