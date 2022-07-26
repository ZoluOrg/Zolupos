import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../../../../components/Button";
import { useTransactionStore } from "../../../../stores/TransactionStore";
import { Input } from "../../../../components/Input";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { getCustomerByName } from "../../../../services/CustomerService";
import { ICustomer } from "../../../../interface/ICustomer";
import ResultWrapper from "../../../../wrappers/ResultWrapper";
import { toast } from "react-toastify";
import { Axios, AxiosError } from "axios";
import { IServerError } from "../../../../interface/ServerError";
import { LinkSimpleHorizontalBreak } from "phosphor-react";

export const AssignCustomer = () => {
  const transactionStore = useTransactionStore();
  const [customerName, setCustomerNameSearch] = useState<string>("");

  const { data, isLoading, error, refetch } = useQuery(
    ["customer"],
    () => getCustomerByName(customerName),
    {
      enabled: false,
      onSuccess: (data: ICustomer) => {
        transactionStore.setCustomer(data);
        transactionStore.setShouldShowCustomerModal(false);
      },
      onError: (error: AxiosError<IServerError>) => {
        toast.error(error.response?.data.ExceptionMessage);
      },
    }
  );

  return (
    <div className="assign-customer-modal">
      <AnimatePresence>
        {transactionStore.shouldShowCustomerModal && (
          <motion.div
            className="absolute h-full w-full flex justify-center items-center bg-mallow-1 bg-opacity-5"
            initial={{ backdropFilter: "blur(0px)" }}
            animate={{ backdropFilter: "blur(3px)" }}
            exit={{ backdropFilter: "blur(0px)" }}
          >
            <motion.div
              className="p-[25px] w-1/4 bg-mallow-1 shadow border-2 border-mallow-3 rounded-lg z-50 flex flex-col gap-2"
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
            >
              <div className="w-full flex items-center justify-between">
                <span className="text-2xl font-bold">Assign Customer</span>
                <div>
                  <Button
                    onClick={() => {
                      transactionStore.setShouldShowCustomerModal(false);
                      setCustomerNameSearch("");
                    }}
                  >
                    Close
                  </Button>
                </div>
              </div>
              <div className="flex gap-1">
                <Input
                  className="w-full"
                  placeholder="Customer's full name eg.(John Doe)"
                  value={customerName}
                  onChange={(e) => setCustomerNameSearch(e.currentTarget.value)}
                  onKeyDown={(e) => {
                    if (e.key == "Enter") refetch();
                  }}
                />
                <Button
                  buttonColor="coal"
                  isLoading={isLoading}
                  onClick={() => refetch()}
                >
                  Assign
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
