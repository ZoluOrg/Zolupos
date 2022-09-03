import dayjs from "dayjs";
import React from "react";
import { useSaleStore } from "../../../../stores/SalesStore";

export const TransactionInfo = () => {
  const saleStore = useSaleStore();
  return (
    <div className="border border-mallow-5 h-full rounded-lg w-[512px] p-5 bg-mallow-bg-1 shadow">
      <span className="text-xl font-bold">Transaction Info</span>
      <div className="flex flex-col mt-2 space-y-2">
        <div className="flex space-x-2">
          <span className="font-bold">Transaction Id:</span>
          <span>{saleStore.selected?.transactionId}</span>
        </div>
        <div className="flex space-x-2">
          <span className="font-bold">Transaction Reference:</span>
          <span>{saleStore.selected?.reference}</span>
        </div>
        <div className="flex space-x-2">
          <span className="font-bold">Transaction Id:</span>
          <span>{dayjs(saleStore.selected?.transactionId).format("YYYY-MM-DD-ddd H:mm:ss A")}</span>
        </div>
        <div className="flex space-x-2">
          <span className="font-bold">Transaction Total:</span>
          <span>{saleStore.selected?.total}</span>
        </div>
        <div className="flex space-x-2">
          <span className="font-bold">Transaction SubTotal:</span>
          <span>{saleStore.selected?.subTotal}</span>
        </div>
        <div className="flex space-x-2">
          <span className="font-bold">Transaction Device:</span>
          <span>{saleStore.selected?.deviceId}</span>
        </div>
      </div>
    </div>
  );
};
