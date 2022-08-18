import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { POSContainer } from "./POSContainer";
import { SuspendModal } from "./OtherModals/SuspendModal";

export const POSComponent = () => (
  <>
    <div className="pos-component w-full h-full">
      <POSContainer />
    </div>
    <SuspendModal />
  </>
);
