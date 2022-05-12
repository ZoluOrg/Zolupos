import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { Icon } from "phosphor-react";
import React, { FC, ReactNode } from "react";

interface ModuleSelectionButtonProps {
  Icon: ReactNode;
  Label: string;
  Color?: string;
}

export const ModuleSelectionButton: FC<ModuleSelectionButtonProps> = ({
  Icon,
  Label,
  Color = "mallow-1",
}) => {
  const Router = useRouter();
  const ActualHref = `/app/${Label}`;
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="module-button flex flex-col gap-1"
      onClick={() => Router.push(ActualHref)}
    >
      <div className={`module-logo p-5 rounded-xl bg-coal-1 text-${Color}`}>
        {Icon}
      </div>
      <div className="label flex w-full items-center justify-center">
        {Label}
      </div>
    </motion.div>
  );
};
