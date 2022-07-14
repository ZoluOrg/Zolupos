import React, { useEffect, useTransition } from "react";
import { useStore } from "zustand";
import { Button } from "../../../components/Button";
import { useOrderStore } from "../../../stores/OrderStore";
import { useTransactionStore } from "../../../stores/TransactionStore";
import { AddCustomer } from "./AddCustomer";
import { Sub } from "./Sub";

export const OrderInfo = () => {
  const [isPending, startTransition] = useTransition();
  const transaction = useTransactionStore();
  const order = useOrderStore();

  useOrderStore.subscribe(state => state.orders, transaction.calculateInfo)

  return (
    <div className="rounded-lg flex-grow">
      <div className="flex flex-col gap-4 h-full">
        <AddCustomer />
        <Sub />
        <div className="lower-control flex gap-[5px]">
          <Button buttonColor="mallow" className="w-full">
            Suspend
          </Button>
          <Button className="w-full">Cancel</Button>
        </div>
      </div>
    </div>
  );
};
