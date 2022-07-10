import React, { useEffect } from "react";
import { Form } from "./Form";
import styles from "../../styles/login/LoginComponent.module.scss";
import { useEmployeeCredential } from "../../context/EmployeeCredentialContext";
import { useNavigate } from "react-router-dom";
import { useTitleContext } from "../../context/TitleContext";

export const LoginComponent = () => {
  const creds = useEmployeeCredential();
  const navigate = useNavigate();
  const titleContext = useTitleContext();

  useEffect(() => {
    titleContext.setTitle("Login");
    if (creds.isLoggedIn) {
      navigate("/", { replace: true });
    }
  }, []);
  return (
    <div className="h-full flex items-center justify-center">
      <Form />
    </div>
  );
};
