import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Order = ({ pizza, setShowModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  }, [setShowModal]);
  const containerVariants = {
    hidden: { x: "100vw", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 1.4,
        mass: 0.4,
        damping: 10,
      },
    },
  };
  const childVariants = {
    hidden: { opacity: 0, originX: 0 },
    visible: { opacity: 1, originX: 0, transition: { delay: 1 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container order"
    >
      <motion.h2 className="text-3xl font-bold">
        Thank you for your order :)
      </motion.h2>

      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <motion.div key={topping}>{topping}</motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
