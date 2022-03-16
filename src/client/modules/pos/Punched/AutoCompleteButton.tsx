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
    <div className="hover:bg-slate-100 transition ease-in-out rounded w-full p-2">
      {productName}
    </div>
  );
};
