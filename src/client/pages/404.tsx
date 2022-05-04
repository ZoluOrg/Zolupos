import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Zolulogo } from "../components/Zolulogo";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>Page Not Found | 404</title>
      </Head>
      <div className="h-full flex justify-center">
        <div className="flex flex-col mt-10 gap-2">
          <div className="logo">
            <Zolulogo />
          </div>
          <div className="cont flex flex-col gap-2 mt-3">
            <div className="Header">
              <span className="font-bold text-xl">Page Not Found</span>
            </div>
            <div className="message">
              The page that you are looking for does not exist.
            </div>
            <div className="error-code text-sm text-gray-500">
              ZLPS_CLIENT_404
            </div>
            <div className="">
              <Link href="/" passHref>
                <a className="underline text-accent-2">Take me home</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Custom404;
