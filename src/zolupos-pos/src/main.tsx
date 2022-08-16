import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContainer } from "./modules/app/AppContainer";
import { LandingComponent } from "./modules/app/Landing/LandingComponent";
import { POSComponent } from "./modules/app/POS/POSComponent";
import { LoginComponent } from "./modules/Login/LoginComponent";
import { TitleProvider } from "./context/TitleContext";
import { ReactQueryDevtools } from "react-query/devtools";
import { SalesComponent } from "./modules/app/Sales/SalesComponent";
import { TransactionComponent } from "./modules/app/Sales/TransactionInfo/TransactionComponent";
import { Toaster } from "react-hot-toast";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="h-screen bg-mallow-1">
        <ToastContainer />
        <Toaster toastOptions={{
          style: {
            fontWeight: "bold",
            background: "#fcfcfc",
            padding: "8px 18px",
            boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
            border: "1px solid #a6a6a6",
          },
        }}/>
        <TitleProvider>
          <QueryClientProvider client={client}>
            <ReactQueryDevtools initialIsOpen={false} />
            <Routes>
              <Route path="/" element={<AppContainer />}>
                <Route path="landing" element={<LandingComponent />} />
                <Route path="POS" element={<POSComponent />} />
                <Route path="sales" element={<SalesComponent />} />
                <Route
                  path="sales/transaction/:id"
                  element={<TransactionComponent />}
                />
              </Route>
              <Route path="/login" element={<LoginComponent />} />
            </Routes>
          </QueryClientProvider>
        </TitleProvider>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
