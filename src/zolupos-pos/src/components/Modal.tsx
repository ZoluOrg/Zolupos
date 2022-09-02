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
          className="modal-bruh absolute h-full w-full flex justify-center items-center bg-coal-1 bg-opacity-20 shadow-lg"
          initial={{ backdropFilter: "blur(0px)", opacity:0}}
          animate={{ backdropFilter: "blur(1px)", opacity:1 }}
          exit={{ backdropFilter: "blur(0px)", opacity: 0 }}
        >
          <motion.div
            className={`bg-mallow-1 shadow border border-mallow-5 rounded-lg z-50 ${className}`}
            transition={{type:"spring"}}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity:0}}
          >
            {children}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
