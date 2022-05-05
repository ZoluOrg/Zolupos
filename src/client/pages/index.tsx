import type { GetServerSidePropsContext, NextPage } from "next";
import { ParseJWT } from "../utils/ParseJWT";

const Home: NextPage = () => {
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
