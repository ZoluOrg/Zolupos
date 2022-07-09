import React, { ButtonHTMLAttributes, FC, HTMLProps } from "react";
import { IProduct } from "../../interface/IProduct";
import { ISearchResponse } from "../../interface/ISearchResponse";
import styles from "../../styles/SearchContext/ResultButton.module.scss";
import { useSearchContext } from "./SearchContext";

interface Props extends HTMLProps<HTMLLIElement> {
  index: number;
  product: ISearchResponse;
}

export const ResultButton: FC<Props> = ({ index, product, ...otherProps }) => {
  const searchContext = useSearchContext();
  return (
    <div
      className={`w-full p-5 flex justify-between items-center border ${
        searchContext.selected == index
          ? "border-accent-1"
          : "border-mallow-3"
      } rounded-lg`}
    >
      <div className="flex flex-col">
        <span className="font-bold text-xl">{product.productName}</span>
        <span className="font-light text-sm">{product.productBarcode}</span>
      </div>
      <div className="productPrice">
        <span className="font-bold text-2xl">{product.productUnitPrice}</span>
      </div>
    </div>
  );
};
