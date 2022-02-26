import type { GetServerSidePropsContext, NextPage } from "next";
import { useState } from "react";
import { parseJwt } from "../utils/JWT";
import { ScreenLoader } from "../components/UI/ScreenLoader";


const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  return <ScreenLoader />;
};

export default Home;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  if (context.req.headers.cookie!) {
    let parsedToken = parseJwt(context.req.cookies! ["zoluken"]);
    if (parsedToken["exp"] * 1000 <= Date.now()) {
      return { redirect: { destination: "/employee/login" } };
    }
    return { redirect: { destination:"/home"} };
  } else {
    return { redirect: { destination: "/employee/login" } };
  }
};
