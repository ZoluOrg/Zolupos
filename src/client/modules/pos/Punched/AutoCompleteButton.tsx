import React, { useEffect, useRef } from "react";
import { usePosContext } from "../../../context/PosContext";
import { IProductBase } from "../../../interfaces/IProductBase";

interface Props extends IProductBase {
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
  const LiRef = useRef<HTMLLIElement>();
  useEffect(() => {
    if (ctx.selected == idx) {
      LiRef.current?.ariaSelected()!;
      console.log("focus");
    }
  }, [ctx.selected]);
  return (
    <button
      className={` focus:bg-secondary-light focus:text-white hover:border flex flex-col transition ease-in-out rounded w-full p-2 hover:cursor-default`}
      key={idx}
    >
      <div className="ProdName font-bold text-lg">{productName}</div>
      <div className="flex gap-2">
        <div className="BarCode text-sm">Barcode: {barCode}</div>
        <div className="Qty text-sm">Qty: {productQuantity}</div>
        {idx}
      </div>
    </button>
  );
};
