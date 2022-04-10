import type { NextPage } from "next";
import Head from "next/head";
import { LoginWrapper } from "../../modules/login/LoginWrapper";
import { PageTransition } from "../../modules/animations/PageTransition";

const Login: NextPage = () => {
  return (
    <PageTransition>
      <div className="h-screen flex">
        <Head>
          <title>Employee Login</title>
        </Head>
        <LoginWrapper />
      </div>
    </PageTransition>
  );
};

export default Login;
