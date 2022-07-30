import React from "react";
import { AddedItem } from "./OrderedProduct";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { ShoppingBagOpen, ShoppingCart, X } from "phosphor-react";
import { useTransactionStore } from "../../../stores/TransactionStore";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export const OrderList = () => {
  const transactionStore = useTransactionStore((state) => state.orders);
  const [parent] = useAutoAnimate<HTMLDivElement>();
  return (
    <div className="bg-mallow-1 border-2 border-mallow-3 shadow rounded-lg xl:w-9/12 lg:w-3/5 sm:w-6/12 flex flex-col overflow-hidden h-full">
      {transactionStore.length == 0 ? (
        <div className="h-full flex justify-center items-center gap-10">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex flex-col justify-center items-center gap-2">
              <span className="text-3xl font-bold text-black text-opacity-50">Empty Cart</span>
              <span className="text-xl font-semibold text-black text-opacity-50">Scan or search a product to add.</span>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <div className="bg-mallow-2 p-3 grid grid-cols-6 font-bold">
              <span>Quantity</span>
              <span>Item</span>
              <span>Unit Price</span>
              <span>Tax</span>
              <span>Price</span>
              <span className="w-full flex justify-center">Delete</span>
            </div>
          </div>
          <div className="h-full overflow-y-auto">
            {transactionStore.map((_, idx) => (
              <AddedItem key={idx} keydx={idx} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
