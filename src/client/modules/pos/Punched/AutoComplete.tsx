import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import React, { useEffect } from "react";
import { usePosContext } from "../../../context/PosContext";
import { AutoCompleteButton } from "./AutoCompleteButton";

export const AutoComplete = () => {
  const ctx = usePosContext();

  useEffect(() => {
    document.addEventListener("keydown", handleClickDown);
    return () => {
      document.removeEventListener("keydown", handleClickDown);
    };
  });

  useEffect(() => {
    document.addEventListener("keydown", handleClickDown);
    return () => {
      document.removeEventListener("keydown", handleClickDown);
    };
  });

  const handleClickDown = (event: KeyboardEvent) => {
    if (ctx.searched.length > 0) {
      if (event.code == "ArrowUp") ctx.selected == 0 ? ctx.setSelected(ctx.searched.length-1) : ctx.setSelected(ctx.selected-1);
      if (event.code == "ArrowDown") ctx.selected == ctx.searched.length ? ctx.setSelected(0) : ctx.setSelected(ctx.selected+1);
      console.log(`${ctx.selected} ${event.code}`);
    }
  };

  return (
    <AnimatePresence>
      {ctx.searched.length > 0 && (
        <motion.ul
          className="autocomplete w-full border-2 border-slate-300 rounded-b absolute bg-bg-light-base p-1 max-h-96 overflow-y-scroll"
          initial={{ y: -5 }}
          animate={{ y: 0 }}
          exit={{ y: -5 }}
        >
          {ctx.searched.map((pr, idx) => (
            <AutoCompleteButton
              productName={pr.productName}
              productQuantity={pr.productQuantity}
              productManufacturer={pr.productManufacturer}
              barCode={pr.barCode}
              productType={pr.productType}
              idx={idx}
            />
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
};
