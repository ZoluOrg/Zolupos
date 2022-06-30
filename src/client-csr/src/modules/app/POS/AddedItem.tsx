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
  const onChangingInputDiscount = (event: FormEvent<HTMLInputElement>) => {
    transactionContext.discChanging(keydx, parseInt(event.currentTarget.value));
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
      <div>
        <Input
          value={punched[keydx].quantity}
          onChange={onChangingInputQuantity}
          type="number"
          min={1}
          className="w-8/12 form-input"
        />
      </div>
      <div>
        <Input
          value={punched[keydx].discount}
          onChange={onChangingInputDiscount}
          type="number"
          min={0}
          max={100}
          className="w-8/12 form-input"
        />
      </div>
      <div>{punched[keydx].productPrice}</div>
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-1 items-center w-full overflow-x-auto">
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
