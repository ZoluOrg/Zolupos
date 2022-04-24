import Cookies from "js-cookie";
import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";
import { useMutation, useQuery } from "react-query";
import { IEmployee } from "../interface/IEmployee";
import { IEmployeeCredentialsContext } from "../interface/IEmployeeCredentialsContext";
import { GetEmployeesById } from "../modules/Employee/EmployeeService";
import { ParseJWT } from "../utils/ParseJWT";

const DefaultValue: IEmployeeCredentialsContext = {
  Creds: null,
  Token: "",
  IsAuthenticated: false,
  GetCreds: () => {},
};

const EmployeeCredentialsContext = createContext(DefaultValue);

export const EmployeeCredentialsProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [Id, SetID] = useState<number>(0);
  const [Creds, SetCreds] = useState<IEmployee | null>(null);
  const [Token, SetToken] = useState<string>("");
  const [IsAuthenticated, SetIsAuthenticated] = useState<boolean>(false);
  const { data, error, refetch } = useQuery(
    ["user-creds", Id],
    () => GetEmployeesById(Id),
    { enabled: false, refetchOnWindowFocus: false }
  );

  useEffect(() => {
    let Creds = Cookies.get("zolupos-employee-creds");
    if (Token) {
      let Parsed: IEmployee = JSON.parse(Creds!);
      SetCreds(Parsed);
    }
  });

  useEffect(() => {
    const get = async () => {
      console.log(Id);
      await refetch();
      SetCreds(data?.value!);
      Cookies.set("zolupos-employee-creds", JSON.stringify(data?.value!));
    };
    get();
  }, [Id]);

  const GetCreds = async () => {
    const Token = Cookies.get("zolupos-employee-token");
    const Parsed = ParseJWT(Token!);
    SetID(Number(Parsed["unique_name"]));
  };

  return (
    <EmployeeCredentialsContext.Provider
      value={{ Creds, Token, IsAuthenticated, GetCreds }}
    >
      {children}
    </EmployeeCredentialsContext.Provider>
  );
};

export const UseEmployeeCredentialsContext = () => {
  return useContext(EmployeeCredentialsContext);
};
