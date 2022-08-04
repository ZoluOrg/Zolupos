import React from "react";
import { Button } from "../../../components/Button";
import { ITransaction } from "../../../interface/ITransaction";

export const TransactionCard: React.FC<{ transaction: ITransaction }> = ({
  transaction,
}) => {
  return (
    <div className="grid grid-cols-5 p-3 bg-mallow-bg-1">
      <span>{transaction.transactionId}</span>
      <span>{transaction.reference}</span>
      <span>{transaction.total}</span>
      <span>{transaction.transactedAt.toString()}</span>
      <span className="flex justify-center">
        <Button>View</Button>
      </span>
    </div>
  );
};
