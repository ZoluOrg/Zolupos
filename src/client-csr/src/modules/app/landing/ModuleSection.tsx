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
          icon={<Barcode size={60} weight="bold" />}
          label="POS"
          buttonTailColor="mallow-1"
        />

        <ModuleSelectionButton
          icon={<Bag size={60} weight="bold" />}
          label="Inventory"
          buttonTailColor="mallow-1"
        />

        <ModuleSelectionButton
          icon={<Cardholder size={60} weight="bold" />}
          label="Invoice"
          buttonTailColor="mallow-1"
        />

        <ModuleSelectionButton
          icon={<Person size={60} weight="bold" />}
          label="Customers"
          buttonTailColor="mallow-1"
        />

        <ModuleSelectionButton
          icon={<UsersThree size={60} weight="bold" />}
          label="Employees"
          buttonTailColor="mallow-1"
        />
      </div>
    </div>
  );
};
