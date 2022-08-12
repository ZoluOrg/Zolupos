import dayjs from "dayjs";
import React from "react";
import { useSaleStore } from "../../../../stores/SalesStore";

export const Info = () => {
  const saleStore = useSaleStore();
  return (
    <div className="border border-mallow-5 h-full rounded-lg w-5/12 p-5 bg-mallow-bg-1 shadow">
      <span className="text-3xl font-bold">Transaction Info</span>
      <div className="mt-4 flex flex-col gap-2">
        <div className="gap-2">
          <span className="text-xl font-bold">Transaction Id: </span>
          <span className="text-xl">{saleStore.selected?.transactionId}</span>
        </div>
        <div className="gap-2">
          <span className="text-xl font-bold">Transaction Date: </span>
          <span className="text-xl">{dayjs(saleStore.selected?.transactedAt).format("YYYY-MM-DD-dddd H:m:s A")}</span>
        </div>
        <div className="gap-2">
          <span className="text-xl font-bold">Reference: </span>
          <span className="text-xl">{saleStore.selected?.reference}</span>
        </div>
        <div className="gap-2">
          <span className="text-xl font-bold">Total: </span>
          <span className="text-xl">{saleStore.selected?.total}</span>
        </div>
        <div className="gap-2">
          <span className="text-xl font-bold">Vat: </span>
          <span className="text-xl">{saleStore.selected?.vat}</span>
        </div>
      </div>
    </div>
  );
};
