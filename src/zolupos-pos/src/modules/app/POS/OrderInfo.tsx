import React, { useEffect, useTransition } from "react";
import { useStore } from "zustand";
import { Button } from "../../../components/Button";
import { useTransactionStore } from "../../../stores/TransactionStore";
import { CustomerInfo } from "./CustomerInfo";
import { Sub } from "./Sub";

export const OrderInfo = () => {
  const transaction = useTransactionStore();
  const transactionStore = useTransactionStore();

  useEffect(() => {
    transaction.calculateInfo(transactionStore.orders);
  }, [transactionStore.orders, transaction.discount]);

  return (
    <div className="rounded-lg flex-grow">
      <div className="flex flex-col gap-4 h-full">
        <CustomerInfo />
        <Sub />
        <div className="lower-control flex gap-[5px]">
          <Button
            buttonColor="mallow"
            className="w-full"
            onClick={() => transactionStore.setShouldShowSusModal(true)}
          >
            Lock
          </Button>
          <Button
            className="w-full"
            onClick={() => transactionStore.setShouldShowCancelModal(true)}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};
