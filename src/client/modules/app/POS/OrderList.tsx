import React from "react";
import { useTransactionContext } from "../../../context/TransactionContext";
import { AddedItem } from "./AddedItem";

export const OrderList = () => {
  const transactionContext = useTransactionContext();
  return (
    <div className="bg-mallow-2 rounded-lg xl:w-9/12 lg:w-3/5 sm:w-6/12 flex flex-col overflow-hidden">
      <div className=" grid grid-cols-5 grid-header uppercase font-bold p-4 border-b border-coal-3  rounded-t-lg shadow-sm">
        <span>Item</span>
        <span>Qty</span>
        <span>Price</span>
        <span>Disc</span>
        <span>Amt</span>
      </div>
      <div className="list-ordered h-full overflow-y-scroll">
        <AddedItem itemName="Macbook" barCode="0001" price={10} />
        <AddedItem itemName="Macbook" barCode="0001" price={10} />
        <AddedItem itemName="Macbook" barCode="0001" price={10} />
        <AddedItem itemName="Macbook" barCode="0001" price={10} />
        <AddedItem itemName="Macbook" barCode="0001" price={10} />
        <AddedItem itemName="Macbook" barCode="0001" price={10} />
        <AddedItem itemName="Macbook" barCode="0001" price={10} />
        <AddedItem itemName="Macbook" barCode="0001" price={10} />
        <AddedItem itemName="Macbook" barCode="0001" price={10} />
        <AddedItem itemName="Macbook" barCode="0001" price={10} />
        <AddedItem itemName="Macbook" barCode="0001" price={10} />
        <AddedItem itemName="Macbook" barCode="0001" price={10} />
        <AddedItem itemName="Macbook" barCode="0001" price={10} />
        <AddedItem itemName="Macbook" barCode="0001" price={10} />
        <AddedItem itemName="Macbook" barCode="0001" price={10} />
        <AddedItem itemName="Macbook" barCode="0001" price={10} />
        <AddedItem itemName="Macbook" barCode="0001" price={10} />
        <AddedItem itemName="Macbook" barCode="0001" price={10} />
        <AddedItem itemName="Macbook" barCode="0001" price={10} />
        <AddedItem itemName="Macbook" barCode="0001" price={10} />
        <AddedItem itemName="Macbook" barCode="0001" price={10} />
        <AddedItem itemName="Macbook" barCode="0001" price={10} />
        <AddedItem itemName="Macbook" barCode="0001" price={10} />
        <AddedItem itemName="Macbook" barCode="0001" price={10} />
        <AddedItem itemName="Macbook" barCode="0001" price={10} />
      </div>
    </div>
  );
};
