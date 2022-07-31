import { AxiosError } from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { BagSimple, Money, Plus, PlusCircle, X } from "phosphor-react";
import { useEffect } from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { Button } from "../../../../components/Button";
import { Modal } from "../../../../components/Modal";
import { PaymentTypes } from "../../../../enums/PaymentTypes";
import { IPayment } from "../../../../interface/IPayment";
import { ITransaction } from "../../../../interface/ITransaction";
import { IServerError } from "../../../../interface/ServerError";
import { addNewTransaction } from "../../../../services/TransactionsService";
import { useTransactionStore } from "../../../../stores/TransactionStore";
import { PaymentCard } from "./PaymentCard";

export const PaymentModal = () => {
  const transactionStore = useTransactionStore();
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
      if (event.ctrlKey && event.key == "q") transactionStore.setShowPaymentModal(true);
      else if (event.key == "Escape") {
        transactionStore.setShowPaymentModal(false);
      }
    });
  }, []);

  const { mutateAsync, data, isLoading } = useMutation(addNewTransaction, {
    onSuccess: () => {
      toast.info("Transaction processed successfully");
    },
    onError: (error: AxiosError<IServerError>) => {
      toast.error(error.response?.data.ExceptionMessage);
    },
  });

  const processTransaction = async () => {
    let transaction: ITransaction = {
      customerId: transactionStore.assignedCustomer?.customerId || null,
      vat: transactionStore.vat,
      total: transactionStore.total,
      subTotal: transactionStore.subTotal,
      discount: transactionStore.discount,
      orderedProducts: transactionStore.orders,
      payments: transactionStore.payments,
    };
    await mutateAsync(transaction).then(() => console.log("Transaction Added"));
    transactionStore.transactionFinish();
  };

  return (
    <div className="payment-modal">
      <Modal
        isOpen={transactionStore.showPaymentModal}
        className=" p-[25px] w-[60%] bg-mallow-1 shadow border-2 border-mallow-3 rounded-lg z-50 flex flex-col gap-2"
      >
        <div className="w-full flex items-center justify-between">
          <span className="text-2xl font-bold">Process Transaction</span>
          <div>
            <Button
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
              <span>Add payment </span>
              <PlusCircle color="white" />
            </div>
          </Button>
          <Button
            onClick={async () => {
              await processTransaction();
              transactionStore.setShowPaymentModal(false);
            }}
          >
            <div className="flex gap-2 items-center justify-center">
              <span>Process</span>
              <BagSimple />
            </div>
          </Button>
        </div>
        <div className="flex gap-2 w-auto justify-evenl;y">
          <div className="flex flex-col gap-2">
            <span>Total: {transactionStore.total}</span>
            <span>Balance: {transactionStore.balance}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span>Payment: {transactionStore.overAllPayment}</span>
            <span>Change: {transactionStore.change}</span>
          </div>
        </div>
        <div className="grid grid-cols-3 w-full p-3 border rounded-t-lg">
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
