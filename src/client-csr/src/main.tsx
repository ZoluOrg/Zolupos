import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { EmployeeCredentialContext } from "./context/EmployeeCredentialContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AppContainer } from "./modules/app/AppContainer";
import { LandingComponent } from "./modules/app/landing/LandingComponent";
import { POSComponent } from "./modules/app/POS/POSComponent";
import { LoginComponent } from "./modules/Login/LoginComponent";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="h-screen bg-mallow-1">
        <ToastContainer />
        <EmployeeCredentialContext>
          <QueryClientProvider client={client}>
            <Routes>
              <Route path="/" element={<AppContainer />}>
                <Route path="landing" element={<LandingComponent />} />
                <Route path="POS" element={<POSComponent />} />
              </Route>
              <Route path="/login" element={<LoginComponent />} />
            </Routes>
          </QueryClientProvider>
        </EmployeeCredentialContext>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
