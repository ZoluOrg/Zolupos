import React from "react";
import { Logo } from "../icons/Logo";
import { Button } from "../UI/Button";
import { Input } from "../UI/Input";
import { Link } from "../UI/Link";
import { Form } from "./Form";
import { Navbar } from "./Navbar";

export const LoginWrapper = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="top h-full flex justify-center items-center">
        <Form/>
      </div>
      <div className="bottom">
        <Navbar/>
      </div>
    </div>
  );
};
