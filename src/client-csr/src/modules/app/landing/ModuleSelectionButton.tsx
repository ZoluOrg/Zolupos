import { motion } from "framer-motion";
import React, { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface ModuleSelectionButtonProps {
  icon: ReactNode;
  label: string;
  buttonTailColor?: string;
}

export const ModuleSelectionButton: FC<ModuleSelectionButtonProps> = ({
  icon,
  label,
  buttonTailColor = "mallow-1",
}) => {
  const actualHref = `/${label}`;
  const navigate = useNavigate();
  return (
    <motion.div
      whileHover={{ scale: 1.09 }}
      whileTap={{ scale: 0.9 }}
      className="module-button flex flex-col gap-1"
      onClick={() => navigate(actualHref)}
    >
      <div
        className={`module-logo p-5 rounded-xl bg-coal-1 text-${buttonTailColor}`}
      >
        {icon}
      </div>
      <div className="label flex w-full items-center justify-center">
        {label}
      </div>
    </motion.div>
  );
};
