import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { ModuleSection } from "./ModuleSection";

export const LandingComponent = () => {
  useEffect(() => {
    document.title = "Landing Page";
  }, []);
  return (
    <div className="">
      <ModuleSection />
    </div>
  );
};
