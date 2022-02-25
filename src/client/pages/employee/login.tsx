import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Logo } from "../../components/icons/Logo";
import { LoginWrapper } from "../../modules/Login/LoginWrapper";
import { Button } from "../../components/UI/Button";
import { Input } from "../../components/UI/Input";
import { Link } from "../../components/UI/Link";

const Login: NextPage = () => {
  const [firstName, setFirstName] = useState("");
  const [pin, setPin] = useState("");
  return (
    <div className="h-screen flex">
      <Head>
        <title>Employee Login</title>
      </Head>
      <LoginWrapper/>
    </div>
  );
};

export default Login;
