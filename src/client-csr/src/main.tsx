import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginComponent } from "./modules/Login/LoginComponent";
import { EmployeeCredentialContext } from "./context/EmployeeCredentialContext";
import { AppContainer } from "./modules/app/AppContainer";
import { LandingComponent } from "./modules/app/landing/LandingComponent";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="h-screen bg-mallow-1">
        <EmployeeCredentialContext>
          <Routes>
            <Route path="/app" element={<AppContainer />}>
              <Route path="landing" element={<LandingComponent />} />
            </Route>
            <Route path="/login" element={<LoginComponent />} />
          </Routes>
        </EmployeeCredentialContext>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
