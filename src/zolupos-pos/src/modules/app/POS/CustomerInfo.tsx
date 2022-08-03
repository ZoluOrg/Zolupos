import { Plus, X } from "phosphor-react";
import React from "react";
import { Button } from "../../../components/Button";
import { useTransactionStore } from "../../../stores/TransactionStore";

export const CustomerInfo = () => {
  const transactionStore = useTransactionStore();
  return (
    <div className="rounded-lg p-2 px-4 w-full bg-mallow-bg-1 border border-mallow-5 shadow">
      {transactionStore.assignedCustomer != null ? (
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <div>
              <img src={transactionStore.assignedCustomer.customerProfile == null ? 
              `https://avatars.dicebear.com/api/micah/${transactionStore.assignedCustomer.customerFullName}.svg` :
              `https://localhost:7073/static/Customers/ProfileImages/${transactionStore.assignedCustomer.customerProfile}`}
              className="w-6 h-6 border border-coal-1 rounded-full"/>
            </div>
            <span>{transactionStore.assignedCustomer.customerFullName}</span>
          </div>
          <Button onClick={() => transactionStore.removeCustomer()}>
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
