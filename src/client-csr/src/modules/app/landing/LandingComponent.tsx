import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useTitleContext } from "../../../context/TitleContext";
import { Navbar } from "../Navbar/Navbar";
import { ModuleSection } from "./ModuleSection";

export const LandingComponent = () => {
  const titleContext = useTitleContext();
  titleContext.setTitle("Landing");
  return (
    <div className="">
      <ModuleSection />
    </div>
  );
};
