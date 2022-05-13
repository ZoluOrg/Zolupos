import React from "react";
import { Button } from "../../../components/Button";
import { AddCustomer } from "./AddCustomer";
import { Sub } from "./Sub";

export const OrderInfo = () => {
  return (
    <div className="rounded-lg flex-grow">
      <div className="flex flex-col gap-4 h-full">
        <AddCustomer />
        <Sub />
        <div className="lower-control flex gap-[5px]">
          <Button buttonColor="mallow" className="w-full">Suspend</Button>
          <Button className="w-full">Cancel</Button>
        </div>
      </div>
    </div>
  );
};
