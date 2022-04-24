import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { EmployeeCredentialsProvider } from "../context/EmployeeCredentialsContext";

const queryClient = new QueryClient({});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-mallow-1 h-screen">
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <EmployeeCredentialsProvider>
          <Component {...pageProps} />
        </EmployeeCredentialsProvider>
      </QueryClientProvider>
    </div>
  );
}

export default MyApp;
