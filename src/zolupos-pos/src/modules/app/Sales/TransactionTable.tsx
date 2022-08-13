import { SortAscending, SortDescending, Spinner } from "phosphor-react";
import React from "react";
import { Button } from "../../../components/Button";
import { CustomSpinner } from "../../../components/CustomSpinner";
import { useSaleStore } from "../../../stores/SalesStore";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList as List } from "react-window";
import { TransactionCard } from "./TransactionCard";
import { useIsFetching, useQueryClient } from "react-query";

export const TransactionTable = () => {
  const [limit, setLimit] = React.useState<number>(10);
  const saleStore = useSaleStore();

  const onSortTransactionId = (
    ev: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    saleStore.setSort("by_id");
    saleStore.sort == "by_id"
      ? saleStore.setIsDescending(!saleStore.isDescending)
      : saleStore.setIsDescending(false);
  };

  const onSortDate = () => {
    saleStore.setSort("by_date");
    saleStore.sort == "by_date"
      ? saleStore.setIsDescending(!saleStore.isDescending)
      : saleStore.setIsDescending(false);
  };

  const onSortTotal = () => {
    saleStore.setSort("by_total");
    saleStore.sort == "by_total"
      ? saleStore.setIsDescending(!saleStore.isDescending)
      : saleStore.setIsDescending(false);
  };

  const allTransactionRefetching = useIsFetching(["all-transactions"]);
  const searchTransactionRefetching = useIsFetching(["search-transaction"]);

  return (
    <>
      <div className="bg-mallow-bg-1 border border-mallow-5 rounded-lg h-[calc(100%-12px-60px)] shadow">
        <div className="h-full flex flex-col">
          <div className="bg-mallow-2 rounded-t-lg border-b border-b-mallow-5 p-5 grid grid-cols-5 font-bold">
            <div className="flex items-center gap-3">
              <span>Transaction Id</span>
              <Button
                buttonColor={saleStore.sort == "by_id" ? "accent" : "coal"}
                buttonSize="small"
                onClick={onSortTransactionId}
              >
                {saleStore.sort == "by_id" ? (
                  saleStore.isDescending ? (
                    <SortDescending />
                  ) : (
                    <SortAscending />
                  )
                ) : (
                  <SortAscending />
                )}
              </Button>
            </div>
            <span>Ref GUID</span>
            <div className="flex items-center gap-3">
              <span>Total</span>
              <Button
                buttonColor={saleStore.sort == "by_total" ? "accent" : "coal"}
                buttonSize="small"
                onClick={onSortTotal}
              >
                {saleStore.sort == "by_total" ? (
                  saleStore.isDescending ? (
                    <SortDescending />
                  ) : (
                    <SortAscending />
                  )
                ) : (
                  <SortAscending />
                )}
              </Button>
            </div>
            <div className="flex items-center gap-3">
              <span>Transacted at</span>
              <Button
                buttonColor={saleStore.sort == "by_date" ? "accent" : "coal"}
                buttonSize="small"
                onClick={onSortDate}
              >
                {saleStore.sort == "by_date" ? (
                  saleStore.isDescending ? (
                    <SortDescending />
                  ) : (
                    <SortAscending />
                  )
                ) : (
                  <SortAscending />
                )}
              </Button>
            </div>
            <span className="text-center">View</span>
          </div>
          <div className="h-full overflow-y-auto rounded-b-lg">
            {allTransactionRefetching || searchTransactionRefetching ? (
              <div className="h-full flex flex-col items-center justify-center gap-2">
                <CustomSpinner dark />
                <div className="flex flex-col items-center">
                  <span className="font-bold text-xl">Fetching Data</span>
                  <div>
                    {allTransactionRefetching ? (
                      <span>Fetching transactions for table</span>
                    ) : (
                      <span>Fetching transactions for search</span>
                    )}
                  </div>
                </div>
              </div>
            ) : saleStore.error ? (
              <div className="w-full h-full flex items-center justify-center">
                <div className="flex flex-col text-center">
                  <span className="font-bold text-xl w-full">{saleStore.error}</span>
                  <span>Check if the server is running or refetch.</span>
                </div>
              </div>
            ) : (
              <AutoSizer>
                {({ height, width }) => (
                  <List
                    height={height}
                    className="w-full h-full"
                    width={width}
                    itemCount={saleStore.transactions.length}
                    itemSize={71}
                  >
                    {TransactionCard}
                  </List>
                )}
              </AutoSizer>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
