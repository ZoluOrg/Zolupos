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
import { useTransactionContext } from "../../../context/TransactionContext/TransactionContext";

interface addItemProps {
  keydx: number;
}

export const AddedItem: FC<addItemProps> = ({ keydx }) => {
  const { punched, ...transactionContext } = useTransactionContext();
  const onChangingInputQuantity = (event: FormEvent<HTMLInputElement>) => {
    transactionContext.qtyChanging(keydx, parseInt(event.currentTarget.value));
  };
  return (
    <div className="p-3 grid grid-cols-6 items-center text-sm">
      <div>
        <Input
          className="w-8/12"
          value={punched[keydx].quantity}
          onChange={onChangingInputQuantity}
          type="number"
          min={1}
        />
      </div>
      <div className="font-bold">{punched[keydx].productName}</div>
      <div>{punched[keydx].productUnitCost}</div>
      <div>
        {punched[keydx].withVat ? (
          <span className="px-3 py-1 bg-accent-1 bg-opacity-30 text-accent-3 rounded-lg">
            VAT
          </span>
        ) : (
          <span className="px-3 py-1 bg-green-300 bg-opacity-30 text-green-700 rounded-lg">
            None
          </span>
        )}
      </div>
      <div>{punched[keydx].bunchTotal}</div>
      <div className="w-full flex justify-center">
        <Button onClick={() => transactionContext.removeProduct(keydx)}>
          <X />
        </Button>
      </div>
    </div>
  );
};
