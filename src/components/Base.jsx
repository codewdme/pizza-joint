import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  const containerVariants = {
    hidden: { x: "100vw", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", delay: 0.5 } },
  };
  const buttonVariants = {
    hidden: { x: "-100vw" },
    visible: { x: 0, transition: { type: "spring", stiffness: 120 } },
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "0px 0px 8px rgb(255,255,255)",
    },
  };
  const itemsVariants = {
    hover: {
      scale: 1.1,
      x: 30,
      transition: { type: " spring", stiffness: 1000 },
    },
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="base container"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              variants={itemsVariants}
              whileHover="hover"
              key={base}
              onClick={() => addBase(base)}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <Link to="/toppings">
          <motion.button variants={buttonVariants} whileHover="hover">
            Next
          </motion.button>
        </Link>
      )}
    </motion.div>
  );
};

export default Base;
