import React from "react";
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
