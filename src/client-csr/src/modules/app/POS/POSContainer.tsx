import React from "react";
import { useTitleContext } from "../../../context/TitleContext";
import { useEmployeeCreds } from "../../../hooks/useEmployeeCreds";
import { useOrderStore } from "../../../stores/OrderStore";
import { OrderInfo } from "./OrderInfo";
import { OrderList } from "./OrderList";
import { ProductSearch } from "./ProductSearch";

export const POSContainer = () => {
  const titleContext = useTitleContext();
  titleContext.setTitle("POS");

  return (
    <div className="pos-container h-[calc(100vh-60px)] relative">
      <ProductSearch/>
      <div className="h-full flex px-[25px] py-[22px] gap-[25px]">
        <OrderList />
        <OrderInfo />
      </div>
    </div>
  );
};
