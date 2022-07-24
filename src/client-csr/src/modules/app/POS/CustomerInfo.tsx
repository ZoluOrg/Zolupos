import { Plus, X } from "phosphor-react";
import React from "react";
import { Button } from "../../../components/Button";
import { useTransactionStore } from "../../../stores/TransactionStore";

export const CustomerInfo = () => {
  const transactionStore = useTransactionStore();
  return (
    <div className="rounded-lg p-2 px-4 w-full bg-mallow-2 bg-opacity-75 border border-mallow-2 shadow">
      {transactionStore.assignedCustomer != null ? (
        <div className="flex justify-between items-center">
          <span>{transactionStore.assignedCustomer.customerFullName}</span>
          <Button
            onClick={() => transactionStore.removeCustomer()}
          >
            <div className="flex items-center gap-2">
              <X weight="bold" />
              <span>Remove</span>
            </div>
          </Button>
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <span>Assign Customer</span>
          <Button
            onClick={() => transactionStore.setShouldShowCustomerModal(true)}
          >
            <div className="flex items-center gap-2">
              <Plus weight="bold" />
              <span>Add</span>
            </div>
          </Button>
        </div>
      )}
    </div>
  );
};
