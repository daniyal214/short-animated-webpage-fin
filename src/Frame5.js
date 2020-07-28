import React from "react";
import { motion } from "framer-motion";

export const Frame5 = () => (
  <motion.div
    className="container-frame5"
    whileHover={{ scale: 1.5, rotate: 360 }}
    whileTap={{ scale: 0.8, rotate: -360, borderRadius: "100%" }}
  ></motion.div>
);
