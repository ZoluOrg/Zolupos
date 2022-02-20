import type { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../components/UI/Button";
import { Input } from "../components/UI/Input";
import { Spinner } from "../components/UI/Spinner";
import { parseJwt } from "../utils/JWT";
import { ScreenLoader } from "../components/UI/ScreenLoader";
import Cookie from "cookie";
import { ICookie } from "../interfaces/cookies";

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  return <ScreenLoader />;
};

export default Home;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  if (context.req.headers.cookie!) {
    const parsedCookies = Cookie.parse(context.req.headers.cookie!);
    let parsedToken = parseJwt(parsedCookies["zoluken"]);
    if (parsedToken["exp"] * 1000 <= Date.now()) {
      return { redirect: { destination: "/employee/login" } };
    }
    return { props: {} };
  } else {
    return { redirect: { destination: "/employee/login" } };
  }
};
