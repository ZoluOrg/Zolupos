import React from "react";
import { IProductBase } from "../../../interfaces/IProductBase";

interface Props extends IProductBase {}

export const AutoCompleteButton: React.FC<Props> = ({
  productName,
  productQuantity,
  productManufacturer,
  barCode,
  productType,
}) => {
  return (
    <div className="hover:bg-slate-300 flex flex-col transition ease-in-out rounded w-full p-2">
      <div className="ProdName font-bold text-lg">{productName}</div>
      <div className="flex gap-2">
        <div className="BarCode text-sm">Barcode: {barCode}</div>
        <div className="Qty text-sm">Qty: {productQuantity}</div>
      </div>
    </div>
  );
};
