import { AxiosError } from "axios";
import { SortAscending, Spinner } from "phosphor-react";
import React from "react";
import { useQuery } from "react-query";
import { useTable } from "react-table";
import { Button } from "../../../components/Button";
import { CustomSpinner } from "../../../components/CustomSpinner";
import { ITransaction } from "../../../interface/ITransaction";
import {
  getAllTransactions,
  getTransactionsPaginated,
} from "../../../services/TransactionsService";
import { useSaleStore } from "../../../stores/SalesStore";
import { TransactionCard } from "./TransactionCard";

export const TransactionTable = () => {
  const [limit, setLimit] = React.useState<number>(10);
  const saleStore = useSaleStore();

  return (
    <>
      <div className="bg-mallow-bg-1 border border-mallow-5 rounded-lg h-[calc(100%-12px-60px)] shadow">
        <div className="h-full flex flex-col">
          <div className="bg-mallow-2 rounded-t-lg border-b border-b-mallow-5 p-5 grid grid-cols-5 font-bold">
            <div className="flex items-center gap-3">
              <span>Transaction Id</span>
              <Button buttonColor="coal" buttonSize="small"><SortAscending weight="bold"/></Button>
            </div>
            <span>Ref GUID</span>
            <span>Total</span>
            <div className="flex items-center gap-3">
              <span>Transacted at</span>
              <Button buttonColor="coal" buttonSize="small"><SortAscending weight="bold"/></Button>
            </div>
            <span className="text-center">View</span>
          </div>
          <div className="h-full overflow-y-auto rounded-b-lg">
            {saleStore.isLoading ? (
              <div className="h-full flex flex-col items-center justify-center gap-2">
                <CustomSpinner dark />
                <span className="font-bold text-2xl">Loading</span>
              </div>
            ) : (
              saleStore.searchResult?.map((tr, idx) => (
                <TransactionCard transaction={tr} key={idx} id={idx}/>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};
