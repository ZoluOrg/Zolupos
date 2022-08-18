import {
  Bag,
  Barcode,

  Tag,
} from "phosphor-react";
import { ModuleSelectionButton } from "./ModuleSelectionButton";

export const ModuleSection = () => {
  return (
    <div className="h-[calc(100vh-60px)] pt-[145px]">
      <div className="w-full flex justify-center gap-5">
        <ModuleSelectionButton
          icon={<Barcode size={60} weight="bold" />}
          label="POS"
          buttonTailColor="mallow-1"
        />

        <ModuleSelectionButton
          icon={<Bag size={60} weight="bold" />}
          label="Sales"
          buttonTailColor="mallow-1"
        />

        <ModuleSelectionButton
          icon={<Tag size={60} weight="bold" />}
          label="Reconciliation"
          buttonTailColor="mallow-1"
        />
      </div>
    </div>
  );
};
