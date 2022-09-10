import dayjs from "dayjs";
import { MagnifyingGlass } from "phosphor-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button";
import { TransactionStatus } from "../../../enums/TransactionStatus";
import { ITransaction } from "../../../interface/ITransaction";
import { useSaleStore } from "../../../stores/SalesStore";

export const TransactionCard: React.FC<{
  index: number;
  style: React.CSSProperties;
}> = ({ index, style }) => {
  const saleStore = useSaleStore();
  const transaction = saleStore.searchResult[index];
  const navigate = useNavigate();
  return (
    <div
      className="grid grid-cols-6 px-5 py-[19px]bg-mallow-bg-1 items-center h-[71] z-0"
      style={style}
    >
      <span>{transaction.transactionId}</span>
      <span>{transaction.reference}</span>
      <span>{transaction.total}</span>
      <span>
        {dayjs(transaction.transactedAt).format("YYYY-MM-DD-ddd H:m:s A")}
      </span>
      <span className="p-2">
        <span
          className={`px-3 py-1 bg-opacity-30 rounded-lg 
          ${transaction.status == 0 && "bg-green-500 text-green-700"} 
          ${transaction.status == 1 && "bg-blue-500 text-blue-700"}
          ${transaction.status == 2 && "bg-orange-500 text-orange-700"}
          ${transaction.status == 3 && "bg-red-500 text-red-700"}`}
        >
          {Object.values(TransactionStatus)[transaction.status]}
        </span>
      </span>
      <span className="flex justify-center">
        <Button
          onClick={() => {
            saleStore.setSelected(transaction);
            navigate("./transaction/" + transaction.transactionId);
          }}
        >
          <MagnifyingGlass weight="bold" />
        </Button>
      </span>
    </div>
  );
};
