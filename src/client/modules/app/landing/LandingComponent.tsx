import React from "react";
import dynamic from "next/dynamic";
import { ModuleSection } from "./ModuleSection";

const Nav = dynamic<{}>(() => import("../Navbar/Navbar").then(mod=>mod.Navbar))

export const LandingComponent = () => {
  return (
    <div className="h-full">
      <Nav />
      <ModuleSection/>
    </div>
  );
};
