import { atom } from "jotai";
import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { CategoryView } from "./CategoryView/CategoryView";
import { CustomerInfo } from "./CustomerInfo";
import { ReturnModal } from "./ReturnModal";
import { TransactionInfo } from "./TransactionInfo";
import { VoidModal } from "./VoidModal";

export const shouldOpenReturnModal = atom(false);
export const shouldOpenVoidModal = atom(false);

export const TransactionComponent: React.FC = () => {
  const params = useParams();
  const ref = useRef(null);
  return (
    <div className="sales-container-transaction h-[calc(100vh-60px)] relative">
      <ReturnModal />
      <VoidModal />
      <div className="h-full flex gap-3 px-[25px] py-[22px]">
        <div className="flex flex-col space-y-4">
          <TransactionInfo />
          <CustomerInfo />
        </div>
        <CategoryView />
      </div>
    </div>
  );
};
