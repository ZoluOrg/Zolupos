import { Plus } from "phosphor-react";
import React from "react";
import { Button } from "../../../components/Button";

export const AddCustomer = () => {
  return (
    <div className="rounded-lg p-2 px-4 w-full bg-mallow-2 flex justify-between items-center bg-opacity-75 border border-mallow-2 shadow">
      <span>Assign Customer</span>
      <Button>
        <div className="flex items-center gap-2">
          <Plus weight="bold" />
          <span>Add</span>
        </div>
      </Button>
    </div>
  );
};
