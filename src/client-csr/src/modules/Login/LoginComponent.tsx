import React, { useEffect } from "react";
import { Form } from "./Form";
import styles from "../../styles/login/LoginComponent.module.scss";
import { useNavigate } from "react-router-dom";
import { useTitleContext } from "../../context/TitleContext";

export const LoginComponent = () => {
  const titleContext = useTitleContext();
  titleContext.setTitle("Login");

  return (
    <div className="h-full flex items-center justify-center">
      <Form />
    </div>
  );
};
