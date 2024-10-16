import { AddedItem } from "./OrderedProduct";
import { useTransactionStore } from "../../../stores/TransactionStore";

export const OrderList = () => {
  const transactionStore = useTransactionStore((state) => state.orders);
  return (
    <div className="bg-mallow-bg-1 border border-mallow-5 shadow rounded-lg xl:w-9/12 lg:w-3/5 sm:w-6/12 flex flex-col overflow-hidden h-full">
      {transactionStore.length == 0 ? (
        <div className="h-full flex justify-center items-center gap-10">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex flex-col justify-center items-center gap-2">
              <span className="text-3xl font-bold text-black text-opacity-50">
                Empty Cart
              </span>
              <span className="text-xl font-semibold text-black text-opacity-50">
                Use alt + a to open product search
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <div className="bg-mallow-2 border-b border-mallow-5 p-3 grid grid-cols-6 font-bold">
              <span>Quantity</span>
              <span>Item</span>
              <span>Unit Price</span>
              <span>Tax</span>
              <span>Price</span>
              <span className="w-full flex justify-center">Delete</span>
            </div>
          </div>
          <div className="h-full overflow-y-auto">
            {transactionStore.map((_, index) => (
              <AddedItem key={index} keyIndex={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
