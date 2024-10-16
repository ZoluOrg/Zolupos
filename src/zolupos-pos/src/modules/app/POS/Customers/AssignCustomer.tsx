import { Button } from "../../../../components/Button";
import { useTransactionStore } from "../../../../stores/TransactionStore";
import { Input } from "../../../../components/Input";
import { useState } from "react";
import { useQuery } from "react-query";
import { getCustomerByName } from "../../../../services/CustomerService";
import { ICustomer } from "../../../../interface/ICustomer";
import { AxiosError } from "axios";
import { IServerError } from "../../../../interface/ServerError";
import { Modal } from "../../../../components/Modal";
import toast from "react-hot-toast";

export const AssignCustomer = () => {
  const transactionStore = useTransactionStore();
  const [customerName, setCustomerNameSearch] = useState<string>("");

  const { data, isLoading, error, refetch, isFetching } = useQuery(
    ["customer"],
    () => getCustomerByName(customerName),
    {
      enabled: false,
      onSuccess: (data: ICustomer) => {
        transactionStore.setCustomer(data);
        setCustomerNameSearch("");
        transactionStore.setShouldShowCustomerModal(false);
      },
      onError: (error: AxiosError<IServerError>) => {
        toast.error(error.response?.data.ExceptionMessage!);
      },
    }
  );
  return (
    <div className="assign-customer-modal">
      <Modal
        className="p-[25px] w-1/4 bg-mallow-1 rounded-lg z-50 flex flex-col gap-2"
        isOpen={transactionStore.shouldShowCustomerModal}
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
            autoFocus={true}
          />
          <Button
            buttonColor="coal"
            isLoading={isFetching}
            onClick={() => refetch()}
          >
            Assign
          </Button>
        </div>
      </Modal>
    </div>
  );
};
