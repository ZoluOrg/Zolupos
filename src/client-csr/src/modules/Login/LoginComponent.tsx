import React, { useEffect } from "react";
import { Form } from "./Form";
import styles from "../../styles/login/LoginComponent.module.scss";
import { useEmployeeCredential } from "../../context/EmployeeCredentialContext";
import { useNavigate } from "react-router-dom";

export const LoginComponent = () => {
  const creds = useEmployeeCredential();
  const navigate = useNavigate();
  useEffect(() => {
    if (creds.isLoggedIn) {
      navigate("/", { replace: true });
    }
  }, []);
  return (
    <div className={styles.loginComponent}>
      <Form />
    </div>
  );
};
