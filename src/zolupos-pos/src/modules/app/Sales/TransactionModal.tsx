import dayjs from "dayjs";
import React from "react";
import { Button } from "../../../components/Button";
import { Modal } from "../../../components/Modal";
import { useSaleStore } from "../../../stores/SalesStore";

export const TransactionModal = () => {
  const saleStore = useSaleStore();
  const transaction = saleStore.selected;
  const [selected, setSelected] = React.useState<number>(0);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  return (
    <Modal isOpen={saleStore.shouldShowModal} className="p-[25px] w-5/12">
      <div className="w-full flex items-center justify-between">
        <span className="text-2xl font-bold">Add Product</span>
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
              <span>{transaction?.reference}</span>
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
          <div>
            <ul className="flex gap-1">
              <li className="p-2 bg-mallow-bg-1 rounded-lg border border-mallow-5 w-24 text-center ring ring-red-600">
                Payments
              </li>
              <li className="p-2 bg-mallow-bg-1 rounded-lg border border-mallow-5 w-24 text-center">
                Orders
              </li>
            </ul>
          </div>
          {selected == 0 ? (
            <p>{JSON.stringify(transaction?.orderedProducts)}</p>
          ) : (
            <p></p>
          )}
        </div>
      )}
    </Modal>
  );
};
