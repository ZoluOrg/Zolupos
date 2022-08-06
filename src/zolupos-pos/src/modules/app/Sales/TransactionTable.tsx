import { AxiosError } from "axios";
import { Spinner } from "phosphor-react";
import React from "react";
import { useQuery } from "react-query";
import { useTable } from "react-table";
import { Button } from "../../../components/Button";
import { CustomSpinner } from "../../../components/CustomSpinner";
import { ITransaction } from "../../../interface/ITransaction";
import { getAllTransactions } from "../../../services/TransactionsService";
import { useSaleStore } from "../../../stores/SalesStore";
import { TransactionCard } from "./TransactionCard";

export const TransactionTable = () => {
  const [limit, setLimit] = React.useState<number>(20);
  const { data, isLoading, error, refetch, isRefetching } = useQuery(
    ["all-transactions"],
    getAllTransactions,
    {
      refetchOnWindowFocus: false,
      onSuccess: (data: Array<ITransaction>) => {
        saleStore.setTransactions(data);
        saleStore.setSearchResult(data);
      },
    }
  );

  const saleStore = useSaleStore();

  return (
    <>
      <div className="bg-mallow-bg-1 border border-mallow-5 rounded-lg h-[calc(100%-12px-60px)] shadow">
        <div className="h-full flex flex-col">
          <div className="bg-mallow-2 rounded-t-lg border-b border-b-mallow-5 p-5 grid grid-cols-5 font-bold">
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
              <div className=" flex flex-col gap-2 h-full items-center justify-center">
                <span className="text-xl font-bold">
                  {error instanceof AxiosError ? (
                    (error as AxiosError).message
                  ) : (
                    <p>An unkown error occured</p>
                  )}
                </span>
                <Button onClick={() => refetch()}>Refetch</Button>
              </div>
            ) : (
              saleStore.searchResult?.map((tr,idx) => (
                <TransactionCard transaction={tr} key={idx}/>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};