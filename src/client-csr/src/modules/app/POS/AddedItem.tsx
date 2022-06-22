import { Barcode, CurrencyDollar, Minus, Plus, Trash } from "phosphor-react";
import React, { FC, useState } from "react";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

interface addItemProps {
  itemName: string;
  barCode: string;
  qty: number;
  price: number;
}

export const AddedItem: FC<addItemProps> = ({ itemName, barCode, qty, price }) => {
  const [total, setTotal] = useState<number>(price);
  console.log(barCode);
  return (
    <div className="grid grid-cols-5 p-5 items-center border-t border-b border-mallow-3">
      <div>
        <div className="flex flex-col">
          <span className="font-bold">{itemName}</span>
          <span>{barCode}</span>
        </div>
      </div>
      <div className="flex items-center gap-1">
        {qty}
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
