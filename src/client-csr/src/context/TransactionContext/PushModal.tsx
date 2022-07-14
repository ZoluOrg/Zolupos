import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { PaymentTypes } from "../../enums/PaymentTypes";
import { useTransactionContext } from "./TransactionContext";

export const PushModal: FC<{ active: boolean }> = ({ active = true }) => {
  const transactionContext = useTransactionContext();
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="absolute w-full h-full flex items-center justify-center z-10 bg-mallow-1 bg-opacity-5"
          initial={{ backdropFilter: "blur(0px)" }}
          animate={{ backdropFilter: "blur(3px)" }}
          exit={{ backdropFilter: "blur(0px)" }}
        >
          <motion.div
            className="bg-mallow-1 p-5 rounded-lg border-mallow-2 border-2 shadow 2xl:w-2/5 xl:w-1/2 md:w-5/6"
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
          >
            <div className="w-full flex items-center justify-between">
              <span className="text-2xl font-bold">Process Transaction</span>
              <div>
                <Button
                  onClick={() => transactionContext.setPurchaseModal(false)}
                >
                  Close
                </Button>
              </div>
            </div>
            <div className="mt-2">
              
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
