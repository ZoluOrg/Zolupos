import dayjs from "dayjs";
import { useAtom } from "jotai";
import { ArrowArcLeft, Check, Printer, TrashSimple } from "phosphor-react";
import React, { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { toast } from "react-hot-toast";
import { Button } from "../../../../components/Button";
import { TransactionStatus } from "../../../../enums/TransactionStatus";
import {
  changeTransactionStatus,
  getTransactionById,
} from "../../../../services/TransactionsService";
import { usePrintService } from "../../../../stores/PrintService";
import { useSaleStore } from "../../../../stores/SalesStore";
import {
  shouldOpenCompleteModal,
  shouldOpenReturnModal,
  shouldOpenVoidModal,
} from "./TransactionComponent";

export const TransactionInfo = () => {
  let { id } = useParams();

  const [, setShouldOpenReturnModal] = useAtom(shouldOpenReturnModal);

  const [, setShouldOpenVoidModal] = useAtom(shouldOpenVoidModal);

  const [, setShouldOpenCompleteModal] = useAtom(shouldOpenCompleteModal);

  const { data } = useQuery(
    ["transaction-info"],
    () => getTransactionById(parseInt(id!)),
    {
      onError: () => {
        toast.error("Error");
      },
    }
  );

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
          ${data?.status == 0 && "bg-green-500 text-green-700"} 
          ${data?.status == 1 && "bg-blue-500 text-blue-700"}
          ${data?.status == 2 && "bg-orange-500 text-orange-700"}
          ${data?.status == 3 && "bg-red-500 text-red-700"}`}
        >
          {Object.values(TransactionStatus)[data?.status!]}
        </span>
      </div>
      <div className="flex flex-col mt-2 space-y-2">
        <div className="flex space-x-2">
          <span className="font-bold">Transaction Id:</span>
          <span>{data?.transactionId}</span>
        </div>
        <div className="flex space-x-2">
          <span className="font-bold">Transaction Reference:</span>
          <span>{data?.reference}</span>
        </div>
        <div className="flex space-x-2">
          <span className="font-bold">Transaction Id:</span>
          <span>
            {dayjs(data?.transactionId).format("YYYY-MM-DD-ddd H:mm:ss A")}
          </span>
        </div>
        <div className="flex space-x-2">
          <span className="font-bold">Transaction Total:</span>
          <span>{data?.total}</span>
        </div>
        <div className="flex space-x-2">
          <span className="font-bold">Transaction SubTotal:</span>
          <span>{data?.subTotal}</span>
        </div>
        <div className="flex space-x-2">
          <span className="font-bold">Transaction Device:</span>
          <span>{data?.deviceId}</span>
        </div>
        <div className="flex space-x-1">
          {!(data?.status == 3) && (
            <Button onClick={() => setShouldOpenVoidModal(true)}>
              <div className="flex items-center gap-2">
                <TrashSimple />
                <span>Void</span>
              </div>
            </Button>
          )}
          {(data?.status == 0 || data?.status == 1) && (
            <Button
              buttonColor="sun"
              onClick={() => setShouldOpenReturnModal(true)}
            >
              <div className="flex items-center gap-2">
                <ArrowArcLeft />
                <span>Return</span>
              </div>
            </Button>
          )}
          {data?.status == 1 && (
            <Button
              buttonColor="leaf"
              onClick={() => setShouldOpenCompleteModal(true)}
            >
              <div className="flex items-center gap-2">
                <Check />
                <span>Complete</span>
              </div>
            </Button>
          )}
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
