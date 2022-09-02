import React from "react";
import { OrderView } from "./OrderView";
import { PaymentView } from "./PaymentView";

export const CategoryView: React.FC = () => {
  const [selected, setSelected] = React.useState<number>(0);
  return (
    <div className="flex flex-col h-full w-full">
      <div className="">
        <div className="flex w-full justify-evenly">
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
      </div>

    </div>
  );
};
