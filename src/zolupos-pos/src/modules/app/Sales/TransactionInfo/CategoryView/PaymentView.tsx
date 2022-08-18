import { ArrowArcLeft, DotsThree, TrashSimple } from "phosphor-react";
import React from "react";
import { object } from "zod";
import { Menu, MenuItems } from "../../../../../components/Menu";
import { PaymentTypes } from "../../../../../enums/PaymentTypes";
import { IPayment } from "../../../../../interface/IPayment";
import { ITransaction } from "../../../../../interface/ITransaction";
import { useSaleStore } from "../../../../../stores/SalesStore";
import { IOrderedProduct } from "../../../POS/OrderedProduct";

export const PaymentView = () => {
  const saleStore = useSaleStore();
  return (
    <>
      <div className="grid grid-cols-5 text-lg p-2 font-bold bg-mallow-2 rounded-t-lg border border-x border-mallow-5">
        <span>Payment Type</span>
        <span>Tendered</span>
        <span>Change</span>
        <span>Amount</span>
        <span>Actions</span>
      </div>
      <div className="w-full overflow-y-auto h-[calc(100%-90px)] border-x border-b border-mallow-5 rounded-b-lg p-2 shadow">
        {saleStore.selected?.payments.map((val, idx) => (
          <PaymentCard idx={idx} payment={val} />
        ))}
      </div>
    </>
  );
};

const PaymentCard: React.FC<{ idx: number; payment: IPayment }> = ({
  idx,
  payment,
}) => {
  console.log(typeof payment.paymentType);
  return (
    <div className="grid grid-cols-5 py-2 items-center">
      <span>{Object.values(PaymentTypes)[parseInt(payment.paymentType)]}</span>
      <span>{payment.tendered}</span>
      <span>{payment.change}</span>
      <span>{payment.amount}</span>
      <div>
        <Menu Look={() => <DotsThree size={24} />}>
          <MenuItems Icon={<TrashSimple size={24} />}>Delete</MenuItems>
        </Menu>
      </div>
    </div>
  );
};
