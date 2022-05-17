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
        <div className="h-full overflow-y-scroll no-scrollbar">
          <div className="grid grid-cols-5 grid-header uppercase font-bold p-4 border-b border-coal-3 bg-mallow-3 rounded-lg shadow-lg">
            <span>Item</span>
            <span>Qty</span>
            <span>Price</span>
            <span>Disc</span>
            <span>Amt</span>
          </div>
          <div className="list-ordered">
            <AddedItem itemName="Macbook" barCode="0001" price={10}/>
            <AddedItem itemName="Macbook" barCode="0001" price={10}/>
            <AddedItem itemName="Macbook" barCode="0001" price={10}/>
            <AddedItem itemName="Macbook" barCode="0001" price={10}/>
            <AddedItem itemName="Macbook" barCode="0001" price={10}/>
            <AddedItem itemName="Macbook" barCode="0001" price={10}/>
            <AddedItem itemName="Macbook" barCode="0001" price={10}/>
            <AddedItem itemName="Macbook" barCode="0001" price={10}/>
            <AddedItem itemName="Macbook" barCode="0001" price={10}/>
            <AddedItem itemName="Macbook" barCode="0001" price={10}/>
            <AddedItem itemName="Macbook" barCode="0001" price={10}/>
            <AddedItem itemName="Macbook" barCode="0001" price={10}/>
            <AddedItem itemName="Macbook" barCode="0001" price={10}/>
            <AddedItem itemName="Macbook" barCode="0001" price={10}/>
            <AddedItem itemName="Macbook" barCode="0001" price={10}/>
            <AddedItem itemName="Macbook" barCode="0001" price={10}/>
            <AddedItem itemName="Macbook" barCode="0001" price={10}/>
            <AddedItem itemName="Macbook" barCode="0001" price={10}/>
            <AddedItem itemName="Macbook" barCode="0001" price={10}/>
            <AddedItem itemName="Macbook" barCode="0001" price={10}/>
            <AddedItem itemName="Macbook" barCode="0001" price={10}/>
            <AddedItem itemName="Macbook" barCode="0001" price={10}/>
            <AddedItem itemName="Macbook" barCode="0001" price={10}/>
            <AddedItem itemName="Macbook" barCode="0001" price={10}/>
            <AddedItem itemName="Macbook" barCode="0001" price={10}/>
          </div>
        </div>
      )}
    </div>
  );
};
