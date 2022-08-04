import React, { useEffect, useTransition } from "react";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
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
      <div className="flex items-center gap-2">
        <span>Entries</span>
        <select className="border border-mallow-5 rounded-lg">
          <option>10</option>
          <option>20</option>
          <option>50</option>
          <option>100</option>
        </select>
      </div>
    </div>
  );
};
