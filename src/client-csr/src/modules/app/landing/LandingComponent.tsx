import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { ModuleSection } from "./ModuleSection";

export const LandingComponent = () => {
  return (
    <div className="">
      <ModuleSection/>
    </div>
  );
};
