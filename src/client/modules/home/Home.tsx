import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Button } from "../../components/UI/Button";
import { BsArrowRightShort } from "react-icons/bs";
import { IconContext } from "react-icons";
import { ModuleButton } from "./ModuleButton";

export const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-evenly">
      <div className="Header flex flex-col justify-center items-center">
        <span className="text-4xl font-bold">Welcome To Zolupos</span>
        <span className="sub">Pick any module module to get started.</span>
      </div>
      <div className="flex items-center justify-center gap-2">
        <ModuleButton Title="POS" Sub="Start Making Sales" goto="/sales/pos" />
        <ModuleButton Title="Customers" Sub="Manage Customers" />
        <ModuleButton Title="Office" Sub="Manage Inventory" />
        <ModuleButton Title="Dashboard" Sub="View your stats" />
      </div>
    </div>
  );
};
