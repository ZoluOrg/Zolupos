import React from "react";
import { OrderView } from "./OrderView";

export const CategoryView: React.FC = () => {
  const [selected, setSelected] = React.useState<number>(0);
  return (
    <div className="h-full w-full flex-shrink border border-mallow-5 rounded-lg p-3 bg-mallow-bg-1 shadow">
      <div className="flex gap-5 text-lg border-b border-mallow-5 py-2">
        <span
          className={`${
            selected == 0 && "text-accent-1 font-bold "
          } cursor-pointer select-none`}
          onClick={() => setSelected(0)}
        >
          ORDERS
        </span>
        <span
          className={`${
            selected == 1 && "text-accent-1 font-bold "
          } cursor-pointer select-none`}
          onClick={() => setSelected(1)}
        >
          PAYMENTS
        </span>
      </div>
      <OrderView />
    </div>
  );
};
