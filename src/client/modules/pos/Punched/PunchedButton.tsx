import React, { useEffect } from "react";
import { usePosContext } from "../../../context/PosContext";
import { IProduct } from "../../../interfaces/IProduct";

interface Props {
  pr: IProduct;
}

export const PunchedButton: React.FC<Props> = ({ pr }) => {
  return (
    <div className="py-3 px-5 bg-slate-50 border hover:bg-slate-100 transition ease-in-out">
      {pr.productName}
    </div>
  );
};
