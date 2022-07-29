import { AnimatePresence, motion } from "framer-motion";

export const Modal: React.FC<{
  isOpen: boolean;
  className: string;
  children: React.ReactNode;
}> = ({ isOpen = false, className, children }) => {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="modal-bruh absolute h-full w-full flex justify-center items-center bg-mallow-1 bg-opacity-5"
          initial={{ backdropFilter: "blur(0px)" }}
          animate={{ backdropFilter: "blur(3px)" }}
          exit={{ backdropFilter: "blur(0px)" }}
        >
          <motion.div
            className={`bg-mallow-1 shadow border-2 border-mallow-3 rounded-lg z-50 ${className}`}
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
          >
            {children}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
