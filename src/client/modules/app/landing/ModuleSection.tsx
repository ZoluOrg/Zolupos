import {
  Bag,
  Barcode,
  Cardholder,
  Person,
  Users,
  UsersThree,
} from "phosphor-react";
import React from "react";
import { ModuleSelectionButton } from "./ModuleSelectionButton";

export const ModuleSection = () => {
  return (
    <div className="h-[calc(100vh-60px)] pt-[145px]">
      <div className="w-full flex justify-center gap-5">
        <ModuleSelectionButton
          Icon={<Barcode size={60} weight="bold" />}
          Label="POS"
          Color="mallow-1"
        />

        <ModuleSelectionButton
          Icon={<Bag size={60} weight="bold" />}
          Label="Inventory"
          Color="mallow-1"
        />

        <ModuleSelectionButton
          Icon={<Cardholder size={60} weight="bold" />}
          Label="Invoice"
          Color="mallow-1"
        />

        <ModuleSelectionButton
          Icon={<Person size={60} weight="bold" />}
          Label="Customers"
          Color="mallow-1"
        />

        <ModuleSelectionButton
          Icon={<UsersThree size={60} weight="bold" />}
          Label="Employees"
          Color="mallow-1"
        />
      </div>
    </div>
  );
};
