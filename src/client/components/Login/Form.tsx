import React, { useState } from "react";
import { Button } from "../UI/Button";
import { Input } from "../UI/Input";
import {
  Formik,
  Form as FormikForm,
  Field,
  ErrorMessage,
  FormikErrors,
  FormikHelpers,
} from "formik";
import { ILoginForm } from "../../interfaces/FormValues";
import {BsEye,BsEyeSlash} from "react-icons/bs";

export const Form = () => {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <div className="logcont w-96 h-80 p-5 border rounded flex flex-col justify-center">
      <span className="Header text-2xl font-bold">Login</span>
      <div className="form mt-3">
        <Formik
          initialValues={{
            name: "",
            pin: "",
          }}
          validate={(values) => {
            const errors: FormikErrors<ILoginForm> = {};
            if (!values.name) {
              errors.name = "Name is required!";
            }
            if (!values.pin) {
              errors.pin = "Pin is required!";
            }
            return errors;
          }}
          onSubmit={(
            values: ILoginForm,
            { setSubmitting }: FormikHelpers<ILoginForm>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}
        >
          <FormikForm className="flex flex-col gap-3">
            <div className="flex flex-col">
              <label htmlFor="Name">Name</label>
              <Field
                id="Name"
                name="name"
                placeholder="John"
                type="text"
                as={Input}
              />
              <ErrorMessage name="name">
                {(msg) => <p className="text-berry-dark">{msg}</p>}
              </ErrorMessage>
            </div>

            <div className="flex flex-col">
              <label htmlFor="Pin">Pin</label>
              <div className="flex flex-row gap-1">
                <Field
                  id="Pin"
                  name="pin"
                  placeholder="Pin"
                  type={showPassword ? "text" : "password"}
                  as={Input}
                  className="w-full"
                />
                <Button
                  Color="danger"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <BsEyeSlash/> : <BsEye/>}
                </Button>
              </div>

              <ErrorMessage name="pin">
                {(msg) => <p className="text-berry-dark">{msg}</p>}
              </ErrorMessage>
            </div>

            <Button type="submit">Continue</Button>
          </FormikForm>
        </Formik>
      </div>
    </div>
  );
};
