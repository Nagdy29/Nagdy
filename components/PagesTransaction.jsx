"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";
const PagesTransaction = ({ children }) => {
  const path = usePathname();
  return (
    <>
      <div key={path}>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: {
                delay: 1,
                duration: 0.4,
                ease: "easeInOut",
              },
            }}
            className="h-screen w-screen fixed bg-[#1c1c22] pointer-events-none"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default PagesTransaction;
