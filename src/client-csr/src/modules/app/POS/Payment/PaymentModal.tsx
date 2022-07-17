import { AnimatePresence, motion } from "framer-motion";
import { Plus, PlusCircle, X } from "phosphor-react";
import React from "react";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { PaymentTypes } from "../../../../enums/PaymentTypes";
import { IPayment } from "../../../../interface/IPayment";
import { usePaymentStore } from "../../../../stores/PaymentStore";
import { PaymentCard } from "./PaymentCard";

export const PaymentModal = () => {
  const paymentStore = usePaymentStore();
  const addPayment = () => {
    const newPayment: IPayment = {
      paymentType: PaymentTypes.Cash,
      tendered: 0,
      change: 0,
      amount: 0,
    };
    paymentStore.addPayment(newPayment);
  }
  return (
    <div className="payment-modal">
      <AnimatePresence>
        {true && (
          <motion.div
            className="absolute h-full w-full flex justify-center items-center bg-mallow-1 bg-opacity-5"
            initial={{ backdropFilter: "blur(0px)" }}
            animate={{ backdropFilter: "blur(3px)" }}
            exit={{ backdropFilter: "blur(0px)" }}
          >
            <motion.div
              className="p-[25px] w-[60%] bg-mallow-1 shadow border-2 border-mallow-3 rounded-lg z-50 flex flex-col gap-2"
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
            >
              <div className="w-full flex items-center justify-between">
                <span className="text-2xl font-bold">Process Transaction</span>
                <div>
                  <Button onClick={() => {}}>Close</Button>
                </div>
              </div>
              <div>
                <Button buttonColor="coal" onClick={addPayment}>
                  <div className="flex gap-2 items-center justify-center">
                    <span>Add payment </span>
                    <PlusCircle color="white"/>
                  </div>
                </Button>
              </div>
              <div className="grid grid-cols-3 w-full p-3 border rounded-t-lg">
                <span>Payment Type</span>
                <span>Amount</span>
                <span className="text-center">Remove</span>
              </div>
              <div className="flex flex-col gap-3">
                {paymentStore.payments.map((_, idx) => (
                  <PaymentCard key={idx} paymentIndex={idx} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
