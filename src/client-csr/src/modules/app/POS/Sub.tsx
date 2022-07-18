import { Percent } from "phosphor-react";
import React, { FormEvent } from "react";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { useTransactionStore } from "../../../stores/TransactionStore";

export const Sub = () => {
  const transaction = useTransactionStore();
  const onDiscountChanging = (event: FormEvent<HTMLInputElement>) => {
    transaction.setDiscount(parseInt(event.currentTarget.value));
  };
  return (
    <div className="rounded-lg bg-mallow-2 p-5 flex-grow flex flex-col justify-between bg-opacity-75 border border-mallow-2 shadow">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <div className="titles gap-2 flex flex-col">
            <div className="font-bold text-3xl">Total</div>
            <div className="font-bold">Sub Total</div>
            <div className="font-bold">Quantity Ordered</div>
            <div className="font-bold">Vat</div>
          </div>
          <div className="values gap-2 text-right flex flex-col overflow-hidden">
            <div className="font-bold text-3xl">{transaction.total}</div>
            <div className="font-bold">{transaction.subTotal}</div>
            <div className="font-bold">{transaction.quantity}</div>
            <div className="font-bold">{transaction.vat}</div>
          </div>
        </div>
        <div className="flex items-center justify-between font-semibold">
          <div className="flex gap-2 items-center">
            <span>Discount</span>
            <div>
              <Percent />
            </div>
          </div>
          <Input
            className="w-4/12 "
            min={0}
            max={100}
            type="number"
            value={transaction.discount}
            onChange={onDiscountChanging}
          />
        </div>
      </div>
      <div>
        <Button
          className="w-full bg-green-700 hover:bg-green-800"
          onClick={() => transaction.setShowPaymentModal(true)}
        >
          Purchase
        </Button>
      </div>
    </div>
  );
};
