import React from "react";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { useTransactionContext } from "../../../context/TransactionContext";

export const Sub = () => {
  const transactionContext = useTransactionContext();
  return (
    <div className="rounded-lg bg-mallow-2 p-5 flex-grow flex flex-col justify-between bg-opacity-75 border border-mallow-2 shadow">
      <div className = "flex flex-col gap-2">
        <div className="flex justify-between">
          <div className="titles gap-2 flex flex-col">
            <div className="font-bold text-3xl">Total</div>
            <div className="font-bold">Sub Total</div>
            <div className="font-bold">Quantity Ordered</div>
            <div className="font-bold">Vat</div>
          </div>
          <div className="values gap-2 text-right flex flex-col overflow-hidden">
            <div className="font-bold text-3xl">{transactionContext.total}</div>
            <div className="font-bold">{transactionContext.subTotal}</div>
            <div className="font-bold">{transactionContext.quantity}</div>
            <div className="font-bold">{transactionContext.vat}%</div>
          </div>
        </div>
        <div className="flex items-center justify-between font-semibold">
          <span>Disc: </span>
          <Input className="w-4/12" />
        </div>
      </div>
      <div>
        <Button className="w-full bg-green-700 hover:bg-green-800">
          Purchase
        </Button>
      </div>
    </div>
  );
};
