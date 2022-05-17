import React from "react";
import { useTransactionContext } from "../../../context/TransactionContext";
import { AddedItem } from "./AddedItem";

export const OrderList = () => {
  const transactionContext = useTransactionContext();
  return (
    <div className="bg-mallow-2 rounded-lg xl:w-9/12 lg:w-3/5 sm:w-6/12">
      {transactionContext.punched.length !== 0 ? (
        <div className="h-full flex justify-center items-center text-4xl font-bold opacity-50">
          Scan items to add
        </div>
      ) : (
        <div className="h-full">
          <table className="table-auto w-full text-left rounded-lg overflow-hidden">
            <thead className="shadow-md uppercase bg-mallow-3">
              <tr>
                <th>Item Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <AddedItem itemName="apx" price={12} />
              <AddedItem itemName="apx" price={12} />
              <AddedItem itemName="apx" price={12} />
              <AddedItem itemName="apx" price={12} />
              <AddedItem itemName="apx" price={12} />
              <AddedItem itemName="apx" price={12} />
              <AddedItem itemName="apx" price={12} />
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
