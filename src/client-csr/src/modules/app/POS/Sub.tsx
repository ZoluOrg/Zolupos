import React from "react";
import { Button } from "../../../components/Button";
import { useTransactionContext } from "../../../context/TransactionContext";

export const Sub = () => {
  const transactionContext = useTransactionContext();
  return (
    <div className="rounded-lg bg-mallow-2 p-5 flex-grow flex flex-col justify-between">
      <div className="flex justify-between">
        <div className="titles gap-2 flex flex-col">
          <div className="font-bold text-3xl">Total</div>
          <div className="font-bold">Sub Total</div>
          <div className="font-bold">Quantity Ordered</div>
          <div className="font-bold">Tax</div>
        </div>
        <div className="values gap-2 flex flex-col">
          <div className="font-bold text-3xl">20</div>
          <div className="font-bold">201</div>
          <div className="font-bold">2</div>
          <div className="font-bold">10%</div>
        </div>
      </div>
      <div>
        <Button className="w-full bg-green-700">Purchase</Button>
      </div>
    </div>
  );
};
