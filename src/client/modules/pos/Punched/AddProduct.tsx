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
  };
  const blur = () => ctx.resetSearched();
  return (
    <div className="h-14 border-b px-5 items-center flex gap-1">
      <div className="search w-full relative" onBlur={() => blur()}>
        <Input
          placeholder="Enter Barcode Here To Add"
          className={`w-full ${
            ctx.searched.length > 0
              ? "border-x-2 border-t-2 border-b-0 rounded-br-none rounded-bl-none border-slate-300"
              : null
          }`}
          onChange={(vt) => changing(vt)}
        />
        <AutoComplete />
      </div>
      <Button onClick={async () => await onlick()}>Add</Button>
    </div>
  );
};
