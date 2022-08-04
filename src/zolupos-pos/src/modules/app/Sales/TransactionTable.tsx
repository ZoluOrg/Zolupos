import { AxiosError } from "axios";
import { Spinner } from "phosphor-react";
import React from "react";
import { useQuery } from "react-query";
import { useTable } from "react-table";
import { CustomSpinner } from "../../../components/CustomSpinner";
import { getAllTransactions } from "../../../services/TransactionsService";
import { TransactionCard } from "./TransactionCard";

export const TransactionTable = () => {
  const { data, isLoading, error } = useQuery(
    ["all-transactions"],
    getAllTransactions,
    {
      refetchOnWindowFocus: false,
    }
  );
  return (
    <>
      <div className="bg-mallow-bg-1 border border-mallow-5 rounded-lg h-[calc(100%-60px)] ">
        <div className="h-full flex flex-col">
          <div className="bg-mallow-2 rounded-t-lg border-b border-b-mallow-5 p-3 grid grid-cols-5 h-[50px]">
            <span>Transaction Id</span>
            <span>Ref GUID</span>
            <span>Total</span>
            <span>Transacted at</span>
            <span className="text-center">View</span>
          </div>
          <div className="h-full overflow-y-auto rounded-b-lg">
            {isLoading ? (
              <div className="h-full flex flex-col items-center justify-center gap-2">
                <CustomSpinner dark />
                <span className="font-bold text-2xl">Loading</span>
              </div>
            ) : error ? (
              <span className="text-accent-1 text-xl font-bold flex h-full items-center justify-center">
                {(error as AxiosError).message}
              </span>
            ) : (
              data?.map((tr) => <TransactionCard transaction={tr} />)
            )}
          </div>
        </div>
      </div>
    </>
  );
};
