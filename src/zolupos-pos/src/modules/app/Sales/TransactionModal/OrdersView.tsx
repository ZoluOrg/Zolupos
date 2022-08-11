import { ArrowArcLeft, Command, DotsThree, Option, Trash } from "phosphor-react";
import React from "react";
import { Button } from "../../../../components/Button";
import { Menu, MenuItems } from "../../../../components/Menu";
import { useSaleStore } from "../../../../stores/SalesStore";
import { IOrderedProduct } from "../../POS/OrderedProduct";

export const OrdersView = () => {
  const saleStore = useSaleStore();
  const transaction = saleStore.selected;

  return (
    <div>
      <div className="grid grid-cols-6 p-5 border rounded-t-lg border-mallow-5 bg-mallow-bg-1">
        <span>Quantity</span>
        <span>Item</span>
        <span>Unit Price</span>
        <span>Tax</span>
        <span>Price</span>
        <span className="text-center">Options</span>
      </div>
      <div className="h-64 overflow-y-auto">
        {transaction?.orderedProducts.map((val, idx) => (
          <OrderCard order={val} idx={idx} key={idx} />
        ))}
      </div>
    </div>
  );
};

export const OrderCard: React.FC<{ order: IOrderedProduct; idx: number }> = ({
  order,
  idx,
}) => {
  return (
    <div className="w-full grid grid-cols-6 p-5 border-b border-mallow-5 items-center">
      <span>{order.quantity}</span>
      <span>{order.productName}</span>
      <span>{order.productUnitPrice}</span>
      <div>
        {order.withVat ? (
          <span className="px-3 py-1 bg-accent-1 bg-opacity-30 text-accent-3 rounded-lg">
            VAT
          </span>
        ) : (
          <span className="px-3 py-1 bg-green-300 bg-opacity-30 text-green-700 rounded-lg">
            None
          </span>
        )}
      </div>
      <span>{order.bunchTotal}</span>
      <span className="w-full flex justify-center">
        <Menu Look={() => <DotsThree size={24} />}>
          <MenuItems Icon={<ArrowArcLeft/>}>Return</MenuItems>
          <MenuItems Icon={<Trash/>}>Delete</MenuItems>
        </Menu>
      </span>
    </div>
  );
};
