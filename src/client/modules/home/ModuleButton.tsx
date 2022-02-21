import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { IconContext } from "react-icons";
import { BsArrowRightShort } from "react-icons/bs";

interface Props {
  Title: string;
  Sub: string;
}

const transitionSettings = { type: "Inertia" };

export const ModuleButton: React.FC<Props> = ({ Title, Sub }) => {
  const [IsHovering, setIsHovering] = useState(false);
  return (
    <motion.div
      className="w w-56 relative rounded overflow-hidden p-2 border cursor-pointer "
      onMouseOver={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div>
        <div className="header">
          <span className="text-4xl font-bold">{Title}</span>
        </div>
        <div className="sub">
          <span className="text-sm">{Sub}</span>
        </div>
      </div>
      <AnimatePresence>
        {IsHovering && (
          <motion.div
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            exit={{ x: 250 }}
            transition={transitionSettings}
            className="absolute h-full w-full top-0 left-0 flex items-center justify-center bg-ocean-light backdrop-filter backdrop-blur-sm"
          >
            <div className="flex flex-col gap-0 justify-center items-center">
              <div className="icon">
                <IconContext.Provider value={{ color: "white" }}>
                  <BsArrowRightShort size={40} />
                </IconContext.Provider>
              </div>
              <div className="Sub text-white">Open {Title}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
