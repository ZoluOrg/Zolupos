import React from "react";
import { Form } from "./Form";
import styles from "../../styles/login/LoginComponent.module.scss";

export const LoginComponent = () => {
  return (
    <div className={styles.loginComponent}>
      <Form />
    </div>
  );
};
