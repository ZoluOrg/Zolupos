import React, { useState } from "react";
import { Zolulogo } from "../../components/Zolulogo";
import Cookie from "js-cookie";
import { Formik, Form as FormikForm, Field, FormikHelpers } from "formik";
import { IEmployeeLogin } from "../../interface/IEmployeeLogin";
import { AuthenticateEmployee } from "../Authentication/AuthService";
import Router from "next/router";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Checkbox } from "../../components/Checkbox";
import { UseEmployeeCredentialsContext } from "../../context/EmployeeCredentialsContext";

export const Form = () => {
  const InitialValues: IEmployeeLogin = { FirstName: "", Pin: "" };
  const EmpContext = UseEmployeeCredentialsContext();
  const [ShowPassword, SetShowPassword] = useState<boolean>(false);

  const AuthenticateWithCreds = async (FormValue: IEmployeeLogin) => {
    console.log(FormValue);
    let data = await AuthenticateEmployee(FormValue).catch((error) =>
      alert("authentication error")
    );
    if (data) {
      await EmpContext.SetToken(data.value);
      Router.push("/");
    }
  };

  return (
    <div className="border-2 border-mallow-3 rounded-lg py-8 px-6">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="logo">
          <Zolulogo />
        </div>
        <div className="sub flex items-center justify-center">
          <span className="text-lg font-bold">Login</span>
        </div>
        <div className="forms flex flex-col gap-2.5 mt-9">
          <Formik
            initialValues={InitialValues}
            onSubmit={async (
              values: IEmployeeLogin,
              { setSubmitting }: FormikHelpers<IEmployeeLogin>
            ) => {
              AuthenticateWithCreds(values);
            }}
          >
            {({ isSubmitting }) => (
              <FormikForm>
                <div className="flex flex-col gap-2.5">
                  <Field
                    as={Input}
                    name="FirstName"
                    placeholder="First Name"
                    type="text"
                    className="w-96"
                  />
                  <Field
                    as={Input}
                    name="Pin"
                    placeholder="Password"
                    type={ShowPassword ? "text" : "password"}
                    className="w-96"
                  />
                  <div className="flex gap-2 items-center">
                    <Checkbox onChange={() => SetShowPassword(!ShowPassword)} />
                    <span>Show Password</span>
                  </div>
                </div>
                <Button type="submit" className="w-full py-2.5 mt-9">
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
