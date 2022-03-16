import React from "react";
import { usePosContext } from "../../../context/PosContext";
import { AutoCompleteButton } from "./AutoCompleteButton";

export const AutoComplete = () => {
  const ctx = usePosContext();
  return ctx.isSearching ? (
    <div className="autocomplete w-full border-b-2 border-x-2 border-slate-300 rounded-b  absolute bg-bg-light-base p-1">
      {ctx.searched.map((pr) => (
        <AutoCompleteButton
          productName={pr.productName}
          productQuantity={pr.productQuantity}
          productManufacturer={pr.productManufacturer}
          barCode={pr.barCode}
          productType={pr.productType}
        />
      ))}
    </div>
  ) : null;
};
