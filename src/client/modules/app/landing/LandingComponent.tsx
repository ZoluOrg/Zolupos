import React from "react";
import dynamic from "next/dynamic";

const Nav = dynamic<{}>(() => import("../Navbar").then(mod=>mod.Navbar))

export const LandingComponent = () => {
  return (
    <div className="h-full">
      <Nav />
    </div>
  );
};
