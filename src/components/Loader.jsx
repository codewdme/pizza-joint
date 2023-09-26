import React from "react";
import { motion, useCycle } from "framer-motion";

const loaderVariants = {
  animationOne: {
    x: [-20, 20],

    y: [0, -40],
    transition: {
      x: { repeat: Infinity, repeatType: "mirror", duration: 0.5 },
      y: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};

const Loader = () => {
  return (
    <div className="mt-4 flex flex-col items-center justify-center">
      <motion.div
        drag
        dragConstraints={{ top: 0, bottom: 0, right: 0, left: 0 }}
        dragElastic={0.8}
        variants={loaderVariants}
        animate="animationOne"
        className="bg-white h-[10px] w-[10px] rounded-full"
      ></motion.div>
    </div>
  );
};

export default Loader;
