import React, { ButtonHTMLAttributes, FC, HTMLProps } from "react";
import { IProduct } from "../../interface/IProduct";

interface Props extends HTMLProps<HTMLLIElement> {
  index: number;
  product: IProduct;
}

export const ResultButton: FC<Props> = ({ index, product, ...otherProps }) => {
  return <li>{product.productName}</li>;
};
