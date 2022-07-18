import { X } from "phosphor-react";
import React, { useEffect } from "react";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { PaymentTypes } from "../../../../enums/PaymentTypes";
import { useTransactionStore } from "../../../../stores/TransactionStore";

export const PaymentCard: React.FC<{
  paymentIndex: number;
}> = ({ paymentIndex }) => {
  const transactionStore = useTransactionStore();

  const paymentTypeChange = (ev: React.FormEvent<HTMLSelectElement>) => {
    console.log(parseInt(ev.currentTarget.value));
    transactionStore.setPaymentMethod(
      paymentIndex,
      parseInt(ev.currentTarget.value)
    );
  };

  const amountChange = (ev: React.FormEvent<HTMLInputElement>) =>
  transactionStore.setAmount(paymentIndex, parseInt(ev.currentTarget.value));

  const tenderChange = (ev: React.FormEvent<HTMLInputElement>) =>
  transactionStore.setTender(paymentIndex, parseInt(ev.currentTarget.value));

  return (
    <div className="payment grid grid-cols-3 w-full border rounded-lg p-3 bg-mallow-1 shadow hover:shadow-lg hover:scale-[1.005] transition ">
      <div className="flex flex-col gap-2">
        <div>
          <select className="rounded-lg w-8/12" onChange={paymentTypeChange}>
            {Object.keys(PaymentTypes).map((adr, key) => (
              <option key={key} value={key}>
                {adr}
              </option>
            ))}
          </select>
        </div>
        {transactionStore.payments[paymentIndex].paymentType ==
          PaymentTypes.Cash && (
          <div>
            <div className="flex flex-col gap-1">
              <span>Tendered: </span>
              <Input
                className="w w-6/12"
                value={transactionStore.payments[paymentIndex].tendered}
                onChange={tenderChange}
                type="number"
                min={1}
              />
            </div>
            <span>Change: {transactionStore.payments[paymentIndex].change}</span>
          </div>
        )}
      </div>
      <div>
        <Input
          className="w-8/12"
          value={transactionStore.payments[paymentIndex].amount}
          onChange={amountChange}
          type="number"
          min={1}
        />
      </div>
      <div className="flex justify-center items-center">
        <div>
          <Button
            onClick={() => {
              transactionStore.removePayment(paymentIndex);
            }}
          >
            <X />
          </Button>
        </div>
      </div>
    </div>
  );
};
