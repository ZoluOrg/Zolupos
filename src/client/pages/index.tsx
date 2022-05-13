import type { GetServerSidePropsContext, NextPage } from "next";
import { parseJWT } from "../utils/ParseJWT";

const Home: NextPage = () => {
  return <div className="">Redirecting...</div>;
};

export default Home;

export const getServerSideProps = (context: GetServerSidePropsContext) => {
  const token = context.req.cookies["zolupos-employee-token"];
  if (token) {
    const Parsed = parseJWT(token);
    if (Parsed["exp"] * 1000 <= Date.now()) {
      return { redirect: { destination: "/emp/login" } };
    }
    return { redirect: { destination: "/app/landing" } };
  } else {
    return { redirect: { destination: "/emp/login" } };
  }
};
