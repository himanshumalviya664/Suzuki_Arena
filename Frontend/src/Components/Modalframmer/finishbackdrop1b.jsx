import { useEffect } from "react";
// import { stateLogger } from "../../stateLogger"
import { motion } from "framer-motion";
import { stateLogger } from "../../stateLogger";

const FinishBackdrop1b = ({ children, onClick }) => {
  // Log state
  useEffect(() => {
    stateLogger("Backdrop", true);
    return () => stateLogger("Backdrop", false);
  }, []);

  return (
    <motion.div
      className="backdrop-finish-1b"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default FinishBackdrop1b;
