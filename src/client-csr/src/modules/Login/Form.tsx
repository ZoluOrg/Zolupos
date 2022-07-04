import React, { useState } from "react";
import { Zolulogo } from "../../components/Zolulogo";
import Cookie from "js-cookie";
import { Formik, Form as FormikForm, Field, FormikHelpers } from "formik";
import { IEmployeeLogin } from "../../interface/IEmployeeLogin";
import { authenticateEmployee } from "../../services/Authentication/AuthService";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Checkbox } from "../../components/Checkbox";
import styles from "../../styles/login/Form.module.scss";
import { useEmployeeCredential } from "../../context/EmployeeCredentialContext";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export const Form = () => {
  const initialValues: IEmployeeLogin = { fullName: "", pin: "" };
  const navigate = useNavigate();
  const empContext = useEmployeeCredential();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const authenticateWithCreds = async (formValue: IEmployeeLogin) => {
    console.log(formValue);
    let data = await authenticateEmployee(formValue).catch((error) => {
      toast("error");
    });
    if (data) {
      await empContext
        .save(data.receive.requestedToken, data.receive.employee)
        .then(() => navigate("/landing", { replace: true }));
    }
  };

  return (
    <div className="border-2 border-mallow-2 rounded-lg py-8 px-6 flex">
      <div className="h-full flex flex-col items-center justify-center">
        <div className="logo">
          <Zolulogo />
        </div>
        <span className="text-lg font-bold">Login</span>
        <div className="flex flex-col gap-[10px] mt-9">
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
                  isLoading={isSubmitting}
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
