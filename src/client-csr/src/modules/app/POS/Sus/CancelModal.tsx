import { Trash, TrashSimple } from "phosphor-react";
import { Button } from "../../../../components/Button";
import { Modal } from "../../../../components/Modal";
import { useTransactionStore } from "../../../../stores/TransactionStore";

export const CancelModal = () => {
  const transactionStore = useTransactionStore();
  return (
    <Modal isOpen={transactionStore.shouldShowCancelModal} className="p-5">
      <div className="p-10 flex flex-col w-full items-center justify-center gap-3">
        <Trash size={64} />
        <span className="text-xl font-bold">Do you really want to cancel?</span>
      </div>
      <div className="flex w-full gap-3">
        <Button
          buttonColor="mallow"
          className="w-full"
          onClick={() => {
            transactionStore.setShouldShowCancelModal(false);
            transactionStore.transactionFinish();
          }}
        >
          Yes!
        </Button>
        <Button
          className="w-full"
          onClick={() => transactionStore.setShouldShowCancelModal(false)}
        >
          No
        </Button>
      </div>
    </Modal>
  );
};
