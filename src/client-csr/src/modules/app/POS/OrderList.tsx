import React from "react";
import { useTransactionContext } from "../../../context/TransactionContext";
import { AddedItem } from "./AddedItem";

export const OrderList = () => {
  const transactionContext = useTransactionContext();
  return (
    <div className="bg-mallow-2 rounded-lg xl:w-9/12 lg:w-3/5 sm:w-6/12 flex flex-col overflow-hidden">
      <div className="list-ordered h-full overflow-y-auto">
        {transactionContext.punched.length == 0 ? (
          <div className="h-full flex flex-col gap-1 items-center justify-center">
            <span className="font-bold opacity-50 text-4xl">
              Scan items to add
            </span>
            <span className="font-bold opacity-50 text-lg">
              Use alt + a to manually add an item
            </span>
          </div>
        ) : (
          <div className=" grid grid-cols-5 grid-header uppercase font-bold p-4 border-b border-coal-3  rounded-t-lg shadow-sm">
            <span>Item</span>
            <span>Qty</span>
            <span>Price</span>
            <span>Disc</span>
            <span>Amt</span>
          </div>
        )}
      </div>
    </div>
  );
};
