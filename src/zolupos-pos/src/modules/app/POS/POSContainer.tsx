import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useTitleContext } from "../../../context/TitleContext";
import { useSaleStore } from "../../../stores/SalesStore";
import { useTransactionStore } from "../../../stores/TransactionStore";
import { AssignCustomer } from "./Customers/AssignCustomer";
import { OrderInfo } from "./OrderInfo";
import { OrderList } from "./OrderList";
import { PaymentModal } from "./Payment/PaymentModal";
import { ProductSearch } from "./Search/ProductSearch";
import { CancelModal } from "./Sus/CancelModal";
import { SuspendModal } from "./Sus/SuspendModal";

export const POSContainer = () => {
  const titleContext = useTitleContext();
  titleContext.setTitle("POS");

  const transactionStore = useTransactionStore();

  useEffect(() => {
    return () => {
      transactionStore.transactionFinish;
    };
  }, []);

  return (
    <div className="pos-container h-[calc(100vh-60px)] relative">
      <ProductSearch />
      <PaymentModal />
      <AssignCustomer />
      <CancelModal />
      <div className="h-full flex px-[25px] py-[22px] gap-[25px]">
        <OrderList />
        <OrderInfo />
      </div>
    </div>
  );
};
