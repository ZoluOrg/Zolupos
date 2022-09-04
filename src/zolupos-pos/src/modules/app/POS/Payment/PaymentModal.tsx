import { AxiosError } from "axios";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bag,
  BagSimple,
  Money,
  Plus,
  PlusCircle,
  ShoppingBag,
  ShoppingCart,
  X,
} from "phosphor-react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { Button } from "../../../../components/Button";
import { Modal } from "../../../../components/Modal";
import { PaymentTypes } from "../../../../enums/PaymentTypes";
import { TransactionStatus } from "../../../../enums/TransactionStatus";
import { useDevice } from "../../../../hooks/useDevice";
import { IPayment } from "../../../../interface/IPayment";
import {
  IAddTransaction,
  ITransaction,
} from "../../../../interface/ITransaction";
import { IServerError } from "../../../../interface/ServerError";
import { addNewTransaction } from "../../../../services/TransactionsService";
import { useTransactionStore } from "../../../../stores/TransactionStore";
import { PaymentCard } from "./PaymentCard";

export const PaymentModal = () => {
  const transactionStore = useTransactionStore();
  const device = useDevice();
  const addPayment = () => {
    const newPayment: IPayment = {
      paymentType: 0,
      tendered: 0,
      change: 0,
      amount: 0,
    };
    transactionStore.addPayment(newPayment);
  };

  useEffect(() => {
    transactionStore.updatePaymentInfos();
  }, [transactionStore.payments]);

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.ctrlKey && event.key == "q") {
        transactionStore.setShowPaymentModal(true);
      } else if (event.key == "Escape") {
        transactionStore.setShowPaymentModal(false);
      }
    });
  }, []);

  const { mutateAsync, data, status } = useMutation(addNewTransaction, {
    onSuccess: () => {
      toast.success("Transaction processed successfully");
    },
    onError: (error: AxiosError<IServerError>) => {
      toast.error(error.response?.data.ExceptionMessage!);
    },
  });

  const processTransaction = async (tansactionStatus: number) => {
    if (transactionStore.overAllPayment < transactionStore.total)
      toast.error("balance the payment");
    else {
      console.log(transactionStore.overAllPayment < transactionStore.total);
      let transaction: IAddTransaction = {
        // Real data
        status: tansactionStatus,
        customerId: transactionStore.assignedCustomer?.customerId || null,
        vat: transactionStore.vat,
        total: transactionStore.total,
        subTotal: transactionStore.subTotal,
        discount: transactionStore.discount,
        deviceId: device.data?.deviceId!,
        orderedProducts: transactionStore.orders,
        payments: transactionStore.payments,
      };
      console.log(transaction);
      await toast
        .promise(mutateAsync(transaction), {
          loading: "Processing transaction...",
          success: "Transaction processed successfully",
          error: "Error processing transaction",
        })
        .then(() => transactionStore.transactionFinish());
    }
  };

  return (
    <div className="payment-modal">
      <Modal
        isOpen={transactionStore.showPaymentModal}
        className=" p-[25px] w-[60%] bg-mallow-1 rounded-lg z-50 flex flex-col gap-2"
      >
        <div className="w-full flex items-center justify-between">
          <span className="text-2xl font-bold">Process Transaction</span>
          <div>
            <Button
              disabled={status == "loading"}
              onClick={() => {
                transactionStore.setShowPaymentModal(false);
              }}
            >
              Close
            </Button>
          </div>
        </div>
        <div className="flex w-full justify-between">
          <Button buttonColor="coal" onClick={addPayment}>
            <div className="flex gap-2 items-center justify-center">
              <span>Add Payment</span>
              <PlusCircle color="white" />
            </div>
          </Button>

          <div className="flex space-x-2">
            <Button
              buttonColor="mallow"
              onClick={async () => {
                await processTransaction(1);
                transactionStore.setShowPaymentModal(false);
              }}
            >
              <div className="flex gap-2 items-center justify-center">
                <span>Add Order</span>
                <ShoppingCart />
              </div>
            </Button>
            <Button
              onClick={async () => {
                await processTransaction(0);
                transactionStore.setShowPaymentModal(false);
              }}
            >
              <div className="flex gap-2 items-center justify-center">
                <span>Complete</span>
                <BagSimple />
              </div>
            </Button>
          </div>
        </div>
        <div className="flex gap-2 w-auto">
          <div className="flex flex-col gap-2">
            <span>Total: {transactionStore.total}</span>
            <span>Balance: {transactionStore.balance}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span>Payment: {transactionStore.overAllPayment}</span>
            <span>Change: {transactionStore.change}</span>
          </div>
        </div>
        <div className="grid grid-cols-3 w-full p-3 bg-mallow-bg-1 border border-mallow-5 rounded-t-lg">
          <span>Payment Type</span>
          <span>Amount</span>
          <span className="text-center">Remove</span>
        </div>
        <div className="flex flex-col gap-3">
          {transactionStore.payments.map((_, idx) => (
            <PaymentCard key={idx} paymentIndex={idx} />
          ))}
        </div>
      </Modal>
    </div>
  );
};
