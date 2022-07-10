import React, { useState } from "react";
import { Zolulogo } from "../../components/Zolulogo";
import Cookie from "js-cookie";
import { Formik, Form as FormikForm, Field, FormikHelpers } from "formik";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Checkbox } from "../../components/Checkbox";
import styles from "../../styles/login/Form.module.scss";
import { useEmployeeCredential } from "../../context/EmployeeCredentialContext";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { z, ZodError } from "zod";
import { Query, QueryClient, useMutation, useQueryClient } from "react-query";
import axios, { AxiosError } from "axios";
import ResultWrapper from "../../wrappers/ResultWrapper";
import { IAuthetnicateEmployee } from "../../interface/services/IAuthService";
import Cookies from "js-cookie";

const employeeLoginValidator = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters. \n"),
  pin: z.string().min(4, "Pin must be at least 4 characters."),
});

export const authenticateEmployee = async (
  employeeCredentials: employeeLogin
) => {
  let response = await axios.post<ResultWrapper<IAuthetnicateEmployee>>(
    "https://localhost:7073/api/Authentication",
    employeeLoginValidator.parse(employeeCredentials)
  );
  return response.data;
};

export type employeeLogin = z.infer<typeof employeeLoginValidator>;

export const Form = () => {
  const initialValues: employeeLogin = { fullName: "", pin: "" };
  const navigate = useNavigate();
  const empContext = useEmployeeCredential();
  const queryClient = useQueryClient();
  const [showPassword, setShowPassword] = useState(false);

  const { mutate, isLoading, error } = useMutation(authenticateEmployee, {
    onSuccess: async (data: ResultWrapper<IAuthetnicateEmployee>) => {
      Cookies.set(
        "zolupos-employee-creds",
        JSON.stringify(data.receive.employee)
      );
      Cookies.set("zolupos-employee-token", data.receive.requestedToken);
      queryClient.invalidateQueries("employee-creds");
      navigate("/landing");
    },
    onError: (error: any) => {
      let errorMessage = "";
      if (error instanceof ZodError) {
        error.errors.forEach((error) => {
          errorMessage += error.message;
        });
        toast.error(errorMessage);
      } else if (error instanceof AxiosError) {
        toast.error(error.response?.data.ExceptionMessage);
      }
    },
  });

  return (
    <div className="border-2 border-mallow-3 rounded-lg py-8 px-6 flex">
      <div className="h-full flex flex-col items-center justify-center">
        <div className="logo">
          <Zolulogo />
        </div>
        <span className="text-lg font-bold">Login</span>
        <div className="flex flex-col gap-[10px] mt-9">
          <Formik
            initialValues={initialValues}
            onSubmit={async (values: employeeLogin) => {
              mutate(values);
            }}
          >
            {({ isSubmitting }) => (
              <FormikForm>
                <div className="flex flex-col gap-[10px]">
                  <Field
                    as={Input}
                    name="fullName"
                    placeholder="Full Name"
                    type="text"
                    className="w-96"
                  />
                  <Field
                    as={Input}
                    name="pin"
                    placeholder="Pin"
                    type={showPassword ? "text" : "password"}
                    className="w-96"
                  />
                  <div className="flex gap-2 items-center">
                    <Checkbox onChange={() => setShowPassword(!showPassword)} />
                    <span>Show Password</span>
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full pt-[10px] pb-[10px] mt-9"
                  isLoading={isLoading}
                >
                  Submit
                </Button>
              </FormikForm>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
