import React, { createRef, useEffect, useRef } from "react";
import { usePunchedContext } from "../../../context/pos/PunchedContext";
import { useSearchContext } from "../../../context/pos/SearchContext";
import { IProductBase } from "../../../interfaces/inventory/IProductBase";

interface Props extends IProductBase, React.HTMLProps<HTMLLIElement> {
  idx: number;
}

export const AutoCompleteButton: React.FC<Props> = ({
  productName,
  productQuantity,
  productManufacturer,
  barCode,
  productType,
  idx,
}) => {
  const searchContext = useSearchContext();
  const punchedContext = usePunchedContext();
  const LiRef = createRef<HTMLLIElement>();
  useEffect(() => {
    if (searchContext.selected == idx) {
      LiRef && LiRef.current && LiRef.current.scrollIntoView({ behavior: "smooth", block: 'center' });
      console.log("Will Scroll?");
    }
  }, [searchContext.selected]);
  const onClick = () => {
    searchContext.setSearchedInput(barCode);
    searchContext.setIsSearching(false);
    punchedContext.addToPunched(barCode);
  }
  return (
    <li
      className={` ${
        searchContext.selected == idx && "bg-secondary-light text-white hover:border-secondary-light"
      } hover:bg-slate-100 hover:text-black hover:border flex flex-col transition ease-in-out rounded w-full p-2 hover:cursor-default`}
      key={idx}
      ref={LiRef}
      onClick={onClick}
    >
      <div className="ProdName font-bold text-lg">{productName}</div>
      <div className="flex gap-2">
        <div className="BarCode text-sm">Barcode: {barCode}</div>
        <div className="Qty text-sm">Qty: {productQuantity}</div>
        <div className="Mfr text-sm">Mfr: {productManufacturer}</div>
      </div>
    </li>
  );
};
