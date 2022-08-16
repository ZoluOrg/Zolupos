import { X } from "phosphor-react";
import React, { FC, FormEvent } from "react";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { ISearchResponse } from "../../../interface/ISearchResponse";
import { useTransactionStore } from "../../../stores/TransactionStore";

export interface IOrderedProduct {
  productId: number;
  productName: string;
  productUnitPrice: number;
  withVat: boolean;
  quantity: number;
  bunchTotal: number;
}

export const AddedItem: FC<{
  keyIndex: number;
}> = ({ keyIndex }) => {
  const transactionStore = useTransactionStore();

  const onChangingInputQuantity = (event: FormEvent<HTMLInputElement>) => {
    transactionStore.qtyChanging(keyIndex, parseInt(event.currentTarget.value));
    transactionStore.calculateBunchPrice(keyIndex);
  };

  return (
    <div className="p-3 grid grid-cols-6 items-center text-sm">
      <div>
        <Input
          className="w-8/12"
          value={transactionStore.orders[keyIndex].quantity}
          onChange={onChangingInputQuantity}
          type="number"
          min={1}
        />
      </div>
      <div className="font-bold">
        {transactionStore.orders[keyIndex].productName}
      </div>
      <div>{transactionStore.orders[keyIndex].productUnitPrice}</div>
      <div>
        {transactionStore.orders[keyIndex].withVat ? (
          <span className="px-3 py-1 bg-accent-1 bg-opacity-30 text-accent-3 rounded-lg">
            VAT
          </span>
        ) : (
          <span className="px-3 py-1 bg-green-300 bg-opacity-30 text-green-700 rounded-lg">
            None
          </span>
        )}
      </div>
      <div>{transactionStore.orders[keyIndex].bunchTotal}</div>
      <div className="w-full flex justify-center">
        <Button onClick={() => transactionStore.removeOrder(keyIndex)}>
          <X />
        </Button>
      </div>
    </div>
  );
};
