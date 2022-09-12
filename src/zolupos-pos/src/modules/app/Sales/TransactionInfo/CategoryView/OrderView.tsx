import { ArrowArcLeft, DotsThree, TrashSimple } from "phosphor-react";
import React from "react";
import { Menu, MenuItems } from "../../../../../components/Menu";
import { ITransaction } from "../../../../../interface/ITransaction";
import { useSaleStore } from "../../../../../stores/SalesStore";
import { IOrderedProduct } from "../../../POS/OrderedProduct";

export const OrderView = () => {
  const saleStore = useSaleStore();
  return (
    <>
      <div className="grid grid-cols-5 text-lg p-2 h-[47px] font-bold bg-mallow-2 border rounded-t-lg border-mallow-5">
        <span>Quantity</span>
        <span>Item</span>
        <span>Unit Cost</span>
        <span>With Vat</span>
        <span>Price</span>
      </div>
      <div className="w-full overflow-y-auto h-[calc(100%-47px)] border-b border-x border-mallow-5 rounded-b-lg p-2 shadow">
        {saleStore.selected?.orderedProducts.map((val, idx) => (
          <OrderCard idx={idx} order={val} />
        ))}
      </div>
    </>
  );
};

const OrderCard: React.FC<{ idx: number; order: IOrderedProduct }> = ({
  idx,
  order,
}) => {
  return (
    <div className="grid grid-cols-5 py-2 items-center">
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
    </div>
  );
};
