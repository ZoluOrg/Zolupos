import React, { createRef, useEffect, useRef } from "react";
import { usePosContext } from "../../../context/PosContext";
import { IProductBase } from "../../../interfaces/IProductBase";

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
  const ctx = usePosContext();
  const LiRef = createRef<HTMLLIElement>();
  useEffect(() => {
    if (ctx.selected == idx) {
      LiRef && LiRef.current && LiRef.current.scrollIntoView({ behavior: "smooth", block: 'center' });
      console.log("Will Scroll?");
    }
  }, [ctx.selected]);
  const onClick = () => {
    ctx.setSearchedInput(barCode);
    ctx.setIsSearching(false);
    ctx.addToPunched(ctx.searched[idx]);
  }
  return (
    <li
      className={` ${
        ctx.selected == idx && "bg-secondary-light text-white"
      } hover:bg-slate-100 hover:border flex flex-col transition ease-in-out rounded w-full p-2 hover:cursor-default`}
      key={idx}
      ref={LiRef}
      onClick={onClick}
    >
      <div className="ProdName font-bold text-lg">{productName}</div>
      <div className="flex gap-2">
        <div className="BarCode text-sm">Barcode: {barCode}</div>
        <div className="Qty text-sm">Qty: {productQuantity}</div>
        {idx}
      </div>
    </li>
  );
};
