"use client";
import { motion } from "framer-motion";

export const AppPreview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 }}
      className="w-full max-w-[600px] h-[400px] bg-gradient-to-br from-green-400 to-blue-500 rounded-lg shadow-2xl flex items-center justify-center text-white text-2xl font-bold"
    >
      App Preview
    </motion.div>
  );
}; 