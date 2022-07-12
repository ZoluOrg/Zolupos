import React from "react";
import { useTitleContext } from "../../../context/TitleContext";
import { useEmployeeCreds } from "../../../hooks/useEmployeeCreds";
import { OrderInfo } from "./OrderInfo";
import { OrderList } from "./OrderList";

export const POSContainer = () => {
  const titleContext = useTitleContext();
  const user = useEmployeeCreds();
  titleContext.setTitle("POS");
  return (
    <div className="pos-container h-[calc(100vh-60px)] flex px-[25px] py-[22px] gap-[25px]">
      <OrderList />
      <OrderInfo />
    </div>
  );
};
