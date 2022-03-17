import { useRouter } from "next/router";
import React, { useContext } from "react";
import { Button } from "../../../components/UI/Button";
import { Input } from "../../../components/UI/Input";
import { usePosContext } from "../../../context/PosContext";
import { getProducts } from "../../inventory/Helper";
import { AutoComplete } from "./AutoComplete";
import { AutoCompleteButton } from "./AutoCompleteButton";

export const SearchProduct = () => {
  const router = useRouter();
  const ctx = usePosContext();
  const onlick = async () => {
    let prods = ctx.products![0];
    console.log(prods);
    ctx.addToPunched(prods);
  };
  const changing = (evt: React.FormEvent<HTMLInputElement>) => {
    let toSearch = evt.currentTarget.value;
    console.log(`What to search ${toSearch}`);
    ctx.searchProduct(toSearch);
    ctx.setIsSearching(true);
  };
  const blur = () => {
    ctx.setIsSearching(false);
  };
  return (
    <div className="h-14 border-b px-5 items-center flex gap-1">
      <div className="search w-full relative">
        <Input
          placeholder="Enter Barcode Here To Add"
          className="w-full"
          onChange={(vt) => changing(vt)}
          onBlur={() => blur()}
        />
        <AutoComplete />
      </div>
      <Button onClick={async () => await onlick()}>Add</Button>
    </div>
  );
};
