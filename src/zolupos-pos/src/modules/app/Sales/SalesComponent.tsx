import React from "react";
import { SearchBar } from "./SearchBar";
import { TransactionTable } from "./TransactionTable";

export const SalesComponent = () => {
  return (
    <div className="sales-container h-[calc(100vh-60px)] relative ">
      <div className="h-full flex flex-col gap-3 px-[25px] py-[22px]">
        <TransactionTable />
        <SearchBar/>
      </div>
    </div>
  );
};
