import React, { useState } from "react";
import toast from "react-hot-toast";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { Modal } from "../../../../components/Modal";
import { useSessionStore } from "../../../../stores/SessionStore";

export const FundsModal = () => {
  const sessionStore = useSessionStore();
  const [inputVal, setInputVal] = useState<number>(0);

  const finish = () => {
    if (isNaN(inputVal)) toast.error("Funds Not a Number");
    if (inputVal == 0) toast.error("Invalid Empty");
    else {
      sessionStore.setFunds(inputVal);
      sessionStore.setAskedForFunds(true);
      sessionStore.setShouldShowSessionModal(false);
      toast.success("Funds Set");
    }
  };

  return (
    <Modal
      isOpen={sessionStore.shouldShowSessionModal}
      className="p-[25px] w-[512px]"
    >
      <div className="w-full flex items-center justify-between">
        <span className="text-2xl font-bold">Input Funds</span>
      </div>
      <div className="mt-3">
        <div className="flex gap-2">
          <Input
            placeholder="Starting Funds"
            className="w-full"
            onChange={(ev) => setInputVal(parseFloat(ev.currentTarget.value))}
            onKeyDown={(ev) => {
              console.log(ev.key);
              if (ev.key == "Enter") finish();
            }}
          />
          <Button buttonColor="coal" onClick={finish}>
            Use
          </Button>
        </div>
      </div>
    </Modal>
  );
};
