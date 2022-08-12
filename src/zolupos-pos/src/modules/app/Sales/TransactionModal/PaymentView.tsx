import {
  ArrowArcLeft,
  Command,
  DotsThree,
  Option,
  Trash,
} from "phosphor-react";
import React from "react";
import { Button } from "../../../../components/Button";
import { Menu, MenuItems } from "../../../../components/Menu";
import { PaymentTypes } from "../../../../enums/PaymentTypes";
import { IPayment } from "../../../../interface/IPayment";
import { useSaleStore } from "../../../../stores/SalesStore";
import { IOrderedProduct } from "../../POS/OrderedProduct";

export const PaymentView = () => {
  const saleStore = useSaleStore();
  const transaction = saleStore.selected;

  return (
    <div className="border rounded-lg border-mallow-5">
      <div className="grid grid-cols-5 p-5 bg-mallow-bg-1 rounded-t-lg border-b border-b-mallow-5">
        <span>Payment Type</span>
        <span>Amount</span>
        <span>Tendered</span>
        <span>Change</span>
        <span className="text-center">Options</span>
      </div>
      <div className="h-64 overflow-y-auto">
        {transaction?.payments.map((val, idx) => (
          <PaymentCard payment={val} idx={idx} key={idx} />
        ))}
      </div>
    </div>
  );
};

export const PaymentCard: React.FC<{ payment: IPayment; idx: number }> = ({
  payment,
  idx,
}) => {
  return (
    <div className="w-full grid grid-cols-5 p-5 border-b border-mallow-5 items-center">
      <span>{Object.keys(PaymentTypes)[payment.paymentType]}</span>
      <span>{payment.amount}</span>
      <span>{payment.tendered}</span>
      <span>{payment.change}</span>
      <span className="w-full flex justify-center">
        <Menu Look={() => <DotsThree size={24} />}>
          <MenuItems Icon={<ArrowArcLeft />}>Return</MenuItems>
          <MenuItems Icon={<Trash />}>Delete</MenuItems>
        </Menu>
      </span>
    </div>
  );
};
