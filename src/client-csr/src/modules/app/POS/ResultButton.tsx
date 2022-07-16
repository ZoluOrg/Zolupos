import React, { ButtonHTMLAttributes, FC, HTMLProps } from "react";
import { IOrderedProduct } from "../../../interface/IOrderedProduct";
import { IProduct } from "../../../interface/IProduct";
import { ISearchResponse } from "../../../interface/ISearchResponse";
import { useOrderStore } from "../../../stores/OrderStore";
import { useSearchStore } from "../../../stores/SearchStore";
import styles from "../../styles/SearchContext/ResultButton.module.scss";

interface Props extends HTMLProps<HTMLLIElement> {
  index: number;
  product: ISearchResponse;
}

export const ResultButton: FC<Props> = ({ index, product, ...otherProps }) => {
  const searchStore = useSearchStore();
  const orderStore = useOrderStore();

  const addProduct = () => {
    let toSave: IOrderedProduct = {
      ...searchStore.searchResult[index],
      quantity: 1,
      bunchTotal:
        searchStore.searchResult[index].productUnitPrice,
    };
    orderStore.addOrder(toSave);
  };

  return (
    <div
      className={`w-full p-5 flex justify-between items-center border bg-mallow-1 hover:bg-mallow-2  ${
        searchStore.selectedResult == index
          ? "border-accent-1 shadow-lg"
          : "border-mallow-3"
      } rounded-lg`}
      onClick={() => addProduct()}
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
