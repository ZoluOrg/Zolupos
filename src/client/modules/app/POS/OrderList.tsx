import React from "react";
import { useProductsContext } from "../../../context/ProductsContext";

export const OrderList = () => {
  const prodCtx = useProductsContext();
  return (
    <div className="bg-mallow-2 rounded-lg xl:w-9/12 lg:w-3/5 sm:w-6/12">
      {prodCtx.products.map((item, ind) => {
        return <li key={ind}>{item.productName}</li>;
      })}
    </div>
  );
};
