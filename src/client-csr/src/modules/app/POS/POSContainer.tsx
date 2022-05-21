import React from "react";
import { ProductsContext } from "../../../context/ProductsContext";
import { SearchContext } from "../../../context/SearchContext";
import { TransactionContext } from "../../../context/TransactionContext";
import { OrderInfo } from "./OrderInfo";
import { OrderList } from "./OrderList";

export const POSContainer = () => {
  return (
    <div className="pos-container h-[calc(100vh-60px)] flex px-[25px] py-[22px] gap-[25px]">
      <OrderList />
      <OrderInfo />
    </div>
  );
};
