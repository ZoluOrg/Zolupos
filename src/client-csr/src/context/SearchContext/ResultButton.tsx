import React, { ButtonHTMLAttributes, FC, HTMLProps } from "react";
import { IProduct } from "../../interface/IProduct";
import { ISearchResponse } from "../../interface/ISearchResponse";
import styles from "../../styles/SearchContext/ResultButton.module.scss";

interface Props extends HTMLProps<HTMLLIElement> {
  index: number;
  product: ISearchResponse;
}

export const ResultButton: FC<Props> = ({ index, product, ...otherProps }) => {
  return (
    <div className={styles.container}>
      <div className={styles.productInfo}>
        <span className="font-bold text-xl">{product.productName}</span>
        <span className="font-light text-sm">{product.productBarcode}</span>
      </div>
      <div className="productPrice">
        <span className="font-bold text-2xl">{product.productPrice}</span>
      </div>
    </div>
  );
};
