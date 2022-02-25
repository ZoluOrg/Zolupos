import React, { useState } from "react";
import { Button } from "../../components/UI/Button";
import { Input } from "../../components/UI/Input";
import {
  Formik,
  Form as FormikForm,
  Field,
  ErrorMessage,
  FormikErrors,
  FormikHelpers,
} from "formik";
import { ILoginForm } from "../../interfaces/FormValues";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { IAuthenticationRequest } from "../../interfaces/authentication/IAuthenticationRequest";
import { Login } from "../../modules/authentication/Login";
import Cookie from "cookie";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export const Form = () => {
  const [showPassword, setShowPassword] = useState(true);
  const router = useRouter();

  const HandleSubmit = async (form: ILoginForm) => {
    let AuthRequest: IAuthenticationRequest = {
      FirstName: form.name,
      Pin: form.pin,
    };
    let response = await Login(AuthRequest);
    if (response != null) {
      document.cookie = Cookie.serialize("zoluken", response!, { path: "/" });
      console.log("creds");
      router.push("/");
    } else {
      wrongCredentials();
    }
  };

  const wrongCredentials = () =>
    toast.error("Credentials Wrong!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

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
          onSubmit={async (
            values: ILoginForm,
            { setSubmitting }: FormikHelpers<ILoginForm>
          ) => {
            await HandleSubmit(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
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
                    Color="secondary"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <BsEyeSlash /> : <BsEye />}
                  </Button>
                </div>
              </div>
              <div className="errors">
                <ErrorMessage name="name">
                  {(msg) => <p className="text-primary-dark">{msg}</p>}
                </ErrorMessage>
                <ErrorMessage name="pin">
                  {(msg) => <p className="text-primary-dark">{msg}</p>}
                </ErrorMessage>
              </div>

              <Button type="submit" IsLoading={isSubmitting}>
                Continue
              </Button>
            </FormikForm>
          )}
        </Formik>
      </div>
    </div>
  );
};
