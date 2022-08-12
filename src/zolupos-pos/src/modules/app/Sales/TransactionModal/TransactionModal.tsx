import dayjs from "dayjs";
import { LinkBreak } from "phosphor-react";
import React from "react";
import { Button } from "../../../../components/Button";
import { Modal } from "../../../../components/Modal";
import { useSaleStore } from "../../../../stores/SalesStore";
import { OrdersView } from "./OrdersView";
import { PaymentView } from "./PaymentView";

export const TransactionModal = () => {
  const saleStore = useSaleStore();
  const transaction = saleStore.selected;
  const [selected, setSelected] = React.useState<number>(0);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  return (
    <Modal
      isOpen={saleStore.shouldShowModal}
      className="p-[25px] w-6/12 h-fulll"
    >
      <div className="w-full flex items-center justify-between">
        <span className="text-2xl font-bold">
          Transaction: {transaction?.transactionId}
        </span>
        <div>
          <Button onClick={() => saleStore.setShouldShowModal(false)}>
            Close
          </Button>
        </div>
      </div>
      {!isLoading && (
        <div>
          <div className="info text-lg">
            <div className="flex gap-2">
              <span className="font-bold">Transaction ID:</span>
              <span>{transaction?.transactionId}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold">Reference GUID:</span>
              <span className="font-mono">{transaction?.reference}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold">Transacted at:</span>
              <span>
                {dayjs(transaction?.transactedAt).format(
                  "YYYY-MM-DD-dddd H:m:s A"
                )}
              </span>
            </div>
          </div>
          <div className="mt-4 w-full border border-mallow-5 bg-mallow-bg-1 rounded-lg  ">
            <div className="show-selections">
              <ul className="flex gap-3 uppercase text-sm justify-center">
                <li
                  className={`p-2 ${
                    selected == 0 && "text-accent-1 font-bold"
                  } transition duration-100 cursor-pointer select-none`}
                  onClick={() => setSelected(0)}
                >
                  <span>Orders</span>
                </li>
                <li
                  className={`p-2 ${
                    selected == 1 && "text-accent-1 font-bold"
                  } transition duration-100 cursor-pointer select-none`}
                  onClick={() => setSelected(1)}
                >
                  <span>Payments</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-4 overflow-y-auto">
            {selected == 0 ? <OrdersView /> : <PaymentView />}
          </div>
        </div>
      )}
    </Modal>
  );
};
