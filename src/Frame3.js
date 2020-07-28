import React from "react";
import { motion } from "framer-motion";


export const Frame3 = () => (
  <div className = "image-frame3">

    <motion.div
     
      className="container-frame3"
      whileHover={{ scale: 1.5, rotate: 360 }}
      whileTap={{ scale: 0.8, rotate: -360, borderRadius: "100%" }}
    >  
    </motion.div>
  </div>
);
