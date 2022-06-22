import {
  Barcode,
  CurrencyDollar,
  Minus,
  Plus,
  Trash,
  TrashSimple,
} from "phosphor-react";
import React, { FC, useState } from "react";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { useTransactionContext } from "../../../context/TransactionContext";

interface addItemProps {
  itemName: string;
  barCode: string;
  qty: number;
  price: number;
  keydx: number;
}

export const AddedItem: FC<addItemProps> = ({
  itemName,
  barCode,
  qty,
  price,
  keydx,
}) => {
  const [total, setTotal] = useState<number>(price);
  const transactionContext = useTransactionContext();
  return (
    <div
      className="grid grid-cols-5 p-5 items-center border-t border-b border-mallow-3"
      key={keydx}
    >
      <div>
        <div className="flex flex-col">
          <span className="font-bold">{itemName}</span>
          <span>{barCode}</span>
        </div>
      </div>
      <div className="flex items-center gap-1">{qty}</div>
      <div>{price}</div>
      <div>{total}</div>
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-1 items-center">
          <CurrencyDollar />
          {total}
        </div>
        <div>
          <Button
            buttonColor="mallow"
            onClick={() => transactionContext.removeProduct(keydx)}
          >
            <TrashSimple />
          </Button>
        </div>
      </div>
    </div>
  );
};
