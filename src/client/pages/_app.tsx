import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { CredentialContext } from "../context/CredentialContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-light">
      <AnimatePresence exitBeforeEnter>
        <CredentialContext>
          <Component {...pageProps} />
        </CredentialContext>
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
