import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { EmployeeCredentialsProvider } from "../context/EmployeeCredentialsContext";
import { useMediaQuery } from "react-responsive";
import { ArrowsOut } from "phosphor-react";

function MyApp({ Component, pageProps }: AppProps) {
  const IsSmall = useMediaQuery({ query: "(max-width: 640px)" });
  return (
    <div className="bg-mallow-1 h-screen">
      <EmployeeCredentialsProvider>
        <div className={`${IsSmall && "hidden"} h-full`}>
          <Component {...pageProps} />
        </div>
        {IsSmall && (
          <div className="flex flex-col h-full justify-center items-center gap-2">
            <span className="text-2xl font-bold">Windows size to small</span>
            <div className="flex items-center gap-1">
              <ArrowsOut size={24} weight="bold" />
              <span className="text-lg">Resize the window.</span>
            </div>
          </div>
        )}
      </EmployeeCredentialsProvider>
    </div>
  );
}

export default MyApp;
