import { Percent } from "phosphor-react";
import React, { FormEvent } from "react";
import { toast } from "react-toastify";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { useTransactionStore } from "../../../stores/TransactionStore";

export const Sub = () => {
  const transaction = useTransactionStore();
  const onDiscountChanging = (event: FormEvent<HTMLInputElement>) => {
    if (!isNaN(parseInt(event.currentTarget.value))) {
      transaction.setDiscount(parseFloat(event.currentTarget.value));
    } else {
      transaction.setDiscount(0);
    }
  };

  const onProcessClick = () => {
    // Checks
    if (transaction.orders.length == 0) toast.error("Add items");
    else if (transaction.discount > 99) toast.error("Discount to high");
    else transaction.setShowPaymentModal(true);
  };
  return (
    <div className="rounded-lg p-5 flex-grow flex flex-col justify-between bg-mallow-2 bg-opacity-20 border border-mallow-5 shadow">
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
          onClick={() => onProcessClick()}
        >
          Purchase
        </Button>
      </div>
    </div>
  );
};
