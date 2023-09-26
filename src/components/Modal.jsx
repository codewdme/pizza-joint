import React from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { Link } from "react-router-dom";

const Modal = ({ showModal }) => {
  const backdrop = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };
  const containerVariants = {
    hidden: { opacity: 0, y: "-100vh" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", delay: 0.25, duration: 0.5 },
    },
    exit: { y: "-100vh", transition: { ease: easeInOut } },
  };
  return (
    <AnimatePresence wait>
      {showModal && (
        <motion.div
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="backdrop flex items-center justify-center"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="p-10 flex flex-col items-center justify-center  bg-white rounded-xl   gap-2"
          >
            <p className="text-lg text-[#444]">want to make Another Pizza ?</p>

            <Link to="/">
              <button className=" p-2 px-4 border-2 border-[#444] text-[#444] hover:scale-110 transition hover:ease-in-out">
                Start Again
              </button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
