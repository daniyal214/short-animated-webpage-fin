import React from "react";
import { motion } from "framer-motion";

export const Frame4 = () => (
  <motion.div
    className="container-frame4"
    whileHover={{ scale: 1.5, rotate: 360 }}
    whileTap={{ scale: 0.8, rotate: -360, borderRadius: "100%" }}
  ></motion.div>
);
