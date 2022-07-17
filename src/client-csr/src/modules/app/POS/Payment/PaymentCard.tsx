import { X } from "phosphor-react";
import React, { useEffect } from "react";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { PaymentTypes } from "../../../../enums/PaymentTypes";
import { usePaymentStore } from "../../../../stores/PaymentStore";

export const PaymentCard: React.FC<{
  paymentIndex: number;
}> = ({ paymentIndex }) => {
  const paymentStore = usePaymentStore();
  const testChange = (ev: React.FormEvent<HTMLSelectElement>) => {
    console.log(parseInt(ev.currentTarget.value));
    paymentStore.setPaymentMethod(
      paymentIndex,
      parseInt(ev.currentTarget.value)
    );
  };

  return (
    <div className="payment grid grid-cols-3 w-full border rounded-lg p-3 bg-mallow-1 shadow hover:shadow-lg hover:scale-[1.001] transition ">
      <div className="flex flex-col gap-2">
        <div>
          <select className="rounded-lg w-8/12" onChange={testChange}>
            {Object.keys(PaymentTypes).map((adr, key) => (
              <option key={key} value={key}>
                {adr}
              </option>
            ))}
          </select>
        </div>
        {paymentStore.payments[paymentIndex].paymentType ==
          PaymentTypes.Cash && (
          <div>
            <div className="flex flex-col gap-1">
              <span>Tendered:</span>
              <Input className="w w-6/12" />
            </div>
            <span>Change: </span>
          </div>
        )}
      </div>
      <div>
        <Input className="w-8/12" />
      </div>
      <div className="flex justify-center items-center">
        <div>
          <Button
            onClick={() => {
              paymentStore.removePayment(paymentIndex);
            }}
          >
            <X />
          </Button>
        </div>
      </div>
    </div>
  );
};
