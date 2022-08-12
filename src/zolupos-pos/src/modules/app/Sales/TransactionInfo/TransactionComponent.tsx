import React from "react";
import { useParams } from "react-router-dom";
import { CategoryView } from "./CategoryView/CategoryView";
import { Info } from "./Info";

export const TransactionComponent: React.FC = () => {
  const params = useParams();
  return (
    <div className="sales-container-transaction h-[calc(100vh-60px)] relative ">
      <div className="h-full flex gap-3 px-[25px] py-[22px]">
        <Info />
        <CategoryView />  
      </div>
    </div>
  );
};
