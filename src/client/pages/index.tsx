import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "../components/Button";

const Home: NextPage = () => {
  const Router = useRouter();
  return (
    <div className="">
      <Button Color="mallow" onClick={() => Router.push("/app/landing")}>
        test
      </Button>
    </div>
  );
};

export default Home;
