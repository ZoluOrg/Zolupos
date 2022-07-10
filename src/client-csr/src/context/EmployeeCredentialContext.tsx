import Cookies from "js-cookie";
import { useQuery } from "react-query";
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
