import React from "react";
import { Zolulogo } from "../../components/zolulogo";
import Cookie from "js-cookie";
import { Formik, Form as FormikForm, Field } from "formik";
import { IEmployeeLogin } from "../../interface/IEmployeeLogin";
import { useMutation } from "react-query";
import { AuthenticateEmployee } from "../Authentication/AuthService";
import { useRouter } from "next/router";
import { Input } from "postcss";
import { Button } from "../../components/Button";

export const Form = () => {
  const InitialValues: IEmployeeLogin = { FirstName: "", Pin: "" };
  const FormMutation = useMutation(AuthenticateEmployee);
  const Router = useRouter();

  const AuthenticateWithCreds = async (FormValue: IEmployeeLogin) => {
    FormMutation.mutateAsync(FormValue, {
      onSuccess: (data) => {
        Cookie.set("zolupos-user-token", data.value);
        // TODO: Update user cred ctx.
        Router.push("/");
      },
      onError: () => {
        console.error("Authentication Error");
      },
    });
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
          <Formik initialValues={InitialValues} onSubmit={() => {}}>
            {({ isSubmitting }) => (
              <FormikForm>
                <Field
                  as={Input}
                  id="FirstName"
                  placeholder="First Name"
                  type="text"
                  className="w-96"
                />
                <Field
                  as={Input}
                  id="Pin"
                  placeholder="Password"
                  type="text"
                  className="w-96"
                />
                <Button type="submit">Submit</Button>
              </FormikForm>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
