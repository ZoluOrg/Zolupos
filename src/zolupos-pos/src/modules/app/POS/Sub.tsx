import { random } from "lodash";
import { Percent } from "phosphor-react";
import { FormEvent } from "react";
import toast from "react-hot-toast";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { useTransactionStore } from "../../../stores/TransactionStore";

export const Sub = () => {
  const transaction = useTransactionStore();

  const discountChange = (event: FormEvent<HTMLInputElement>) => {
    if (isNaN(parseInt(event.currentTarget.value))) {
      toast.error("Discount must be a number");
    }
    transaction.setDiscount(parseFloat(event.currentTarget.value));
  };

  const processClick = () => {
    if (transaction.orders.length == 0)
      toast("Shopping Cart Empty", { icon: "🛒" });
    else if (transaction.discount > 99) toast.error("Discount to high");
    else transaction.setShowPaymentModal(true);
  };
  return (
    <div className="rounded-lg p-5 flex-grow flex flex-col justify-between bg-mallow-bg-1 border border-mallow-5 shadow">
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
            onChange={discountChange}
          />
        </div>
      </div>
      <div>
        <Button
          className="w-full bg-green-700 hover:bg-green-800"
          onClick={processClick}
        >
          Purchase
        </Button>
      </div>
    </div>
  );
};
