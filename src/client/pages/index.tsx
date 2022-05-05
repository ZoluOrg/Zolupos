import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Button } from "../components/Button";
import { UseEmployeeCredentialsContext } from "../context/EmployeeCredentialsContext";

const Home: NextPage = () => {
  const router = useRouter();
  const Emp = UseEmployeeCredentialsContext();
  useEffect(() => {
    if (!Emp.IsLoggedIn) {
      router.push("/emp/login");
    }
  }, []);
  return <div className=""></div>;
};

export default Home;
