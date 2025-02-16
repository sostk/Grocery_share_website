"use client";
import { motion } from "framer-motion";

export const AppPreviewMockup = () => {
  return (
    <div className="relative mx-auto max-w-[300px] md:max-w-[400px]">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="relative z-20 rounded-[3rem] overflow-hidden shadow-2xl bg-black"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-500/20" />
        <div className="relative aspect-[9/19] flex items-center justify-center">
          <span className="text-white/80 text-lg">App Preview</span>
        </div>
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-green-500/20 to-blue-500/20 blur-2xl transform scale-110" />
    </div>
  );
}; 