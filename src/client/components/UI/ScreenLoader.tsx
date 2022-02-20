import React from "react";
import { Spinner } from "./Spinner";

export const ScreenLoader = () => {
  return (
    <div className="loader h-screen flex items-center justify-center">
			<Spinner IsDark={true} Size="base"/>
    </div>
  );
};
