import React, { useEffect } from "react";
import { Form } from "./Form";
import styles from "../../styles/login/LoginComponent.module.scss";
import { useNavigate } from "react-router-dom";
import { useTitleContext } from "../../context/TitleContext";
import { useDevice } from "../../hooks/useDevice";
import { NotRegisteredModal } from "./NotRegistered";

export const LoginComponent = () => {
  const titleContext = useTitleContext();
  titleContext.setTitle("Login");
  const device = useDevice();

  device.data;

  return (
    <div className="h-full flex items-center justify-center">
      <NotRegisteredModal/>
      <Form />
    </div>
  );
};
