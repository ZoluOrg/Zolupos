import React from "react";
import { useTransactionContext } from "../../../context/TransactionContext/TransactionContext";
import { AddedItem } from "./AddedItem";
import styles from "../../../styles/app/POS/OrderList.module.scss";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { ShoppingCart, X } from "phosphor-react";

export const OrderList = () => {
  const transactionContext = useTransactionContext();
  return (
    <div className="bg-mallow-1 border-2 border-mallow-3 shadow rounded-lg xl:w-9/12 lg:w-3/5 sm:w-6/12 flex flex-col overflow-hidden h-full">
      {transactionContext.punched.length == 0 ? (
        <div className="h-full flex justify-center items-center">
          <div className="flex flex-col items-center gap-2">
            <div>
              <ShoppingCart size={64} className="opacity-50" />
            </div>
            <span className="font-bold text-3xl opacity-50">Empty Cart</span>
            <span className="font-semibold text-xl opacity-50">
              Scan or enter barcode.
            </span>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <div className="bg-mallow-2 p-3 grid grid-cols-6 font-bold">
              <span>Quantity</span>
              <span>Item</span>
              <span>Unit Price</span>
              <span>Tax</span>
              <span>Price</span>
              <span className="w-full flex justify-center">Delete</span>
            </div>
          </div>
          <div className="h-full overflow-y-auto">
            {transactionContext.punched.map((_, idx) => (
              <AddedItem key={idx} keydx={idx} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
