import { useAtom } from "jotai";
import { ArrowArcLeft, Warning } from "phosphor-react";
import React from "react";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { Button } from "../../../../components/Button";
import { Modal } from "../../../../components/Modal";
import { changeTransactionStatus } from "../../../../services/TransactionsService";
import { useSaleStore } from "../../../../stores/SalesStore";
import { shouldOpenReturnModal } from "./TransactionComponent";

export const ReturnModal = () => {
  const [shouldOpen, setShouldOpen] = useAtom(shouldOpenReturnModal);
  const queryClient = useQueryClient();
  let { id } = useParams();

  const { mutateAsync, data, status } = useMutation(changeTransactionStatus, {
    onSuccess: () => {},
  });

  const handleReturn = async () => {
    toast.promise(
      mutateAsync({
        transactionId: parseInt(id!),
        status: "return",
      }),
      {
        loading: "Changing",
        success: "Status Changed!",
        error: "Ehh Something Wrong Happend",
      }
    );
    setShouldOpen(false);
    queryClient.refetchQueries("transaction-info");
  };

  return (
    <Modal
      isOpen={shouldOpen}
      className="flex items-center justify-center p-5 flex-col space-y-2"
    >
      <div className="flex flex-col items-center">
        <ArrowArcLeft size={64} />
        <span className="font-bold text-lg">Warning</span>
        <span className="">Returning this transaction is irreversible.</span>
      </div>
      <div className="flex w-full space-x-2">
        <Button
          className="w-full"
          buttonColor="mallow"
          onClick={() => setShouldOpen(false)}
        >
          Cancel
        </Button>
        <Button className="w-full" onClick={handleReturn}>
          Return
        </Button>
      </div>
    </Modal>
  );
};
