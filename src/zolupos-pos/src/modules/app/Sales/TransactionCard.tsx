import dayjs from "dayjs";
import { MagnifyingGlass } from "phosphor-react";
import React from "react";
import { Button } from "../../../components/Button";
import { ITransaction } from "../../../interface/ITransaction";
import { useSaleStore } from "../../../stores/SalesStore";

export const TransactionCard: React.FC<{
  index: number;
  style: string;
}> = ({ index, style }) => {
  const saleStore = useSaleStore();
  const transaction = saleStore.transactions[index];
  return (
    <div className="grid grid-cols-5 px-5 py-[19px]bg-mallow-bg-1 items-center h-[71]" style={style}>
      <span>{transaction.transactionId}</span>
      <span>{transaction.reference}</span>
      <span>{transaction.total}</span>
      <span>
        {dayjs(transaction.transactedAt).format("YYYY-MM-DD-ddd H:m:s A")}
      </span>
      <span className="flex justify-center">
        <Button
          onClick={() => {
            saleStore.setSelected(transaction);
            saleStore.setShouldShowModal(true);
          }}
        >
          <MagnifyingGlass weight="bold" />
        </Button>
      </span>
    </div>
  );
};
