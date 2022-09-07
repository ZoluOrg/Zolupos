import React, { useEffect, useRef } from "react";
import { usePrintService } from "../../../../../stores/PrintService";
import { OrderView } from "./OrderView";
import { PaymentView } from "./PaymentView";

export const CategoryView: React.FC = () => {
  const [selected, setSelected] = React.useState<number>(0);
  const printer = usePrintService();
  const printRef = useRef(null);

  useEffect(() => {
    printer.setToPrint(printRef);
  }, [printRef]);

  return (
    <div className="w-full h-full flex flex-col space-y-2" ref={printRef}>
      <div className="flex space-x-2 w-auto border border-mallow-5 rounded-lg p-1 text-center shadow">
        <span
          className={`${
            selected == 0 && "bg-coal-1 font-bold text-white rounded-lg"
          } cursor-pointer select-none rounded-lg px-10 py-2 w-full hover:ring-1 hover:ring-coal-1 transition`}
          onClick={() => setSelected(0)}
        >
          Orders
        </span>
        <span
          className={`${
            selected == 1 && "bg-coal-1 font-bold text-white "
          } cursor-pointer select-none rounded-lg px-10 py-2 w-full hover:ring-1 hover:ring-coal-1 transition`}
          onClick={() => setSelected(1)}
        >
          Payments
        </span>
      </div>
      <div className="h-full">
        {selected == 0 ? <OrderView /> : <PaymentView />}
      </div>
    </div>
  );
};
