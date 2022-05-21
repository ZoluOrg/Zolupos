import React, { ButtonHTMLAttributes, FC, HTMLProps } from "react";
import { IProduct } from "../../interface/IProduct";
import styles from "../../styles/SearchContext/ResultButton.module.scss";

interface Props extends HTMLProps<HTMLLIElement> {
  index: number;
  product: IProduct;
}

export const ResultButton: FC<Props> = ({ index, product, ...otherProps }) => {
  return (
    <div className={styles.container}>
      <div className={styles.productInfo}>
        <span className="font-bold text-xl">{product.productName}</span>
        <span className="font-light text-sm">{product.barCode}</span>
      </div>
      <div className="productPrice">
        <span className="font-bold text-2xl">{product.productRetailCost}</span>
      </div>
    </div>
  );
};
