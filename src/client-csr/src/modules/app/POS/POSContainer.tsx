import React from "react";
import { useTitleContext } from "../../../context/TitleContext";
import { useEmployeeCreds } from "../../../hooks/useEmployeeCreds";
import { useOrderStore } from "../../../stores/OrderStore";
import { OrderInfo } from "./OrderInfo";
import { OrderList } from "./OrderList";
import { PaymentModal } from "./Payment/PaymentModal";
import { ProductSearch } from "./Search/ProductSearch";

export const POSContainer = () => {
  const titleContext = useTitleContext();
  titleContext.setTitle("POS");

  return (
    <div className="pos-container h-[calc(100vh-60px)] relative">
      <ProductSearch/>
      <PaymentModal/>
      <div className="h-full flex px-[25px] py-[22px] gap-[25px]">
        <OrderList />
        <OrderInfo />
      </div>
    </div>
  );
};
