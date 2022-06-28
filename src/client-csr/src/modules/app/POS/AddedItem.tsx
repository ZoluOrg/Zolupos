import {
  Barcode,
  CurrencyDollar,
  Minus,
  MinusCircle,
  Plus,
  PlusCircle,
  Trash,
  TrashSimple,
} from "phosphor-react";
import React, { FC, FormEvent, useState } from "react";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { useTransactionContext } from "../../../context/TransactionContext";

interface addItemProps {
  keydx: number;
}

export const AddedItem: FC<addItemProps> = ({
  keydx,
}) => {
  const {punched, ...transactionContext} = useTransactionContext();
  const onChangingInputQuantity = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    transactionContext.qtyChanging(
      keydx,
      parseInt((event.target as HTMLInputElement).value)
    );
  };
  return (
    <div
      className="grid grid-cols-5 p-5 items-center border-t border-b border-mallow-3"
      key={keydx}
    >
      <div>
        <div className="flex flex-col">
          <span className="font-bold">{punched[keydx].productName}</span>
          <span>{punched[keydx].productBarcode}</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div>
          <Input
            value={punched[keydx].quantity}
            onChange={onChangingInputQuantity}
            type="number"
            min={1}
            className=" w-32 form-input"
          />
        </div>
      </div>
      <div>10%</div>
      <div>{punched[keydx].productPrice}</div>
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-1 items-center">
          <CurrencyDollar />
          {punched[keydx].bunchPrice}
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
