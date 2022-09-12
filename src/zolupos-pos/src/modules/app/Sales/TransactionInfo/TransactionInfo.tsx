import dayjs from "dayjs";
import { useAtom } from "jotai";
import { ArrowArcLeft, Printer, TrashSimple } from "phosphor-react";
import React from "react";
import { useMutation, useQuery } from "react-query";
import { useReactToPrint } from "react-to-print";
import { Button } from "../../../../components/Button";
import { TransactionStatus } from "../../../../enums/TransactionStatus";
import { changeTransactionStatus } from "../../../../services/TransactionsService";
import { usePrintService } from "../../../../stores/PrintService";
import { useSaleStore } from "../../../../stores/SalesStore";
import {
  shouldOpenReturnModal,
  shouldOpenVoidModal,
} from "./TransactionComponent";

export const TransactionInfo = () => {
  const [shouldOpenReturnModalVal, setShouldOpenReturnModal] = useAtom(
    shouldOpenReturnModal
  );

  const [shouldOpenVoidModalVal, setShouldOpenVoidModal] =
    useAtom(shouldOpenVoidModal);

  const saleStore = useSaleStore();
  const printer = usePrintService();
  const handlePrint = useReactToPrint({
    content: () => printer.toPrint?.current,
  });

  return (
    <div className="border border-mallow-5 h-full rounded-lg w-[512px] p-5 bg-mallow-bg-1 shadow">
      <div className="flex gap-2">
        <span className="text-xl font-bold">Transaction Info</span>
        <span
          className={`px-3 py-1 bg-opacity-30 rounded-lg 
          ${saleStore.selected?.status == 0 && "bg-green-500 text-green-700"} 
          ${saleStore.selected?.status == 1 && "bg-blue-500 text-blue-700"}
          ${saleStore.selected?.status == 2 && "bg-orange-500 text-orange-700"}
          ${saleStore.selected?.status == 3 && "bg-red-500 text-red-700"}`}
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
          <Button onClick={() => setShouldOpenVoidModal(true)}>
            <div className="flex items-center gap-2">
              <TrashSimple />
              <span>Void</span>
            </div>
          </Button>
          <Button
            buttonColor="sun"
            onClick={() => setShouldOpenReturnModal(true)}
          >
            <div className="flex items-center gap-2">
              <ArrowArcLeft />
              <span>Return</span>
            </div>
          </Button>
          <Button buttonColor="mallow" onClick={handlePrint}>
            <div className="flex items-center gap-2">
              <Printer />
              <span>Print</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};
