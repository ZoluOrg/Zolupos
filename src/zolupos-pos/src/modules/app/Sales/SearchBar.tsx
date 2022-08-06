import React, { useEffect, useTransition } from "react";
import ReactPaginate from "react-paginate";
import { useQuery } from "react-query";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { IPagination } from "../../../interface/IPagination";
import { ITransaction } from "../../../interface/ITransaction";
import { getTransactionsPaginated } from "../../../services/TransactionsService";
import { useSaleStore } from "../../../stores/SalesStore";

export const SearchBar = () => {
  const saleStore = useSaleStore();
  const [searchVal, setSearchVal] = React.useState<string>("");
  const [transition, startTransition] = useTransition();

  useEffect(() => {
    const stale = [...saleStore.transactions];
    startTransition(() => {
      let toSave = stale.filter(
        (tr) =>
          tr.transactionId.toString().includes(saleStore.searchQuery) ||
          tr.reference.includes(saleStore.searchQuery)
      );
      saleStore.setSearchResult(toSave);
    });
  }, [saleStore.searchQuery]);

  const { data, isLoading, error, refetch, isRefetching } = useQuery(
    ["all-transactions"],
    () => getTransactionsPaginated(saleStore.currentPage, saleStore.limit),
    {
      refetchOnWindowFocus: false,
      onSuccess: (data: IPagination<Array<ITransaction>>) => {
        console.log("Get");
        console.log(data);
        saleStore.setSearchResult(data.data);
        saleStore.setTransactions(data.data);
        saleStore.setTotalPages(data.totalPages);
      },
    }
  );

  useEffect(() => {
    saleStore.setIsLoading(isLoading);
  }, [isLoading]);

  useEffect(() => {
    refetch();
  }, [saleStore.currentPage, saleStore.limit]);

  return (
    <div className="w-full p-2 bg-mallow-bg-1 border border-mallow-5 rounded-lg flex items-center justify-between shadow">
      <div className="flex gap-2 items-center">
        <Input
          placeholder="Transaction ID or Reference Id"
          className="w-96"
          value={searchVal}
          onChange={(ev) => setSearchVal(ev.currentTarget.value)}
          onKeyDown={(ev) =>
            ev.key == "Enter" && saleStore.setSearchQuery(searchVal)
          }
        />
        <Button onClick={() => saleStore.setSearchQuery(searchVal)}>
          Search
        </Button>
      </div>
      <div className="flex gap-3 items-center">
        <div className="flex items-center gap-2">
          <span>Entries</span>
          <select
            className="border border-mallow-5 rounded-lg"
            onChange={(e) => {
              saleStore.setCurrentPage(1);
              saleStore.setLimit(parseInt(e.currentTarget.value));
              saleStore.setSelectedPage(0);
            }}
          >
            <option>10</option>
            <option>20</option>
            <option>50</option>
            <option>100</option>
          </select>
        </div>
        <div>
          <ReactPaginate
            breakLabel="..."
            nextLabel="next ->"
            onPageChange={(e) => {
              saleStore.setCurrentPage(e.selected + 1);
              saleStore.setSelectedPage(e.selected);
            }}
            pageRangeDisplayed={5}
            pageCount={saleStore.totalPages}
            forcePage={
              saleStore.selectedPage > 0 ? saleStore.selectedPage : 0
            }
            previousLabel="<- back"
            className="flex border-mallow-5"
            pageClassName="p-1 border px-2"
            nextClassName="p-1 px-2 border rounded-r-lg bg-accent-1 hover:bg-accent-3 text-white font-bold duration-100 select-none"
            activeClassName="bg-coal-1 text-white font-bold"
            previousClassName="p-1 px-2 border rounded-l-lg bg-accent-1 hover:bg-accent-3 text-white font-bold transition duration-100 select-none"
            breakClassName="p-1 px-2 border"
          />
        </div>
      </div>
    </div>
  );
};
