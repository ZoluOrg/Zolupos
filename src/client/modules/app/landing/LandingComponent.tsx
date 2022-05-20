import React from "react";
import dynamic from "next/dynamic";
import { ModuleSection } from "./ModuleSection";
import { Navbar } from "../Navbar/Navbar";

export const LandingComponent = () => {
  return (
    <div className="h-full">
      <Navbar />
      <ModuleSection />
    </div>
  );
};
