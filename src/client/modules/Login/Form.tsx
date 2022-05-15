import React, { useState } from "react";
import { Zolulogo } from "../../components/Zolulogo";
import Cookie from "js-cookie";
import { Formik, Form as FormikForm, Field, FormikHelpers } from "formik";
import { IEmployeeLogin } from "../../interface/IEmployeeLogin";
import { authenticateEmployee } from "../../services/Authentication/AuthService";
import Router from "next/router";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Checkbox } from "../../components/Checkbox";
import { useEmployeeCredentialsContext } from "../../context/EmployeeCredentialsContext";

export const Form = () => {
  const initialValues: IEmployeeLogin = { firstName: "", pin: "" };
  const empContext = useEmployeeCredentialsContext();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const authenticateWithCreds = async (formValue: IEmployeeLogin) => {
    console.log(formValue);
    let data = await authenticateEmployee(formValue).catch((error) =>
      alert("error")
    );
    if (data) {
      await empContext.setToken(data.value);
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
            initialValues={initialValues}
            onSubmit={async (
              values: IEmployeeLogin,
              { setSubmitting }: FormikHelpers<IEmployeeLogin>
            ) => {
              setSubmitting(true);
              authenticateWithCreds(values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <FormikForm>
                <div className="flex flex-col gap-2.5">
                  <Field
                    as={Input}
                    name="firstName"
                    placeholder="First Name"
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
                <Button type="submit" className="w-full py-2.5 mt-9" isLoading={isSubmitting}>
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
