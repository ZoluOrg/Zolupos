import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar/Navbar";
export const AppContainer = () => {
  return (
    <div className="h-full">
      <Navbar />
      <Outlet />
    </div>
  );
};
