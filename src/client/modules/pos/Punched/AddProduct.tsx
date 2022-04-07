import { useRouter } from "next/router";
import React, { useContext } from "react";
import { Button } from "../../../components/UI/Button";
import { Input } from "../../../components/UI/Input";
import { usePunchedContext } from "../../../context/pos/PunchedContext";
import { useSearchContext } from "../../../context/pos/SearchContext";
import { AutoComplete } from "./AutoComplete";
import { AutoCompleteButton } from "./AutoCompleteButton";

export const SearchProduct = () => {
  const router = useRouter();
  const searchContext = useSearchContext();
  const punchedContext = usePunchedContext();

  const keyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.key);
    if (e.key === "ArrowUp") {
      if (searchContext.selected == 0) return;
      searchContext.setSelected(searchContext.selected - 1);
    } else if (e.key === "ArrowDown") {
      if (searchContext.selected + 1 == searchContext.searched.length) return;
      searchContext.setSelected(searchContext.selected + 1);
    } else if (e.key === "Enter") {
      add();
    } else if (e.altKey && e.key == "a"){searchContext.setIsSearching(!searchContext.isSearching)}
  };

  const inputChanging = (e: React.FormEvent<HTMLInputElement>) => {
    searchContext.searchProduct(e.currentTarget.value);
    searchContext.setSearchedInput(e.currentTarget.value);
    searchContext.setSelected(0);
  };

  const add = () => {
    searchContext.setSearchedInput(searchContext.searched[searchContext.selected].barCode);
    searchContext.setIsSearching(false);
    punchedContext.addToPunched(searchContext.searched[searchContext.selected].barCode);
  };

  return (
    <div className="h-14 border-b px-5 items-center flex gap-1">
      <div className="search w-full relative">
        <Input
          placeholder="Enter Barcode Here To Add"
          className={`w-full ${
            searchContext.isSearching
              ? "border-x-2 border-t-2 border-b-0 rounded-br-none rounded-bl-none border-slate-300"
              : null
          }`}
          onChange={inputChanging}
          onKeyDown={keyDown}
          value={searchContext.searchedInput}
        />
        <AutoComplete />
      </div>
      <Button onClick={add}>Add</Button>
    </div>
  );
};
