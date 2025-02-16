"use client";
import { cn } from "../../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    icon: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.title}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-green-100 dark:bg-green-900/[0.2] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div className="rounded-2xl h-full w-full p-4 overflow-hidden bg-white dark:bg-zinc-900 relative z-20 group-hover:border-transparent duration-300 border border-zinc-200 dark:border-zinc-800">
            <div className="relative z-50">
              <div className="p-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/[0.5] rounded-full flex items-center justify-center mb-4">
                  <span className="material-icons text-green-600 dark:text-green-400">
                    {item.icon}
                  </span>
                </div>
                <div className="font-bold text-2xl mb-2 mt-4">{item.title}</div>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}; 