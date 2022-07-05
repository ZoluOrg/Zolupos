import React from "react";
import { useTransactionContext } from "../../../context/TransactionContext";
import { AddedItem } from "./AddedItem";
import styles from "../../../styles/app/POS/OrderList.module.scss";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { X } from "phosphor-react";

export const OrderList = () => {
  const transactionContext = useTransactionContext();
  return (
    <div className="bg-mallow-1 border-2 border-mallow-3 shadow rounded-lg xl:w-9/12 lg:w-3/5 sm:w-6/12 flex flex-col overflow-hidden h-full">
      <div>
        <div className="bg-mallow-2 p-3 grid grid-cols-6 font-bold">
          <span>Quantity</span>
          <span>Item</span>
          <span>Unit Price</span>
          <span>Tax</span>
          <span>Price</span>
          <span>Delete</span>
        </div>
      </div>
      <div className="h-full overflow-y-auto">
        {transactionContext.punched.map((_, idx) => (
          <AddedItem key={idx} keydx={idx} />
        ))}
      </div>
    </div>
  );
};
