import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  const svgVariants = {
    hidden: {
      rotate: -180,
    },
    visible: {
      rotate: 0,
      transition: { duration: 0.5 },
    },
  };
  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <header>
      <div className="logo">
        <motion.svg
          drag
          dragConstraints={{ top: 0, bottom: 0, right: 0, left: 0 }}
          dragElastic={0.8}
          variants={svgVariants}
          initial="hidden"
          animate="visible"
          className="pizza-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </motion.svg>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -75 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
        className="text-md w-full pl-4 p-2"
      >
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  );
};

export default Header;
