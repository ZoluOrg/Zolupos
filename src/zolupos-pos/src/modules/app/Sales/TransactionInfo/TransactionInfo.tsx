import dayjs from "dayjs";
import { ArrowArcLeft, Printer, TrashSimple } from "phosphor-react";
import React from "react";
import { Button } from "../../../../components/Button";
import { TransactionStatus } from "../../../../enums/TransactionStatus";
import { useSaleStore } from "../../../../stores/SalesStore";

export const TransactionInfo = () => {
  const saleStore = useSaleStore();
  return (
    <div className="border border-mallow-5 h-full rounded-lg w-[512px] p-5 bg-mallow-bg-1 shadow">
      <div className="flex gap-2">
        <span className="text-xl font-bold">Transaction Info</span>
        <span
          className={`px-3 py-1 bg-opacity-30 rounded-lg ${
            saleStore.selected?.status == 0 && "bg-green-500 text-green-700"
          } ${saleStore.selected?.status == 1 && "bg-blue-500 text-blue-700"} ${
            saleStore.selected?.status == 1 && "bg-red-500 text-red-700"
          }`}
        >
          {Object.values(TransactionStatus)[saleStore.selected?.status!]}
        </span>
      </div>
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
          <span>
            {dayjs(saleStore.selected?.transactionId).format(
              "YYYY-MM-DD-ddd H:mm:ss A"
            )}
          </span>
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
        <div className="flex space-x-2">
          <Button>
            <div className="flex items-center gap-2">
              <TrashSimple />
              <span>Void</span>
            </div>
          </Button>
          <Button buttonColor="sun">
            <div className="flex items-center gap-2">
              <ArrowArcLeft />
              <span>Return</span>
            </div>
          </Button>
          <Button buttonColor="mallow">
            <div className="flex items-center gap-2">
              <Printer/>
              <span>Print</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};
