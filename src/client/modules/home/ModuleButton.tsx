import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { IconContext } from "react-icons";
import { BsArrowRightShort } from "react-icons/bs";

interface Props {
  Title: string;
  Sub: string;
  goto?: string;
}

const transitionSettings = { type: "Inertia" };

export const ModuleButton: React.FC<Props> = ({ Title, Sub, goto="" }) => {
  const [IsHovering, setIsHovering] = useState(false);
  const router = useRouter();
  return (
    <motion.div
      className="w-56 relative rounded overflow-hidden p-2 border cursor-pointer "
      whileHover={{scale:1.05}}
      onMouseOver={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={()=>router.push(goto)}
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
            className="absolute h-full w-full top-0 left-0 flex items-center justify-center bg-primary-light backdrop-filter backdrop-blur-sm"
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
