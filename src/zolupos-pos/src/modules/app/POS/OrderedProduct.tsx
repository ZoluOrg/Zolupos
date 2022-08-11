import {
  X,
} from "phosphor-react";
import React, {
  FC,
  FormEvent,
} from "react";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { ISearchResponse } from "../../../interface/ISearchResponse";
import { useTransactionStore } from "../../../stores/TransactionStore";

interface addItemProps {
  keydx: number;
}

export interface IOrderedProduct {
  productName: string;
  productUnitCost: number;
  withVat: boolean;
  quantity: number;
  bunchTotal: number;
}

export const AddedItem: FC<addItemProps> = ({ keydx }) => {
  const transactionStore = useTransactionStore();
  const onChangingInputQuantity = (event: FormEvent<HTMLInputElement>) => {
    transactionStore.qtyChanging(keydx, parseInt(event.currentTarget.value));
    transactionStore.calculateBunchPrice(keydx);
  };
  return (
    <div className="p-3 grid grid-cols-6 items-center text-sm">
      <div>
        <Input
          className="w-8/12"
          value={transactionStore.orders[keydx].quantity}
          onChange={onChangingInputQuantity}
          type="number"
          min={1}
        />
      </div>
      <div className="font-bold">{transactionStore.orders[keydx].productName}</div>
      <div>{transactionStore.orders[keydx].productUnitCost}</div>
      <div>
        {transactionStore.orders[keydx].withVat ? (
          <span className="px-3 py-1 bg-accent-1 bg-opacity-30 text-accent-3 rounded-lg">
            VAT
          </span>
        ) : (
          <span className="px-3 py-1 bg-green-300 bg-opacity-30 text-green-700 rounded-lg">
            None
          </span>
        )}
      </div>
      <div>{transactionStore.orders[keydx].bunchTotal}</div>
      <div className="w-full flex justify-center">
        <Button onClick={() => transactionStore.removeOrder(keydx)}>
          <X />
        </Button>
      </div>
    </div>
  );
};
