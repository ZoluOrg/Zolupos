import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { CredentialContext } from "../context/CredentialContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'


const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-light">
      <QueryClientProvider client={queryClient}>
        <AnimatePresence exitBeforeEnter>
          <CredentialContext>
            <Component {...pageProps} />
            <ReactQueryDevtools/>
          </CredentialContext>
        </AnimatePresence>
      </QueryClientProvider>
    </div>
  );
}

export default MyApp;
