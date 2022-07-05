import {
  Barcode,
  CurrencyDollar,
  Minus,
  MinusCircle,
  Plus,
  PlusCircle,
  Trash,
  TrashSimple,
  X,
} from "phosphor-react";
import React, { FC, FormEvent, HTMLInputTypeAttribute, useState } from "react";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { useTransactionContext } from "../../../context/TransactionContext";

interface addItemProps {
  keydx: number;
}

export const AddedItem: FC<addItemProps> = ({ keydx }) => {
  const { punched, ...transactionContext } = useTransactionContext();
  const onChangingInputQuantity = (event: FormEvent<HTMLInputElement>) => {
    transactionContext.qtyChanging(keydx, parseInt(event.currentTarget.value));
  };
  return (
    <div className="p-3 grid grid-cols-6 items-center gap-2 text-sm">
      <div>
        <Input
          className="w-8/12"
          value={punched[keydx].quantity}
          onChange={onChangingInputQuantity}
          type="number"
          min={1}
        />
      </div>
      <div>{punched[keydx].productName}</div>
      <div>{punched[keydx].productPrice}</div>
      <div>
        <span className="px-3 py-2 bg-accent-1 bg-opacity-30 text-accent-3 rounded-full">
          VAT
        </span>
      </div>
      <div>{punched[keydx].bunchTotal}</div>
      <div>
        <Button buttonSpacing="xs">
          <X />
        </Button>
      </div>
    </div>
  );
};
