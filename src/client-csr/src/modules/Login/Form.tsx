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

export const Form = () => {
  const initialValues: IEmployeeLogin = { firstName: "", pin: "" };
  const navigate = useNavigate();
  const empContext = useEmployeeCredential();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const authenticateWithCreds = async (formValue: IEmployeeLogin) => {
    console.log(formValue);
    let data = await authenticateEmployee(formValue).catch((error) =>
      alert("error")
    );
    if (data) {
      await empContext
        .authenticate(data.value)
        .then(() => navigate("/app", { replace: true }));
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.formContainer}>
        <div className="logo">
          <Zolulogo />
        </div>
        <span className="text-lg font-bold">Login</span>
        <div className={styles.form}>
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
                <div className={styles.formInputs}>
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
                <Button
                  type="submit"
                  className={styles.submitButtonCustoms}
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
