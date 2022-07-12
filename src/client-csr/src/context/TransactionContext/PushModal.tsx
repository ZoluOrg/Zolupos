import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { PaymentTypes } from "../../enums/PaymentTypes";

export const PushModal: FC<{ active: boolean }> = ({ active = true }) => {
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
                <Button>Close</Button>
              </div>
            </div>
            <div className="mt-2">
              <div className="flex">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-3">
                    <div className="flex flex-col gap-2">
                      <span>Payment Method</span>
                      <div>
                        <select className="rounded-lg border-2 border-mallow-3 bg-mallow-1">
                          {Object.keys(PaymentTypes).map((key, idx) => (
                            <option key={idx} value={key}>
                              {key}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span>Tender</span>
                      <div>
                        <Input />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 h-full">
                    <span>Notes</span>
                    <textarea className="rounded-lg border-2 border-mallow-3 bg-mallow-1 h-full" />
                  </div>
                </div>
                <div className="text-right flex w-full">
                  <div className="w-full flex flex-col gap-3">
                    <div className="flex flex-col">
                      <span className="font-bold text-2xl">Amount</span>
                      <span className="font-bold text-lg opacity-75">$100</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-2xl">Change</span>
                      <span className="font-bold text-lg opacity-75">$50</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-2xl">Tender</span>
                      <span className="font-bold text-lg opacity-75">$150</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
