import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Zolulogo } from "../components/Zolulogo";
import styles from "../styles/404.module.scss";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>Page Not Found | 404</title>
      </Head>
      <div className={styles.pageNotFound}>
        <div className={styles.pageNotFoundContainer}>
          <div className="logo">
            <Zolulogo />
          </div>
          <div className={styles.messageContainer}>
            <div className="header">
              <span className="font-bold text-xl">Page Not Found</span>
            </div>
            <div className="message">
              The page that you are looking for does not exist.
            </div>
            <div className="error-code text-sm text-gray-500">
              ZLPS_CLIENT_404
            </div>
            <div className={styles.goHome}>
              <Link href="/" passHref>
                <a className="text-accent-2">Take me home</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Custom404;
