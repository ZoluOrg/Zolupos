import type { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Button } from "../components/Button";
import { UseEmployeeCredentialsContext } from "../context/EmployeeCredentialsContext";
import { ParseJWT } from "../utils/ParseJWT";

const Home: NextPage = () => {
  const router = useRouter();
  return <div className="">Redirecting...</div>;
};

export default Home;

export const getServerSideProps = (context: GetServerSidePropsContext) => {
  const Token = context.req.cookies["zolupos-employee-token"];
  if (Token) {
    const Parsed = ParseJWT(Token);
    if (Parsed["exp"] * 1000 <= Date.now()) {
      return { redirect: { destination: "/emp/login" } };
    }
    return { redirect: { destination: "/app/landing" } };
  } else {
    return { redirect: { destination: "/emp/login" } };
  }
};
