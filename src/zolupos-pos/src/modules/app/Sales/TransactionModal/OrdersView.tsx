import React from "react";
import { Button } from "../../../../components/Button";
import { useSaleStore } from "../../../../stores/SalesStore";
import { IOrderedProduct } from "../../POS/OrderedProduct";

export const OrdersView = () => {
  const saleStore = useSaleStore();
  const transaction = saleStore.selected;

  return (
    <div>
      <div className="grid grid-cols-6">
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
    <div className="w-full grid grid-cols-6">
      <span>{order.quantity}</span>
      <span>{order.productName}</span>
      <span>{order.productUnitPrice}</span>
      <span>{order.withVat}</span>
      <span>{order.bunchTotal}</span>
      <span><Button>test</Button></span>
    </div>
  );
};
