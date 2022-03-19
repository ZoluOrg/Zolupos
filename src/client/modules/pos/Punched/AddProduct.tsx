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

  const keyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      if (ctx.selected == 0) return;
      ctx.setSelected(ctx.selected - 1);
    } else if (e.key === "ArrowDown") {
      if (ctx.selected + 1 == ctx.searched.length) return;
      ctx.setSelected(ctx.selected + 1);
    } else if (e.key === "Enter") {
      ctx.setSearchedInput(ctx.searched[ctx.selected].barCode);
      ctx.setIsSearching(false);
    }
  };

  const inputChanging = (e: React.FormEvent<HTMLInputElement>) => {
    ctx.searchProduct(e.currentTarget.value);
    ctx.setSearchedInput(e.currentTarget.value);
    ctx.setSelected(0);
    ctx.setIsSearching(true);
  };

  return (
    <div className="h-14 border-b px-5 items-center flex gap-1">
      <div className="search w-full relative">
        <Input
          placeholder="Enter Barcode Here To Add"
          className={`w-full ${
            ctx.isSearching
              ? "border-x-2 border-t-2 border-b-0 rounded-br-none rounded-bl-none border-slate-300"
              : null
          }`}
          onChange={inputChanging}
          onKeyDown={keyDown}
          value={ctx.searchedInput}
        />
        <AutoComplete />
      </div>
      <Button>Add</Button>
    </div>
  );
};
