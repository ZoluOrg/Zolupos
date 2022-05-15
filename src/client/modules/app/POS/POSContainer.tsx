import React from "react";
import { ProductsContext } from "../../../context/ProductsContext";
import { OrderInfo } from "./OrderInfo";
import { OrderList } from "./OrderList";

export const POSContainer = () => {
  return (
    <ProductsContext>
      <div className="pos-container h-[calc(100vh-60px)] flex px-[25px] py-[22px] gap-[25px]">
        <OrderList />
        <OrderInfo />
      </div>
    </ProductsContext>
  );
};
