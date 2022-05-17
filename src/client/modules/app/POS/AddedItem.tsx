import { CurrencyDollar, Minus, Plus, Trash } from "phosphor-react";
import React, { FC, useState } from "react";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

interface addItemProps {
  itemName: string;
  barCode: string;
  price: number;
}

export const AddedItem: FC<addItemProps> = ({ itemName, barCode, price }) => {
  const [total, setTotal] = useState<number>(price);
  return (
    <div className="grid grid-cols-5 p-5 items-center">
      <div>
        <div className="flex flex-col">
          <span className="font-bold">{itemName}</span>
          <span>{barCode}</span>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <CurrencyDollar />
        {total}
      </div>
      <div>{price}</div>
      <div>{total}</div>
      <div className="flex items-center gap-1">
        <CurrencyDollar />
        {total}
      </div>
    </div>
  );
};
