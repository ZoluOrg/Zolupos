import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { EmployeeCredentialsProvider } from "../context/EmployeeCredentialsContext";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-mallow-1 h-screen">
        <EmployeeCredentialsProvider>
          <Component {...pageProps} />
        </EmployeeCredentialsProvider>
    </div>
  );
}

export default MyApp;
