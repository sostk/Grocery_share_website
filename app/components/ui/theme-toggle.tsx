"use client";
import { useTheme } from "next-themes";
import { MaterialIcon } from "./material-icon";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Avoid rendering anything until mounted
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed bottom-4 right-4 z-50 p-3 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10"
    >
      <MaterialIcon 
        name={theme === "dark" ? "light_mode" : "dark_mode"} 
        className="text-2xl text-yellow-500 dark:text-blue-400" 
      />
    </motion.button>
  );
} 